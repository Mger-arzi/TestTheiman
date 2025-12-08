// const prizes = [
//     "Сертификат на 1 000 ₽",
//     "Сертификат на 2 000 ₽",
//     "Сертификат на 3 000 ₽",
//     "Сертификат на 5 000 ₽",
//     "Чехол для iPhone",
//     "Беспроводная зарядка",
//     "Защитное стекло",
//     "Кабель USB-C / Lightning",
//     "Фирменный шопер",
//     "Скидка 10%",
//     "Скидка 15%",
//     "Перенос данных"
// ];

// const wheel = document.getElementById('wheel');
// const spinBtn = document.getElementById('spinBtn');
// const resultText = document.getElementById('prizeText');
// const modal = document.getElementById('modal');
// const modalPrize = document.getElementById('modalPrize');
// const closeModalBtn = document.getElementById('closeModal');

// let isSpinning = false;

// spinBtn.addEventListener('click', () => {
//     if (isSpinning) return;

//     isSpinning = true;
//     spinBtn.disabled = true;

//     // Случайный угол: 5 полных оборотов + случайный сектор
//     const extraRotations = 360 * 5;
//     const randomSector = Math.floor(Math.random() * 12);
//     const sectorAngle = 360 / 12;
//     // Цель — остановить стрелку между секторами, чтобы в центре был нужный
//     const targetAngle = randomSector * sectorAngle + sectorAngle / 2;
//     const totalAngle = extraRotations + (360 - targetAngle); // чтобы вращение заканчивалось на нужном секторе

//     wheel.style.transform = `rotate(${totalAngle}deg)`;

//     setTimeout(() => {
//         const selectedPrize = prizes[randomSector];

//         resultText.textContent = selectedPrize;
//         modalPrize.textContent = selectedPrize;
//         modal.style.display = 'flex';

//         isSpinning = false;
//         spinBtn.disabled = false;
//     }, 3500);
// });

// closeModalBtn.addEventListener('click', () => {
//     modal.style.display = 'none';
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.style.display = 'none';
//     }
// });


function fun(arr){
    return arr.filter(function(v , i){
        return arr.indexOf(v) === i
    })
}
console.log(fun([1,2,3,4,4,4])) //[1,2,3,4]
//-------------------------------------------------------------------------------------------------

// УНИКАЛЬНЫЕ ЗНАЧЕНИЯ В МАССИВЕ

function arrUnikal(arr){
    return [... new Set (arr)]
}
console.log(arrUnikal([1, 2, 2, 3, 4, 4, 5])); //[1 2 3 4 5]
//-------------------------------------------------------------------------------------------------


function findArr(arr) {
    return arr.flat(Infinity)
}
console.log(findArr([[1], [[2, 3]], [[[4]]]])) //[1,2,3,4]

function foo(st){
    return [... new Set(st)]
}
console.log(foo('streeee'))    // [s, t, r, e ]





// function Counter (){
//     const [count , setCount] = useState(0)
//     let incriment = () => setCount(count + 1 )
//     let decriment = () => setCount(count - 1 )
//     const reset = ()=> setCount(0) 

//     return (
//         <div>
//             <h2> Счетчик</h2>

//             <button onClick={decriment}>- </button>
//             <button onClick={incriment}> +</button>
//             <button onClick={reset}>Сброс</button>
//         </div>
//     )
// }


// Удаление всех повторяющихся значений в строке
// Напишите функцию, которая принимает строку и возвращает новую, в которой все дублирующиеся символы будут удалены.
// Input: String
// Output: String

//function removeDupes(str) {
//     const see = []
//     let resalt = ''
//     for(chek of str){
//         if(!see.includes(chek)){
//             see.push(chek)
//             resalt += chek
//         }
//     }
//     return resalt
//    
// }

// console.log(removeDupes('abcd')) // -> 'abcd'
// console.log(removeDupes('aabbccdd')) // -> 'abcd'
// console.log(removeDupes('abcddbca')) // -> 'abcd'
// console.log(removeDupes('abababcdcdcd')) // -> 'abcd'



// Уникальность всех символов в строке Напишите функцию, которая определяет уникальны ли все символы в строке. 
// Регистр должен учитываться: ‘a’ и ‘A’ разные символы. Input: String Output: Boolean


function isUnique(string) {
    
  let char = new Set(string)

  return char.size === string.length
    
}


 function isUnique(string) {
    if(string.length <=1 ) return true
    const sort = string.split('').sort() 
        for(let i = 1 ; i < sort.length; i++ ){
            if(sort[i] === sort[i - 1]) {
                return false
            }
        }

    return true
 }

// console.log(isUnique('abcdef')) // -> true
// console.log(isUnique('1234567')) // -> true
// console.log(isUnique('abcABC')) // -> true
// console.log(isUnique('abcadef')) // -> false

//-------------------------------------------------------------------------------------------------

function highAndLow1(numbers){
    // максимальное и минимальное число в строке чисел
    let arr = numbers.split(' ').map(Number)
    return Math.max(...arr) + ' ' + Math.min(...arr)
}
console.log(highAndLow1('1 2 3 6 7')); // 7 1


