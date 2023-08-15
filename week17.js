// Задание 1
// Создайте класс Worker. Класс должен содержать свойства name, surname. Создайте на его основе объект worker. Выведите в консоль созданный объект.
// Подсказка: имена классов пишем с большой буквы
console.log("***Задание 1***");
//Ваш код
class Worker {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	fullName() {
		return `${this.surname}, ${this.name}`;
	}
}

//Создаём объекта на основе класса Worker
const worker = new Worker('Имя', 'Фамилия');
//Выводим созданный объект в консоль
console.log(worker);

//Задание 2
//Добавьте в класс Worker метод fullName, который будет возвращать полное имя работника в формате "Фамилия, Имя". Создайте объект worker2 на основе класса Worker и выведите его полное имя в консоль с помощью метода fullName
console.log("***Задание 2***");
//Ваш код

//Создаём объект worker2 на основе класса Worker
const worker2 = new Worker('Имя', 'Фамилия');
//Выводим полное имя объекта worker2 в консоль с помощью метода fullName
console.log(worker2.fullName());

//Задание 3
//Создайте класс Car. Класс должен содержать свойства brand, model и year. Создайте на его основе объект car и выведите его свойства в консоль.
console.log("***Задание 3***");
//Ваш код
class Car {
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model;
		this.year = year;
	}
}
const car = new Car('Tesla', 'X', 2010)
console.log(car)
//Задание 4
//Добавьте в класс Car метод getAge, который будет возвращать возраст машины (текущий год минус год выпуска). Создайте объект car2 на основе класса Car и выведите его возраст в консоль с помощью метода getAge.
console.log("***Задание 4***");
//Ваш код

Car.prototype.getAge = function getAge() {
	const currentYear = new Date().getFullYear();
	return currentYear - this.year;
}
//Создаём объект car2 на основе класса Car
const car2 = new Car('Brand', 'Model', 2010);
//Выводим возраст объекта car2 в консоль с помощью метода getAge
console.log(car2.getAge());

//Задание 5
//Создайте класс Rectangle. Класс должен содержать свойства width и height. Создайте на его основе объект rectangle и выведите его свойства в консоль.
console.log("***Задание 5***");
//Ваш код
class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
}
const rectangle = new Rectangle(255, 500);
console.log(rectangle)
//Задание 6
//Добавьте в класс Rectangle метод getArea, который будет возвращать площадь прямоугольника (произведение ширины и высоты). Создайте объект rectangle2 на основе класса Rectangle и выведите его площадь в консоль с помощью метода getArea.
console.log("***Задание 6***");
//Ваш код
Rectangle.prototype.getArea = function getArea() {
	return this.width * this.height
}

const rectangle2 = new Rectangle(5, 10);
console.log(rectangle2.getArea());
//Задание 7
//Создайте класс Circle. Класс должен содержать свойство radius. Создайте на его основе объект circle и выведите его свойство в консоль.
console.log("***Задание 7***");
//Ваш код
class Circle {
	constructor(radius) {
		this.radius = radius;
	}
}

const circle = new Circle(55);
console.log(circle)
//Задание 8
//Добавьте в класс Circle метод calculateArea, который будет вычислять и возвращать площадь круга. Формула для расчета площади круга: площадь = радиус * радиус * 3.14. Создайте объект circle2 на основе класса Circle с радиусом 3 и выведите его площадь круга в консоль с помощью метода calculateArea.
console.log("***Задание 8***");
//Ваш код
Circle.prototype.calculateArea = function calculateArea() {
	return this.radius * this.radius * 3.14;
}

const circle2 = new Circle(3);
console.log(circle2.calculateArea());
//Задание 9
//Создайте класс Student. Класс должен содержать свойства name, age и grade. Создайте на его основе объект student и выведите его свойства в консоль.
console.log("***Задание 9***");
//Ваш код
class Student {
	constructor(name, age, grade) {
		this.name = name;
		this.age = age;
		this.grade = grade;
	}
}

