//1

function minNum(a, b) {

    if (a < b) {
        return a;

    } else if (b < a) {
        return b; 

    } else {
        return a;
    }
}

console.log((8, 4));
console.log((6, 6));

//2

function parity(c) {

    if (c % 2 == 0) {
        return 'Число четное';

    } else {
        return 'Число нечетное';
    }
}

console.log(parity(4));
console.log(parity(7));

//3.1

function squareNumber(e) {
    let squareOfNumber = e * e;
    console.log(`Квадрат числа ${e} равняется ${squareOfNumber}`);
}

squareNumber(5);

//3.2

function square(f) {
    return f * f;
}

console.log(square(7));

//4

function question() {
    let age = Number(prompt('Сколько вам лет?'));

    if (age < 0 || isNaN(age)) {
        console.log('Вы ввели неправильное значение');

    } else if (age >= 0 && age <= 12 ){
        console.log('Привет, друг!');

    } else {
        console.log('Добро пожаловать!');
    }
}

question();

//5

function numbers(a, b) {

    if (isNaN(a) || isNaN(b)) {
        return console.log('Одно или оба значения не являются числом');

    } else {
        return a * b;
    }
}

console.log(numbers(45, 74));
console.log(numbers('3463vc', 74));

//6

function cube() {
    let n = prompt('Напишите число');
    n **= 3;

    if (isNaN(n)) {
        console.log('Переданный параметр не является числом');

    } else {
       return console.log(`n в кубе равняется ${n}`);
    }
}

cube();

//7

const pi = 3.14;

function getRectangleArea() {
    return pi * this.radius * this.radius;
}

function getRectanglePerimeter() {
    return 2 * pi * this.radius;
}

const circle1 = {
    radius: 3,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}

const circle2 = {
    radius: 7,
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());

//8

function gameClick() {
    let monthNum = Number(prompt('Введите номер месяца'));
    
    if (isNaN(monthNum) || monthNum <= 0 || monthNum > 12) {
        console.log('Вы ввели некорректные данные');

    } else if (monthNum >= 12 || monthNum <= 2) {
        console.log('Зима');

    } else if (monthNum >= 3 && monthNum <= 5) {
        console.log('Весна');

    } else if (monthNum >= 6 && monthNum <= 8) {
        console.log('Лето');

    } else if (monthNum >= 9 && monthNum <= 11) {
        console.log('Осень');
    }
}