function highAndLow(arr){
    // максимальное и минимальное число в масиве
    let max = arr[0]
    let min = arr[0]

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
        if(arr[i] < min){
            min = arr[i]
        }
    }
    return max + ' ' + min
}
console.log(highAndLow([1, 2, 3, 6, 7])); // 7 1

//-------------------------------------------------------------------------------------------------


// ПЛОСКИЙ МАССИВ
function ploskiMassiv (arr) {
    let resalt = []
    for(const item of arr){
        if(Array.isArray (item)){
            resalt = resalt.concat(ploskiMassiv(item))
        }else {
            resalt.push(item)
        }
        
    }
    return resalt
}
let arr = [[1], [[2]], [[[3]]]]
console.log(ploskiMassiv(arr));

function ploskiMassiv2 (arr) {
    return arr.flat(Infinity)
}

//-------------------------------------------------------------------------------------------------
// УБРАТЬ ДУБЛИКАТЫ В СТРОКЕ
function duplicadeString (str){
    let see = []
    let resalt = ''
    for(const chek of str){
        if(!see.includes(chek)){
            see.push(chek)
            resalt += chek
        }
    } 
    return resalt
}
console.log(duplicadeString('aaaaaaabcd')) // -> 'abcd'
//-------------------------------------------------------------------------------------------------

// ПЕРЕВОРТ СТРОКИ
function reverseString(str){
    str = str.split('').reverse().join('')
    return str
}
console.log(reverseString('abcd'));
//-------------------------------------------------------------------------------------------------




// СОРТИРОВКА МАССИВА
function sortArr(arr){
    return arr.sort((a, b) => a - b)
}
//-------------------------------------------------------------------------------------------------

// СЛЛОЖИТЬ ВСЕ ЧИСЛА В МИССИВЕ 
function sumArr(arr){
    return arr.reduce((a, b) => a + b, 0)
}
console.log(sumArr([1, 2, 3, 4, 5]));
//-------------------------------------------------------------------------------------------------

// СОРТИРОВАТЬ СТРОКУ ПО ИНДЕКСАМ 
function scramble(str, arr) {
    let resalt = ''

    for(let i = 0; i < arr.length; i++){
        resalt += str[arr.indexOf(i)]
    }
    return resalt
};
console.log(scramble('abcd', [0, 3, 1, 2])); // 'adbc'

//-------------------------------------------------------------------------------------------------


// function cakes(recipe, available) {
//     let maxCakes = Infinity;

//     for (let ingredient in recipe) {
//         if (!available.hasOwnProperty(ingredient) || available[ingredient] < recipe[ingredient]) {
//             return 0;
//         } else {
//             let possibleCakes = Math.floor(available[ingredient] / recipe[ingredient]);
//             maxCakes = Math.min(maxCakes, possibleCakes);
//         }
//     }

//     return maxCakes;
  
// }
// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));

//-------------------------------------------------------------------------------------------------


// (function(context) {
// const f = () =>  console.log(this === context)
// f.call('Awesome')
// })(
// typeof window !== undefined && window, typeof global !== undefined && global , {})


const o1 = {}
console.log(o1.toString()) // [object Object]

const o2 = Object.create(null)
console.log(o2.toString()) // TypeError: o2.toString is not a function

function foo (){
for(var i=0; i<5;) {
  setTimeout(() => {
    console.log(i++)
},0)
}
}
foo()
//-------------------------------------------------------------------------------------------------


var twoSum = function(nums, target) {

// nums =[2,7,11,15]
// target =9

// вывов [2, 7]  индексы элементов которые равны target
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
    

};
//-------------------------------------------------------------------------------------------------

var isPalindrome = function(str) {

    str = str.toLowerCase()

    return str === str.split('').reverse().join('')

}
//-------------------------------------------------------------------------------------------------
var longestCommonPrefix = function(strs) {


    if(strs.length === 0){
        return ''
    }

    let prefix = strs[0]

    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(prefix) !== 0){
            prefix = prefix.substring(0, prefix.length - 1)
            if(prefix === ''){
                return ''
            }
        }
    }
    return prefix


 
};
// line: let prefix = strs[0]
// Инициализируем переменную prefix первой строкой из массива. Это предполагаемая префиксная строка, которую будем сокращать по мере проверки остальных строк.

// line: for(let i = 1; i < strs.length; i++){
// Начинаем цикл по остальным строкам массива, начиная со второй (индекс 1).

// line: while(strs[i].indexOf(prefix) !== 0){
// Пока текущая строка strs[i] не начинается с prefix (то есть префикс не совпадает с началом строки), повторяем уменьшение префикса.

// line: prefix = prefix.substring(0, prefix.length - 1)
// Укорачиваем prefix на один символ справа. Этим шагом уменьшаем предполагаемый общий префикс.

// line: if(prefix === ''){
// Если префикс стал пустой строкой, значит общего префикса вообще не существует.

//-------------------------------------------------------------------------------------------------

function factorial (num){

    if(num ===0 ){
        return 1
    }
    return num * factorial(num - 1)
}