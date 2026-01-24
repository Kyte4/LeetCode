/*
Дан массив nums, в котором можно выполнять следующую операцию любое количество раз: 

Выбрать из всех пар, пару с минимальной суммой в nums. Если таких пар несколько, выбрать крайнюю левую. 
Заменить пару на их сумму. 
Вернуть минимальное количество операций, необходимых для того, чтобы массив стал неубывающим. 

Массив называется неубывающим, если каждый его элемент больше или равен предыдущему элементу (если он существует).
2 5
2 3
3 1

Пример 1:

Входные данные: nums = [5,2,3,1] 7 5 4
Выходные данные: 2

Пояснение:
Сумма чисел в паре (3,1) минимальна и равна 4. После замены nums = [5,2,4].
Сумма чисел в паре (2,4) минимальна и равна 6. После замены nums = [5,6].
Массив nums стал неубывающим за две операции.

Пример 2:
Входные данные: nums = [1,2,1]
Выходные данные: 0

Пояснение:
Массив nums уже отсортирован
*/
let nums:number[] = [1,2,3]

function minimumPairRemoval(nums: number[]): number {
    let counter:number = 0
    
    //проверка на сортировку
    
    function isEqual(arr: number[]): boolean {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i+1]) {
                return false;
            } 
        }
        return true
    }
    
    while(!isEqual(nums)){
        counter++
        let minSum:number = 1e9 + 7;
        let el:number = 0
        for (let i = 1; i < nums.length; i++){
            if (minSum > nums[i]+nums[i-1]) {
                minSum = nums[i]+nums[i-1];
                el = i
            }
        } 
        nums.splice(el-1,2,minSum)
        console.log(nums)
    }
        
    return counter
};
console.log(minimumPairRemoval(nums))
