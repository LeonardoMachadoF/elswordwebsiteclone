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
                portrait: '/assets/elsword-char-1-portrait.png',
            },
            {
                path: 2,
                name: 'Rune Master',
                description: "As he sets off on a journey to find his sister and to become stronger, Elsword finds out that he is very vulnerable to magic attacks. To remedy this, he studies magic to balance out this weakness. Through constant training, he's able to incorporate the use of runes in his close or long-range battles, making him an effective fighter. Soon, Elsword becomes the strongest magic swordsman combining might and magic to deal the ultimate blow to enemies everywhere!",
                imageUrl: '/assets/elsword-char-2.png',
                portrait: '/assets/elsword-char-2-portrait.png'
            },
            {
                path: 3,
                name: 'Immortal',
                description: "During his journey to find his sister and to become stronger, Elsword finds an ancient treasure that turns into another great sword. He uses this new weapon to develop a unique fighting style! This new great sword absorbs dark El energy, which grants him even more power! A more powerful Elsword gains the ability to summon an unlimited number of swords and merge them into giant black swords! With the dark energy empowering him and his swords, Elsword is ready to strike without a second thought!",
                imageUrl: '/assets/elsword-char-3.png',
                portrait: '/assets/elsword-char-3-portrait.png'
            },
            {
                path: 4,
                name: 'Genesis',
                description: "As Elsword continues his journey, he came to realize that his strength just wasn't enough to protect the El and his friends. He created a support equipment called 'Sephira' to allow him to resonate with the El better. Unfortunately, the more he harnessed this power, the less he seemed to remember. However, Elsword decided that even if he would lose a part of himself in the process, he would not let everyone down. It was a choice he made, with a realization that everything will follow according to fate and El's will. Elsword finally transforms into a Sword of El ready to smite anyone who brings harm to the El and the people of Elrios!",
                imageUrl: '/assets/elsword-char-4.png',
                portrait: '/assets/elsword-char-4-portrait.png'
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
                name: 'Code: Ultimate',
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
    },
    {
        name: 'Chung',
        alias: 'The Guardian',
        classes: [
            {
                path: 1,
                name: 'Comet Crusader',
                description: "When he is saved by the El Search Party from his demon corrupted father, Chung becomes determined more than ever to train himself and become stronger. Because of his strong will to fight and protect his friends, the Guardian Stone transforms! The stone's transformation fortifies Chung's cannon and armor, allowing him to stand in front of enemies' attacks to guard his friends! Chung now becomes the reliable protector and guardian, dominating the field with his cannon and his fortified armor!",
                imageUrl: '/assets/chung-char.png',
                portrait: '/assets/chung-char-1-portrait.png',
            }
        ],
        portrait: '/assets/chung-char-1-logo.png',
        videoUrl: 'https://youtu.be/4q7RzZP03iY'
    },
    {
        name: 'Elsword',
        alias: 'The Swordsman',
        classes: [
            {
                path: 1,
                name: 'Knight Emperor',
                description: 'Elsword sets out on a journey to restore the El and find his sister. He begins training until he improves his swordsmanship by creating new ways to fight with his sword. He continues his training until his endurance and power improve. After facing difficult trials, Elsword becomes a master swordsman and a fierce commander in battle who is unmatched with his great sword!',
                imageUrl: '/assets/elsword-char.png',
                portrait: '/assets/elsword-char-1-portrait.png',
            },
            {
                path: 2,
                name: 'Rune Master',
                description: "As he sets off on a journey to find his sister and to become stronger, Elsword finds out that he is very vulnerable to magic attacks. To remedy this, he studies magic to balance out this weakness. Through constant training, he's able to incorporate the use of runes in his close or long-range battles, making him an effective fighter. Soon, Elsword becomes the strongest magic swordsman combining might and magic to deal the ultimate blow to enemies everywhere!",
                imageUrl: '/assets/elsword-char-2.png',
                portrait: '/assets/elsword-char-2-portrait.png'
            },
            {
                path: 3,
                name: 'Immortal',
                description: "During his journey to find his sister and to become stronger, Elsword finds an ancient treasure that turns into another great sword. He uses this new weapon to develop a unique fighting style! This new great sword absorbs dark El energy, which grants him even more power! A more powerful Elsword gains the ability to summon an unlimited number of swords and merge them into giant black swords! With the dark energy empowering him and his swords, Elsword is ready to strike without a second thought!",
                imageUrl: '/assets/elsword-char-3.png',
                portrait: '/assets/elsword-char-3-portrait.png'
            },
            {
                path: 4,
                name: 'Genesis',
                description: "As Elsword continues his journey, he came to realize that his strength just wasn't enough to protect the El and his friends. He created a support equipment called 'Sephira' to allow him to resonate with the El better. Unfortunately, the more he harnessed this power, the less he seemed to remember. However, Elsword decided that even if he would lose a part of himself in the process, he would not let everyone down. It was a choice he made, with a realization that everything will follow according to fate and El's will. Elsword finally transforms into a Sword of El ready to smite anyone who brings harm to the El and the people of Elrios!",
                imageUrl: '/assets/elsword-char-4.png',
                portrait: '/assets/elsword-char-4-portrait.png'
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
                name: 'Code: Ultimate',
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
    },
    {
        name: 'Chung',
        alias: 'The Guardian',
        classes: [
            {
                path: 1,
                name: 'Comet Crusader',
                description: "When he is saved by the El Search Party from his demon corrupted father, Chung becomes determined more than ever to train himself and become stronger. Because of his strong will to fight and protect his friends, the Guardian Stone transforms! The stone's transformation fortifies Chung's cannon and armor, allowing him to stand in front of enemies' attacks to guard his friends! Chung now becomes the reliable protector and guardian, dominating the field with his cannon and his fortified armor!",
                imageUrl: '/assets/chung-char.png',
                portrait: '/assets/chung-char-1-portrait.png',
            }
        ],
        portrait: '/assets/chung-char-1-logo.png',
        videoUrl: 'https://youtu.be/4q7RzZP03iY'
    }
]