///////////////////////////////////////////////////////////////////////////////////////////
// Part 1
const temperature: number = 5;
const welcomeMessage: string = 'John Doe';
const isLoggedIn: boolean = false;
///////////////////////////////////////////////////////////////////////////////////////////
// part 2
const colors: string[] = ['red', 'black'];
const userInfo: [string, number] = ['anas', 21];
///////////////////////////////////////////////////////////////////////////////////////////
// part 3
enum Season {
  Spring,
  Summer,
  Autumn,
  Winter,
}

function logValue(_: any) {
  console.log(_);
}

function noReturn(): void {
  ///////////
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 3
function greet(message: string): string {
  return 'wash';
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 4
function createEmail(to: string, subject: string = 'No Subject') {}

function add(x: number, y: number, z?: number) {
  return z === undefined ? x + y : x + y + z;
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 5
function concatenateStrings(...name: string[]): string {
  return name.reduce((prev, cur) => prev + cur, '');
}

function maxNumber(...nums: number[]): number {
  return Math.max(...nums);
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 6
interface Vehicle {
  make: string;
  model: string;
  year?: number;
}

function createVehicle(_veh: Vehicle): Vehicle {
  return {
    make: '',
    model: '',
    year: -1,
  };
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 7
interface Person {
  firstName: string;
  lastName: string;
  age?: number; // Optional property
  email: string;
}

function updatePerson(obj: Person, params: Partial<Person>) {
  obj = { ...obj, ...params };
}

///////////////////////////////////////////////////////////////////////////////////////////
// part 8
/**
 * ! i didn't get any error here as supossed
 */

interface Circle {
  readonly centerX: number;
  readonly centerY: number;
  readonly radius: number;
}
function moveCircle(shape: Circle) {
  shape = { ...shape, centerX: shape.centerX + 13 };
  console.log(shape);
}
moveCircle({ centerX: 1, centerY: 2, radius: 3 });
///////////////////////////////////////////////////////////////////////////////////////////
// part 9
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  move(distanceInMeters?: number): void {}
}

const animal = new Dog('hhhhhhh');
animal.move();
///////////////////////////////////////////////////////////////////////////////////////////
// part 10
class _Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  public get name() {
    return this._name;
  }
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 11
function identity<T>(arg: T): T {
  return arg;
}

interface GenericArray<T> {
  __arr: Array<T>;
}

const a1 = identity(123);
const s1 = identity('anas jaidi');
///////////////////////////////////////////////////////////////////////////////////////////
// part 12
enum _Response {
  No = 0,
  Yes = 1,
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 13
enum Message {
  Success = 'SUCCESS',
  Failure = 'FAILURE',
}
///////////////////////////////////////////////////////////////////////////////////////////
// part 14
function padLeft(value: string, padding: string | number) {
  // function body
}
padLeft('wash', 'anas');
padLeft('wash', 123);
///////////////////////////////////////////////////////////////////////////////////////////
// part 15
interface BusinessPartner {
  name: string;
  credit: number;
}

interface Contact {
  email: string;
  phone: string;
}

type Customer = BusinessPartner & Contact;
function __Customer(obj: BusinessPartner) {}
__Customer(<Customer>{ credit: 12, email: '', name: '', phone: '' });
///////////////////////////////////////////////////////////////////////////////////////////
// part 16
function capitalize(str: string) {
  return str[0] >= 'a' && str[0] <= 'z'
    ? [str[0].toUpperCase(), str.substring(1)].join('')
    : str;
}
console.log(capitalize('anas jaidi'));
///////////////////////////////////////////////////////////////////////////////////////////
// part 17
// In another file
import { name } from './greeter';
import g from './greeter';
///////////////////////////////////////////////////////////////////////////////////////////
// part 18
import { Calculator } from './namespaces';

///////////////////////////////////////////////////////////////////////////////////////////
// part 19
function logged<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log(`Creating new instance of ${constructor.name}`);
    }
  };
}

@logged
class MyClass {
  constructor() {
    console.log('MyClass instantiated');
  }
}

new MyClass(); // Output: "Creating new instance of MyClass"

///////////////////////////////////////////////////////////////////////////////////////////
// part 20
function format(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
      const result = originalMethod.apply(this, args);
      if (typeof result === 'string') {
          return result.toUpperCase();
      }
      return result;
  };
  return descriptor;
}

class Greeter {
  @format
  greet(message: string): string {
      return `Hello, ${message}!`;
  }
}

const greeter = new Greeter();
console.log(greeter.greet('world'));
///////////////////////////////////////////////////////////////////////////////////////////
// part 21
interface Task {
  title: string;
  description: string;
}

function updateTodo(todo: Task, fieldsToUpdate: Partial<Task>): Task {
  return { ...todo, ...fieldsToUpdate };
}

const todo1: Readonly<Task> = {
  title: 'Delete inactive users',
  description: '...',
};
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
