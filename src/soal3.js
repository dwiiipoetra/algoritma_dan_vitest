const inputObj1 =  {
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

const inputObj2 =  {
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

const inputObj3 =  {
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

const inputObj4 =  {
    a: "string",
    b: {
        c: true,
        d: {
            e: null
        }
    }
};

const inputObj5 =  {
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
export function sumEvenNumbers(obj) {
    let sum = 0;
  
    function helper(value) {
        if (typeof value === 'number') {
            if (value % 2 === 0) {
                sum += value;
            }
        } else if (typeof value === 'object' && value !== null) {
            for (let key in value) {
                if (value.hasOwnProperty(key)) {
                    helper(value[key]);
                }
            }
        }
    }
  
    helper(obj);
    return sum;
}
console.log(sumEvenNumbers(inputObj1));
console.log(sumEvenNumbers(inputObj2));
console.log(sumEvenNumbers(inputObj3));
console.log(sumEvenNumbers(inputObj4));
console.log(sumEvenNumbers(inputObj5));
console.log(sumEvenNumbers({}));