const student = new Student("Ivan Ivanov", 20, 5);
console.log(student);

//Задание 10
//Добавьте в класс Student метод increaseGrade, который будет увеличивать текущую оценку на 1. Создайте объект student2 на основе класса Student, увеличьте его оценку с помощью метода increaseGrade и выведите новую оценку в консоль.
console.log("***Задание 10***");
//Ваш код
Student.prototype.increaseGrade = function increaseGrade() {
	return this.grade = this.grade + 1;
}

const student2 = new Student("Petr Petrov", 21, 2);
console.log(student2.increaseGrade());

//Задание 11
//Создайте класс Book. Класс должен содержать свойства title, author и year. Создайте на его основе объект book и выведите его свойства в консоль.
console.log("***Задание 11***");
//Ваш код
class Book {
	constructor(title, author, year) {
		this.title = title;
		this.author = author;
		this.year = year;
	}
}

const book = new Book("Мастер и Маргарита", "Михаил Булгаков", 1940);
console.log(book);

//Задание 12
//Добавьте в класс Book метод getTitleAndAuthor, который будет возвращать строку в формате "Название книги - Автор". Создайте объект book2 на основе класса Book и выведите его название и автора в консоль с помощью метода getTitleAndAuthor.
console.log("***Задание 12***");
//Ваш код
Book.prototype.getTitleAndAuthor = function getTitleAndAuthor() {
	return `${this.title}, ${this.author}`
}

const book2 = new Book("Война и мир", "Лев Николаевич Толстой", 1873);
console.log(book2.getTitleAndAuthor());

//Задание 13
//Создайте класс BankAccount. Класс должен содержать свойства accountNumber и balance. Создайте на его основе объект account и выведите его свойства в консоль.
console.log("***Задание 13***");
//Ваш код
class BankAccount1 {
	constructor(accountNumber, balance) {
		this.accountNumber = accountNumber;
		this.balance = balance;
	}
}

const account = new BankAccount1(553366, 555000);
console.log(account);

//Задание 14
//Добавьте в класс BankAccount метод deposit, который будет увеличивать баланс на заданную сумму. Создайте объект account2 на основе класса BankAccount, пополните его баланс с помощью метода deposit и выведите новый баланс в консоль.
console.log("***Задание 14***");
//Ваш код

BankAccount1.prototype.deposit = function deposit() {
	return this.balance += depositUp;
}
const account2 = new BankAccount1(996699, 500);
const depositUp = 255;
console.log(account2);
console.log(depositUp);
console.log(account2.deposit());

//Задание 15
//В класс BankAccount добавлен метод withdraw, который уменьшает баланс на заданную сумму. Если запрошенная сумма превышает текущий баланс, выведите сообщение "Недостаточно средств". Создайте объект account3 на основе класса BankAccount, попробуйте снять с него сумму, превышающую баланс, и выведите соответствующее сообщение в консоль.
console.log("***Задание 15***");
class BankAccount {
	constructor(balance) {
		this.balance = balance;
	}

	withdraw(amount) {
		if (amount <= this.balance) {
			//Уменьшите баланс на заданную сумму
			this.balance -= amount;
		} else {
			//Выводите в консоль сообщение
			console.log("Недостаточно средств")
		}
	}
}
//Создайте объект account3 на основе класса BankAccount
const account3 = new BankAccount(1000);
//Попытайтесь снять сумму, превышающую баланс
account3.withdraw(1500);

//Задание 16
//Создайте класс Animal. Класс должен содержать свойства name и sound. Создайте на его основе объект animal и выведите его свойства в консоль.
console.log("***Задание 16***");
//Ваш код
class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}
}
const animal = new Animal("Nick", "Wooof");
console.log(animal);

