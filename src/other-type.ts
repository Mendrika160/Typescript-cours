// other types : any, void, null, undefined, never, object, symbol
let task: any;
//  the any type is used to disable type checking

let result: unknown;
// similar to any, but more safe,

let weigth: number | null | undefined;

// to avoid error types  when we don't know the type of a variable : typeof weigth === "<type>"

if (typeof weigth === "number") {
  console.log(weigth);
}

// ARRAY

// inference type

let fruits = ["apple", "banana", "orange"]; // infer to type string[]

// TUPLES
// A tuple is a typed array with a pre-defined length and types for each index.

let ourTuple: [number, boolean, string];


// ENUM

const enum Size {Small = 3, Medium, Large};
let size: Size = Size.Large; // output 5

// FUNCTION

// function declaration

function calculSomme(a: number, b: number): number {
  return a + b;
}
// best practise should always proprely anotate our functions

// OBJECT

let person: {
  name: string;
  age: number;
  isStudent: boolean;
} = {
    name: "John",
    age: 30,
    isStudent: false
};