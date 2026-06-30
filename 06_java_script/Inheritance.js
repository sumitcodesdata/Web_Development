class Animal{
    constructor(name){
        this.name =name;
    }
    eat(){
        console.log(`${this.name} is Eating`);
    }
    sleep(){
        console.log(`${this.name} is sleeping`);
    }
}
class Dog extends Animal{
    constructor(name,breed){
        super(name);
        this.breed = breed;
    }
    speak(){
        console.log(`${this.name} Bark Bark ${this.breed}`);
    }
    eat(){
        console.log(`${this.name} is Drinking`);
    }
}
const dog1 = new Dog("Tommy","German shepherd");
dog1.speak();
dog1.eat();