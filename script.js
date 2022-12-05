// Base class set up
class Fighter {
    constructor(profession ,health, strength, dexterity, wisdom, defense,skill1, skill2, skill3, img) {
        this.profession = profession
        this.health = health
        this.strength = strength
        this.dexterity = dexterity
        this.wisdom = wisdom
        this.defense = defense
        this.skill1 = skill1
        this.skill2 = skill2
        this.skill3 = skill3
        this.img = img
    }
    hitroll() {
        const roll = Math.floor(Math.random() * 6)
        return roll
    }
}

// Generated Classes
const barbarian = new Fighter("Barbarian", 15, 8, 5, 2, 7, "SWING MORE","RAGE ON","CLEAVE", "https://i.imgur.com/DRUAaya.png")
const swashbuckler = new Fighter("Swashbuckler", 12, 5, 6, 1, 9, "STAB", "SLICE", "WEAK SPOT", "https://i.imgur.com/VdFaN2C.png")
const ranger = new Fighter("Ranger", 12, 3, 9, 1, 3, "DOUBE SHOT", "SPLIT TARGET", "PRECISE SHOT", "https://i.imgur.com/aKAkHel.png")
const assassin = new Fighter("Assassin", 10, 2, 10, 1, 5, "BACKSTAB", "THROWING KNIVES", "DEADLY STRIKE", "https://i.imgur.com/Of4M4A0.png")
const wizard = new Fighter("Wizard", 8, 1, 3, 1, 2, "FIREBALL", "SHOCK", "HAIL", "https://i.imgur.com/AWH3C1X.png")
const healer = new Fighter("Healer", 10, 1, 4, 1, 3, "HEAL", "BOOST", "SMITE", "https://i.imgur.com/4XxzquY.png")
const monk = new Fighter("Monk", 12, 7, 7, 1, 8, "PRECISE STRIKE", "FLYING KICK", "TRIPLE UNARMED STRIKE", "https://i.imgur.com/5twXEfM.png")
const rogue = new Fighter("Rogue", 10, 4, 9, 1, 6, "SLEIGHT OF HAND", "TRAINED EYE", "STROKE OF LUCK", "https://i.imgur.com/04Jy4eo.png")
const knight = new Fighter("Knight", 30, 3, 3, 1, 13, "SHEILD BASH", "STRIKE DOWN", "INTIMIDATE", "https://i.imgur.com/vVPsT2g.png")

// Each side set with arrays
const player1 = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]
const player2 = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]

const p1s = []
const p2s = []

let nplayer1 = []
let nplayer2 = []

// Easily access array items and distinguish between teams
const p1bar = player1[0]
const p1swa = player1[1]
const p1ran = player1[2]
const p1ass = player1[3]
const p1wiz = player1[4]
const p1hea = player1[5]
const p1mon = player1[6]
const p1rog = player1[7]
const p1kni = player1[8]

const p2bar = player2[0]
const p2swa = player2[1]
const p2ran = player2[2]
const p2ass = player2[3]
const p2wiz = player2[4]
const p2hea = player2[5]
const p2mon = player2[6]
const p2rog = player2[7]
const p2kni = player2[8]

const posit11 = document.querySelector('.p11 > .profession')
const p11h = document.querySelector('.p11 > .health > span')
const p11a = document.querySelector('.p11 > .strength > span')
const p11d = document.querySelector('.p11 > .dexterity > span')
const p11w = document.querySelector('.p11 > .wisdom > span')
const p11def = document.querySelector('.p11 > .defense > span')
const p11hs1 = document.querySelector('.p11 > .skill1')
const p11hs2 = document.querySelector('.p11 > .skill2')
const p11hs3 = document.querySelector('.p11 > .skill3')
const p11i = document.querySelector('.p11 > img')

const posit12 = document.querySelector('.p12 > .profession')
const p12h = document.querySelector('.p12 > .health > span')
const p12a = document.querySelector('.p12 > .strength > span')
const p12d = document.querySelector('.p12 > .dexterity > span')
const p12w = document.querySelector('.p12 > .wisdom > span')
const p12def = document.querySelector('.p12 > .defense > span')
const p12hs1 = document.querySelector('.p12 > .skill1')
const p12hs2 = document.querySelector('.p12 > .skill2')
const p12hs3 = document.querySelector('.p12 > .skill3')
const p12i = document.querySelector('.p12 > img')

const posit13 = document.querySelector('.p13 > .profession')
const p13h = document.querySelector('.p13 > .health > span')
const p13a = document.querySelector('.p13 > .strength > span')
const p13d = document.querySelector('.p13 > .dexterity > span')
const p13w = document.querySelector('.p13 > .wisdom > span')
const p13def = document.querySelector('.p13 > .defense > span')
const p13hs1 = document.querySelector('.p13 > .skill1')
const p13hs2 = document.querySelector('.p13 > .skill2')
const p13hs3 = document.querySelector('.p13 > .skill3')
const p13i = document.querySelector('.p13 > img')

