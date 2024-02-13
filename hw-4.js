//1

let h = 1;
while (h <= 2) {
    alert('Привет');
    h++;
}

//2

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//3

let e = 7;
while (e <= 22) {
    console.log(e);
    e++;
}

//4

const obj = {
    Коля: '200',
    Вася: '300',
    Петя: '400'
}

for (let key in obj) {
    console.log(`${key} - зарплата ${obj[key]}`);
}

//5

let n = 1000;
let num = 0;

while (n >= 50) {
    n/= 2;
    num++;
}

console.log(num);

//6

for(let dayNumber = 1; dayNumber <= 31; dayNumber++) {
    if (dayNumber % 7 == 5) {
        console.log(`Сегодня пятница, ${dayNumber}-е число. Необходимо подготовить отчет.`);
        continue;
    }

}