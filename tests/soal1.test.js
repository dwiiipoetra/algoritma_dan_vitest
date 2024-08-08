import { quicksortDescending } from '../src/soal1';
import { describe,test,expect } from 'vitest';

describe('quicksortDescending', () => {
    test('should sort array in descending order', () => {
        expect(quicksortDescending([1, 2, 4, 3, 5, 3, 2, 1])).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
        expect(quicksortDescending([1, 2, 3, 4, 5])).toEqual([5, 4, 3, 2, 1]);
        expect(quicksortDescending([5, 4, 3, 2, 1])).toEqual([5, 4, 3, 2, 1]);
        expect(quicksortDescending([-2, 3, 0, -12, 5, 34])).toEqual([ 34, 5, 3, 0, -2, -12 ]);
    });
    
    test('should handle one element array' , () => {
        expect(quicksortDescending([5])).toEqual([5]);
    })
    
    test('should handle same element array' , () => {
        expect(quicksortDescending([5, 5, 5, 5])).toEqual([5, 5, 5, 5]);
    })

    test('should handle empty array' , () => {
        expect(quicksortDescending([])).toEqual([]);
    })

    test('should handle if arrays is not an arrays of numbers' , () => {
        expect(quicksortDescending(['1', '2', '3'])).toEqual([3, 2, 1]);
        expect(quicksortDescending(['1', '2', '3', 'tes'])).toEqual(undefined);
        expect(quicksortDescending(['1', '2', 3, 'tes'])).toEqual(undefined);
    })
});