/* eslint-disable */

export {}; // quick fix for global variable

/**
 * Object
 */

type Name = string;
let username: Name;
username = 'aziz';

interface NameUser {
    username: string,
    password: string
}

type UserName = {
    username?: string,
    password?: string
};
let Login: UserName;
Login = {
    username: "azizaqibs",
    password: "123456"
}
console.log(Login);


/**
 * Merge
 */

// type gabisa`

interface Profile {
    name: string,
    address: string,
    country: string,
    postCode: number,
}

interface Profile {
    id: number,
    age: number,
    status?: string,
}

let profileCityzen: Profile;
profileCityzen = {
    id: 1,
    name: "aziz",
    address: "depok",
    country: "Indonesia",
    age: 18,
    status: 'single',
    postCode: 16444
}

console.log(profileCityzen)

/**
 * Intersection & Union
 */
// interface gabisa

type dataEmploye = {
    id: number,
    name: string,
    jabatan: string,
    gaji: number
}

type employeTax = {
    employeId: number,
    age: number,
    tax: number
}

//intersection -> menggabungkan 2 type ,menajdi 1 tapi type yg di declare harus smua ada didalamnya
let EmployeData: dataEmploye & employeTax;
EmployeData = {
    id: 1,
    name: 'aziz',
    jabatan: 'frontend engineer',
    gaji: 5200000,
    employeId: 1,
    age: 21,
    tax: 120000
}
console.log(EmployeData)

//union -> sama menggabungkan 2 type tetapi tidak harus smua yg di type harus dipakai
let DataEmploye: dataEmploye | employeTax;

DataEmploye = {
    id: 1,
    name: 'aziz',
    jabatan: 'frontend engineer',
    gaji: 5200000
}

console.log(DataEmploye)

/**
 * Implements
 */

interface FruitData {
    name: string,
    qty?: number,
}

type AnimalData = {
    name: string,
    type: string,
}

class Fruit implements FruitData {
    name: string;
    qty?: number;

    constructor(name: string, qty?: number) {
        this.name = name;
        this.qty = qty ? qty : 0;
    }
}

const fruitClass = new Fruit('Mangga', 10);
console.log(fruitClass)

class Animal implements AnimalData {
    name: string;
    type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}

const animalClass = new Animal('Harimau', 'Mamalia');
console.log(animalClass);

/**
 * Extend
 */

 class Base {
    greet() {
      console.log("Hello, world!");
    }
  }
  
  class Derived extends Base {

    greet(name?: string) {
      if (name === undefined) {
        super.greet();
      } else {
        console.log(`Hello, ${name.toUpperCase()}`);
      }
    }
  }
  
  const d = new Derived();
  d.greet();
  d.greet("reader");
