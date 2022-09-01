export type Character = {
    name: string;
    alias: string;
    className: {
        name: string;
        description: string;
        imageUrl: string;
    };
    portrait: string;
    videoUrl: string;
}


export const characters: Character[] = [
    {
        name: 'Elsword',
        alias: 'The Swordsman',
        className: {
            name: 'Knight Emperor',
            description: 'Elsword sets out on a journey to restore the El and find his sister. He begins training until he improves his swordsmanship by creating new ways to fight with his sword. He continues his training until his endurance and power improve. After facing difficult trials, Elsword becomes a master swordsman and a fierce commander in battle who is unmatched with his great sword!',
            imageUrl: '/assets/elsword-char.png'
        },
        portrait: '/assets/elsword-char-port.png',
        videoUrl: 'https://youtu.be/aUYp7h6G_Hg',

    },
    {
        name: 'Aisha',
        alias: 'The Magician',
        className: {
            name: 'Aether Sage',
            description: "After having her magic sealed, Aisha joins Elsword on a journey to get it back. Wanting to follow the footsteps of her mentor, she trains hard, and eventually masters the four elements of nature. With the knowledge she gained through her journey, Aisha can now control multiple elements at once and discovers the ultimate form of elemental magic! She can melt multiple enemies' faces off with one swipe of her staff!",
            imageUrl: '/assets/aisha-char.png'
        },
        portrait: '/assets/aisha-char-port.png',
        videoUrl: 'https://youtu.be/AgLZzqBvrZM'
    },
    {
        name: 'Rena',
        alias: 'The Ranger',
        className: {
            name: 'Anemos',
            description: "As Rena travels with Elsword, she decides she needs to train to become stronger, now that she's an elf living in the mortal world. Rena decides to improve her martial arts using powerful kicks and quick movements to close the gap between her and her enemies! Soon after, Rena accepts the help from wind spirits, enabling her to use the power of the wind with her martial arts moves. Now, Rena is like a wild tempest ready to blow her enemies down!",
            imageUrl: '/assets/rena-char.png'
        },
        portrait: '/assets/rena-char-port.png',
        videoUrl: 'https://youtu.be/lcctl90LXS0',
    },
    {
        name: 'Raven',
        alias: 'The Mercenary',
        className: {
            name: 'Furious Blade',
            description: "Raven is a mercenary captain who once fought the Kingdom of Velder and later joins the El Search Party. During his travels, Raven decides not to rely on his Nasod arm and trains himself on swordsmanship. Without relying on his arm, he learns to tame his rage and further advance his sword abilities. Raven modifies his arm until it is indistinguishable from a human arm, completely leaving his battle style using the Nasod Arm behind and reaches heights as a full-fledged human! Now, no enemy can come close to those he protects while he wields his sword!",
            imageUrl: '/assets/raven-char.png'
        },
        portrait: '/assets/raven-char-port.png',
        videoUrl: 'https://youtu.be/MRlKiTvpJ_0'
    }
]