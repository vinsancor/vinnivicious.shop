import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { menu, menuCategories, type MenuCategory } from '@/lib/menu';

export function BarMenu() {
  const [category, setCategory] = useState<MenuCategory>('classicos');
  return <section id="carta" className="section-pad menu-section">
    <div className="section-label">03 / A carta</div>
    <div className="section-heading-row">
      <h2 className="large-heading reveal">Clássicos eternos.<br /><span className="soft">Raridades da casa.</span></h2>
      <p className="menu-intro">Do primeiro gole à última fatia. Ingredientes com origem, encontros com personalidade e o Sul como inspiração.</p>
    </div>
    <div className="menu-tabs" role="tablist" aria-label="Categorias da carta">
      {menuCategories.map(({ id, label }) => <Button key={id} variant="tab" role="tab" id={`tab-${id}`} aria-controls="menu-panel" aria-selected={category === id} onClick={() => setCategory(id)}>{label}<span className="font-mono text-[9px] opacity-50">{String(menu[id].length).padStart(2, '0')}</span></Button>)}
    </div>
    <div key={category} id="menu-panel" className="menu-content" role="tabpanel" aria-labelledby={`tab-${category}`}>
      {menu[category].map((item, i) => <article className="menu-item" key={item.name}>
        <div className="menu-item-top"><span>{String(i + 1).padStart(2, '0')}</span><h3>{item.name}</h3></div>
        <p>{item.ingredients}</p>
      </article>)}
    </div>
    <p className="menu-footnote">Coquetéis alcoólicos destinados a maiores de 18 anos. Beba com responsabilidade.</p>
  </section>;
}