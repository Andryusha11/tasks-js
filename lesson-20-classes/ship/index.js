export class Vehicle {
  constructor(name, numbersOfWheels) {
    this.name = name;
    this.numbersOfWheels = numbersOfWheels;
  }

  move() {
    console.log(`${this.name} is moving`);
  }

  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, numbersOfWheels, maxSpeed) {
    super(name, numbersOfWheels);
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }
  stop() {
    super.stop();
    console.log(`${this.name} lifting anchor down`);
  }
}

const ship1 = new Ship('Aurora', 0, 2);

console.log(ship1);

ship1.move();
ship1.stop();
