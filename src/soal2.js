export function maxSubarraySum(arr, n) {
    if (arr.length < n) {
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
console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([1000, 2000, 3000, 4000, 5000], 3));
console.log(maxSubarraySum([1]), 2);