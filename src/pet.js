const Max_Fitness = 10;
const Years = 0;
const Min_Hunger = 0;


function Pet(name) {
    this.name = name;
    this.age = Years;
    this.hunger = Min_Hunger;
    this.fitness = Max_Fitness;
};

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
  this.age += 1;
  this.hunger += 5;
  this.fitness -= 3;
};

Pet.prototype.walk = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.fitness + 4) <= Max_Fitness ) {
      this.fitness += 4;
    } else {
      this.fitness = Max_Fitness;
    }
  };

Pet.prototype.feed = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
    if ((this.hunger - 3) <= Min_Hunger - 1) {
        this.hunger = Min_Hunger;
    } else {
        this.hunger -= 3;
    }
 };

Pet.prototype.checkUp = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(');
      }
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