//Задание 17
//Добавьте в класс Animal метод makeSound, который будет выводить в консоль звук животного. Создайте объект animal2 на основе класса Animal и вызовите метод makeSound.
console.log("***Задание 17***");
//Ваш код
Animal.prototype.makeSound = function makeSound() {
	return `${this.sound}, ${this.sound}, ${this.sound}`
}

const animal2 = new Animal("Musya", "Meow");
console.log(animal2.makeSound());
//Задание 18
//Создайте класс Point. Класс должен содержать свойства x и y. Создайте на его основе объект point и выведите его свойства в консоль.
console.log("***Задание 18***");
//Ваш код
class Point18 {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
const point18 = new Point18(5, 25);
console.log(point18);

//Задание 19
//В классе Point добавлен метод getDistance, который будет возвращать расстояние от точки до начала координат (0,0). Создайте объект point2 на основе класса Point и выведите его расстояние до начала координат с помощью метода getDistance.
console.log("***Задание 19***");
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
	// Метод getDistance возвращает расстояние от точки до начала координат (0,0)
	getDistance() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

//Ваш код
const point2 = new Point(10, 15);
console.log(point2.getDistance());

//Задание 20
//Создайте класс Calculator. Класс должен содержать методы add, subtract, multiply и divide, которые будут выполнять соответствующие математические операции над двумя числами и возвращать результат. Создайте объект calculator на основе класса Calculator, вызовите каждый из методов и выведите результаты в консоль.
console.log("***Задание 20***");
//Ваш код
class Calculator {
	add(x, y) {
		return x + y;
	}

	subtract(x, y) {
		return x - y;
	}

	multiply(x, y) {
		return x * y;
	}

	divide(x, y) {
		if (y === 0) {
			console.log("Деление на ноль невозможно");
			return;
		}
		return x / y;
	}
}

const calculator = new Calculator();

const resultAdd = calculator.add(5, 3);
console.log("Результат сложения:", resultAdd);

const resultSubtract = calculator.subtract(9, 5);
console.log("Результат вычитания:", resultSubtract);

const resultMultiply = calculator.multiply(2, 4);
console.log("Результат умножения:", resultMultiply);

const resultDivide = calculator.divide(10, 2);
console.log("Результат деления:", resultDivide);

console.log("Результат деления на ноль:");
const resultDivideOnNull = calculator.divide(5, 0);
console.log(resultDivideOnNull);


//Задание 21
//Создайте класс Person. Класс должен содержать свойства name, age и city. Создайте на его основе объект person и выведите его свойства в консоль.
console.log("***Задание 21***");
//Ваш код
class Person {
	constructor(name, age, city) {
		this.name = name;
		this.age = age;
		this.city = city;
	}
}
const person = new Person("Masha", 25, "Moscow");
console.log("Имя:", person.name);
console.log("Возраст:", person.age);
console.log("Город:", person.city);

//Задание 22
//Добавьте в класс Person метод changeCity, который будет изменять значение свойства city на новое значение. Создайте объект person2 на основе класса Person, вызовите метод changeCity с аргументом "New York" и выведите новое значение свойства city в консоль.
console.log("***Задание 22***");
//Ваш код
Person.prototype.changeCity = function changeCity(newCity) {
	return this.city = newCity;
}

const person2 = new Person("Alex", 20, "Los Angeles");
console.log("Город:", person2.city)
person2.changeCity("New York");
console.log("Новый город:", person2.city)

//Задание 23
//Создайте класс Employee. Класс должен содержать свойства name, position и salary. Создайте на его основе объект employee и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект employee и вывести его свойства.
console.log("***Задание 23***");
//Ваш код
class Employee {
	constructor(name, position, salary) {
		this.name = name;
		this.position = position;
		this.salary = salary;
	}

