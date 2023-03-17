const Max_Fitness = 10;
const Years = 0;
const Min_Hunger = 0;

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

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;

