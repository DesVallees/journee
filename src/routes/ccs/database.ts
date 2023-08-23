type Multilingual = {
    'español': string,
    'english': string,
    'français': string,
    'deutsch': string,
    'italiano': string,
    'Русский': string,
}

export const categories: Multilingual[] = 
[
    {
        'español': 'Restauración',
        'english': 'Restoration',
        'français': 'Restauration',
        'deutsch': 'Restaurierung',
        'italiano': 'Restauro',
        'Русский': 'Реставрация',
    },
    {
        'español': 'Fabricación',
        'english': 'Manufacturing',
        'français': 'Fabrication',
        'deutsch': 'Herstellung',
        'italiano': 'Produzione',
        'Русский': 'Производство',
    },
    {
        'español': 'Personalización',
        'english': 'Customization',
        'français': 'Personnalisation',
        'deutsch': 'Individualisierung',
        'italiano': 'Personalizzazione',
        'Русский': 'Персонализация',
    },
];

export const imageStorage: {
    name: Multilingual,
    category: number,
    edition: Multilingual,
    description: Multilingual,
    price: string,
    fileNames: string[],
    allowSmallSize: boolean,
    filesExtension: string,
}[] =
([
    {
        name: {
            'español': 'Guitarra De Camilo',
            'english': 'Camilo\'s Guitar',
            'français': 'Guitare de Camilo',
            'deutsch': 'Camilos Gitarre',
            'italiano': 'Chitarra di Camilo',
            'Русский': 'Гитара Камило',
        },
        category: 0,
        edition: {
            'español': 'G6122-5498 EDICIÓN Guitarra De Camilo 2023',
            'english': 'G6122-5498 EDITION Camilo\'s Guitar 2023',
            'français': 'G6122-5498 ÉDITION Guitare de Camilo 2023',
            'deutsch': 'G6122-5498 AUSGABE Camilos Gitarre 2023',
            'italiano': 'G6122-5498 EDIZIONE Chitarra di Camilo 2023',
            'Русский': 'G6122-5498 ИЗДАНИЕ Гитара Камило 2023',
        },
        description: {
            'español': 'Descripción para que compres esta guitarra sin pensarlo dos veces.',
            'english': 'Description to make you buy this guitar without thinking twice.',
            'français': 'Description pour vous faire acheter cette guitare sans hésiter.',
            'deutsch': 'Beschreibung, um diese Gitarre zu kaufen, ohne zweimal nachzudenken.',
            'italiano': 'Descrizione per farti comprare questa chitarra senza pensarci due volte.',
            'Русский': 'Описание, чтобы заставить вас купить эту гитару, не задумываясь дважды.',
        },
        price: '3,699,000.00 COP',
        fileNames: [
            'guitarre1front',
            'guitarre1derriere',
        ],
        allowSmallSize: true,
        filesExtension: 'png',
    },
    {
        name: {
            'español': 'Guitarra De Batman',
            'english': 'Batman\'s Guitar',
            'français': 'Guitare de Batman',
            'deutsch': 'Batmans Gitarre',
            'italiano': 'Chitarra di Batman',
            'Русский': 'Гитара Бэтмена',
        },
        category: 1,
        edition: {
            'español': 'G6122-5498 EDICIÓN Guitarra que tocaría Batman 2023',
            'english': 'G6122-5498 EDITION Guitar that Batman would play 2023',
            'français': 'G6122-5498 ÉDITION Guitare que Batman jouerait 2023',
            'deutsch': 'G6122-5498 AUSGABE Gitarre, die Batman spielen würde 2023',
            'italiano': 'G6122-5498 EDIZIONE Chitarra che Batman suonerebbe 2023',
            'Русский': 'G6122-5498 ИЗДАНИЕ Гитара, на которой играл бы Бэтмен 2023',
        },        
        description: {
            'español': 'Descripción para que compres esta guitarra sin pensarlo dos veces.',
            'english': 'Description to make you buy this guitar without thinking twice.',
            'français': 'Description pour vous faire acheter cette guitare sans hésiter.',
            'deutsch': 'Beschreibung, um diese Gitarre zu kaufen, ohne zweimal nachzudenken.',
            'italiano': 'Descrizione per farti comprare questa chitarra senza pensarci due volte.',
            'Русский': 'Описание, чтобы заставить вас купить эту гитару, не задумываясь дважды.',
        },
        price: '4,099,000.00 COP',
        fileNames: [
            'guitarre2front',
            'guitarre2derriere',
        ],
        allowSmallSize: true,
        filesExtension: 'png',
    },
    {
        name: {
            'español': 'Guitarra Puntiaguda',
            'english': 'Pointy Guitar',
            'français': 'Guitare Pointue',
            'deutsch': 'Spitze Gitarre',
            'italiano': 'Chitarra Appuntita',
            'Русский': 'Острая гитара',
        },
        category: 1,
        edition: {
            'español': 'G6122-5498 EDICIÓN Guitarra puntiaguda 2023',
            'english': 'G6122-5498 EDITION Pointy Guitar 2023',
            'français': 'G6122-5498 ÉDITION Guitare pointue 2023',
            'deutsch': 'G6122-5498 AUSGABE Spitze Gitarre 2023',
            'italiano': 'G6122-5498 EDIZIONE Chitarra appuntita 2023',
            'Русский': 'G6122-5498 ИЗДАНИЕ Острая гитара 2023',
        },
        description: {
            'español': 'Descripción para que compres esta guitarra sin pensarlo dos veces.',
            'english': 'Description to make you buy this guitar without thinking twice.',
            'français': 'Description pour vous faire acheter cette guitare sans hésiter.',
            'deutsch': 'Beschreibung, um diese Gitarre zu kaufen, ohne zweimal nachzudenken.',
            'italiano': 'Descrizione per farti comprare questa chitarra senza pensarci due volte.',
            'Русский': 'Описание, чтобы заставить вас купить эту гитару, не задумываясь дважды.',
        },
        price: '2,999,000.00 COP',
        fileNames: [
            'guitarre3front',
            'guitarre3derriere',
        ],
        allowSmallSize: true,
        filesExtension: 'png',
    },
]);