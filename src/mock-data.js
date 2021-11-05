let mock = [{
    id: 0,
    intro: "Ah, much better. Now we're moving. Good! Oh, and don't worry. From here on out, it gets much easier.",
    canSee: "a few doors standing in front of you. They seem to be the only way forward",
    canHear: "nothing just yet, unless you count my voice, but you're technically reading that",
    smellsLike: "the beginning of a great journey"
  },
  {
    id: 1,
    intro: "As you walk through the door, you almost trip over the frame. Careful now.",
    canSee: "what appears to be the interior of a Costco, but with nothing on the shelves",
    canHear: "a menacingly echo-ey rendition of the Home Depot theme",
    smellsLike: "fresh lumber"
  },
  {
    id: 2,
    intro: "Even before you enter the door, you can hear music. Familiar music.",
    canSee: "an entire routine of clowns, all running around and getting up to general antics",
    canHear: "that music. Ah yes, now you recognize it. It's that clown song that everyone knows, and only twenty people know the name of (and if you're one of them, I'm sure you're very smart)",
    smellsLike: "a lot of peanuts and assorted over-priced questionable food items"
  },
  {
    id: 3,
    intro: "As you step through the door, you're stopped by a burly-looking bouncer with shades on, who demands to see your ID. You fumble with your wallet a bit and show him, to which he nods. As he looks off in the middle distance, it becomes abundantly clear that he's blind, making you wonder why he needed to see your ID in the first place.",
    canSee: "only the guy standing next to you",
    canHear: "some unreasonably loud music being played on the bouncer's AirPods (seriously, how did that guy even know you were here?)",
    smellsLike: "a pretty expensive-smelling cologne, actually. You start to wonder how much this guy gets paid to stand here"
  },
  {
    id: 4,
    intro: "A wave of warm air blows into your face as you step through the door. You suddenly find yourself in the interior of a large volcano. Well, knowing that magma has a temperature of about 2200 degrees Fahrenheit, you feel lucky to have not burst into flames already.",
    canSee: "three midgets fighting over a piece of jewelry",
    canHear: "the bubbling of lava right in front of you",
    smellsLike: "rotten eggs. Either that or sulfur. I can never tell those two apart, which I think is why my landlord is so angry these days"
  },
  {
    id: 5,
    intro: "You step into what looks like a large classroom, already in session. Everyone turns to look at you at the same time, giving a terrible sense of discomfort. And what's worse, you forgot to wear pants! Actually, no, wait, not that part.",
    canSee: "a great number of disapproving faces",
    canHear: "nothing. Absolutely nothing. Like, seriously, you could hear a pin drop in here",
    smellsLike: "a lot of crushed hopes and dreams. Ah, must be midterms."
  },
  {
    id: 6,
    intro: "The next room you step into is dark and a little ominous. The paintings on the walls all seem to stare down at you as you walk quietly through what you've decided must be some kind of museum.",
    canSee: "a light from a flashlight. Which suddenly reminds you that you're probably not supposed to be here. Best to keep quiet and hidden for now",
    canHear: "only your own footsteps, which given what I just said about being quiet, isn't a great sign",
    smellsLike: "old paint and a truly unreasonable amount of floor wax"
  },
  {
    id: 7,
    intro: "You step through the door and feel sand between your toes. Wait. Are you not wearing shoes? Seriously?",
    canSee: "a gorgeous expanse of ocean before you. Probably best not to turn around and look, though. I mean, have you seen coastal towns? Not great, my friend. Not great",
    canHear: "the rolling waves and the distant sound of horrible traffic behind you, which you do your best to ignore",
    smellsLike: "ocean breeze and locally-caught seafood that's been here for longer than the salesperson is willing to admit"
  },
  {
    id: 8,
    intro: "The next room is so terrible that I couldn't possibly bring myself to describe it to you.",
    canSee: "only the...no, I can't! I can't do it! It's awful, leave it at that",
    canHear: "the terrible sounds of...no, I won't tell you this. It'd keep you up for weeks",
    smellsLike: "a, well, how about this. Just imagine the worst thing you've ever smelled. For now, until you're ready, let's just say it smells like that, but worse"
  },
  {
    id: 9,
    intro: "Flashing lights seem to blind you as you make your way through the door. On the other side is the interior of a large casino! It doesn't seem to be any specific casino, though, because frankly, nobody's paying me for advertising here. Absolutely nobody.",
    canSee: "lights, machines, money, chips, cards, and all sorts of fantastically gaudy that you'd really rather not pay for",
    canHear: "the sounds of cheers and tears from wins and losses. That's Vegas, baby",
    smellsLike: "cigarette smoke, which is interesting given the \"No Smoking\" sign on the wall. Like I said, that's Vegas, baby"
  },
  {
    id: 10,
    intro: "As you step through the door, you see a stage and actors! You hear the beautiful music! There's clearly some sort of musical going on here, and you've got a front-row seat! Actually, you may be even closer than front-row! With a dawning realization, you find yourself on the stage itself. Several people are staring at you awkwardly, and even your desperate attempt at a tap dancing routine doesn't seem to clear the air at all. Best to keep moving, I think.",
    canSee: "a lot of confused looks in the audience and a lot of concerned looks from the cast",
    canHear: "the angry whisper-yelling of the stage manager, who is making a lot of crazed gestures from off-stage, all seemingly signalling that you should get going",
    smellsLike: "show business"
  },
  {
    id: 11,
    intro: "You step through the door and find yourself in a damp cave. It's impossible to see for a moment until you manage to find a torch on the wall, which you light and illuminate the scene before you. Wait, how did you just light that? Did you have a lighter on you this whole time?",
    canSee: "a distinct type of limestone, undoubtedly aeolian calcarenite, meaning you're either on a coast or beneath the sea floor. No, it simply couldn't be beneath the sea floor. Aeolian calcarenite is formed from wind erosion. More likely some sort of coastal cavern that collapsed in on itself. And of course, you know all of this immediately",
    canHear: "an eerie dripping sound, undoubtedly coming from autogenic condensation. Obviously",
    smellsLike: "a humid scent, though it's clearly a part of the cave's microclimate. The stone in the wall must...okay, seriously, how do you know all this? You just got here, like, a minute ago"
  },
  {
    id: 12,
    intro: "You step through the door and place your foot down on soft grass. A great hill of green grass seems to stretch for miles in every direction. The sky is blue, the air is clean and clear, and it's abundantly clear that you've either stepped into the first scene in a movie with a really heavy-handed environmental message or you're in Holland.",
    canSee: "stretching waves of gorgeous grass, untouched by the vile machinactions of man",
    canHear: "the songs of birds and the adorable chattering of all the tiny creatures who make their home here",
    smellsLike: "clean air and the way that nature was meant to...okay, so it's definitely the heavy-handed movie thing. Let's keep moving before you get turned into the antagonist or something"
  },
  {
    id: 13,
    intro: "Before you've even made it all the way through the door, you find yourself beginning to float off the ground. Looking up, you find the Earth hanging high above you in the distance. Realizing you must be on the moon, you begin to take in the majesty of this view. Truly, the sight of one's own home being so small and so far away makes you really begin to contemplate the smallness of all our earthly conflicts, the role of man in the universe, and how on Earth you're breathing right now.",
    canSee: "the gray rocks of the moon, marking something that has ever been seen by man but never touched by any of them. You touch the ground to make sure that's no longer true",
    canHear: "nothing. You see, sound doesn't travel in space like it does on Earth because the air serves as a...wait, hey, where are you going? I've got more to say on this still",
    smellsLike: "nothing. You see, smell doesn't travel in space like it does on - Hey, I'm just kidding! Come back! I'm not going on another rant"
  },
  {
    id: 14,
    intro: "Stepping through the door, you barely manage to dodge a car as it speeds past you. Geez! Did that door lead to the middle of the street? Come on, we gotta move!",
    canSee: "cars! What did you expect to see? We seriously gotta go here, pal",
    canHear: "cars!! Come on, move!! Can we do these descriptions later? It's not safe here",
    smellsLike: "the- HEY! Would you quit sniffing the air here? Why aren't you taking this seriously? I'm going to just start pushing you through one of these doors in a second"
  },
  {
    id: 15,
    intro: "This time, as you make your way through the door, you find not three doors, but a single one! Yes! You've done it! You're nearly there!",
    canSee: "the last door of your journey",
    canHear: "the cheers of a crowd completely in your imagination",
    smellsLike: "victory"
  },
]

export default mock;
