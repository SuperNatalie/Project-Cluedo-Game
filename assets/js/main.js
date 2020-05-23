const suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        image: "/assets/img/Tudor_Mansion_Mr._Green.png",
        color: "green"
    }, 
    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: "PhD in plant toxicology.",
        image: "/assets/img/Tudor_Mansion_Doctor_Orchid.png",
        color: "white"
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        image: "/assets/img/Tudor_Mansion_Professor_Plum.png",
        color: "purple"
    },
    {
        firstName: "Kassandra",
        lastName: "Scarlet",
        occupation: "Actress",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        image: "/assets/img/Tudor_Mansion_Miss_Scarlett.png",
        color: "red"
    },
    {
        firstName: "Elenor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        image: "/assets/img/Tudor_Mansion_Mrs._Peacock.png",
        color: "blue"
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        image: "/assets/img/Tudor_Mansion_Colonel_Mustard.png",
        color: "yellow"
    }
];

const weaponsArray = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "tropyh",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    },
]

const roomsArray = ["Dining Room", "Conservatory", "Kitchen", "Study Room", "Library", "Billiard Room", "Lounge", "Ballroom", "Hall", "Spa", "Living Room", "Observatory", "Theater", "Guest House", "Patio" ]


function randomNumber(n) {
    return Math.floor(Math.random()*n);
}

function selectRandom1() {
    return randomSuspect = suspectsArray[randomNumber(6)];
}
function selectRandom2() {
    return randomWeapon = weaponsArray[randomNumber(8)];
}
function selectRandom3() {
    return randomRoom = roomsArray[randomNumber(15)];
}

selectRandom1();
selectRandom2();
selectRandom3();

function pickMystery() {
return mystery = [randomSuspect, randomWeapon, randomRoom] ;
}

pickMystery();

function revealMystery() {
    let answer = document.getElementById("answer");
    let killerPic = document.getElementById("killerpic");

    answer.innerHTML = (randomSuspect.firstName + " " + randomSuspect.lastName + " killed Mr. Boddy using the " + randomWeapon.name + " in the " + randomRoom + ".");

    killerPic.innerHTML =  `<img src="${randomSuspect.image}">`
}

function reset() {
    location.reload();
}



