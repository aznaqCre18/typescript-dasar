/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

export {};
/**
 * 1. Object Literal
 * 2. Nested Object
 * 3. Nested, Object of Array
 * 4. Nested, Object of Object
 * 5. Object destructuring
 */

/**
 * 1. Object Literal
 */
/*
  {
    id: "ID-1",
    productName: "Macbook Air",
    price: 2000,
    note: ""
  }
*/

interface ObjLiteral {
  id: string,
  productName: string,
  price: number,
  note: string
}

let detailBarang: ObjLiteral;
detailBarang = {
  id: "ID-1",
  productName: "Macbook Air",
  price: 2000,
  note: ""
}

/**
 * 2. Nested Object
 */
/** */ 

interface DetailBarang {
  year: number,
  storage: number,
}

interface ListBarang {
  id: string,
  productName: string,
  price: number,
  detailbarang:  DetailBarang
}

let dataBarang: ListBarang;
dataBarang = {
  id: "ID-1",
  productName: "Pasta Gigi",
  price: 20000,
  detailbarang: {
    year: 2021,
    storage: 256
  }
}
  

/**
 * 3. Nested, Array of Object
 */
interface Address {
  street: string,
  city: string
}

interface Biodata {
  id: string,
  name: string,
  address: Array<Address>
}

let biodata: Biodata;
biodata = {
  id: "U-1",
  name: "Adi dodi",
  address: [
    {
      street : "Jln. Setapak No.2",
      city: "Jakarta"
    },
    {
      street: "Jln. Lebar sekali no 10",
      city: "Medan"
    }
  ]
}

/**
 * 4. Nested, Object of Object
 */
interface Items {
  id: string,
  name: string,
  qty: number
}

interface OrderDetail {
  idCart: string,
  dateOrdered: string,
  items: {
    [key: string] : Items
  }
}

let OrderDetail: OrderDetail;
OrderDetail = {
  idCart: "C1",
  dateOrdered: "2020-05-20",
  items: {
    p1 :{
      "id": "P-1",
      "name": "Mechanical Keyboard",
      "qty": 2
    },
    p2 :{
      "id": "P-2",
      "name": "USB Hub",
      "qty": 1
    },
  }
}

/**
 * 5. Object Destructuring
 */

/*
  let fullName = {
    firstName : "Sastra",
    lastName : "Nababan"
  }
  let {firstName, lastName} = fullName
*/

let fullName = {
  firstName : "Sastra",
  lastName : "Nababan"
}

interface Name {
  firstName: string,
  lastName: string
}

let {firstName, lastName}: Name = fullName;
