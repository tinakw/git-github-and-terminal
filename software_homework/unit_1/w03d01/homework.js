// class Hamster
class Hamster {
    constructor (owner, name, price){
        this.nameOfOwner = owner;
        this.nameofHamster = name;
        this.price = price;
    }

    wheelRun(){
        return `squeak squeak`;
    }

    eatFood(){
        return 'nibble nibble';
    }

    getPrice() {
        this.price = 15;
        return this.price;
    }
};
//  let Gus = new Hamster('Timmy','Gus',15);
// console.log(Gus.eatFood());
//  console.log(Gus);
//  console.log(Gus.eatFood());

// class Person

class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
        this.mood = mood;
        this.hamsters = hamsters;
        this.bankAccount = bankAccount;  
        }

        getName() {
            return this.name;
        }

        getAge(){
            return this.age;
        }

        getWeight(){
            return this.weight;
        }

        greet(){
            console.log('Hi ' + this.name + ' !');    
        }

        eat(num){
            return `Timmy is ` + this.age + ` and his mood is ` + this.mood + ` and he currently weighs ` + this.weight + `. He eats ` + num + ` times! Eating increases mood to ` + (this.mood+=num) + ` and weight to ` + (this.weight+=(num*5)) + `!`;
        }

        exercise(){
            return `Exercise reduces weight. You now weigh `+ (this.weight--);
        }

        ageUp(){
            return `Age: ` + (this.age++) + ` Height: ` + (this.height++) + ` Weight: ` + (this.weight++) + ` Mood: ` + (this.mood--) + ` Bank balance : $` + (this.bankAccount+10);  
        }

        buyHamster(hamster){
        //hamster array 
        }

};

let Timmy = new Person('Timmy',5,5.5,110,1,'',10);
//name, age, height, weight, mood, hamsters, bankAccount
//mood = bummed(1) to elated(5)
console.log(Timmy.eat(5));