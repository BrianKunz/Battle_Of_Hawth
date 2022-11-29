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

const barbarian = new Fighter("Barbarian", 1, 1, 1, 1, 1)
const swashbuckler = new Fighter("Swashbuckler", 1, 1, 1, 1, 1)
const ranger = new Fighter("Ranger", 1, 1, 1, 1, 1)
const assassin = new Fighter("Assassin", 1, 1, 1, 1, 1)
const wizard = new Fighter("Wizard", 1, 1, 1, 1, 1)
const healer = new Fighter("Healer", 1, 1, 1, 1, 1)
const monk = new Fighter("Monk", 1, 1, 1, 1, 1)
const rogue = new Fighter("Rogue", 1, 1, 1, 1, 1)
const knight = new Fighter("Knight", 1, 1, 1, 1, 1)
