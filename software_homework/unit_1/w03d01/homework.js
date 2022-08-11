// ///////////////////////
//class Hamster
//////////////////////////
// Hamster
// attributes:

// owner - string, initially set as an empty string
// name - string, set the name from parameter in constructor method
// price - integer, set as 15
// methods:

// wheelRun() - log "squeak squeak"
// eatFood() - log "nibble nibble"
// getPrice() - return the price
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created hamster class"
// Easy Mode Make sure it works so far
//......................................................


class Hamster {
    constructor (){
        this.nameOfOwner = "none";
        this.nameofHamster = "none";
        this.price = 15;
    }

    wheelRun(){
        return `squeak squeak`;
    }

    eatFood(){
        return 'nibble nibble';
    }

    getPrice() {
        return this.price;
    }
};
//////////// Hamster Test Output //////////////
//  let Gus = new Hamster('Timmy','Gus',15);
//  console.log(Gus.eatFood());
//  console.log(Gus);
//  console.log(Gus.eatFood());

//////////////////////////////////////////////////////
// class Person
//////////////////////////////////////////////////////

// Person
// attributes:
// name - set name from parameter in constructor method
// age - initially 0
// height - initially 0
// weight - initially 0
// mood - integer starting at 0 initially
// hamsters - empty array initially
// bankAccount - initially set to 0

// methods:
// getName() - returns name
// getAge() - returns age
// getWeight() - returns weight
// greet() - logs a message with person's name
// eat() - increment weight, increment mood
// exercise() - decrement weight
// ageUp() - increment age, increment height, increment weight, decrement mood, increment bank account by 10 (birthday money)
// buyHamster(hamster) - push the hamster object onto the hamster array, increment mood by 10, decrement bankAccount by the value of the hamster (hint: use getPrice())
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created person class"
// Easy Mode Keep Going and save and run code
/////..................................................
//
///Create a Story with your Person class
// Feel free to update or add methods to automate some of these tasks.

// Instantiate a new Person named Timmy
// Age Timmy five years
// At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
// Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
// Age Timmy 9 years
// Create a hamster named "Gus"
// Set Gus's owner to the string "Timmy"
// Have Timmy "buy" Gus
// Age Timmy 15 years
// Have Timmy eat twice
// Have Timmy exercise twice
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "created timmys story" Easy Mode Keep Going Save and Run Code
/////...................................................

// class Person {
//     constructor (name, age, height, weight, mood, bankAccount){
//         this.name = name;
//         this.age = age;
//         this.height = height;
//         this.weight = weight;
//         this.mood = mood;
//         this.hamsters = [];
//         this.bankAccount = bankAccount;  
//         }

//         getName() {
//             return this.name;
//         }

//         getAge(){
//             return `Timmy is ` + this.age + ` years old!`;
//         }

//         getWeight(){
//             return this.weight;
//         }

//         greet(){
//             console.log('Hi ' + this.name + ' !');    
//         }

//         eat(num){
//             return this.name + ` is ` + this.age + ` and his mood is ` + this.mood + ` and he currently weighs ` + this.weight + `. He eats ` + num + ` times! Eating increases mood to ` + (this.mood+=num) + ` and weight to ` + (this.weight+=(num*5)) + `!`;
//         }

//         exercise(num){
//             return this.name + ` exercises ` + num + ` times! Exercise reduces weight. ` + this.name + ` now weighs `+ (this.weight-=(num*3)) + ` pounds!`;
//         }

//         ageUp(num){
//             this.weight += num*5;
//             this.mood -= num;
//             return this.name + ` has aged by ` + num + ` years to ` + (this.age+=num) + `! His bank account increases by $10 each Birthday. He now has $` + (this.bankAccount+=(num*10)) + `!`;  
//         }

//         buyHamster(hamster){
//             this.hamsters.push(hamster);
//             return this.name + ` buys ` + hamster.nameofHamster + ` for $` + hamster.getPrice() + ` and his new balance is $` + (this.bankAccount-=hamster.getPrice()) + ` and his mood is now ` + (this.mood+=10) + `!`;
//         }
// };

// let Timmy = new Person('Timmy',5,4.5,60,1,10);
// //name, age, height, weight, mood, bankAccount
// console.log(Timmy);
// console.log(Timmy.getAge());
// console.log(Timmy.eat(5));
// console.log(Timmy.exercise(5));
// console.log(Timmy.ageUp(4));
// let Gus = new Hamster();
// Gus.nameofHamster='Gus';
// console.log(Gus);
// Gus.nameOfOwner='Timmy';
// console.log(Timmy.buyHamster(Gus));
// console.log(Gus);
// console.log(Timmy.ageUp(6));
// console.log(Timmy.eat(2));
// console.log(Timmy.exercise(2));


////////////////////////////////////////////////////////////
/////Chef Make Dinners
/////////////////////////////////////////////////////////////
/// ex.
//class Dinner {
// }
// class Chef {
// }

//Chef should be a factory of Dinner
// Add a constructor to dinner that sets the string properties, appetizer, entree and dessert.
// Add a method on chef that takes three arguments and returns a new Dinner based on those arguments.
// Have the Chef create 3 dinners, log the dinners
// 🔴 Hard Mode Save & Commit your work!
// Your commit message should read something like:
// "Dinner is served" Easy Mode Keep Going Save and Run Your Code
/////......................................................................

class Dinner {
    constructor (appetizer, entree, dessert){
        this.appetizer = appetizer;
        this.entree = entree;
        this.dessert = dessert
    }
};

class Chef {
    constructor (grub) {
        this.grub = grub;
        this.dinner =[];
    }
    makeDinner(appetizer, entree, dessert){
        const newDinner = new Dinner(appetizer, entree, dessert);
        this.dinner.push(newDinner)
    }
};

const grub1 = new Chef('Chefs Menu');
grub1.makeDinner('Shrimp Cocktail', 'Lamb Chops', 'Creme Brulee')
grub1.makeDinner('Fried Calamari', 'Steak Salad', 'Apple Pie')
grub1.makeDinner('Lobster Bisque', 'Chicken Paillard', 'Chocolate Bread Pudding')
console.log(grub1)