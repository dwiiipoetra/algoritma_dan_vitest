import { maxSubarraySum } from '../src/soal2';
import { describe,test,expect } from 'vitest';

describe('maxSubarraySum', () => {    
    test('should return the maximum sum of a subarray with the given length', () => {
        expect(maxSubarraySum([100, 200, 300, 400], 2)).toBe(700);
        expect(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)).toBe(39);
        expect(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)).toBe(5);
    })

    test('should handle cases with large numbers', () => {
        expect(maxSubarraySum([1000, 2000, 3000, 4000, 5000], 3)).toBe(12000);
    });

    test('should handle empty array', () => {
        expect(maxSubarraySum([], 2)).toBe(undefined);
    });

    // test('should handle same elements ', () => {
    //     expect(maxSubarraySum([2,2,2,2], 4)).toBe(undefined);
    // });

    // it('should handle arrays with all negative numbers', () => {
    //     expect(maxSubarraySum([-1, -2, -3, -4, -5], 2)).toBe(-3);
    //     expect(maxSubarraySum([-10, -20, -30, -40, -50], 3)).toBe(-60);
    // });
    
    // it('should handle arrays with mixed positive and negative numbers', () => {
    //     expect(maxSubarraySum([-1, 2, 3, -4, 5, -6], 3)).toBe(4);
    //     expect(maxSubarraySum([5, -2, 3, 4, -1], 2)).toBe(7);
    // });
})