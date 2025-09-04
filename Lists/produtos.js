/*
    Organização:

    let produto = [
        [X, Y, [z1, z2, ... zn], W],
        ["Titulo do produto", "Descrição do produto", N],
        ["Titulo do produto", "Descrição do produto", N],
        ...
    ];

    X = organização HTML do produto
    Y = Título da lista
    z = lista de adicionais do produto (caso não tenha, utilize "nenhum")
    N = Preço do produto
    W = Organização do html da categoria

    export let categoria = [A, B, produto1, produto2, ... produtox];

    A = ID geral de categoria
    B = Texto do campo select da categoria

*/

let combos = [
    [3, "combos", "Combos Especiais", [0], 1],
    ["COMBO P", "2 espetos de R$ 7.00, 1 espeto de R$ 8.00, 1 torre de chopp 1L, 1/2 tábua", 39.90, 0],
    ["COMBO M", "4 espetos de R$ 7.00, 2 espeto de R$ 8.00, 1 torre de chopp 2L, 1/2 tábua", 78.90, 0],
    ["COMBO G", "7 espetos de R$ 7.00, 3 espeto de R$ 8.00, 1 torre de chopp 3L, 1 tábua", 124.90, 0]
]

export let Combos = ["Combos", "Ver Combos", combos];

let tradicionais = [
    [2, "tradicionais", "Espetinhos Tradicionais", [0], 1],
    ["Bovino", "espeto", 8.00, 0],
    ["Coração", "espeto", 7.00, 0],
    ["Queijo coalho", "espeto", 8.00, 0],
    ["Queijo bolinha", "espeto", 8.00, 0],
    ["Queijo bolinha defumado", "espeto", 8.00, 0],
    ["Kafta bovina", "espeto", 7.00, 0],
    ["Kafta de frango", "espeto", 7.00, 0],
    ["Kafta recheada", "espeto", 8.00, 0],
    ["Linguiça suína", "espeto", 7.00, 0],
    ["Linguiça apimentada", "espeto", 7.00, 0],
    ["Linguiça toscana", "espeto", 7.00, 0],
    ["Pão de alho", "espeto", 7.00, 0],
    ["Tulipa de frango", "espeto", 7.00, 0],
    ["Medalhão de frango", "espeto", 8.00, 0],
    ["Medalhão de mussarela", "espeto", 8.00, 0],
    ["Medalhão romeu e julieta", "espeto", 8.00, 0],
    ["Medalhão mandioca", "espeto", 8.00, 0],
    ["Panceta", "espeto",  7.00, 0],
    ["Peixe", "espeto", 8.00, 0],
    ["Medalhão carne seca", "espeto", 8.00, 0],
    ["Carneiro", "espeto", 12.00, 0],
    ["Tábua de mandioca e tomate (meia)", "tábua", 6.00, 0],
    ["Tábua de mandioca e tomate (inteira)", "tábua", 8.00, 0]
]

let gourmets = [
    [2, "gourmets", "Espetinhos Gourmet", [0], 1],
    ["Queijo coalho com mel", "espeto", 10.00, 0],
    ["Queijo coalho com doce de leite", "espeto", 10.00, 0],
    ["Queijo coalho com com goiabada", "espeto", 10.00, 0]
];

export let Espetos = ["espetos", "Ver Espetos", tradicionais, gourmets];

let chopps = [
    [1, "chopps", "Aproveite nossos Chopps", [0], 1],
    ["CHOPP 300 ML", "Chopp de 300 ml", 7.00, 0],
    ["CHOPP 600 ML", "Chopp de 600 ml", 12.00, 0],
    ["CHOPP 1 LITRO", "Chopp de 1 litro", 20.00, 0],
    ["CHOPP VINHO LATA", "Chopp vinho lata", 10.00, 0]
];

let cervejas = [
    [2, "cervejas", "Confira as Cervejas", [0], 1],
    ["Skol 600ML", "cerveja", 11.00, 0],
    ["Brama 600ML", "cerveja",  11.00, 0],
    ["Antártica 600ML", "cerveja", 11.00, 0],
    ["Heineken 600ML", "cerveja", 15.00, 0],
    ["Heineken 250ML", "cerveja", 7.00, 0],
    ["Heineken Zero Álcool", "cerveja", 9.00, 0],
    ["Cerveja lata", "cerveja", 6.00, 0],
    ["Spatem 600 Ml", "cerveja", 11.00, 0],
    ["Amstel 600 Ml", "cerveja", 11.00, 0],
    ["Antartica Original 600 Ml", "cerveja", 12.00, 0]
];

let semAlcool = [
    [2, "semAlcool", "Bebidas sem álcool", [0], 1],
    ["Refrigerante lata", "refrigerante", 6.00, 0],
    ["Coca-cola 2 Litros", "refrigerante", 15.00, 0],
    ["Coca-cola 1 Litro", "refrigerante", 10.00, 0],
    ["Guaraná Antártica 1 Litro", "refrigerante", 10.00, 0],
    ["Água Mineral (com ou sem gás)", "bebida", 4.00, 0],
    ["Suco de Laranja 250 ML", "suco", 8.00, 0],
    ["Suco de Laranja 500 ML", "suco", 10.00, 0],
    ["Suco de Laranja 1L", "suco", 18.00, 0],
    ["Suco Del Vale 1L", "suco", 12.00],
    ["Suco Del Vale 250 Ml", "suco", 5.00]
]


export let Bebidas = ["bebidas", "Ver bebidas", chopps, cervejas, semAlcool];