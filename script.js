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
const ranger = new Fighter("Ranger", 12, 3, 9, 1, 3, "DOUBE SHOT", "POWER SHOT", "PRECISE SHOT", "https://i.imgur.com/aKAkHel.png")
const assassin = new Fighter("Assassin", 10, 2, 10, 1, 5, "BACKSTAB", "THROWING KNIVES", "DEADLY STRIKE", "https://i.imgur.com/Of4M4A0.png")
const wizard = new Fighter("Wizard", 8, 1, 3, 1, 2, "FIREBALL", "SHOCK", "HAIL", "https://i.imgur.com/AWH3C1X.png")
const dragonborn = new Fighter("Dragonborn", 10, 1, 4, 1, 3, "FIRE BREATH", "PYRE", "FIRESTORM", "https://i.imgur.com/iGmh0ja.png")
const monk = new Fighter("Monk", 12, 7, 7, 1, 8, "PRECISE STRIKE", "FLYING KICK", "TRIPLE UNARMED STRIKE", "https://i.imgur.com/5twXEfM.png")
const rogue = new Fighter("Rogue", 10, 4, 9, 1, 6, "SLEIGHT OF HAND", "TRAINED EYE", "STROKE OF LUCK", "https://i.imgur.com/04Jy4eo.png")
const knight = new Fighter("Knight", 30, 3, 3, 1, 13, "SHEILD BASH", "STRIKE DOWN", "INTIMIDATE", "https://i.imgur.com/vVPsT2g.png")

// Each side set with arrays
const player1 = [barbarian, swashbuckler, ranger, assassin, wizard, dragonborn, monk, rogue, knight]
const player2 = [barbarian, swashbuckler, ranger, assassin, wizard, dragonborn, monk, rogue, knight]

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

const f11 = document.querySelector('.p11')
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

const f12 = document.querySelector('.p12')
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

const f13 = document.querySelector('.p13')
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

const f21 = document.querySelector('.p21')
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

const f22 = document.querySelector('.p22')
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

const f23 = document.querySelector('.p23')
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

const p1l = document.querySelector('.p1list')
const p2l = document.querySelector('.p2list')

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
const tselect = document.querySelector('#btn')
const nxtrnd = document.querySelector('.nextRound')
const rst = document.querySelector('.reset')

const ap11 = document.querySelector('.p11 > .attack')
const ap12 = document.querySelector('.p12 > .attack')
const ap13 = document.querySelector('.p13 > .attack')
const ap21 = document.querySelector('.p21 > .attack')
const ap22 = document.querySelector('.p22 > .attack')
const ap23 = document.querySelector('.p23 > .attack')

const p1wins = document.querySelector('.p1win > h7 > span')
const p2wins = document.querySelector('.p2win > h7 > span')

const act = document.querySelectorAll('.active')

const p1wm = document.querySelector('.p1win > span')
const p2wm = document.querySelector('.p2win > span')

let p1w = 0
let p2w = 0



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

nxtrnd.style.display = "none"

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
        round.style.display = "block"
    }
}

function showteam1() {
    p1l.style.display = "block"
    p2l.style.display = "none"
}

function showteam2() {
    p1l.style.display = "none"
    p2l.style.display = "block"
}

function checkWinner() {
    if (p1s[0].health <= 0 && p1s[1].health <= 0 && p1s[2].health <= 0) {
        p1w = p1w + 1
        p1wm.innerText = p1w
        hidep1attack()
        hidep2attack()
        hidep1skills()
        hidep2skills()
        nxtrnd.style.display = "block"
    } else if (p2s[0].health <= 0 && p2s[1].health <= 0 && p2s[2].health <= 0) {
        p2w = p2w + 1
        p2wm.innerText = p2w
        hidep1attack()
        hidep2attack()
        hidep1skills()
        hidep2skills()
    }
}

function gameReset() {
    if(checkWinner()) {
        
    }
}

function completeReset() {
    console.log("reset")
}

