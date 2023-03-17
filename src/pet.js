const Max_Fitness = 10;
const Min_Fitness = 3;
const Years = 0;
const Min_Hunger = 0;
const Max_Hunger = 5;

function Pet(name) {
    this.name = name;
    this.age = Years;
    this.hunger = Min_Hunger;
    this.fitness = Max_Fitness;
};

Pet.prototype.growUp = function() {
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if ((this.fitness + 4) <= Max_Fitness ) {
      this.fitness += 4;
    } else {
      this.fitness = Max_Fitness;
    }
  };

Pet.prototype.feed = function() {
    if ((this.hunger - 3) <= Min_Hunger - 1) {
        this.hunger = Min_Hunger;
    } else {
        this.hunger -= 3;
    }
 };

//  Pet.prototype.checkUpWalk = function() {
//     if ((this.fitness - 3) <= Min_Fitness) {
//         return 'I need a walk!';
//         };
//  };

//  Pet.prototype.checkUpHunger = function() {
//     if ((this.hunger) >= Max_Hunger) {
//         return 'Im hungry!';
//         };
//  };

//  Pet.prototype.checkUpBoth = function() {
//     if ((this.hunger) >= Max_Hunger &&  (this.fitness - 3) <= Min_Fitness) {
//         return 'Im hungry AND I need a walk!';
//     };
//  };

//  Pet.prototype.checkUpFine = function() {
//     if (this.hunger <= Max_Hunger && this.hunger >= Min_Hunger + 1 
//         && this.fitness >= Min_Fitness + 1) {
//         return 'Im fine!';
//     }
// };

Pet.prototype.checkUp = function() {
    if (this.fitness <= 3 && this.hunger >= 5) {
        return "Im hungry AND I need a walk!";
    } else if (this.fitness <= 3) {
        return "I need a walk!";
    } else if (this.hunger >= 5) {
        return "Im hungry!";
    } else {
        return "Im fine!";
    }
}


 


const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

