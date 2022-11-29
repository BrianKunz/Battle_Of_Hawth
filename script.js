// Base class set up
class Fighter {
    constructor(profession ,health, attack, dexterity, wisdom, defense) {
        this.profession = profession
        this.health = health
        this.attack = attack
        this.dexterity = dexterity
        this.wisdom = wisdom
        this.defense = defense
    }
    attack() {
        const roll = Math.floor(Math.random() * 6)
        return roll
    }
}

// Generated Classes
const barbarian = new Fighter("Barbarian", 1, 1, 1, 1, 1)
const swashbuckler = new Fighter("Swashbuckler", 1, 1, 1, 1, 1)
const ranger = new Fighter("Ranger", 1, 1, 1, 1, 1)
const assassin = new Fighter("Assassin", 1, 1, 1, 1, 1)
const wizard = new Fighter("Wizard", 1, 1, 1, 1, 1)
const healer = new Fighter("Healer", 1, 1, 1, 1, 1)
const monk = new Fighter("Monk", 1, 1, 1, 1, 1)
const rogue = new Fighter("Rogue", 1, 1, 1, 1, 1)
const knight = new Fighter("Knight", 1, 1, 1, 1, 1)

// Each side set with arrays
const player = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]
const computer = [barbarian, swashbuckler, ranger, assassin, wizard, healer, monk, rogue, knight]

// Easily access array items and distinguish between teams
const pbar = player[0]
const pswa = player[1]
const pran = player[2]
const pass = player[3]
const pwiz = player[4]
const phea = player[5]
const pmon = player[6]
const prog = player[7]
const pkni = player[8]

const cbar = computer[0]
const cswa = computer[1]
const cran = computer[2]
const cass = computer[3]
const cwiz = computer[4]
const chea = computer[5]
const cmon = computer[6]
const crog = computer[7]
const ckni = computer[8]

