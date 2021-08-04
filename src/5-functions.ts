/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */

export {}; // quick fix for global variable

/**
 * 1. function declaration, expression, arrow
 * 2. optional & default parameters
 * 3. rest parameter
 * 4. conditional type with union, generic, overlods
 */

/********** 1. Basic Function  ***********/
/* Function Declaration, Expession, Arrow
 */

// function declaration
function add(x: number, y: number, z?:number): number {
    return x + y;
}
console.log(add(2, 3, 4));

// function expression

const addEx = function (x: number, y: number): number {
    return x + y;
};

// arrow function
const addArrow = (x: number, y: number): number => x + y;

// function with no return value
const hello = (name: string): void => console.log("hello " + name)

// function with callback
type Greeter = (url: string) => void;
function request(url: string, cb: Greeter){
  cb(url)
}

const callback = (url: string) => console.log(url)
request("https://umeetme.id", callback)

/********** 2. optional & default parameters  ***********/
/*
| parameters | required | default value |
| ---------- | -------- | ------------- |
| firstName  | Yes      |               |
| lastName   | Yes      |               |
| gender     | No       |               |
| languange  | No       | english       |
*/

type Contact = {
  firstName: string,
  lastName: string,
  gender?: string,
  language: string,
}

function submitContact(firstName: string, lastName: string, language = 'english', gender?: string): Contact{
  return {
    firstName,
    lastName,
    ...(gender && {gender}),
    language
  }
}

console.log(submitContact('aziz', 'dev', 'indonesia'))

/********** 3. Rest Parameter  ***********/

function fruitsCollection(item: string, ...restItems: string[]): string {
  console.log(restItems);
  return item + " " + restItems.join(" ");
}
let fruits = fruitsCollection('Apple', 'Mango', 'Avocado', 'Duren');
console.log(fruits);


/********* 4. conditional type with union ***********/
/*
  - accept parameter either string or number
  - return either string or number
  - don't use `any`
*/

//solusi 1 : union
function CT_union(param: string | number): string | number {
  return param
}

console.log(CT_union('satu'))


//solusi 2 : generic -> recomend use

//with arrow function
const CT_generic = <T>(param: T): T => {
  return param
}

//with function biasa
// function CT_generic<T>(param: T): T {
//   return param;
// }

console.log(CT_generic<string>('aziz'));

//solusi 3 : overloading -> jarang digunakan
function CT_overloading(param: string): string;
function CT_overloading(param: number): number;
function CT_overloading(param: any): any {
  return param
}

console.log(CT_overloading('aziz'))
