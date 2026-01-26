class Cellphone {
  // CONSTRUCTOR - Properties lang
  constructor(brand, modelo, kulay) {
    this.brand = brand;
    this.modelo = modelo;
    this.kulay = kulay;
    this.battery = 100;
    this.nakaOn = false;
    this.messages = [];
  }
  
  // METHODS - Separate, labas ng constructor
  turnOn() {
    this.nakaOn = true;
    console.log(`${this.brand} ${this.modelo} is now ON`);
  }
  
  turnOff() {
    this.nakaOn = false;
    console.log(`${this.brand} ${this.modelo} is now OFF`);
  }
  
  sendMessage(message) {
    if (this.nakaOn) {
      this.messages.push(message);
      console.log(`Message sent: "${message}"`);
    } else {
      console.log("Error: Phone is OFF. Turn it on first!");
    }
  }
  
  useBattery(amount) {
    this.battery -= amount;
    if (this.battery < 0) this.battery = 0;
    console.log(`Battery: ${this.battery}%`);
  }
  
  charge() {
    this.battery = 100;
    console.log("Fully charged! Battery: 100%");
  }
  
  showInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Model: ${this.modelo}`);
    console.log(`Color: ${this.kulay}`);
    console.log(`Battery: ${this.battery}%`);
    console.log(`Status: ${this.nakaOn ? 'ON' : 'OFF'}`);
  }
}

// Gamitin ang class
const myPhone = new Cellphone("Samsung", "Galaxy S23", "Black");

myPhone.showInfo();
// Brand: Samsung
// Model: Galaxy S23
// Color: Black
// Battery: 100%
// Status: OFF

myPhone.turnOn();
// Samsung Galaxy S23 is now ON

myPhone.sendMessage("Hello, kumusta ka?");
// Message sent: "Hello, kumusta ka?"

myPhone.useBattery(30);
// Battery: 70%

myPhone.charge();
// Fully charged! Battery: 100%

myPhone.turnOff();
// Samsung Galaxy S23 is now OFF
