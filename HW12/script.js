function Student(name, faculty, marks /*может правильнее marks=[]?  */) {
  this.name = name;
  this.faculty = faculty;
  this.marks = marks;

  this.getAvgMark = function () {
    return this.marks.reduce((a, b) => a + b, 0) / this.marks.length;
  };

  this.getTotal = function () {
    return this.marks.reduce((a, b) => a + b, 0);
  };

  this.getMaxMark = function () {
    return this.marks.reduce((a, b) => (a > b ? a : b));
  };

  this.getMinMark = function () {
    return this.marks.reduce((a, b) => (a < b ? a : b));
  };

  this.getInfo = function () {
    return (
      `Student ${this.name} studying on ` +
      `${this.faculty} faculty and has total mark ` +
      `${this.marks.reduce((a, b) => a + b, 0)}`
    );
  };
}

const student = new Student("Taras", "Economist", [4, 6, 5, 3, 10]);

// Методы

console.log(student.getAvgMark()); // средняя оценка студента
console.log(student.getTotal()); // сумма оценок
console.log(student.getMaxMark()); // максимальная оценка
console.log(student.getMinMark()); // минимальная оценка
console.log(student.getInfo()); // информация о студенте в виде name + faculty + total;
