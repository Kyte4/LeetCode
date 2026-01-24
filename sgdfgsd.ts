function findMin(arr: number[]): any { 
    let minNumber = arr[0]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < minNumber) 
            { minNumber = arr[i]; } 
        } 
        return console.log(minNumber); 
    }
    findMin([1,2,3,4,65])