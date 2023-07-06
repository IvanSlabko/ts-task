class Student {
    id: number;
    name: string;
    subject: FavouriteSubject;
    status: Status;
    marks: Record<string, number>
}

class RecordInstance {
    one: string;
    two: number;
}

type Smt = string;
type FavouriteSubject = string | number;
type Status = "active" | "inactive";
type StudentKeys = keyof Student;
type Name = Student["name"];
type MappedType = {
    [TProp in keyof Student]: RecordInstance
}

const obj: Student = {
    id: 1,
    name: 'name',
    subject: 'math',
    status: 'active',
    marks: {math: 10}
} 
const field: StudentKeys = "id";

function getValue<T>(obj: T, prop: keyof T) {
    return obj[prop];
}

getValue(obj, "subject");
getValue({min: 1, max: 9}, "min");

function handleEvent<T extends keyof Student>(eventName: T, handler: (ev: Student[T]) => void) {

}

handleEvent("name", ev => ev)

function recordTest(obj: Record<keyof RecordInstance, Student | string>) {

}

const recordObj = {
    one: obj,
    two: obj,
}
recordTest(recordObj);
const recordInst: RecordInstance = {
    one: 'string',
    two: 1,
}
const mt: MappedType = {
    id: recordInst,
    name: recordInst,
    subject: recordInst,
    status: recordInst,
    marks: recordInst,
}

let a = 'Hello';