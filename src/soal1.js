export function quicksortDescending(arr) {
    if (arr.every(data => typeof data !== 'number')) {
        return arr.map(element => Number(element))
    }
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x > pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x < pivot);
    // console.log({pivot});
    // console.log({left});
    // console.log({middle});
    // console.log({right});
    return [...quicksortDescending(left), ...middle, ...quicksortDescending(right)];
    // return quicksortDescending(left).concat(middle).concat(quicksortDescending(right));
}
console.log(quicksortDescending([1, 2, 4, 3, 5, 3, 2, 1]))
console.log(quicksortDescending([1, 2, 3, 4, 5]))
console.log(quicksortDescending([5, 4, 3, 2, 1]))
console.log(quicksortDescending([-2, 3, 0, -12, 5, 34]))

console.log(quicksortDescending([5]))
console.log(quicksortDescending([5, 5, 5, 5]))
console.log(quicksortDescending([]))
console.log(quicksortDescending(['1', '2', '3']))
