export type ClassType = {
    path: number;
    name: string;
    description: string;
    imageUrl: string;
    portrait: string;
}

export type Character = {
    name: string;
    alias: string;
    classes: ClassType[];
    portrait: string;
    videoUrl: string;
}


export const characters: Character[] = [
    {
        name: 'Elsword',
        alias: 'The Swordsman',
        classes: [
            {
                path: 1,
                name: 'Knight Emperor',
                description: 'Elsword sets out on a journey to restore the El and find his sister. He begins training until he improves his swordsmanship by creating new ways to fight with his sword. He continues his training until his endurance and power improve. After facing difficult trials, Elsword becomes a master swordsman and a fierce commander in battle who is unmatched with his great sword!',
                imageUrl: '/assets/elsword-char.png',
                portrait: '/assets/elsword-char-port.png',
            }
        ],
        portrait: '/assets/elsword-char-port.png',
        videoUrl: 'https://youtu.be/aUYp7h6G_Hg',

    },
    {
        name: 'Aisha',
        alias: 'The Magician',
        classes: [
            {
                path: 1,
                name: 'Aether Sage',
                description: "After having her magic sealed, Aisha joins Elsword on a journey to get it back. Wanting to follow the footsteps of her mentor, she trains hard, and eventually masters the four elements of nature. With the knowledge she gained through her journey, Aisha can now control multiple elements at once and discovers the ultimate form of elemental magic! She can melt multiple enemies' faces off with one swipe of her staff!",
                imageUrl: '/assets/aisha-char.png',
                portrait: '/assets/aisha-char-port.png'
            }
        ],
        portrait: '/assets/aisha-char-port.png',
        videoUrl: 'https://youtu.be/AgLZzqBvrZM'
    },
    {
        name: 'Rena',
        alias: 'The Ranger',
        classes: [
            {
                path: 1,
                name: 'Anemos',
                description: "As Rena travels with Elsword, she decides she needs to train to become stronger, now that she's an elf living in the mortal world. Rena decides to improve her martial arts using powerful kicks and quick movements to close the gap between her and her enemies! Soon after, Rena accepts the help from wind spirits, enabling her to use the power of the wind with her martial arts moves. Now, Rena is like a wild tempest ready to blow her enemies down!",
                imageUrl: '/assets/rena-char.png',
                portrait: '/assets/rena-char-port.png',
            }
        ],
        portrait: '/assets/rena-char-port.png',
        videoUrl: 'https://youtu.be/lcctl90LXS0',
    },
    {
        name: 'Raven',
        alias: 'The Mercenary',
        classes: [
            {
                path: 1,
                name: 'Furious Blade',
                description: "Raven is a mercenary captain who once fought the Kingdom of Velder and later joins the El Search Party. During his travels, Raven decides not to rely on his Nasod arm and trains himself on swordsmanship. Without relying on his arm, he learns to tame his rage and further advance his sword abilities. Raven modifies his arm until it is indistinguishable from a human arm, completely leaving his battle style using the Nasod Arm behind and reaches heights as a full-fledged human! Now, no enemy can come close to those he protects while he wields his sword!",
                imageUrl: '/assets/raven-char.png',
                portrait: '/assets/raven-char-port.png',
            }
        ],
        portrait: '/assets/raven-char-port.png',
        videoUrl: 'https://youtu.be/MRlKiTvpJ_0'
    },
    {
        name: 'Eve',
        alias: 'The Nasod Queen',
        classes: [
            {
                path: 1,
                name: 'Code:Ultimate',
                description: "Eve, The Queen of Nasods, awakens after centuries of slumber and joins Elsword and his friends. As their travel continues, Eve discovers a hidden code in her programming which allows her to enhance her battle using Nasod spears and wings. Eve keeps upgrading that code making her even tougher in battles, until she eventually overcomes the limits of her programming! With her powerful Nasod spear and ultimate command of drones, Eve will annihilate all enemies before her!",
                imageUrl: '/assets/eve-char.png',
                portrait: '/assets/eve-char-1.png'
            },
            {
                path: 2,
                name: 'Code: Esencia',
                description: "As Eve travels with Elsword and the gang, she soon realizes that her direct participation in battle is not the most efficient way to victory. Instead, Eve decides to tap into her knowledge to build her first guardian unit that will fight for her. As the battle becomes harder, she builds more until she has amassed several loyal Nasod summons! Eve has become the Benevolent White Empress of Nasods controlling the battlefield and leading her Nasod Assistants to victory!",
                imageUrl: '/assets/eve-char-logo-2.png',
                portrait: '/assets/eve-char-2.png'
            },
        ],
        portrait: '/assets/eve-char-port.png',
        videoUrl: 'https://youtu.be/ZpcYI1RnEtA'
    }
]