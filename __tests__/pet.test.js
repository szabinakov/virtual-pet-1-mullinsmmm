const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object);
    });

    it('sets the name property', () => {
        const pet = new Pet('Fido');

        expect(pet.name).toEqual('Fido');
    })

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    })

    describe('growUp', () => {
        it('increments the age by 1', () => {
          const pet = new Pet('Fido');
      
          pet.growUp();
      
          expect(pet.age).toEqual(1);
        });

        it('increases hunger by 5', () => {
            const pet = new Pet('Fido');

            pet.growUp();

            expect(pet.hunger).toEqual(5);
        })

        it('lowers fitness by 7', () => {
            const pet = new Pet('Fido');

            pet.growUp();

            expect(pet.fitness).toEqual(7);
        })
      });

      describe('walk', () => {
        it('increases fitness by 4', () => {
          const pet = new Pet('fido');
      
          pet.fitness = 4;
          pet.walk();
      
          expect(pet.fitness).toEqual(8);
        });

        it('increases fitness by to a maximum of 10', () => {
            const pet = new Pet('fido');
        
            pet.fitness = 8;
            pet.walk();
        
            expect(pet.fitness).toEqual(10);
          });
      });

    describe('feed', () => {
        it('decreases hunger by 3', () => {
            const pet = new Pet('fido');

            pet.hunger = 3;
            pet.feed();

            expect(pet.hunger).toEqual(0);
        });
    });

    describe('checkUp', () => {
        it('returns "I need a walk!" if fitness is 3 or less', () => {
            const pet = new Pet('fido');

            pet.fitness = 3;

            expect(pet.checkUp()).toBe('I need a walk!');
        });

        it('returns "Im hungry!" if fitness is 5 or more', () => {
            const pet = new Pet('fido');

            pet.hunger = 5;

            expect(pet.checkUp()).toBe('Im hungry!');
        });    

        it('returns "Im hungry AND I need a walk!" if hunger is 5 and fitness is 3', () => {
            const pet = new Pet('Fido');
    
            pet.hunger = 5;
            pet.fitness = 3;
    
            expect(pet.checkUp()).toBe('Im hungry AND I need a walk!');
        });

        it('returns "Im fine!" if hunger is above 5 and fitness is above 3', () => {
            const pet = new Pet('Fido');
    
            pet.hunger = 4;
            pet.fitness = 10;
    
            expect(pet.checkUp()).toBe('Im fine!');
        });
    });

});
