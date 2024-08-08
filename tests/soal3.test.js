import { sumEvenNumbers } from "../src/soal3";
import { describe,test,expect } from 'vitest';

describe('sumEvenNumbers', () => {
    test('should return the sum of all even numbers in a nested object', () => {
        const inputObj =  {
            outer: 2,
            obj: {
                inner: 2,
                otherObj: {
                    superInner: 2,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };
        expect(sumEvenNumbers(inputObj)).toBe(6);
    });

    test('should return 0 when there are no even numbers', () => {
        const inputObj =  {
            outer: 1,
            obj: {
                inner: 3,
                otherObj: {
                    superInner: 5,
                    notANumber: true,
                    alsoNotANumber: "yup"
                }
            }
        };
        expect(sumEvenNumbers(inputObj)).toBe(0);
    });

    test('should handle nested objects with mixed types', () => {
        const inputObj =  {
            a: 1,
            b: {
                c: 4,
                d: {
                    e: 3,
                    f: 8
                }
            },
            g: 2
        };
        expect(sumEvenNumbers(inputObj)).toBe(14); // 4 + 8 + 2 = 14
    });

    test('should handle objects with no numbers', () => {
        const inputObj =  {
            a: "string",
            b: {
                c: true,
                d: {
                    e: null
                }
            }
        };
        expect(sumEvenNumbers(inputObj)).toBe(0);
    });

    test('should handle deeply nested objects', () => {
        const inputObj =  {
            a: {
                b: {
                    c: {
                        d: {
                            e: 6,
                            f: {
                                g: 8
                            }
                        }
                    }
                }
            }
        };
        expect(sumEvenNumbers(inputObj)).toBe(14); // 6 + 8 = 14
    });

    test('should handle empty object', () => {
        const inputObj =  {};
        expect(sumEvenNumbers(inputObj)).toBe(0);
    });
})