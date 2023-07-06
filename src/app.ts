import { ExportClass } from "./exportClass";
import { exportMe } from "./exportFunc";

// 1. Implement a class hierarchy using inheritance and demonstrate method overriding and calling super methods.
class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName: string, lastName: string, private jobTitle: string) {
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    describe(): string {
        return super.describe() + ` With title ${this.jobTitle}`;
    }
}

const person: Person = new Person('Joe', 'Doe');
person.describe();
person.getFullName();
const employee: Employee = new Employee('Joe', 'Doe', 'Dev');
person.describe();
person.getFullName();
// 2. Create a TypeScript interface representing a database entity with properties such as ID, name, and description. Implement the interface in a class.
interface DbInstance {
    id: number;
    name: string;
    description: string;
}

class DbInstanceImpl implements DbInstance {
    id: number;
    name: string;
    description: string;
}

// 3. Implement a generic class for a stack data structure that supports operations like push, pop, and peek. Demonstrate type safety and usage of the stack class by implementing Generics.

class MyStack<T> {

    private storage: T[] = [];

    push(item: T): void {
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.storage.length - 1];
    }
}

const myStack = new MyStack<string>();
myStack.push('a');
myStack.push('b');
let a = [];
// 4. Use decorators to implement logging functionality for a class, where all method invocations are logged with their arguments and return values.
// function log(constructor: Function) {
    
// }

// @log
// class LogClass {

//     getSmth(msg: string) {
//         console.log(msg);
//     }
// }

// 5. Create a TypeScript module that exports multiple functions and classes. Import the module in another file and demonstrate usage of the exported entities.
function moduleTask() {
    const exporedClass = new ExportClass();
    exporedClass.a = 1;
    exportMe(exporedClass.a);
}

// 6. Use the keyof keyword to create a function that accepts an object and a key, and returns the value corresponding to the key from the object.
function getValue<T>(obj: T, prop: keyof T) {
    return obj[prop];
}

getValue({subject: 1}, "subject");

// 7. Implement an async/await function that fetches data from an API and demonstrates error handling and handling of async operations.
const call = async (url: string): Promise<void> => {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error.messsage))
}

// 8. Create a TypeScript type declaration file for an external library that lacks TypeScript support. Declare the necessary types and interfaces to enable type checking and autocompletion for the library.