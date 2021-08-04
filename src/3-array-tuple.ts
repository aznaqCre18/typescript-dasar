/* eslint-disable @typescript-eslint/no-unused-vars, prefer-const */
export {}; // quick fix for global variable

/**
 * Array
 * 1. Array of Number
 * 2. Array of String
 * 3. Array with Union
 * 4. Tuple
 * 5. Array of Object
 * 6. Array multi dimension
 * 7. Destructuring
 */

/**
 * 1. Array of Number
 * [1,2,3,4]
 */

//square bracket declaration
let arrNumber: number[];
arrNumber = [1, 2, 3, 4];

//generic declaration
let arrNumber2: Array<number>;
arrNumber2 = [1, 2, 3, 4];

/**
 * 2. Array of String
 * ['a', 'b', 'c']
 */

// square bracket declaration
 let arrString: string[];
 arrString = ['1', '2', '3', '4'];
 
 //generic declaration
 let arrString2: Array<string>;
 arrString2 = ['1', '2', '3', '4'];

/**
 * 3. Array with Union
 * ["hello", 1, 2, 3 ]
 */

//square bracket declaration
let arrUnion: (string | number)[];
arrUnion = ["hello", 1, 2, 3];

//generic declaration
let arrUnion2: Array<string | number>;
arrUnion2 = ["hello", 1, 2, 3];

/**
 * 4. Tuple
 * ['cordinat', 2, 4, 7]
 */

let tuple: [string, number, number, number];
tuple = ['cordinat', 2, 4, 7];

/**
 * 5. Array of Object
 * [
 *   { color: 'blue', index: 1 },
 *   { color: 'red', index: 2 },
 * ]
 */

interface ObjectColor {
    color: string,
    index: number,
}

let arrOfObj: ObjectColor[];
arrOfObj = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
]

let arrOfObj2: Array<ObjectColor>;
arrOfObj2 = [
    { color: 'blue', index: 1 },
    { color: 'red', index: 2 },
]

/**
 * 6. Array multi dimension [[]]
 * matrix = [
 *  [1, 2],
 *  [3, 4],
 * ];
 */

let arrMultiDimension: number[][];
arrMultiDimension = [
    [1, 2],
    [3, 4],
];

let arrMultiDimension2: Array<Array<number>>;
arrMultiDimension2 = [
    [21, 10],
    [31, 45],
];

/**
 * 7. Destructuring
 * let [a, b, c, d]: [number, number, number, string] = [1, 2, 3, 'four'];
 */
let arrAsal: [number, number, number, string];
arrAsal = [1, 2, 3, 'four']
let [a, b, c, d]: [number, number, number, string] = arrAsal;

