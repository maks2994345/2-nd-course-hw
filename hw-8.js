//1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];

console.log(people.sort((a, b) => a.age > b.age ? 1 : -1));

//2

function isPositive(num) {
    return num > 0;
}

function isMale(gen) {
    return gen.gender === 'male';
}

function filter(array, callback) {
    const resultArr = [];
    array.forEach(element => {
        if (callback(element)) {
           resultArr.push(element);
        }
        
    });
    return resultArr;
}
    
console.log(filter([3, -4, 1, 9], isPositive));

const peopleGenders = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleGenders, isMale));

//3

let timerId = setInterval (() => console.log(new Date()), 3000);

setTimeout(() => {clearInterval(timerId);
     console.log('30 секунд прошло');
     }, 30000);
     
//4

function delayForSecond(callback) {
    setTimeout(() => callback(), 1000)
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

//5

function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
				if(cb) { 	cb(); }

    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`);
}


delayForSecond(() => sayHi('Глеб'));