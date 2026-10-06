export type MenuCategory = 'classicos' | 'autorais' | 'petiscos' | 'tapas' | 'pizzas';
export type MenuItem = { name: string; ingredients: string };
export const menuCategories: { id: MenuCategory; label: string }[] = [
  { id: 'classicos', label: 'Clássicos' }, { id: 'autorais', label: 'Autorais' },
  { id: 'petiscos', label: 'Petiscos' }, { id: 'tapas', label: 'Tapas' }, { id: 'pizzas', label: 'Pizzas' },
];
export const menu: Record<MenuCategory, MenuItem[]> = {
  classicos: [
    { name: 'Negroni', ingredients: 'Gin, bitter italiano e vermute rosso. Finalizado com casca de laranja.' },
    { name: 'Old Fashioned', ingredients: 'Bourbon, açúcar e bitter aromático. Um clássico servido sobre gelo cristalino.' },
    { name: 'Dry Martini', ingredients: 'Gin e vermute seco. Azeitona ou twist de limão-siciliano.' },
    { name: 'Manhattan', ingredients: 'Whiskey rye, vermute rosso e bitter aromático. Cereja ao maraschino.' },
    { name: 'Whiskey Sour', ingredients: 'Bourbon, limão-siciliano, xarope de açúcar e clara pasteurizada.' },
    { name: 'Margarita', ingredients: 'Tequila blanco, licor de laranja e limão. Borda delicada de sal.' },
    { name: 'Daiquiri', ingredients: 'Rum branco, limão e açúcar. Equilíbrio em sua forma mais pura.' },
    { name: 'Moscow Mule', ingredients: 'Vodka, limão e ginger beer. Frescor e gengibre em cada gole.' },
    { name: 'Caipirinha', ingredients: 'Cachaça, limão fresco e açúcar. Essência brasileira, sem atalhos.' },
    { name: 'Aperol Spritz', ingredients: 'Aperitivo italiano, espumante brut e água com gás. Fatia de laranja.' },
  ],
  autorais: [
    { name: 'Bah, que Raridade!', ingredients: 'Gin, cordial de bergamota, vermute branco e bitter de ervas. Nosso encontro com o Sul.' },
    { name: 'Pampa Dourado', ingredients: 'Bourbon, mel, limão-siciliano e infusão de erva-mate. Terroso, cítrico e elegante.' },
    { name: 'Querência', ingredients: 'Cachaça envelhecida, redução de uva, limão e bitter aromático. Memória em forma de brinde.' },
    { name: 'Minuano', ingredients: 'Gin, maçã verde, cordial de erva-mate e água com gás. Leve como o vento dos pampas.' },
    { name: 'Brasa do Sul', ingredients: 'Whiskey, xarope de rapadura, bitter de cacau e aroma defumado. Intenso e acolhedor.' },
    { name: 'Flor de Pitanga', ingredients: 'Vodka, pitanga, limão-siciliano e espuma de hibisco. Frutado, floral e delicado.' },
  ],
  petiscos: [
    { name: 'Croquetas de Charque', ingredients: 'Charque desfiado, massa cremosa e crosta dourada. Acompanha aioli de alho assado.' },
    { name: 'Polenta da Querência', ingredients: 'Palitos de polenta crocante, queijo curado e molho de tomate rústico.' },
    { name: 'Iscas do Pampa', ingredients: 'Tiras de filé na chapa, chimichurri fresco e pão de fermentação natural.' },
    { name: 'Provolone na Brasa', ingredients: 'Queijo provolone gratinado, orégano, mel e torradas artesanais.' },
    { name: 'Batatas Raridade', ingredients: 'Batatas rústicas, alecrim, páprica defumada e maionese de ervas.' },
    { name: 'Tábua do Sul', ingredients: 'Seleção de queijos, copa, salame, compota de bergamota e pão artesanal.' },
  ],
  tapas: [
    { name: 'Bruschetta Campeira', ingredients: 'Pão tostado, carne grelhada, chimichurri e lascas de queijo curado.' },
    { name: 'Cogumelos & Ervas', ingredients: 'Cogumelos salteados, creme de ricota e ervas frescas sobre pão artesanal.' },
    { name: 'Caprese da Casa', ingredients: 'Tomates confitados, mozzarella fresca, manjericão e redução de balsâmico.' },
    { name: 'Copa & Figos', ingredients: 'Copa curada, figos, queijo cremoso e um fio de mel sobre torradas.' },
  ],
  pizzas: [
    { name: 'Charque & Rúcula', ingredients: 'Molho de tomate, mozzarella, charque desfiado, cebola roxa e rúcula fresca.' },
    { name: 'Margherita', ingredients: 'Tomate italiano, mozzarella fresca, manjericão e azeite extravirgem.' },
    { name: 'Campeira', ingredients: 'Mozzarella, linguiça artesanal, cebola caramelizada e chimichurri.' },
    { name: 'Quatro Queijos do Sul', ingredients: 'Mozzarella, provolone, gorgonzola e queijo colonial. Massa de longa fermentação.' },
    { name: 'Cogumelos da Serra', ingredients: 'Mix de cogumelos, mozzarella, alho assado, tomilho e queijo curado.' },
    { name: 'Raridade da Casa', ingredients: 'Copa, mozzarella fresca, figos, rúcula e redução de balsâmico.' },
  ],
};