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
        name: "Ara",
        alias: "The Martial Artist",
        portrait: "/assets/ara-char-port.png",
        videoUrl: "https://youtu.be/D_eBFT38SsU",
        classes: [
            {
                path: 1,
                name: "Apsara",
                description: "When she finds out that her brother is turned into a demon because of the Dark El, Ara decides to join the El Search Party to try and bring him back. During her journey, Ara further trains her martial arts as well as her spearmanship and is resolved to follow the path of good. Slowly but surely, she masters the ultimate level of spearmanship! The earth trembles and enemies fall at the slightest movement of her spear!",
                imageUrl: "/assets/ara-char.png",
                portrait: "/assets/ara-char-1-port.png"
            },
            {
                path: 2,
                name: "Devi",
                description: "During her journey in search of her brother, Ara learns from an ancient tome that she can utilize the powers of darkness to be stronger. She cultivates this darkness and utilizes it to increase her strength while restricting enemies' movements. However, as the darkness takes over, Ara starts to crave the thrill of battle moreand more. Enemies watch out! Ara is ready to let out her dark energy and wipe enemies without a care in the world!",
                imageUrl: "/assets/ara-char-2.png",
                portrait: "/assets/ara-char-2-port.png"
            },
            {
                path: 3,
                name: "Shakti",
                description: "During her journey in search of her brother, Ara finds out about the ancient technique her ancestors used to capture the Nine-tailed Fox, Eun. Through her tireless research, Ara learns she can undo her ancestor's seal and fully accepts Eun as a partner, allowing her to harness Eun's power to become even more powerful. This newfound power enables Ara to become the very first fox sage! Equipped with her trusty spear and an array of powerful spells, enemies drop like leaves from her unleashed potential!",
                imageUrl: "/assets/ara-char-3.png",
                portrait: "/assets/ara-char-3-port.png"
            },
            {
                path: 4,
                name: "Surya",
                description: "When Ara borrowed Eun's power, her newfound ability allowed her to see holy beasts. The holy beasts have lost their home and Ara decided that she wanted to help them. In return, the holy beasts lent Ara their powers. Eventually, because she's always trying to help everyone she encounters, the bond between her and the holy beasts begin to weaken. Ara learned that she could not take control of the holy beasts' powers, but instead she should accept that the powers were only lent to her. This understanding led Ara to unlock the spiritual power's true potential. As her journey continues, Ara realized that helping people who suffered from demons is not a deterrent from her goal of chasing Ran. On the contrary, she realized she could help set Ran towards the right path. With the help of the holy beasts, she gains a new understanding of the world. With her full powers unlocked, Ara becomes the all-powerful enlightened guide that lights the path for all creation!",
                imageUrl: "/assets/ara-char-4.png",
                portrait: "/assets/ara-char-4-port.png"
            }
        ]
    },
    {
        name: "Elesis",
        alias: "The Red Knight",
        portrait: "/assets/elesis-char-port.png",
        videoUrl: "https://youtu.be/AkfdNkByFIw",
        classes: [
            {
                path: 1,
                name: "Empire Sword",
                description: "After Elesis leaves her brother, Elsword, to become stronger, she trains hard, eventually becoming the captain of Red Knights of Velder Kingdom. Even after she reunites with Elsword, she continues to refine her swordplay, ultimately becoming Grandmaster and a renowned hero of the people! With her overwhelming sword skills, she brings justice and order to the land while making enemies tremble in fear!",
                imageUrl: "/assets/elesis-char.png",
                portrait: "/assets/elesis-char-1-port.png"
            }
        ]
    },
    {
        name: "Add",
        alias: "The Tracer",
        portrait: "/assets/add-char-portrait.png",
        videoUrl: "https://youtu.be/0WbxrawUOYI",
        classes: [
            {
                path: 1,
                name: "Doom Bringer",
                description: "When Add learns he has traveled into the future, Add becomes obsessed with Nasod technology. Soon after, Add develops a Nasod Armor prototype as well as make significant upgrades to his weapons, to fit his more direct combat style. Eventually, Add decides to enhance his body and overcome human limitations by fusing himself with the Nasod Armor! With the Nasod Armor, Add becomes even more powerful - a tactical force to be reckoned with!",
                imageUrl: "/assets/add-char.png",
                portrait: "/assets/add-char-1-portrait.png"
            }
        ]
    },
    {
        name: "Luciel",
        alias: "Duo of Demons",
        portrait: "/assets/luciel-char-portrait.png",
        videoUrl: "https://youtu.be/7P2gUIgF2X4",
        classes: [
            {
                path: 1,
                name: "Catastrophe",
                description: "Ciel finds Lu in her weakened state and forms a contract together. With the two teaming up, Lu gains the power to induce fear and command beasts of terror. Slowly, as Lu fully regains her power, Ciel also evolves until he also becomes a full-fledged demon. Together, they are known as the Demon Lords of Terror instilling fear into the hearts of their enemies!",
                imageUrl: "/assets/luciel-char.png",
                portrait: "/assets/luciel-char-1-portrait.png"
            }
        ]
    },
    {
        name: "Rose",
        alias: "The Empyrean Gunner",
        portrait: "/assets/rose-char-portrait.png",
        videoUrl: "https://youtu.be/giY122_XKzg",
        classes: [
            {
                path: 1,
                name: "Tempest Burster",
                description: "After being sent to Elrios through a dimensional tear, Rose joins the El Search Party and trains to become stronger so she could fight the Nasods. She continuously modifies her weapons using an El Shard until she begins to have complete mastery of her heavy weapons! With her new railgun's ultimate piercing capabilities, Rose demolishes everything in an instant!",
                imageUrl: "/assets/rose-char.png",
                portrait: "/assets/rose-char-1-portrait.png"
            }
        ]
    },
    {
        name: "Ain",
        alias: "God's Agent",
        portrait: "/assets/ain-char-portrait.png",
        videoUrl: "https://youtu.be/giY122_XKzg",
        classes: [
            {
                path: 1,
                name: "Richter",
                description: "Ain, created by the Goddess Ishmael, joins the El Search Party to restore the El. Disappointed by the humans for the villainous, and cowardly acts they commit, Ain begins to lose faith in humanity and becomes more and more committed to his mission as the Goddess's Emissary. His power from the Goddess enables Ain to use projection magic to attack. As he fully accepts his mission, Ain slowly loses his human element. Ain reaches the height of his Projection Powers and will bring divine judgment to those that defy the goddess!",
                imageUrl: "/assets/ain-char.png",
                portrait: "/assets/ain-char-1-portrait.png"
            }
        ]
    },
    {
        name: "Laby",
        alias: "The Mysterious Child",
        portrait: "/assets/laby-char-portrait.png",
        videoUrl: "https://youtu.be/tMvL2soUQj8",
        classes: [
            {
                path: 1,
                name: "Eternity Winner",
                description: "After Laby leaves the Black Forest with Gaia, the Earth El Master, they encounter many dangerous monsters. When Gaia sees Laby's natural knack for fighting, he offers to give her formal martial arts training. Even after she separates from Gaia, Laby decides to continue to train until she becomes a master using explosive but vibrant hand-to-hand combat techniques. Enemies will flee just at the sight of her stance!",
                imageUrl: "/assets/laby-char.png",
                portrait: "/assets/laby-char-1-portrait.png"
            }
        ]
    },
    {
        name: "Noah",
        alias: "The Moon Shadow",
        portrait: "/assets/noah-char-portrait.png",
        videoUrl: "https://youtu.be/1OnJyNey_L8",
        classes: [
            {
                path: 1,
                name: "Liberator",
                description: "Noah was sealed in the temple shortly after his brother died. Fueled by revenge towards those who murdered his brother, Noah trains and eventually learns to control and master the Power of Shadows. However, as he continues on his path to revenge, Noah realizes that his obsession to revenge his brother trapped him and made him lose sight of his own goal. Noah eventually liberates himself from his vengeful obsession, which finally allows him to rise as the true master of the Shadow. The mastery of his sickle and total control of shadows makes him a fearless fighter in the night!",
                imageUrl: "/assets/noah-char.png",
                portrait: "/assets/noah-char-1-portrait.png"
            }
        ]
    }
]