const TOPPINGS = {
  cheese: { price: 15, ccal: 90 },
  salad: { price: 10, ccal: 20 },
  potato: { price: 10, ccal: 40 },
  spices: { price: 15, ccal: 0 },
  mayo: { price: 10, ccal: 85 },
  salmon: { price: 50, ccal: 65 },
  bacon: { price: 20, ccal: 30 },
};

function Burger(size) {
  this.toppings = [];
  this.properties = {
    small: { price: 50, ccal: 150 },
    medium: { price: 75, ccal: 200 },
    large: { price: 90, ccal: 400 },
  };
  const sizeProp = this.properties[size];
  this.price = sizeProp ? sizeProp.price : 0;
  this.ccal = sizeProp ? sizeProp.ccal : 0;
}

Burger.prototype.getPrice = function () {
  return this.price + this.toppings.reduce((acc, e) => acc + e.price, 0);
};

Burger.prototype.getCal = function () {
  return this.ccal + this.toppings.reduce((acc, e) => acc + e.ccal, 0);
};

Burger.prototype.addTopping = function (topping) {
  this.toppings.push(topping);
};

function CheeseBurger(size) {
  this.properties = {
    small: { price: 60, ccal: 175 },
    medium: { price: 85, ccal: 220 },
    large: { price: 100, ccal: 450 },
  };
  const sizeProp = this.properties[size];
  this.price = sizeProp ? sizeProp.price : 0;
  this.ccal = sizeProp ? sizeProp.ccal : 0;
}
CheeseBurger.prototype = new Burger();

function FishBurger(size) {
  this.properties = {
    small: { price: 85, ccal: 190 },
    medium: { price: 100, ccal: 240 },
    large: { price: 130, ccal: 470 },
  };
  const sizeProp = this.properties[size];
  this.price = sizeProp ? sizeProp.price : 0;
  this.ccal = sizeProp ? sizeProp.ccal : 0;
}
FishBurger.prototype = new Burger();

function BigMacBacon(size) {
  this.properties = {
    small: { price: 75, ccal: 185 },
    medium: { price: 90, ccal: 230 },
    large: { price: 115, ccal: 460 },
  };
  const sizeProp = this.properties[size];
  this.price = sizeProp ? sizeProp.price : 0;
  this.ccal = sizeProp ? sizeProp.ccal : 0;
}
BigMacBacon.prototype = new Burger();

const burgerOrder = new BigMacBacon("large");
burgerOrder.addTopping(TOPPINGS.cheese);
burgerOrder.addTopping(TOPPINGS.spices);
burgerOrder.addTopping(TOPPINGS.bacon);

console.log("We payed: ", burgerOrder.getPrice());
console.log("We get: ", burgerOrder.getCal());

const burgerOrder2 = new FishBurger("medium");
burgerOrder.addTopping(TOPPINGS.cheese);
burgerOrder.addTopping(TOPPINGS.spices);
burgerOrder.addTopping(TOPPINGS.salmon);

console.log("We payed: ", burgerOrder.getPrice());
console.log("We get: ", burgerOrder.getCal());
