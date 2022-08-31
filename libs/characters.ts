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
        videoUrl: 'https://youtu.be/aUYp7h6G_Hg'
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
    }

]