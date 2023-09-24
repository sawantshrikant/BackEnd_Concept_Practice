class person {
    constructor(name , age) {
        this.name = name;    //(name and age is property)
        this.age = age;
    }

    welcome() {
        console.log(`Hello, my name is  ${this.name} and i am ${this.age} years old.`)
    }

}


const person1 = new person("soham",30);
const person2 = new person("Rakesh",23);

person1.welcome();
person2.welcome();


class car {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    accelerate(speedincrease) {
        this.speed += speedincrease;
        console.log(`The ${this.year} ${this.make} ${this.model} is now travelling at ${this.speed} mph`)
    }

    brake(speedDecrease) {
        this.speed -= speedDecrease;
        console.log(`The ${this.year} ${this.make} ${this.model} slowed down to ${this.speed} mph.`);
      }
    
      // Method to honk the car's horn
      honk() {
        console.log(`Beep! Beep! The ${this.year} ${this.make} ${this.model} is honking its horn.`);
      }
}

// Create an instance of the Car class
const myCar = new car("Tata","nexo68",2023);

myCar.accelerate(40);
myCar.brake(15);
myCar.honk();