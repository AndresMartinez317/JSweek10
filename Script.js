function Car(name) {
    this.make = name;
    this.speed = 0;
    this.accelerate = function(){
      this.speed += 10;
    };
    this.break = function(){
      this.speed -= 5;
    };
    this.describe = function(){
        return this.make +" going at  "+ this.speed + " Km/h";
    };
  }

  let car1 = new Car('mercedez');
  let car2 = new Car('Mazda');

  car1.accelerate();
  car2.accelerate();
  car1.accelerate();
  car2.break();
  car1.break();
  console.log(car1.describe());
  console.log(car2.describe());

  class CarCl {
      constructor(make) {
        this._make = make;
        this._speed = 0;
      }
    
      get speedUS() 
      {
        return this._speed/1.6;
      }
    
      set speedUS(miles) {
        this._speed = miles*1.6;
      }
      accelerate(){
        this._speed += 8;
      }
      break(){
        this._speed -= 5;
      }
      describe(){
        return this._make +" going at  "+ this._speed + " Km/h";
      }
  }

  let carl1 = new CarCl('Mazda2');
  console.log(carl1.describe());
  car1.speedUS = 10;
  console.log(carl1._make +" going at "+ car1.speedUS + "Miles/h");
  
class Electricar extends Car {
  constructor(make) {
    super();
    this.make = make;
    this.speed = 0;
    this.charge = 0;
  }
  chargebattery(chargeto){
    this.charge = chargeto;
  }
  accelerate2(){
    this.speed += 20;
    this.charge -= 1; 
  }
  read(){
    return this.make +" going at  "+ this.speed + " Km/h with a charge of "+ this.charge;
  }
}
let EV = new Electricar('Honda');
console.log(EV.read());
EV.chargebattery(50);
EV.accelerate2();
EV.accelerate2();
console.log(EV.read());


