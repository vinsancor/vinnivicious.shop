import { describe, expect, it } from 'vitest';
import { menu } from './menu';
describe('Carta solicitada do Bah Raridade', () => {
  it('contém exatamente 10 coquetéis clássicos', () => { expect(menu.classicos).toHaveLength(10); });
  it('contém exatamente 6 coquetéis autorais', () => { expect(menu.autorais).toHaveLength(6); });
  it('contém petiscos', () => { expect(menu.petiscos.length).toBeGreaterThan(0); });
  it('contém tapas', () => { expect(menu.tapas.length).toBeGreaterThan(0); });
  it('contém pizzas', () => { expect(menu.pizzas.length).toBeGreaterThan(0); });
});