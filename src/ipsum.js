const ipsumChunks = [
  'Neither of us want to see you go Hollow. ',
  'Entrust thine flesh to me. ',
  'Thy Scent is very human, indeed. …But, not intolerable… ',
  'According to legend, the knight Artorias crossed the Abyss. ',
  'This place is treacherous. Do watch your step, eh? ',
  'What are you doing in the Catacombs? Are you a Cleric or something? ',
  'This knight of Catarina expresses his deepest gratitude. ',
  'I was so absorbed in thought, I just drifted away. ',
  'You see, I\'m actually in a bit of a fix. ',
  'I will stay behind, to gaze at the sun. ',
  'But cometh thee not for the grave of Sir Artorias? ',
  'Traversing the dark? \'Tis but a fairy tale. ',
  'To thine kinsmen forever stay true. Dare\'st not in any attempt to double-cross. ',
  'Well indeed, thou art a strange one! ',
  'What a fool we have, what a wretched fool we have! ',
  'I only hope that my impure tongue does not offend. ',
  'Finally, the curse of the Undead will be lifted, and I can die human. ',
  'Well, hello again. You seem to be doing all right. Need anything forged? ',
  'You won\'t make it through the night without employing my services! ',
  'It\'s fine to be Undead, but keep a level head, eh? Hah hah hah! ',
  'Don\'t get yourself killed. Neither of us want to see you go Hollow. ',
  'Mm, you seem quite lucid! A rare thing in these times. ',
  'Oh, do not fret. Life isn\'t all about sorcery. You will find your own way. ',
  'And I certainly bear no antipathy for that wonderful scaleless beast. ',
  'Let me give you a nibble of advice. Don\'t even consider visiting Anor Londo. ',
  'I\'ll be there to claim your trinkets. Gazing at your final twisted grimace! ',
  'Go along, try and make something of yourself. But nothing will come of it. ',
  'Fine then, rush in like a naked babe, and be skinned alive! ',
  'Oh, your face! You\'re practically Hollow. ',
  'No problem. Have a seat and get comfortable. We\'ll both be Hollow before you know it. ',
  'He left for Blighttown, but never came back. ',
  'I hope he enjoys his new life as a Hollow. ',
  'The virtuous lass came back alone, and in absolute tatters… ',
  'I may be crestfallen, but I\'m not defenseless, you rascal! ',
  'Halt! This is the tomb of the Great Lord Gwyn. ',
  'Very well, Blade of the Darkmoon. Please state thy wish. ',
  'O Heretic, swathed in Dark… An eternal curse upon thee… ',
  'Undead Warrior, conqueror of the Four Kings, is this not your wish? ',
  'After the advent of fire, the ancient lords found the three souls. ',
  'And soon, the flames did fade, and only Dark remained. ',
  'Undead warrior, we stand at the crossroad. Only I know the truth about your fate. ',
  'They were strong, but saw not the truth. ',
  'From my home I was taken, and banish\'d to a plane of distortion. ',
  'Go along and have audience with Our Fair Lady. ',
  'But you have no eggs? Bah, no matter. ',
  'There is no time for idle chat. Think only of Our Fair Lady, and what she may need. ',
  'Worse than Undead, we are diseased, and unwanted. ',
  'Thy Scent is very human, indeed. …But, not intolerable… ',
  'Without doubt, he will be swallowed by the Abyss, overcome by its utter blackness. ',
  'Though needst not hide thy wonder. I am a mushroom, after all. ',
  'No-one will sing they praises, but yet thy greatness shall live on. ',
  'You come. I forge. We talk. You good friend. I very happy. ',
  'Talk, \'tis no good. No one home. Everyone gone. But you, friend. You talk, I no talk, but happy. ',
  'I will rest a while, then return to Firelink Shrine. ',
  'I regret meeting you under such compromising circumstances. ',
  'Since the day Father his form did obscureth, I have await\'d thee. ',
  'Succeed Lord Gwyn, and inheriteth the Fire of our world. ',
  'Thou shall endeth this eternal twilight, and avert further Undead sacrifices. ',
  'O chosen Undead. Thou hath journey\'d far. ',
  'Indeed we had felt the warmth of Fire, its radiance, and the life it sustaineth. ',
  'Without Fire, all shall be a frigid and frightful Dark. ',
  'Kingseeker Frampt, the primordial serpent, shall guideth thee. ',
  'An old friend he was, and thanks to thee… He left this world with honour intact. ',
  'We knights fought valiantly, but for every one of them, we lost three score of our own. ',
  'Good, good. What is bravery, without a dash of recklessness! ',
  'The Darkwraiths reside in a dark void called the Abyss. ',
  'But the Abyss is no place for ordinary mortals. ',
  'The Four Kings slumber in the deepest chamber of the ruins. ',
  'Long ago, the Four Kings were powerful men. Only, their hearts were weak. ',
  'I wish to elucidate your fate. Do you seek such enlightenment? ',
  'Oh, still human are you? Then I am in luck. Could you help me? ',
  'Tis a terrible pity. Like a moth flittering towards a flame. ',
  'Welcome to the lost city of Anor Londo, chosen Undead. ',
  'If you are the chosen one, a revelation shall visit thee. ',
  'Yet never shall the Keepers of these flames meet. ',
  'If not for me, what beacon would there be in this lost city? ',
  'The Archive became a dungeon, a place for sinister experiments. ',
  'Go ahead, you may rest here. Even an undead requires repose. ',
  'What you saw under light of the Darkmoon shall haunt you forever. ',
  'We are born into Dark, and warmed by Fire, but this Fire we cannot touch. ',
  'Those whose fascination with Fire persists, learn to hold it in their own hand. ',
  'I felt as if I\'d been chosen to attune myself to the ancient arts. ',
  'But we are both travellers. We ought to help one another out. ',
  'Oh, for Juniper\'s sake. Put some spring into your step! ',
  'So, what did that giant mushroom make you do? Not that I care. ',
  '…In thine exodus from the Undead Asylum, maketh pilgrimage to the land of Ancient Lords… ',
  '…Well, now you know… And I can die with hope in my heart… ',
  'I would hate to harm you after death… So, go now… …And thank you… ',
  'Thou appearest to lack faith, yet magnanimous are the Gods. ',
  'Cometh thou to confess? Or to accuse? For indeed all sin is my domain. ',
  'You look reasonably sane! What are you doing in the Catacombs? ',
  'Oh right, you came at the perfect time. There\'s a fine stash of treasure right down that hole. ',
  'Heh heh, this is what I do, my friend. The trinkets I\'ll be stripping off your corpse; ',
  'Please forgive me. You and me, we\'re jolly Undead outcasts, aren\'t we? ',
  'I\'m done with looting. I\'m a humble merchant now! ',
  'Through Kindling, we shall one day be granted magnificent powers. ',
  'You\'ll make a fine Hollow! You can waltz in the infernal depths together! ',
  'Best of luck as a Hollow! Gah hah hah hah hah! ',
  'Please, sister, do not cry. I am happy, truly. I have you, don\'t I? ',
  'Always fear the flame, lest you be devoured by it, and lose yourself. ',
  'It is my ignorance, my frailty that has sealed their fates. ',
  'Mmm…mmm… Mm! Oh-hoh! Forgive me. I was absorbed in thought. ',
  'I\'m a bit too plump to be outrunning those things so here I sit in quite a pickle. ',
  'I have run flat up against a wall. …Or, a ball, to be precise. ',
  'I am saved. This Knight of Catarina hereby commends you! ',
  'Oh-hoh! Excuse me. I was so absorbed in thought, I just drifted away. ',
  'The way I see it, our fates appear to be intertwined. ',
  'So, what do you say? Why not help one another on this lonely journey? ',
  'The flow of time itself is convoluted, with heroes centuries old phasing in and out. ',
  'There\'s no telling how much longer your world and mine will remain in contact. ',
  'Spot my summon signature easily by its brilliant aura. If you miss it, you must be blind! ',
  'Oh, hello there. I will stay behind, to gaze at the sun. ',
  'If only I could be so grossly incandescent! ',
  'The sun is a wondrous body. Like a magnificent father! ',
  'Ah, hello! You don\'t look Hollow, far from it! ',
  'Why not help one another on this lonely journey? ',
  'Cross the gaps between the worlds, and engage in jolly co-operation! ',
  'If I didn\'t know better, I\'d think you had feelings for me! ',
  'I\'ve got Yulia… And nobody pelts me with stones anymore. ',
]

export default ipsumChunks;