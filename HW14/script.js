// const hamburger = new Hamburger(SIZE_SMALL);
// // добавка из майонеза
// hamburger.addTopping(TOPPING_MAYO);
// hamburger.addTopping(TOPPING_POTATO);

// console.log("Price with sauce: “ + hamburger.getPrice());
// console.log("Callories with sauce: “ + hamburger.getCallories());

// маленький (50 тугриков, 20 калорий)

// средний (75 тугриковб 30 каллорий)

// большой (100 тугриков, 40 калорий)

// Гамбургер может быть с одним из нескольких видов начинок:

// сыром (+ 10 тугриков, + 20 калорий)

// салатом (+ 20 тугриков, + 5 калорий)

// картофелем (+ 15 тугриков, + 10 калорий)

// посыпать приправой (+ 15 тугриков, 0 калорий)

// полить майонезом (+ 20 тугриков, + 5 калорий).

// При этом начинок можно добавить несколько или не быть совсем

// Напишите программу, расчитывающую стоимость и калорийность гамбургера. Используй ООП подход (подсказка: нужен класс Гамбургер, константы, методы для выбора опций и рассчета нужных величин).

class Hamburger {
  constructor(price, calories) {
    this.price = price;
    this.calories = calories;
  }
}
const topings = [
  new Cheese(10, 20),
  new Salad(20, 5),
  new Potato(15, 10),
  new Spices(15, 0),
  new Mayo(20, 5),
];
