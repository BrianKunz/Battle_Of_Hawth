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
    attack() {
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

