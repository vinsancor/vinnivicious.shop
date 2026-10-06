import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, ArrowUpRight, Menu, X, Wine } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { OrbitScene } from '@/components/OrbitScene';
import { ImageGallery } from '@/components/ImageGallery';
import { BarMenu } from '@/components/BarMenu';
import negroni from '@/assets/negroni.jpg';
import bar from '@/assets/bar.jpg';
import food from '@/assets/food.jpg';
import signatures from '@/assets/signatures.jpg';

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({ meta: [
    { title: 'Bar Bah Raridade — Coquetelaria com alma gaúcha' },
    { name: 'description', content: 'Descubra o Bah Raridade: 10 coquetéis clássicos, 6 autorais e uma carta de petiscos, tapas e pizzas inspirada na cultura gaúcha.' },
    { property: 'og:title', content: 'Bar Bah Raridade — Coquetelaria com alma gaúcha' },
    { property: 'og:description', content: 'Coquetelaria sofisticada, sabores do Sul e raridades para compartilhar. Conheça nossa carta.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
});

function Index() {
  const page = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const context = gsap.context(() => {
      gsap.from('.hero-copy > *', { y: 30, opacity: 0, duration: 1.4, stagger: .16, ease: 'power3.out' });
      gsap.from('.hero-bottom', { opacity: 0, y: 20, duration: 1.3, delay: .65 });
      gsap.to('.hero-photo', { scale: 1.13, yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } });
      gsap.utils.toArray<HTMLElement>('.reveal').forEach(element => {
        gsap.from(element, { opacity: .2, y: 35, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 88%', toggleActions: 'play none none reverse' } });
      });
      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach(element => {
        gsap.from(element, { clipPath: 'inset(15% 0 15% 0)', duration: 1.4, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 85%' } });
        gsap.from(element.querySelector('img'), { scale: 1.15, duration: 1.6, scrollTrigger: { trigger: element, start: 'top 85%' } });
      });
      gsap.from('.experience-item', { y: 65, opacity: 0, stagger: .12, duration: 1.1, scrollTrigger: { trigger: '.experience-grid', start: 'top 85%' } });
      gsap.to('.ritual-section > img', { yPercent: 10, scale: 1.13, ease: 'none', scrollTrigger: { trigger: '.ritual-section', start: 'top bottom', end: 'bottom top', scrub: 1 } });
      ScrollTrigger.refresh();
    }, page);
    return () => context.revert();
  }, []);

  const navigation = [{ href: '#carta', label: 'A carta' }, { href: '#momentos', label: 'Momentos' }, { href: '#essencia', label: 'Nossa essência' }, { href: '#casa', label: 'O bar' }];
  const experiences = [
    { image: negroni, title: 'Coquetelaria', category: 'Clássicos & autorais', href: '#carta' },
    { image: food, title: 'À mesa', category: 'Sabores do Sul', href: '#carta' },
    { image: signatures, title: 'Nossa assinatura', category: 'Alma gaúcha', href: '#momentos' },
    { image: bar, title: 'Nosso lugar', category: 'Encontros & histórias', href: '#casa' },
  ];
  return <div ref={page}>
    <header className="site-header">
      <div className="header-left"><a href="#inicio" className="wordmark" aria-label="Bah Raridade, início"><Wine className="brand-symbol" strokeWidth={1.3} /><div className="brand-name">bah <span>raridade</span></div></a>
        <nav className="desktop-nav" aria-label="Navegação principal">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      </div>
      <Button asChild variant="bar" className="header-cta"><a href="#carta">Conheça a carta <ArrowUpRight /></a></Button>
      <Button variant="ghost" size="icon" className="mobile-menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
      {menuOpen && <nav className="mobile-nav" aria-label="Navegação móvel">{navigation.map(item => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}</nav>}
    </header>
    <main>
      <section id="inicio" className="hero">
        <img src={negroni} className="hero-photo" alt="Negroni de cor rubi em cristal, com gelo translúcido e casca de laranja" width={1920} height={1088} fetchPriority="high" />
        <OrbitScene />
        <div className="hero-copy"><p className="eyebrow">Coquetelaria contemporânea / Alma gaúcha</p><h1>Bah Raridade.<br /><span>O Sul em</span><br />cada brinde.</h1><p className="hero-note">Bons encontros não acontecem por acaso.</p></div>
        <div className="hero-bottom">
          <div className="hero-numbers"><div className="hero-number"><strong>10</strong><span>Clássicos atemporais</span></div><div className="hero-number"><strong>06</strong><span>Coquetéis autorais</span></div><div className="hero-number"><strong>100<span className="inline text-lg">%</span></strong><span>Alma gaúcha</span></div></div>
          <div className="hero-description"><h2>Tem coisa que é boa.<br />E tem coisa que é raridade.</h2><p>A sofisticação de um bom coquetel. A generosidade de uma mesa compartilhada. O jeito gaúcho de fazer você se sentir em casa.</p><div className="hero-actions"><Button asChild variant="bar"><a href="#carta">Explore a carta <ArrowUpRight /></a></Button><a className="text-link" href="#essencia">Nossa essência</a></div></div>
        </div>
        <div className="scroll-note"><ArrowDown size={12} /> PARA OS BONS ENCONTROS</div>
      </section>
      <div className="marquee-section" aria-hidden="true"><div className="marquee-track">{Array.from({ length: 4 }, (_, index) => <div className="flex items-center gap-11" key={index}><span>Alma gaúcha</span><i>✳</i><span>Coquetelaria contemporânea</span><i>✳</i><span>Sabores do Sul</span><i>✳</i><span>Bons encontros</span><i>✳</i></div>)}</div></div>
      <section id="essencia" className="section-pad paper-section">
        <div className="about-head"><div className="section-label">01 / Nossa essência</div><h2 className="large-heading reveal">Uma casa de encontros.<br /><span className="soft">Uma alma que vem do Sul.</span><br />Um brinde ao que é raro.</h2></div>
        <div className="about-layout"><div className="image-reveal"><img className="about-image" src={bar} alt="Ambiente de inspiração gaúcha, com balcão de mármore e detalhes contemporâneos" width={1536} height={1024} loading="lazy" /></div><div className="about-text reveal"><span className="eyebrow">Muito prazer, Bah Raridade.</span><h3>Raízes no pampa.<br />Olhar no presente.</h3><p>A cultura gaúcha não fica na porta. Ela senta à mesa, inspira os ingredientes e aparece no cuidado de receber.</p><p>No Bah Raridade, a tradição encontra novas formas: na bergamota do coquetel, no charque reinventado, na conversa que não tem pressa de terminar.</p><a className="inline-arrow" href="#carta">Descubra nossos sabores <ArrowUpRight size={16} /></a></div></div>
      </section>
      <section id="experiencias" className="section-pad paper-section">
        <div className="section-heading-row"><h2 className="large-heading reveal">Tudo que torna<br />a noite <span className="soft">uma raridade.</span></h2><a className="inline-arrow" href="#momentos">Um olhar mais de perto <ArrowUpRight size={16} /></a></div>
        <div className="experience-grid">{experiences.map((item, i) => <a href={item.href} className="experience-item" key={item.title}><img src={item.image} alt={item.title} width={1536} height={1024} loading="lazy" /><div className="experience-caption"><span className="eyebrow">0{i + 1} / {item.category}</span><h3>{item.title}</h3><ArrowUpRight size={19} strokeWidth={1} /></div></a>)}</div>
      </section>
      <ImageGallery />
      <BarMenu />
      <section className="ritual-section" id="casa"><img src={bar} alt="Um balcão para brindar, mesas para compartilhar e referências da cultura gaúcha" width={1536} height={1024} loading="lazy" /><div className="ritual-content"><div><div className="section-label">04 / O nosso lugar</div><h2 className="large-heading reveal">A noite é sua.<br />O encontro é nosso.</h2></div><p>Um balcão, muitas histórias.<br />Entre um brinde e outro, o que importa é estar presente. Sem pressa. Com gosto. Do nosso jeito.</p></div></section>
      <section className="section-pad paper-section"><div className="craft-row"><div><div className="section-label">05 / O nosso cuidado</div><h2 className="large-heading reveal">O detalhe<br />faz a <span className="soft">diferença.</span></h2></div><div className="craft-list"><article className="craft-item reveal"><h3>Origem que se sente.</h3><p>Bergamota, erva-mate, charque e queijos do Sul. Ingredientes que carregam paisagens, memória e personalidade.</p></article><article className="craft-item reveal"><h3>Precisão em cada gole.</h3><p>O equilíbrio do doce, do amargo e do cítrico. Clássicos respeitados e criações que encontram sua própria voz.</p></article><article className="craft-item reveal"><h3>Feito para compartilhar.</h3><p>Tapas, petiscos e pizzas artesanais. Uma carta que convida a chegar mais perto e deixar a conversa acontecer.</p></article></div></div></section>
      <section className="closing" id="encontro"><div className="section-label">Bah Raridade / O próximo brinde</div><h2 className="closing-heading reveal">Os melhores encontros<br /><span>merecem um lugar raro.</span><br />Bah, seja bem-vindo.</h2><Button asChild variant="bar"><a href="#carta">Escolha seu próximo brinde <ArrowUpRight /></a></Button>
        <footer className="footer"><a href="#inicio" className="footer-brand">bah raridade</a><span>Coquetelaria contemporânea. Alma gaúcha.</span><div className="footer-credit">Desenvolvido por <a href="https://vinsancor.com" target="_blank" rel="noopener noreferrer">Vinsancor Presença Digital <ArrowUpRight className="inline" size={12} /></a></div></footer>
      </section>
    </main>
  </div>;
}
