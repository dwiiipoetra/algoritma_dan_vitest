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
// console.log(quicksortDescending([1, 2, 4, 3, 5, 3, 2, 1])) //[5, 4, 3, 3, 2, 2, 1, 1]
// console.log(quicksortDescending([1, 2, 3, 4, 5])) //[ 5, 4, 3, 2, 1 ]
// console.log(quicksortDescending([5, 4, 3, 2, 1])) //[ 5, 4, 3, 2, 1 ]
// console.log(quicksortDescending([-2, 3, 0, -12, 5, 34])) //[ 34, 5, 3, 0, -2, -12 ]

// console.log(quicksortDescending([5])) //[5]
// console.log(quicksortDescending([5, 5, 5, 5])) //[5, 5, 5, 5]
// console.log(quicksortDescending([])) //[]
// console.log(quicksortDescending(['1', '2', '3'])) //[3, 2, 1]
// console.log(quicksortDescending(['1', '2', '3', 'tes'])) //undefined
// console.log(quicksortDescending(['1', '2', 3, 'tes'])) //undefined













export function myQuicksortDescending(arr) {
    if (arr.length <=1 ) return arr

    let pivot = arr[Math.floor(arr.length / 2)]
    let left = arr.filter(data => data > pivot)
    let middle = arr.filter(data => data === pivot)
    let right = arr.filter(data => data < pivot)
    console.log({pivot});
    console.log({left});
    console.log({middle});
    console.log({right});
    [...myQuicksortDescending(left),...middle,...myQuicksortDescending(right)]
}
myQuicksortDescending([1, 2, 4, 3, 5, 3, 2, 1]) //[5, 4, 3, 3, 2, 2, 1, 1]
// pivot = 5
// left = []
// middle = [5]
// right = [1,2,4,3,3,2,1]
// join = [5,1,2,4,3,3,2,1], (5 keluar) [1,2,4,3,3,2,1]

// pivot = 3
// left = [4]
// middle = [3,3]
// right = [1,2,2,1]
// join = [4,3,3,1,2,2,1], (4 keluar) [3,3,1,2,2,1]

// pivot = 2
// left = []
// middle = [2,2]
// right = [1,1]
// join = [2,2,1,1], (3 keluar) [2,2,1,1]

// pivot = 1
// left = []
// middle = [1,1]
// right = []
// join = [1,1], (2 keluar) []