const posit21 = document.querySelector('.p21 > .profession')
const p21h = document.querySelector('.p21 > .health > span')
const p21a = document.querySelector('.p21 > .strength > span')
const p21d = document.querySelector('.p21 > .dexterity > span')
const p21w = document.querySelector('.p21 > .wisdom > span')
const p21def = document.querySelector('.p21 > .defense > span')
const p21hs1 = document.querySelector('.p21 > .skill1')
const p21hs2 = document.querySelector('.p21 > .skill2')
const p21hs3 = document.querySelector('.p21 > .skill3')
const p21i = document.querySelector('.p21 > img')

const posit22 = document.querySelector('.p22 > .profession')
const p22h = document.querySelector('.p22 > .health > span')
const p22a = document.querySelector('.p22 > .strength > span')
const p22d = document.querySelector('.p22 > .dexterity > span')
const p22w = document.querySelector('.p22 > .wisdom > span')
const p22def = document.querySelector('.p22 > .defense > span')
const p22hs1 = document.querySelector('.p22 > .skill1')
const p22hs2 = document.querySelector('.p22 > .skill2')
const p22hs3 = document.querySelector('.p22 > .skill3')
const p22i = document.querySelector('.p22 > img')

const posit23 = document.querySelector('.p23 > .profession')
const p23h = document.querySelector('.p23 > .health > span')
const p23a = document.querySelector('.p23 > .strength > span')
const p23d = document.querySelector('.p23 > .dexterity > span')
const p23w = document.querySelector('.p23 > .wisdom > span')
const p23def = document.querySelector('.p23 > .defense > span')
const p23hs1 = document.querySelector('.p23 > .skill1')
const p23hs2 = document.querySelector('.p23 > .skill2')
const p23hs3 = document.querySelector('.p23 > .skill3')
const p23i = document.querySelector('.p23 > img')

const p1b1 = document.querySelector('.b11 > img')
const p1b2 = document.querySelector('.b12 > img')
const p1b3 = document.querySelector('.b13 > img')
const p1b4 = document.querySelector('.b14 > img')
const p1b5 = document.querySelector('.b15 > img')
const p1b6 = document.querySelector('.b16 > img')

const p2b1 = document.querySelector('.b21 > img')
const p2b2 = document.querySelector('.b22 > img')
const p2b3 = document.querySelector('.b23 > img')
const p2b4 = document.querySelector('.b24 > img')
const p2b5 = document.querySelector('.b25 > img')
const p2b6 = document.querySelector('.b26 > img')

const li10 = document.querySelector('.p1list > .l0 > img')
const li11 = document.querySelector('.p1list > .l1 > img')
const li12 = document.querySelector('.p1list > .l2 > img')
const li13 = document.querySelector('.p1list > .l3 > img')
const li14 = document.querySelector('.p1list > .l4 > img')
const li15 = document.querySelector('.p1list > .l5 > img')
const li16 = document.querySelector('.p1list > .l6 > img')
const li17 = document.querySelector('.p1list > .l7 > img')
const li18 = document.querySelector('.p1list > .l8 > img')

const li20 = document.querySelector('.p2list > .l0 > img')
const li21 = document.querySelector('.p2list > .l1 > img')
const li22 = document.querySelector('.p2list > .l2 > img')
const li23 = document.querySelector('.p2list > .l3 > img')
const li24 = document.querySelector('.p2list > .l4 > img')
const li25 = document.querySelector('.p2list > .l5 > img')
const li26 = document.querySelector('.p2list > .l6 > img')
const li27 = document.querySelector('.p2list > .l7 > img')
const li28 = document.querySelector('.p2list > .l8 > img')

const round = document.querySelector('.round')

const ap11 = document.querySelector('.p11 > .attack')
const ap12 = document.querySelector('.p12 > .attack')
const ap13 = document.querySelector('.p13 > .attack')
const ap21 = document.querySelector('.p21 > .attack')
const ap22 = document.querySelector('.p22 > .attack')
const ap23 = document.querySelector('.p23 > .attack')

//Images for each list

li10.src = p1bar.img
li11.src = p1swa.img
li12.src = p1ran.img
li13.src = p1ass.img
li14.src = p1wiz.img
li15.src = p1hea.img
li16.src = p1mon.img
li17.src = p1rog.img
li18.src = p1kni.img

