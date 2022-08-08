// class Hamster
class Hamster {
    constructor (owner, name, price){
        this.owner = owner;
        this.name = name;
        this.price = price;
    }
    wheelRun() {
        return `squeak squeak`;
    }
    eatFood() {
        return 'nibble nibble';
    }
    getPrice() {
        this.price = 15;
        return this.price;
    }
}
let bob = new Hamster('Bob','Sunny',0);
// console.log(bob.eatFood());
console.log(bob);