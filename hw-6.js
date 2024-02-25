//1

const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++){
    if (num[i] == 10) break;
    
        console.log(num[i]);
}

//2

const nums = [1, 5, 4, 10, 0, 3];

console.log(nums.indexOf(4));

//3

const jn = [1, 3, 5, 10, 20];

console.log(jn.join(' '));

//4
const rows = 3;
const cols = 3;
const value = 1;
const multiArray = [];

for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
        row.push(value);
    }
    multiArray.push(row);
}

console.log(multiArray);

//5

const arr = [1, 1, 1];

arr.push(2, 2, 2);

console.log(arr);

//6

const arr1 = [9, 8, 7, 'a', 6, 5];

arr1.sort();

arr1.pop();

console.log(arr1);

//7

const arr2 = [9, 8, 7, 6, 5];

const check = prompt('Попробуйте угадать число');

const checkNum = parseInt(check);

if (arr2.includes(checkNum)) {
    alert('Угадал');
    
} else {
    alert('Не угадал');
}

//8

const letters = 'abcdef';

const lettersArr = letters.split('');

lettersArr.reverse();

const newLetters = lettersArr.join('');

console.log(newLetters);

//9

const array = [[1, 2, 3],[4, 5, 6]];
const flattenedArray = [].concat.apply([], array);

console.log(flattenedArray);

//10

const arr3 = [4, 6, 3, 5, 1, 2, 8, 7, 9, 10];

for (let i = 0; i < arr3.length - 1; i++) {
    let sum = arr3[i] + arr3[i + 1];
    
    console.log(sum);
}

//11

const square = [5000, 4000, 1000];

let result1 = square.map(item => (item **2));

console.log(result1);

//12

function getLengthWords(array) {
    
    const lengths = [];

    
    for (let i = 0; i < array.length; i++) {
       
        lengths.push(array[i].length);
    }

    
    return lengths;
}

const words = ['слово', '', 'слог', 'длинное предложение', 'буква'];
const lengths = getLengthWords(words);
console.log(lengths); 

//13
function filterPositive(array) {
    
    const negativeValues = array.filter(function(num) {
        
        return num < 0;
    });

    return negativeValues;
}

console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));