li20.src = p2bar.img
li21.src = p2swa.img
li22.src = p2ran.img
li23.src = p2ass.img
li24.src = p2wiz.img
li25.src = p2hea.img
li26.src = p2mon.img
li27.src = p2rog.img
li28.src = p2kni.img

//Hide skill buttons until fighter turn
p11hs1.style.display = "none"
p11hs2.style.display = "none"
p11hs3.style.display = "none"
p12hs1.style.display = "none"
p12hs2.style.display = "none"
p12hs3.style.display = "none"
p13hs1.style.display = "none"
p13hs2.style.display = "none"
p13hs3.style.display = "none"

p21hs1.style.display = "none"
p21hs2.style.display = "none"
p21hs3.style.display = "none"
p22hs1.style.display = "none"
p22hs2.style.display = "none"
p22hs3.style.display = "none"
p23hs1.style.display = "none"
p23hs2.style.display = "none"
p23hs3.style.display = "none"

ap11.style.display = "none"
ap12.style.display = "none"
ap13.style.display = "none"
ap21.style.display = "none"
ap22.style.display = "none"
ap23.style.display = "none"



//functions
function fullteam() {
    if (p1s.length === 3) {
        document.querySelector('.p1list').style.display = "none";
    }
    if (p2s.length === 3) {
        document.querySelector('.p2list').style.display = "none"
    }
    if (p1s.length === 3 && p2s.length === 3) {
        document.querySelector('.close').style.display = "none"
    }
}

function showp1skills() {
    p11hs1.style.display = "block"
    p11hs2.style.display = "block"
    p11hs3.style.display = "block"
    p12hs1.style.display = "block"
    p12hs2.style.display = "block"
    p12hs3.style.display = "block"
    p13hs1.style.display = "block"
    p13hs2.style.display = "block"
    p13hs3.style.display = "block"
}

function showp2skills() {
    p21hs1.style.display = "block"
    p21hs2.style.display = "block"
    p21hs3.style.display = "block"
    p22hs1.style.display = "block"
    p22hs2.style.display = "block"
    p22hs3.style.display = "block"
    p23hs1.style.display = "block"
    p23hs2.style.display = "block"
    p23hs3.style.display = "block"
}

function hidep1attack() {
    ap11.style.display = "none"
    ap12.style.display = "none"
    ap13.style.display = "none"
}

function hidep2attack() {
    ap21.style.display = "none"
    ap22.style.display = "none"
    ap23.style.display = "none"
}


//skills functions
function swingMore() {}
function rageOn() {}
function cleave() {}
function stab() {}
function slice() {}
function weakSpot() {}
function doubleShot() {}
function splitTarget() {}
function preciseShot() {}
function backstab() {}
function throwingKnives() {}
function deadlyStrike() {}
function fireball() {}
function shock() {}
function hail() {}
function heal() {}
function boost() {}
function smite() {}
function preciseStrike() {}
function flyingKick() {}
function tripleUnarmedStrike() {}
function sleightOfHand() {}
function trainedEye() {}
function strokeOfLuck() {}
function sheildBash() {}
function strikeDown() {}
function intimidate() {}


//Event Listener

li10.addEventListener('click', () => {
    p1s.push(p1bar)
    delete player1[0]
    fullteam()
}, {once : true})
li11.addEventListener('click', () => {
    p1s.push(p1swa)
    delete player1[1]
    fullteam()
}, {once : true})
li12.addEventListener('click', () => {
    p1s.push(p1ran)
    delete player1[2]
    fullteam()
}, {once : true})
li13.addEventListener('click', () => {
    p1s.push(p1ass)
    delete player1[3]
    fullteam()
}, {once : true})
li14.addEventListener('click', () => {
    p1s.push(p1wiz)
    delete player1[4]
    fullteam()
}, {once : true})
li15.addEventListener('click', () => {
    p1s.push(p1hea)
    delete player1[5]
    fullteam()
}, {once : true})
li16.addEventListener('click', () => {
    p1s.push(p1mon)
    delete player1[6]
    fullteam()
}, {once : true})
li17.addEventListener('click', () => {
    p1s.push(p1rog)
    delete player1[7]
    fullteam()
}, {once : true})
li18.addEventListener('click', () => {
    p1s.push(p1kni)
    delete player1[8]
    fullteam()
}, {once : true})

