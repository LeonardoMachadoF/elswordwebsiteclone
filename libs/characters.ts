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
                portrait: 'https://img.koggames.com/reg-page/202201/img/th-aisha-1stpath.png'
            },
            {
                path: 2,
                name: "Oz Sorcerer",
                description: "During her journey with her friends, Aisha was able to obtain and use Dark Magic while avoiding the influence of the demon world. She cultivates and harnesses this power until a demon bat appears and offers her a contract, telling her she would become more powerful with it. Aisha accepts the contract, becoming even more powerful and reaching the pinnacle of dark magic! When summoned, the demon bat Angkor lends his hand to Aisha to leave enemies writhing in pain!",
                imageUrl: "/assets/aisha-char-2.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-aisha-2ndpath.png"
            },
            {
                path: 3,
                name: "Metamorphy",
                description: "While journeying with her friends, Aisha becomes adept in close-combat as well as releasing powerful magical orbs. At one point, Aisha becomes frustrated with the limits of her physique but after much effort and tinkering, Aisha is eventually able to gain the ability to control time and space dimensions. Eventually, Aisha masters this power and can now transform into her ultimate form to defeat any baddies that come her way!",
                imageUrl: "/assets/aisha-char-3.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-aisha-3rdpath.png"
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
                portrait: 'https://img.koggames.com/reg-page/202201/img/th-rena-1stpath.png',
            },
            {
                path: 2,
                name: "Daybreaker",
                description: "While traveling with her friends, Rena decides to focus on training her speed and accuracy to improve her archery. With the help of her strong connection to the wind, Rena is able to upgrade her mobility and efficiency while using her bow! Rena is the leader of elves blessed by the wind! Her bow and arrows are infallible and will pierce through enemy lines!",
                imageUrl: "/assets/rena-char-2.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-rena-2ndpath.png"
            },
            {
                path: 3,
                name: "Twilight",
                description: "As she continues to travel with her new friends, Rena comes across a group of assassin elves and becomes interested in their stealth capabilities. Using her stealth and traps, Rena, and her friends rescues a community, and was rewarded with a reforged weapon which she uses to become more battle efficient! Rena continues to work under stealth becoming the protector of the night and will ambush enemies before they even know what hit 'em!",
                imageUrl: "/assets/rena-char-3.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-rena-3rdpath.png"
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
                name: "Furious Blade",
                description: "Raven is a mercenary captain who once fought the Kingdom of Velder and later joins the El Search Party. During his travels, Raven decides not to rely on his Nasod arm and trains himself on swordsmanship. Without relying on his arm, he learns to tame his rage and further advance his sword abilities. Raven modifies his arm until it is indistinguishable from a human arm, completely leaving his battle style using the Nasod Arm behind and reaches heights as a full-fledged human! Now, no enemy can come close to those he protects while he wields his sword!",
                imageUrl: "/assets/raven-char.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-raven-1stpath.png"
            },
            {
                path: 2,
                name: "Rage Hearts",
                description: "As Raven travels with his new friends and faces more trials, he finds the need to reach new heights with his abilities. He trains himself to the limit and realizes that his Nasod Arm fuels his rage. He finds a way to control this rage and channel it to become more powerful. He walks the path of reckless abandon fueled with rage, but slowly learns to control it. When he finally accepts his Nasod Arm as a true part of himself, Raven becomes a destructive force, who is able to obliterate his enemies!",
                imageUrl: "/assets/raven-char-2.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-raven-2ndpath.png"
            },
            {
                path: 3,
                name: "Nova Imperator",
                description: "Raven's comrades were all sacrificed during the fight against the Kingdom of Velder. To honor his fallen comrades, Raven decides to enhance his Nasod Arm giving it the ability to unleash massive fire blasts. This kind of power comes at a cost of overheating, which devastates his own body as much as it devastates enemies. Eventually Raven fully converts his body to bypass human limitations to bypass the harm from overheating. This cool-headed tactician is now able to release powerful fire blasts that obliterate and turns his enemies to dust!",
                imageUrl: "/assets/raven-char-3.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-raven-3rdpath.png"
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
            {
                path: 3,
                name: "Code: Sariel",
                description: "As Eve journeys across Elrios with her new friends, she discovers a code that enables her to utilize the power of the El. With this new code, Eve is able to shoot multiple powerful electron beams. In an attempt to become even stronger, Eve uses the power of the Dark El, but in the process, she terminates her emotions. Eve becomes the Radiant Queen of Light, an extremely mighty Nasod, who is able to ruthlessly release powerful photon energies that destroy anyone and anything in battle!",
                imageUrl: "/assets/eve-char-3.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-eve-3rdpath.png"
            }
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
            },
            {
                path: 2,
                name: "Fatal Phantom",
                description: "As he travels together with the El Search Party, Chung learns quickly that he needs to become more versatile in battle. He begins to study ways in which he can utilize the Guardian Stone until he eventually succeeds in crafting guns, called Silver Shooters! Having two Silver Shooters, Chung is now nimbler and even more dangerous at a distance! With his Silver Shooters, Chung leaves no traces behind and the mention of his name instills fear in his enemies!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-chung-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-chung-2ndpath.png"
            },
            {
                path: 3,
                name: "Centurion",
                description: "While Chung travels with the El Search Party, he finds a way to improve the Guardian Stone, redesigning his cannon and creating new gadgets to become more powerful. He begins to research more ways to enhance his canon until it's able to generate boundless amounts of El energy! With the newfound power, Chung is able to generate multiple portals effortlessly, bringing weapons of mass destruction from beyond. Nowhere in the battlefields is safe when his artillery strikes!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-chung-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-chung-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Flame Lord",
                description: "Soon after Elesis separates from her brother to train, she unlocks the great power of her bloodline: Fire Magic! In the beginning, Elesis finds this new power difficult to control, but eventually after continuous training, Elesis is able to master it! Elesis is now the great incarnation of fire that engulfs her enemies in flames and turns them into ashes in one fell swoop!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-elesis-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-elesis-2ndpath.png"
            },
            {
                path: 3,
                name: "Bloody Queen",
                description: "As she encounters more and more enemies using deplorable tactics, Elesis begins to think that perhaps the honorable way isn't always the best. She starts turning to the darkness and after nearly losing her life, absorbs the power of the Dark El to give her strength. Now, Elesis walks the path of destruction. She becomes a bloodthirsty knight using the blood of her enemies and her own for greater power! With a strong intent to kill, she's ready to slaughter any enemies she encounters!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-elesis-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-elesis-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Dominator",
                description: "After unending research, Add finds out that traveling back to the past will require massive amounts of El Energy. He starts upgrading his Dynamos beyond its limits, enabling him to control and summon drones using his newly upgraded Dynamo. Through continuous experimentations, he manages to create his own virtual reality and an army of drones at his disposal! This system gives Add the ultimate advantage on the battlefield allowing him to dominate his foes!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-add-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-add-2ndpath.png"
            },
            {
                path: 3,
                name: "Mad Paradox",
                description: "Add tries to find a way to go back to the past. After much research, he manages to implement a time travel equation to his Dynamos and travels through time. However, he soon discovers that no matter how many times he travels back in time, he can never go back to a reality where he can save his family. This knowledge that he cannot go back to his family eventually drives him insane. Add continues to use the Space-Time Distortion to bring destruction and chaos to his enemies and becomes the demon of paradox!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-add-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-add-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Innocent",
                description: "After finding a weakened Lu, Ciel swears to protect her and help her regain her rightful place. His determination to protect and serve Lu pushes Ciel to train harder, using his gunblade to train his marksmanship and become a Royal Guard. With Ciel's constant support, Lu slowly regains control of her demonic powers, allowing her to harness more and more of her original power.",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-luciel-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-luciel-2ndpath.png"
            },
            {
                path: 3,
                name: "Diangelion",
                description: "Soon after Lu and Ciel form a contract, Lu is filled with powerful demonic energy, which accelerates her recovery, but also causing her to become more ruthless. The overwhelming power that returned to Lu leaves excessive demonic energy, which causes Ciel to slowly become a full-fledged demon and lose his humanity. Soon after, Lu becomes the Demon Lord of Destruction and both Lu and Ciel become stronger by utilizing the Dark El. Enemies beware, the powerful duo now enjoys the thrill of destruction!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-luciel-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-luciel-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Black Massacre",
                description: "After being sent to Elrios, Rose learns that her world and the princess she was trying to protect were attacked. In a panic, she sought help to get stronger. Using the Dark El, Rose enhances herself by becoming a ruthless killing machine. With her trusty chain revolver in hand that causes her enemies to bleed, Rose becomes a dangerous assassin who will stop at nothing to eliminate enemies trying to hurt the princess!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-rose-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-rose-2ndpath.png"
            },
            {
                path: 3,
                name: "Minerva",
                description: "Rose, after being sent to Elrios from another dimension, learns to adapt to the environment. She wants to maximize mobility and develops Nitro Motor that lets her \"fly\" through the battlefield! Not wanting to compromise mobility for firepower she develops a variety of grenades to be used at her disposal. Rose becomes the master of aerial combat as she turns the tide of battle in her favor every time!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-rose-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-rose-3rdpath.png"
            }
        ]
    },
    {
        name: "Ain",
        alias: "God's Agent",
        portrait: "/assets/ain-char-portrait.png",
        videoUrl: "https://youtu.be/1K-zkx5is-s",
        classes: [
            {
                path: 1,
                name: "Richter",
                description: "Ain, created by the Goddess Ishmael, joins the El Search Party to restore the El. Disappointed by the humans for the villainous, and cowardly acts they commit, Ain begins to lose faith in humanity and becomes more and more committed to his mission as the Goddess's Emissary. His power from the Goddess enables Ain to use projection magic to attack. As he fully accepts his mission, Ain slowly loses his human element. Ain reaches the height of his Projection Powers and will bring divine judgment to those that defy the goddess!",
                imageUrl: "/assets/ain-char.png",
                portrait: "/assets/ain-char-1-portrait.png"
            },
            {
                path: 2,
                name: "Bluhen",
                description: "After joining the El Search Party, Ain starts to become disillusioned by humanity. However, as Ain continues his journey with the El Search Party, he begins to understand the good in human nature. He forms a strong bond with the group thus the ultimate harmony between El Energy and the power of the goddess forms! Using the power of Eid, born from his human emotion, Ain is an expert in protecting his allies while taking down his enemies!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-ain-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-ain-2ndpath.png"
            },
            {
                path: 3,
                name: "Herrscher",
                description: "After being sent on a quest, Ain becomes corrupted by chaos energy. His body slowly corrodes away every time he uses his power. He despairs as the Goddess does not help him even as his body slowly wastes away. Ain eventually abandons the Goddess and the mission and ascends from the chaos. He completely embraces the chaos, and he becomes the Master of the Void. Ain masters the endless chaos and uses this to completely annihilate his foes!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-ain-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-ain-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Radiant Soul",
                description: "After leaving the Black Forest, Laby realizes that the world beyond the forest is not as fun and happy as she thought. However, she is unable to understand the negative emotions presented to her. Later, Laby finds that her negative emotion was sealed by her mirror companion Nisha, which stopped Laby from fully emphasizing with other people. When Nisha finally unleashes Laby's negative feelings, Laby is finally able to grow, transforming Laby into a radiant girl who is truly compassionate. She teams up with Nisha when she fights to teach the bad guys a lesson!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-laby-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-laby-2ndpath.png"
            },
            {
                path: 3,
                name: "Nisha Labyrinth",
                description: "As Laby enters the outside world, her feelings of excitement faded and was replaced by discomfort. After witnessing the cruelty of the outside world, Laby breaks down and becomes hopeless. Trying to protect Laby from being further harmed by the outside world, Nisha comes out and hides Laby away. Nisha uses her powers of illusions to fight baddies that aim to hurt Laby!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-laby-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-laby-3rdpath.png"
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
            },
            {
                path: 2,
                name: "Celestia",
                description: "When Noah awakens inside the temple, he meets a strange talking weapon who calls himself Clamor. As they travel together, Noah and Clamor begins to learn more about each other and form a bond. Eventually, Clamor begin to tutor Noah in magic, to open more possibilities for him. When Noah goes back in time, waking up inside the temple again, he goes back in time to when Clamor is still alive. With the resources available to him in the past, Noah studies the universe and eventually master the power of constellations! With this acquired power, Noah is able to give Clamor a physical form and together, they utilize cosmic bodies to bring the enemies down in no time!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-noah-2ndpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-noah-2ndpath.png"
            },
            {
                path: 3,
                name: "Nyx Pieta",
                description: "When he wakes up inside the temple, Noah finds Yuria in trouble but fails to save her. However, Noah manages to use the power of the Moon to heal her before it is too late. His success in saving Yuria causes Noah to become fixated on trying to save everyone the way his brother would have using the healing power of the Moon, despite it being harmful to his body. Noah continues to use the power of the moon, convinced that protecting others by sacrificing himself is what his brother would have wanted!",
                imageUrl: "https://img.koggames.com/reg-page/202201/img/prev-noah-3rdpath.png",
                portrait: "https://img.koggames.com/reg-page/202201/img/th-noah-3rdpath.png"
            }
        ]
    }
]