/*
Натуральные числа от 1 выписаны подряд. Какая цифра стоит на 2007 месте?

Пример:
Input:[1,2,3,4,5,6,7,8,9,1,0,1,1,1,2]
Output: Хотим получить цифру которая стоит на 11 месте [0]
*/
function getDigit(pos:number, n:number ){
    const array1ToN = [...Array(n).keys()].map(num => num + 1)
    const string: string = array1ToN.join('')
    let digit = string.charAt(pos-1)
    console.log(string,digit)
}

getDigit(2007,3000)