li20.addEventListener('click', () => {
    p2s.push(p2bar)
    delete player2[0]
    fullteam()
}, {once : true})
li21.addEventListener('click', () => {
    p2s.push(p2swa)
    delete player2[1]
    fullteam()
}, {once : true})
li22.addEventListener('click', () => {
    p2s.push(p2ran)
    delete player2[2]
    fullteam()
}, {once : true})
li23.addEventListener('click', () => {
    p2s.push(p2ass)
    delete player2[3]
    fullteam()
}, {once : true})
li24.addEventListener('click', () => {
    p2s.push(p2wiz)
    delete player2[4]
    fullteam()
}, {once : true})
li25.addEventListener('click', () => {
    p2s.push(p2hea)
    delete player2[5]
    fullteam()
}, {once : true})
li26.addEventListener('click', () => {
    p2s.push(p2mon)
    delete player2[6]
    fullteam()
}, {once : true})
li27.addEventListener('click', () => {
    p2s.push(p2rog)
    delete player2[7]
    fullteam()
}, {once : true})
li28.addEventListener('click', () => {
    p2s.push(p2kni)
    delete player2[8]
    fullteam()
}, {once : true})

round.addEventListener('click', () => {
    modal.style.display = "none"
    posit11.innerText = p1s[0].profession
    p11h.innerText = p1s[0].health
    p11a.innerText = p1s[0].strength
    p11d.innerText = p1s[0].dexterity
    p11w.innerText = p1s[0].wisdom
    p11def.innerText = p1s[0].defense
    p11hs1.innerText = p1s[0].skill1    
    p11hs2.innerText = p1s[0].skill2    
    p11hs3.innerText = p1s[0].skill3
    p11i.src = p1s[0].img    

    posit12.innerText = p1s[1].profession
    p12h.innerText = p1s[1].health
    p12a.innerText = p1s[1].strength
    p12d.innerText = p1s[1].dexterity
    p12w.innerText = p1s[1].wisdom
    p12def.innerText = p1s[1].defense
    p12hs1.innerText = p1s[1].skill1    
    p12hs2.innerText = p1s[1].skill2    
    p12hs3.innerText = p1s[1].skill3
    p12i.src = p1s[1].img    

    posit13.innerText = p1s[2].profession
    p13h.innerText = p1s[2].health
    p13a.innerText = p1s[2].strength
    p13d.innerText = p1s[2].dexterity
    p13w.innerText = p1s[2].wisdom
    p13def.innerText = p1s[2].defense
    p13hs1.innerText = p1s[2].skill1    
    p13hs2.innerText = p1s[2].skill2    
    p13hs3.innerText = p1s[2].skill3
    p13i.src = p1s[2].img    

    posit21.innerText = p2s[0].profession
    p21h.innerText = p2s[0].health
    p21a.innerText = p2s[0].strength
    p21d.innerText = p2s[0].dexterity
    p21w.innerText = p2s[0].wisdom
    p21def.innerText = p2s[0].defense
    p21hs1.innerText = p2s[0].skill1    
    p21hs2.innerText = p2s[0].skill2    
    p21hs3.innerText = p2s[0].skill3
    p21i.src = p2s[0].img    

    posit22.innerText = p2s[1].profession
    p22h.innerText = p2s[1].health
    p22a.innerText = p2s[1].strength
    p22d.innerText = p2s[1].dexterity
    p22w.innerText = p2s[1].wisdom
    p22def.innerText = p2s[1].defense
    p22hs1.innerText = p2s[1].skill1    
    p22hs2.innerText = p2s[1].skill2    
    p22hs3.innerText = p2s[1].skill3
    p22i.src = p2s[1].img    

    posit23.innerText = p2s[2].profession
    p23h.innerText = p2s[2].health
    p23a.innerText = p2s[2].strength
    p23d.innerText = p2s[2].dexterity
    p23w.innerText = p2s[2].wisdom
    p23def.innerText = p2s[2].defense
    p23hs1.innerText = p2s[2].skill1    
    p23hs2.innerText = p2s[2].skill2    
    p23hs3.innerText = p2s[2].skill3
    p23i.src = p2s[2].img    

    const nplayer1 = player1.filter(element => {
        return element !== '';
    });

    const nplayer2 = player2.filter(element => {
        return element !== '';
    });

    p1b1.src = nplayer1[0].img
    p1b2.src = nplayer1[1].img
    p1b3.src = nplayer1[2].img
    p1b4.src = nplayer1[3].img
    p1b5.src = nplayer1[4].img
    p1b6.src = nplayer1[5].img

    p2b1.src = nplayer2[0].img
    p2b2.src = nplayer2[1].img
    p2b3.src = nplayer2[2].img
    p2b4.src = nplayer2[3].img
    p2b5.src = nplayer2[4].img
    p2b6.src = nplayer2[5].img

    ap21.style.display = "block"
    ap22.style.display = "block"
    ap23.style.display = "block"
})

ap21.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
})
ap22.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
})
ap23.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
})
ap11.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
})
ap12.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
})
ap13.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
})

// Modal
const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const span = document.getElementsByClassName('close')[0]
btn.onclick = function() {
    modal.style.display = "block"
}
span.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none"
    }
}