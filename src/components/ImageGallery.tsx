import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import negroni from '@/assets/negroni.jpg';
import signatures from '@/assets/signatures.jpg';
import food from '@/assets/food.jpg';
import bar from '@/assets/bar.jpg';

const gallery = [
  { image: negroni, title: 'O tempo de um Negroni', alt: 'Negroni em copo de cristal com gelo e casca de laranja' },
  { image: signatures, title: 'A assinatura do Sul', alt: 'Três coquetéis de inspiração gaúcha' },
  { image: food, title: 'Sabores para compartilhar', alt: 'Pizza de charque, tapas e petiscos' },
  { image: bar, title: 'O lugar do nosso encontro', alt: 'Proposta de ambiente contemporâneo com referências gaúchas' },
];

export function ImageGallery() {
  const section = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const current = useRef(0);
  const change = (index: number) => { current.current = index; setActive(index); };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!section.current || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const trigger = ScrollTrigger.create({
      trigger: section.current, start: 'top top', end: 'bottom bottom',
      onUpdate: (self) => { const next = Math.min(3, Math.floor(self.progress * 4)); if (next !== current.current) { current.current = next; setActive(next); } },
    });
    return () => trigger.kill();
  }, []);
  useEffect(() => {
    if (!section.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.to('.stack-image', {
        duration: reduced ? 0 : 1.15,
        xPercent: (_, target) => Number(target.dataset.index) < active ? -135 : (Number(target.dataset.index) - active) * 4,
        yPercent: (_, target) => Number(target.dataset.index) < active ? -12 : (Number(target.dataset.index) - active) * 3,
        rotation: (_, target) => Number(target.dataset.index) < active ? -16 : (Number(target.dataset.index) - active) * 5 - 3,
        rotationY: (_, target) => Number(target.dataset.index) < active ? -25 : 0,
        scale: (_, target) => Number(target.dataset.index) < active ? .8 : 1 - (Number(target.dataset.index) - active) * .045,
        opacity: (_, target) => Number(target.dataset.index) < active ? 0 : 1,
        ease: 'power3.inOut', overwrite: true,
      });
      gsap.to('.gallery-progress', { scaleX: (active + 1) / 4, duration: reduced ? 0 : .8 });
    }, section);
    return () => { ctx.kill(false); };
  }, [active]);
  return <section ref={section} id="momentos" className="gallery-section">
    <div className="gallery-sticky">
      <div className="gallery-top"><div><div className="section-label">02 / Pequenas raridades</div><h2 className="large-heading">O extraordinário<br />está no encontro.</h2></div><span className="eyebrow">Bah Raridade / Histórias à mesa</span></div>
      <div className="image-stack">
        {[...gallery].reverse().map((item, reversedIndex) => <img key={item.title} className="stack-image" data-index={3 - reversedIndex} src={item.image} alt={item.alt} width={1536} height={1024} loading="lazy" />)}
      </div>
      <div className="gallery-bottom"><div className="gallery-current"><span>{String(active + 1).padStart(2, '0')}</span><h3>{gallery[active]?.title}</h3></div>
        <div className="gallery-controls"><span className="eyebrow">{String(active + 1).padStart(2, '0')} / 04</span><Button variant="circle" size="icon" aria-label="Imagem anterior" disabled={active === 0} onClick={() => change(Math.max(0, active - 1))}><ArrowLeft /></Button><Button variant="circle" size="icon" aria-label="Próxima imagem" disabled={active === 3} onClick={() => change(Math.min(3, active + 1))}><ArrowRight /></Button></div>
      </div>
      <div className="gallery-progress" />
    </div>
  </section>;
}