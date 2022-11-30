// Base class set up
class Fighter {
    constructor(profession ,health, attack, dexterity, wisdom, defense,skill1, skill2, skill3) {
        this.profession = profession
        this.health = health
        this.attack = attack
        this.dexterity = dexterity
        this.wisdom = wisdom
        this.defense = defense
        this.skill1 =skill1
        this.skill2 =skill2
        this.skill3 =skill3
    }
    attackroll() {
        const roll = Math.floor(Math.random() * 6)
        return roll
    }
}

// Generated Classes
const barbarian = new Fighter("Barbarian", 1, 1, 1, 1, 1, "Swing more","Rage On","Cleave")
const swashbuckler = new Fighter("Swashbuckler", 1, 1, 1, 1, 1, "Stab", "Slice", "Weak Spot")
const ranger = new Fighter("Ranger", 1, 1, 1, 1, 1, "Double Shot", "Split Target", "Precise Shot")
const assassin = new Fighter("Assassin", 1, 1, 1, 1, 1, "Backstab", "Throwing Knives", "Deadly Strike")
const wizard = new Fighter("Wizard", 1, 1, 1, 1, 1, "Fireball", "Shock", "Hail")
const healer = new Fighter("Healer", 1, 1, 1, 1, 1, "Heal", "Boost", "Smite")
const monk = new Fighter("Monk", 1, 1, 1, 1, 1, "Precise Attack", "Flying Kick", "Triple Unarmed Strike")
const rogue = new Fighter("Rogue", 1, 1, 1, 1, 1, "Slight of Hand", "Trained Eye", "Stroke of Luck")
const knight = new Fighter("Knight", 1, 1, 1, 1, 1, "Sheild Bash", "Strike Down", "Intimidate")

// Each side set with arrays
const player1 = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]
const player2 = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]

const player1selected = []
const player2selected = []

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

const posit11 = document.querySelector('.p11')
const p11h = document.querySelector('.p11 > .health')
const p11a = document.querySelector('.p11 > .attack')
const p11d = document.querySelector('.p11 > .dexterity')
const p11w = document.querySelector('.p11 > .wisdom')
const p11def = document.querySelector('.p11 > .defense')
const p11hs1 = document.querySelector('.p11 > .skill1')
const p11hs2 = document.querySelector('.p11 > .skill2')
const p11hs3 = document.querySelector('.p11 > .skill3')

const posit12 = document.querySelector('.p12')
const p12h = document.querySelector('.p12 > .health')
const p12a = document.querySelector('.p12 > .attack')
const p12d = document.querySelector('.p12 > .dexterity')
const p12w = document.querySelector('.p12 > .wisdom')
const p12def = document.querySelector('.p12 > .defense')
const p12hs1 = document.querySelector('.p12 > .skill1')
const p12hs2 = document.querySelector('.p12 > .skill2')
const p12hs3 = document.querySelector('.p12 > .skill3')

const posit13 = document.querySelector('.p13')
const p13h = document.querySelector('.p13 > .health')
const p13a = document.querySelector('.p13 > .attack')
const p13d = document.querySelector('.p13 > .dexterity')
const p13w = document.querySelector('.p13 > .wisdom')
const p13def = document.querySelector('.p13 > .defense')
const p13hs1 = document.querySelector('.p13 > .skill1')
const p13hs2 = document.querySelector('.p13 > .skill2')
const p13hs3 = document.querySelector('.p13 > .skill3')

const posit21 = document.querySelector('.p21')
const p21h = document.querySelector('.p21 > .health')
const p21a = document.querySelector('.p21 > .attack')
const p21d = document.querySelector('.p21 > .dexterity')
const p21w = document.querySelector('.p21 > .wisdom')
const p21def = document.querySelector('.p21 > .defense')
const p21hs1 = document.querySelector('.p21 > .skill1')
const p21hs2 = document.querySelector('.p21 > .skill2')
const p21hs3 = document.querySelector('.p21 > .skill3')

const posit22 = document.querySelector('.p22')
const p22h = document.querySelector('.p22 > .health')
const p22a = document.querySelector('.p22 > .attack')
const p22d = document.querySelector('.p22 > .dexterity')
const p22w = document.querySelector('.p22 > .wisdom')
const p22def = document.querySelector('.p22 > .defense')
const p22hs1 = document.querySelector('.p22 > .skill1')
const p22hs2 = document.querySelector('.p22 > .skill2')
const p22hs3 = document.querySelector('.p22 > .skill3')

const posit23 = document.querySelector('.p23')
const p23h = document.querySelector('.p23 > .health')
const p23a = document.querySelector('.p23 > .attack')
const p23d = document.querySelector('.p23 > .dexterity')
const p23w = document.querySelector('.p23 > .wisdom')
const p23def = document.querySelector('.p23 > .defense')
const p23hs1 = document.querySelector('.p23 > .skill1')
const p23hs2 = document.querySelector('.p23 > .skill2')
const p23hs3 = document.querySelector('.p23 > .skill3')

const p1b1 = document.querySelector('#player1bench > .b1')
const p1b2 = document.querySelector('#player1bench > .b2')
const p1b3 = document.querySelector('#player1bench > .b3')
const p1b4 = document.querySelector('#player1bench > .b4')
const p1b5 = document.querySelector('#player1bench > .b5')
const p1b6 = document.querySelector('#player1bench > .b6')

const p2b1 = document.querySelector('#player2bench > .b1')
const p2b2 = document.querySelector('#player2bench > .b2')
const p2b3 = document.querySelector('#player2bench > .b3')
const p2b4 = document.querySelector('#player2bench > .b4')
const p2b5 = document.querySelector('#player2bench > .b5')
const p2b6 = document.querySelector('#player2bench > .b6')


//functions

// function attack() {

// }



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