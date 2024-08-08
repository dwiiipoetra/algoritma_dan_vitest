// 2. Buatlah fungsi dengan input array of number dan number untuk menemukan jumlah maksimum subarray dengan panjang angka yang dimasukan ke fungsi
// Input : ([100, 200, 300, 400], 2)				Expected Output : 700 		// didapatkan dari 300 + 400
// Input : ([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)		Expected Output : 39 		// didapatkan dari 4 + 2 + 10 + 23
// Input : ([-3, 4, 0, -2, 6, -1], 2)				Expected Output : 5 		// didapatkan dari 6 + -1
export function maxSubarraySum(arr, n) {
    if (arr.length < n || n <= 0) {
        // throw new Error("Array length must be greater than or equal to the subarray length");
        return undefined
    }

    let maxSum = 0;
    let windowSum = 0;

    for (let i = 0; i < n; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    for (let i = n; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - n];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum || undefined;
}
console.log(maxSubarraySum([100, 200, 300, 400], 2)); //700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); //39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); //5

console.log(maxSubarraySum([1000, 2000, 3000, 4000, 5000], 3)); //12000
console.log(maxSubarraySum([], 1)); //undefined
console.log(maxSubarraySum([2, 2, 2, 2], 4)); //8
console.log(maxSubarraySum([-10, -20, -30, -40, -50], 3)); //-60
console.log(maxSubarraySum([5, -2, 3, 4, -1], 2)); //7