	calculateBonus(percent) {    //Для Задания 24
		const bonus = this.salary * (percent / 100);
		this.salary += bonus;
	}
}

const employee = new Employee("Nina", "Doctor", 5000);
console.log("Имя:", employee.name);
console.log("Должность:", employee.position);
console.log("Зарплата:", employee.salary);

//Задание 24
//Добавьте в класс Employee метод calculateBonus, который будет принимать процент бонуса и увеличивать зарплату сотрудника на соответствующую сумму. Создайте объект employee2 на основе класса Employee и вызовите метод calculateBonus с процентом 10. Выведите новую зарплату сотрудника в консоль.
//Подсказка: Используйте метод call или apply, чтобы вызвать метод calculateBonus для объекта employee2 и передать процент бонуса.
console.log("***Задание 24***");
const employee2 = new Employee("Rita", "CEO", 10000);
employee2.calculateBonus(10);
console.log("Зарплата + бонус:", employee2.salary);

//Задание 25
//Создайте класс Product. Класс должен содержать свойства name, price и quantity. Создайте на его основе объект product и выведите его свойства в консоль.
//Подсказка: Используйте методы класса, чтобы создать объект product и вывести его свойства.
console.log("***Задание 25***");
//Ваш код
class Product {
	constructor(name, price, quantity) {
		this.name = name;
		this.price = price;
		this.quantity = quantity;
	}

	calculateTotalPrice() {
		const totalPrice = this.price * this.quantity;
		return totalPrice;
	}
}

const product = new Product("socks", 100, 3);
console.log("Наименование:", product.name);
console.log("Цена:", product.price);
console.log("Количество:", product.quantity);

//Задание 26
//Добавьте в класс Product метод calculateTotalPrice, который будет возвращать общую стоимость продукта (произведение цены на количество). Создайте объект product2 на основе класса Product с ценой 10 и количеством 5. Выведите общую стоимость продукта в консоль с помощью метода calculateTotalPrice.
console.log("***Задание 26***");
//Ваш код
const product2 = new Product("spoon", 5, 6);
console.log("Общая стоимость продукта:", product2.calculateTotalPrice());
//Задание 27
//Создайте класс Triangle. Класс должен содержать свойства side1, side2 и side3, которые представляют длины сторон треугольника. Создайте на его основе объект triangle и выведите его свойства в консоль.
console.log("***Задание 27***");
//Ваш код
class Triangle {
	constructor(side1, side2, side3) {
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}

	calculatePerimeter() {
		const perimeterTriangle = this.side1 + this.side2 + this.side3;
		return perimeterTriangle;
	}
}
const triangle = new Triangle(5, 10, 15);
console.log("side1:", triangle.side1);
console.log("side2:", triangle.side2);
console.log("side3:", triangle.side3);
//Задание 28
//Добавьте в класс Triangle метод calculatePerimeter, который будет возвращать периметр треугольника (сумма длин всех сторон). Создайте объект triangle2 на основе класса Triangle со сторонами 3, 4 и 5. Выведите периметр треугольника в консоль с помощью метода calculatePerimeter.
console.log("***Задание 28***");
//Ваш код
const triangle2 = new Triangle(3, 4, 5);
console.log("Периметр треугольника равен:", triangle2.calculatePerimeter());
//Задание 29
//Создайте класс Square. Класс должен содержать свойство side, представляющее длину стороны квадрата. Создайте на его основе объект square и выведите его свойство в консоль.
console.log("***Задание 29***");
//Ваш код
class Square {
	constructor(side) {
		this.side = side;
	}

	calculateArea() {
		const areaSquare = this.side ** 2;
		return areaSquare;
	}
}

const square = new Square(15);
console.log("Сторона квадрата:", square.side);
//Задание 30
//Добавьте в класс Square метод calculateArea, который будет вычислять и возвращать площадь квадрата (произведение длины стороны на саму себя). Создайте объект square2 на основе класса Square со стороной 5 и выведите его площадь квадрата в консоль с помощью метода calculateArea.
console.log("***Задание 30***");
//Ваш код
const square2 = new Square(5);
console.log("Площадь квадрата:", square2.calculateArea());