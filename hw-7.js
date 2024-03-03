//1

let test = 'js';

console.log(test.toUpperCase());

//2

function filterStringsByPrefix(array, prefix) {
    return array.filter(string => string.toLowerCase().startsWith(prefix.toLowerCase()));
}


const array = ['Кошка', 'Кит', 'Комар', 'Носорог']
const prefix = "ко";
const filteredArray = filterStringsByPrefix(array, prefix);
console.log(filteredArray);

//3

let num = 32.58884;

console.log(Math.floor(num));

console.log(Math.ceil(num));

console.log(Math.round(num));

//4

let arr = [52, 53, 49, 77, 21, 32];


console.log(Math.max(...arr));
console.log(Math.min(...arr));

//5

function randomInt(minValue, maxValue){
    return Math.round(Math.random() * (maxValue - minValue) + minValue)
}

console.log(randomInt(1, 10));

//6

function getRandomNumbers(numbers){
    const length = Math.floor(numbers / 2);
    const nullArray = [];
    for (let i = 0; i < length; i++) {
        nullArray.push(Math.floor(Math.random() * numbers))
        
    }
    return nullArray
}

const numbers = 10;
const resultArr = getRandomNumbers(numbers);
console.log(resultArr);

//7

function wholeNumbers(number1, number2){
    return Math.round(Math.random() * (number2 - number1)) + number1;
}

let number1 = 5;
let number2 = 10;
let result = wholeNumbers(number1, number2);
console.log(result);

//8

let nowDate = new Date();
console.log(nowDate);

//9

let currentDate = new Date();
currentDate.setDate(currentDate.getDate() + 73);
console.log(currentDate);

//10

const months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
"Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];

const days = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"];

let dateNow = new Date();
let day = dateNow.getDate();
let month = dateNow.getMonth();
let year = dateNow.getFullYear();
let week = dateNow.getDay();

let fullDate = 'Дата: ' + dateNow.getDate() + " " + months[dateNow.getMonth()] + " " + dateNow.getFullYear() + " " + 'это - ' + days[dateNow.getDay()];
console.log(fullDate);

let hour = dateNow.getHours();
let min = dateNow.getMinutes();
let sec = dateNow.getSeconds();

if (min < 10) {
    min = "0" + min;
}

if (sec < 10) {
    sec = "0" + sec;
}

let fullTime = "Время: " + dateNow.getHours() + ":" + dateNow.getMinutes() + ":" + dateNow.getSeconds();
console.log(fullTime);

//11

function gameClick2(){
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert(list.join(", "));

    let firstQuestion = prompt('Чему равнялся первый элемент массива?');

    let secondQuestion = prompt('Чему равнялся последний элемент массива?')

    if (firstQuestion && secondQuestion) {
        secondQuestion = secondQuestion.toLowerCase();
        firstQuestion = firstQuestion.toLowerCase();
        
    if (firstQuestion === list[0].toLowerCase() && secondQuestion === list[list.length - 1].toLowerCase()) {
        alert('Поздравляем, вы угадали')

    } else if (firstQuestion === list[0].toLowerCase() || secondQuestion === list[list.length - 1].toLowerCase()) {
        alert('Вы были близки к победе!')

    } else {
        alert('Вы ответили неверно')
    }
    
}}
