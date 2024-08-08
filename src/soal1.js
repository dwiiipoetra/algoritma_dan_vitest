// 1. Buatlah fungsi dengan input array of number untuk mengurutkan angka dari terbesar ke terkecil dengan manual tanpa fungsi bawaan javascript
// Input : [1, 2, 4, 3, 5, 3, 2, 1]			Expected Output : [5, 4, 3, 3, 2, 2, 1, 1]
export function quicksortDescending(arr) {
    if (arr.length <= 1) return arr;
    let allIsNumbers = arr.every(data => typeof data === 'number' || (typeof data === 'string' && !isNaN(Number(data))))
    if (!allIsNumbers) return undefined

    arr = arr.map(data => Number(data))
    let pivot = arr[Math.floor(arr.length / 2)];
    let left = arr.filter(x => x > pivot);
    let middle = arr.filter(x => x === pivot);
    let right = arr.filter(x => x < pivot);
    return [...quicksortDescending(left), ...middle, ...quicksortDescending(right)];
    
}
console.log(quicksortDescending([1, 2, 4, 3, 5, 3, 2, 1])) //[5, 4, 3, 3, 2, 2, 1, 1]
console.log(quicksortDescending([1, 2, 3, 4, 5])) //[ 5, 4, 3, 2, 1 ]
console.log(quicksortDescending([5, 4, 3, 2, 1])) //[ 5, 4, 3, 2, 1 ]
console.log(quicksortDescending([-2, 3, 0, -12, 5, 34])) //[ 34, 5, 3, 0, -2, -12 ]

console.log(quicksortDescending([5])) //[5]
console.log(quicksortDescending([5, 5, 5, 5])) //[5, 5, 5, 5]
console.log(quicksortDescending([])) //[]
console.log(quicksortDescending(['1', '2', '3'])) //[3, 2, 1]
console.log(quicksortDescending(['1', '2', '3', 'tes'])) //undefined
console.log(quicksortDescending(['1', '2', 3, 'tes'])) //undefined
