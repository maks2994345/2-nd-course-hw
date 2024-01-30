1.

let a = 20;
console.log(alert(a));

2.

let create = 2007;
console.log(alert(`Год выпуска первого Iphone ${create}`));

3.

let creator = String(`Brendan`);
console.log(alert(`Имя создателя языка JavaScript: ${creator}`));

4.

let b = 10;
let c = 2;
let sum = b + c;
let difference = b - c;
let multiplication = b * c;
let division = b / c;
console.log(alert(sum, difference, multiplication, division));

5.

let d = 2;
let result = d ** 5
console.log(alert(result));

6.

let e = 9;
let f = 2;
let results = e % f;
console.log(alert(results));

7.

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

8.

let age = Number(prompt(`Сколько вам лет?`))
console.log(alert(age));

9.

const user = {
    name: `Денис`,
    age: `19`,
    isAdmin: true,
    
}
let info = prompt("Какую информацию хотите узнать о пользователе?", "age");
console.log(alert(user[info]));

10.

let userName = prompt("Введите ваше имя:")
console.log(alert(`Привет, ${userName}`));