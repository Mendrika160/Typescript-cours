// Type aliases , unions and intersections types, type Narrowing
// other types : any, never, unknown
let task: any;
//  the any type is used to disable type checking

let result: unknown;
// similar to any, but more safe,

// alias types

type Employee = {
    readonly id: number;
    name: string;
    toDoSomething: (date: Date) => void;

}
let employee: Employee = {
    id: 1,
    name: "John",
    toDoSomething: (date :Date) => {
        console.log("I'm doing something on", date);
    }
}

// Union types

function printId(id: number | string) : void { // we can pass either a number or a string
    // narrowing

    if(typeof id === 'number')
        console.log("Your id is", id);
    else
        console.log("Your id is", parseInt(id));
}

// intersection types

type IsDraggable = {
    drag: () => void;
}
type IsResizable = {
    resize: () => void;
}

type UIWidget = IsDraggable & IsResizable;

let Textbox: UIWidget = {
    drag: () => console.log("dragging"),
    resize: () => console.log("resizing")
}

// literal types

type Status =  "success" | "error" | "warning";
let newStatus : Status = "success";

type Quantity = 1 | 2 | 3 | 4 | 5;
let newQuantity : Quantity = 3;