/*------------------------OBJECT ORIENTED PROGRAMMING-------------------*/
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year
    }
    honk(){
        return `Beep.`
    }
    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    }
}

let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk(); // "Beep."

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 4
    }
}

let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make, model, year){
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine(){
        return "VROOM!!!"
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity){
        this.vehicles = []
        this.capacity = capacity
    }
    add(vehicle){
        if(!(vehicle instanceof Vehicle)){
            return 'Only vehicles are allowed here!'
        }
        if (this.vehicles.length === this.capacity){
            return `Sorry, we're full.`
        }
        else if (vehicle instanceof Vehicle){
        this.vehicles.push(vehicle);
        return(`Vehicle Added!`)
    }}
}