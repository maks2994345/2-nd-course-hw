
//1.

let password = 1234567;
let check = Number(prompt('Введите пароль'))

if (check === password) {
    console.log('Пароль введен верно');

} else {
    console.log('Пароль введен не верно');
}

//2.

let c = 2;

if (c >= 0 && 10) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

//3.

let d = 7;
let e = 5;

if (d >= 100 || e >= 100) {
    console.log('Верно');

} else {
    console.log('Неверно');
}

//4.

let a = '2';
let b = '3';

alert(+a + +b);

//5.

let montNumber = 12;

if (montNumber < 1 || montNumber > 12) {
    console.log('Вы ввели некорректный месяц');
} else {
    switch (montNumber) {
        case 12:
        case 1:
        case 2:
            console.log('Зима');
            break;

        case 3:
        case 4:
        case 5:
            console.log('Весна');
            break;
    
        case 6:
        case 7:
        case 8:
            console.log('Лето');
            break;

        case 9:
        case 10:
        case 11:
            console.log('Осень');
            break;
            
        default:
            console.log('Вы ввели некорректный месяц');
    }
}

//7.

let number = Number(prompt('Пожалуйста, введите любое число'));

if (isNaN(number)) {
    alert('Вы написал не число')
} else {
    if (number % 2 === 0) {
        alert('Число четное')
    } else {
        alert('Число нечетное')
    }
}

//8.

let clientOC = 0;

switch (clientOC) {
    case 0:
        alert('Установите версию приложения для iOS по ссылке')
        break;

    case 1:
        alert('Установите версию приложения для Android по ссылке') 
        break;   

    default:
        break;
}

//9.

let clientOCC = 0;
let clientDeviceYear = 2015;

if (clientDeviceYear >= 2015) {
    switch (clientOCC) {
        case 0:
            alert('Установите версию приложения для iOS по ссылке')
            break;
    
        case 1:
            alert('Установите версию приложения для Android по ссылке') 
            break;   
    
        default:
            break;
    }

} else {
    switch (clientOCC) {
        case 0:
            alert('Установите облегченную версию приложения для iOS по ссылке')
            break;
    
        case 1:
            alert('Установите облегченную версию приложения для Android по ссылке') 
            break;   
    
        default:
            break;
    }
}