function updateHealth() {
    if(posit11.classList.contains('active')) {
        p11h.innerText= p1s[0].health
    }else if(posit12.classList.contains('active')) {
        p12h.innerText = p1s[1].health
    }else if(posit13.classList.contains('active')) {
        p13h.innerText = p1s[2].health
    }else if(posit21.classList.contains('active')) {
        p21h.innerText = p2s[0].health
    }else if(posit22.classList.contains('active')) {
        p22h.innerText = p2s[1].health
    }else if(posit23.classList.contains('active')) {
        p23h.innerText = p2s[2].health
    }
}

function checkDeath() {
    if(p1s[0].health <= 0) {
        f11.style.display = "none"
    }if(p1s[1].health <= 0) {
        f12.style.display = "none"
    }if(p1s[2].health <= 0) {
        f13.style.display = "none"
    }if(p2s[0].health <= 0) {
        f21.style.display = "none"
    }if(p2s[1].health <= 0) {
        f22.style.display = "none"
    }if(p2s[2].health <= 0) {
        f23.style.display = "none"
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

function hidep1skills() {
    p11hs1.style.display = "none"
    p11hs2.style.display = "none"
    p11hs3.style.display = "none"
    p12hs1.style.display = "none"
    p12hs2.style.display = "none"
    p12hs3.style.display = "none"
    p13hs1.style.display = "none"
    p13hs2.style.display = "none"
    p13hs3.style.display = "none"
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
    checkDeath()
    checkWinner()
    gameReset()
}

function hidep2skills() {
    p21hs1.style.display = "none"
    p21hs2.style.display = "none"
    p21hs3.style.display = "none"
    p22hs1.style.display = "none"
    p22hs2.style.display = "none"
    p22hs3.style.display = "none"
    p23hs1.style.display = "none"
    p23hs2.style.display = "none"
    p23hs3.style.display = "none"
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

function p1attack() {
    ap11.style.display = "none"
    ap12.style.display = "none"
    ap13.style.display = "none"
    ap21.style.display = "block"
    ap22.style.display = "block"
    ap23.style.display = "block"
}

function p2attack() {
    ap11.style.display = "block"
    ap12.style.display = "block"
    ap13.style.display = "block"
    ap21.style.display = "none"
    ap22.style.display = "none"
    ap23.style.display = "none"
}

function removeActive() {
    if(posit11.classList.contains('active')) {
        posit11.classList.remove('active')
    }else if(posit12.classList.contains('active')) {
        posit12.classList.remove('active')
    }else if(posit13.classList.contains('active')) {
        posit13.classList.remove('active')
    }else if(posit21.classList.contains('active')) {
        posit21.classList.remove('active')
    }else if(posit22.classList.contains('active')) {
        posit22.classList.remove('active')
    }else if(posit23.classList.contains('active')) {
        posit23.classList.remove('active')
    }
}

//skills functions
function swingMore() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
    
}
function rageOn() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function cleave() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function stab() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function slice() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function weakSpot() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function doubleShot() {
    if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function powerShot() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100

    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function preciseShot() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function backstab() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function throwingKnives() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function deadlyStrike() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function fireball() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function shock() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function hail() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function fireBreath() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function pyre() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function firestorm() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function preciseStrike() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function flyingKick() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function tripleUnarmedStrike() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function sleightOfHand() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function trainedEye() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function strokeOfLuck() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function sheildBash() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function strikeDown() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}
function intimidate() {
  if(posit11.classList.contains('active')) {
        p1s[0].health -= 100
    }else if(posit12.classList.contains('active')) {
        p1s[1].health -= 100
    }else if(posit13.classList.contains('active')) {
        p1s[2].health -= 100
    }else if(posit21.classList.contains('active')) {
        p2s[0].health -= 100
    }else if(posit22.classList.contains('active')) {
        p2s[1].health -= 100
    }else if(posit23.classList.contains('active')) {
        p2s[2].health -= 100
    }
    updateHealth()
}

function p1skill1() {
    if(p1s[0].profession === "Barbarian") {
        swingMore()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Swashbuckler") {
        stab()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Ranger") {
        doubleShot()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Assassin") {
        backstab()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Wizard") {
        fireball()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Dragonborn") {
        heal()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Monk") {
        preciseStrike()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Rogue") {
        sleightOfHand()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Knight") {
        sheildBash()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Barbarian") {
        swingMore()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Swashbuckler") {
        stab()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Ranger") {
        doubleShot()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Assassin") {
        backstab()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Wizard") {
        fireball()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Dragonborn") {
        heal()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Monk") {
        preciseStrike()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Rogue") {
        sleightOfHand()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Knight") {
        sheildBash()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Barbarian") {
        swingMore()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Swashbuckler") {
        stab()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Ranger") {
        doubleShot()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Assassin") {
        backstab()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Wizard") {
        fireball()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Dragonborn") {
        heal()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Monk") {
        preciseStrike()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Rogue") {
        sleightOfHand()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Knight") {
        sheildBash()
        hidep1skills()
        p2attack()
    }
}

function p2skill1() {
    if(p2s[0].profession === "Barbarian") {
        swingMore()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Swashbuckler") {
        stab()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Ranger") {
        doubleShot()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Assassin") {
        backstab()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Wizard") {
        fireball()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Dragonborn") {
        heal()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Monk") {
        preciseStrike()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Rogue") {
        sleightOfHand()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Knight") {
        sheildBash()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Barbarian") {
        swingMore()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Swashbuckler") {
        stab()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Ranger") {
        doubleShot()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Assassin") {
        backstab()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Wizard") {
        fireball()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Dragonborn") {
        heal()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Monk") {
        preciseStrike()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Rogue") {
        sleightOfHand()
        hidep2skills()
        p1attack()
    }else if(p2s[1].profession === "Knight") {
        sheildBash()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Barbarian") {
        swingMore()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Swashbuckler") {
        stab()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Ranger") {
        doubleShot()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Assassin") {
        backstab()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Wizard") {
        fireball()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Dragonborn") {
        heal()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Monk") {
        preciseStrike()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Rogue") {
        sleightOfHand()
        hidep2skills()
        p1attack()
    }else if(p2s[2].profession === "Knight") {
        sheildBash()
        hidep2skills()
        p1attack()
    }
}

function p1skill2()
 {
    if(p1s[0].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Swashbuckler") {
        slice()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Ranger") {
        powerShot()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Assassin") {
        throwingKnives()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Wizard") {
        shock()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Dragonborn") {
        boost()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Monk") {
        flyingKick()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Rogue") {
        trainedEye()
        hidep1skills()
        p2attack()
    }else if(p1s[0].profession === "Knight") {
        strikeDown()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Swashbuckler") {
        slice()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Ranger") {
        powerShot()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Assassin") {
        throwingKnives()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Wizard") {
        shock()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Dragonborn") {
        boost()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Monk") {
        flyingKick()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Rogue") {
        trainedEye()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Knight") {
        strikeDown()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Swashbuckler") {
        slice()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Ranger") {
        powerShot()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Assassin") {
        throwingKnives()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Wizard") {
        shock()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Dragonborn") {
        boost()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Monk") {
        flyingKick()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Rogue") {
        trainedEye()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Knight") {
        strikeDown()
        hidep1skills()
        p2attack()
    }
}
    
function p2skill2() {
    if(p1s[2].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p2s[0].profession === "Swashbuckler") {
        slice()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Ranger") {
        powerShot()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Assassin") {
        throwingKnives()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Wizard") {
        shock()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Dragonborn") {
        boost()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Monk") {
        flyingKick()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Rogue") {
        trainedEye()
        hidep2skills()
        p1attack()
    }else if(p2s[0].profession === "Knight") {
        strikeDown()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Swashbuckler") {
        slice()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Ranger") {
        powerShot()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Assassin") {
        throwingKnives()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Wizard") {
        shock()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Dragonborn") {
        boost()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Monk") {
        flyingKick()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Rogue") {
        trainedEye()
        hidep1skills()
        p2attack()
    }else if(p1s[1].profession === "Knight") {
        strikeDown()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Swashbuckler") {
        slice()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Ranger") {
        powerShot()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Assassin") {
        throwingKnives()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Wizard") {
        shock()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Dragonborn") {
        boost()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Monk") {
        flyingKick()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Rogue") {
        trainedEye()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Knight") {
        strikeDown()
        hidep1skills()
        p2attack()
    }else if(p1s[2].profession === "Barbarian") {
        rageOn()
        hidep1skills()
        p2attack()
    }
}

function p1skill3() {
    if(p1s[0].profession === "Barbarian") {
        cleave()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Swashbuckler") {
        weakSpot()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Ranger") {
        preciseShot()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Assassin") {
        deadlyStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Wizard") {
        hail()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Dragonborn") {
        smite()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Monk") {
        tripleUnarmedStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[0].profession === "Rogue") {
        strokeOfLuck()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Barbarian") {
        cleave()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Swashbuckler") {
        weakSpot()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Ranger") {
        preciseShot()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Assassin") {
        deadlyStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Wizard") {
        hail()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Dragonborn") {
        smite()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Monk") {
        tripleUnarmedStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Rogue") {
        strokeOfLuck()
        hidep2skills()
        p1attack()
    }else if(p1s[1].profession === "Knight") {
        intimidate()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Barbarian") {
        cleave()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Swashbuckler") {
        weakSpot()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Ranger") {
        preciseShot()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Assassin") {
        deadlyStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Wizard") {
        hail()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Dragonborn") {
        smite()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Monk") {
        tripleUnarmedStrike()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Rogue") {
        strokeOfLuck()
        hidep2skills()
        p1attack()
    }else if(p1s[2].profession === "Knight") {
        intimidate()
        hidep2skills()
        p1attack()
    }
}
    
    function p2skill3() {
        if(p2s[0].profession === "Barbarian") {
            cleave()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Swashbuckler") {
            weakSpot()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Ranger") {
            preciseShot()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Assassin") {
            deadlyStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Wizard") {
            hail()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Dragonborn") {
            smite()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Monk") {
            tripleUnarmedStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Rogue") {
            strokeOfLuck()
            hidep1skills()
            p2attack()
        }else if(p2s[0].profession === "Knight") {
            intimidate()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Barbarian") {
            cleave()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Swashbuckler") {
            weakSpot()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Ranger") {
            preciseShot()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Assassin") {
            deadlyStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Wizard") {
            hail()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Dragonborn") {
            smite()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Monk") {
            tripleUnarmedStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Rogue") {
            strokeOfLuck()
            hidep1skills()
            p2attack()
        }else if(p2s[1].profession === "Knight") {
            intimidate()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Barbarian") {
            cleave()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Swashbuckler") {
            weakSpot()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Ranger") {
            preciseShot()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Assassin") {
            deadlyStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Wizard") {
            hail()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Dragonborn") {
            smite()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Monk") {
            tripleUnarmedStrike()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Rogue") {
            strokeOfLuck()
            hidep1skills()
            p2attack()
        }else if(p2s[2].profession === "Knight") {
            intimidate()
            hidep1skills()
            p2attack()
        }
    }
    
    //Event Listener
    
li10.addEventListener('click', () => {
    p1s.push(p1bar)
    delete player1[0]
    li10.style.display = "none"
    li20.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li11.addEventListener('click', () => {
    p1s.push(p1swa)
    delete player1[1]
    li11.style.display = "none"
    li21.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li12.addEventListener('click', () => {
    p1s.push(p1ran)
    delete player1[2]
    li12.style.display = "none"
    li22.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li13.addEventListener('click', () => {
    p1s.push(p1ass)
    delete player1[3]
    li13.style.display = "none"
    li23.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li14.addEventListener('click', () => {
    p1s.push(p1wiz)
    delete player1[4]
    li14.style.display = "none"
    li24.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li15.addEventListener('click', () => {
    p1s.push(p1hea)
    delete player1[5]
    li15.style.display = "none"
    li25.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li16.addEventListener('click', () => {
    p1s.push(p1mon)
    delete player1[6]
    li16.style.display = "none"
    li26.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li17.addEventListener('click', () => {
    p1s.push(p1rog)
    delete player1[7]
    li17.style.display = "none"
    li27.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})
li18.addEventListener('click', () => {
    p1s.push(p1kni)
    delete player1[8]
    li18.style.display = "none"
    li28.style.display = "none"
    showteam2()
    fullteam()
}, {once : true})

li20.addEventListener('click', () => {
    p2s.push(p2bar)
    delete player2[0]
    li10.style.display = "none"
    li20.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li21.addEventListener('click', () => {
    p2s.push(p2swa)
    delete player2[1]
    li11.style.display = "none"
    li21.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li22.addEventListener('click', () => {
    p2s.push(p2ran)
    delete player2[2]
    li12.style.display = "none"
    li22.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li23.addEventListener('click', () => {
    p2s.push(p2ass)
    delete player2[3]
    li13.style.display = "none"
    li23.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li24.addEventListener('click', () => {
    p2s.push(p2wiz)
    delete player2[4]
    li14.style.display = "none"
    li24.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li25.addEventListener('click', () => {
    p2s.push(p2hea)
    delete player2[5]
    li15.style.display = "none"
    li25.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li26.addEventListener('click', () => {
    p2s.push(p2mon)
    delete player2[6]
    li16.style.display = "none"
    li26.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li27.addEventListener('click', () => {
    p2s.push(p2rog)
    delete player2[7]
    li17.style.display = "none"
    li27.style.display = "none"
    showteam1()
    fullteam()
}, {once : true})
li28.addEventListener('click', () => {
    p2s.push(p2kni)
    delete player2[8]
    li18.style.display = "none"
    li28.style.display = "none"
    showteam1()
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

    p1attack()
    tselect.style.display = "none"
})

nxtrnd.addEventListener('click', () => {
    gameReset()
})

rst.addEventListener('click', () => {
    completeReset()
})

ap11.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
    posit11.classList.add('active')
})
ap12.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
    posit12.classList.add('active')
})
ap13.addEventListener('click', () => {
    hidep1attack()
    showp2skills()
    posit13.classList.add('active')
})
ap21.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
    posit21.classList.add('active')
})
ap22.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
    posit22.classList.add('active')
})
ap23.addEventListener('click', () => {
    hidep2attack()
    showp1skills()
    posit23.classList.add('active')
})

p11hs1.addEventListener('click', () => {
    p1skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p11hs2.addEventListener('click', () => {
    p1skill2()
    removeActive()
    checkDeath()
    checkWinner()
})
p11hs3.addEventListener('click', () => {
    p1skill3()
    removeActive()
    checkDeath()
    checkWinner()
})

p12hs1.addEventListener('click', () => {
    p1skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p12hs2.addEventListener('click', () => {
    p1skill2()
    removeActive()    
    checkDeath()
    checkWinner()
})
p12hs3.addEventListener('click', () => {
    p1skill3()
    removeActive()
    checkDeath()
    checkWinner()
})

p13hs1.addEventListener('click', () => {
    p1skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p13hs2.addEventListener('click', () => {
    p1skill2()
    removeActive()
    checkDeath()
    checkWinner()
})
p13hs3.addEventListener('click', () => {
    p1skill3()
    removeActive()
    checkDeath()
    checkWinner()
})

p21hs1.addEventListener('click', () => {
    p2skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p21hs2.addEventListener('click', () => {
    p2skill2()
    removeActive()
    checkDeath()
    checkWinner()
})
p21hs3.addEventListener('click', () => {
    p2skill3()
    removeActive()
    checkDeath()
    checkWinner()
})

p22hs1.addEventListener('click', () => {
    p2skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p22hs2.addEventListener('click', () => {
    p2skill2()
    removeActive()
    checkDeath()
    checkWinner()
})
p22hs3.addEventListener('click', () => {
    p2skill3()
    removeActive()
    checkDeath()
    checkWinner()
})

p23hs1.addEventListener('click', () => {
    p2skill1()
    removeActive()
    checkDeath()
    checkWinner()
})
p23hs2.addEventListener('click', () => {
    p2skill2()
    removeActive()
    checkDeath()
    checkWinner()
})
p23hs3.addEventListener('click', () => {
    p2skill3()
    removeActive()
    checkDeath()
    checkWinner()
})



// Modal
const modal = document.getElementById('myModal')
const btn = document.getElementById('btn')
const span = document.getElementsByClassName('close')[0]
btn.onclick = function() {
    modal.style.display = "block"
    showteam2()
    round.style.display = "none"
}
span.onclick = function() {
    modal.style.display = "none"
}
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "block"
    }
}