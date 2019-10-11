/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
//*********YESTERDAY'S CODE COMMENTED OUT!!!!*********//



// function GameObject(obj) {
//     this.createdAt = obj.createdAt;
//     this.name = obj.name;
//     this.dimension = obj.dimension;
// }

class GameObject {
    constructor(obj) {
        this.createdAt = obj.createdAt;
        this.name = obj.name;
        this.dimension = obj.dimension;
    }

    // GameObject.prototype.destroy = function() {
    //     return /*${this.name}*/ ` has been removed from the game!`
    // }

    destroy() {
        return ` has been removed from the game!`
    }
}

//*****Character Stats*****//

// function CharacterStats(stats) {
//     GameObject.call(this, stats);
//     this.health = stats.health;
// }

class CharacterStats extends GameObject {
    constructor(stats) {
            super(stats);
            this.health = stats.health;
        }
        // CharacterStats.prototype = Object.create(GameObject.prototype);

    // CharacterStats.prototype.takeDamage = function() {
    //     if (this.health <= 15) {
    //         return (this.name) + GameObject.prototype.destroy();
    //     } else {
    //         return `${this.name} took damage!!`
    //     }
    // }

    takeDamage() {
        if (this.health <= 15) {
            return (this.name) + GameObject.prototype.destroy();
        } else {
            return `${this.name} took damage!!`
        }
    }

}

//*****Humanoid*****//


// function Humanoid(player) {
//     CharacterStats.call(this, player);
//     this.createdAt = player.createdAt;
//     this.team = player.team;
//     this.weapons = player.weapons;
//     this.language = player.language;
// }


class Humanoid extends CharacterStats {
    constructor(player) {
            super(player);
            this.createdAt = player.createdAt;
            this.team = player.team;
            this.weapons = player.weapons;
            this.language = player.language;
        }
        // Humanoid.prototype = Object.create(GameObject.prototype);

    // Humanoid.prototype.greet = function() {
    //     return `${this.name} offers a greeting in ${this.language}`
    // }

    // Humanoid.prototype.fight = CharacterStats.prototype.takeDamage;
    greet() {
        return `${this.name} offers a greeting in ${this.language}`
    }

}


//*****Objects*****//

const mage = new Humanoid({
    createdAt: new Date(),
    dimension: {
        length: 2,
        width: 1,
        height: 1,
    },
    health: 25,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});
const swordsman = new Humanoid({
    createdAt: new Date(),
    dimension: {
        length: 2,
        width: 2,
        height: 2,
    },
    health: 15,
    name: "Sir Mustachio",
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});
const archer = new Humanoid({
    createdAt: new Date(),
    dimension: {
        length: 1,
        width: 2,
        height: 4,
    },
    health: 30,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});


console.log(mage.createdAt); // Today's date
console.log(archer.dimension); // { length: 1, width: 2, height: 4 }
console.log(swordsman.health); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.takeDamage()); // Sir Mustachio was removed from the game.