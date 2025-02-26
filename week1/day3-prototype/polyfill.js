/**
 * 手写 new 操作符
 * @param {Function} Constructor 构造函数
 * @param  {...any} args 构造函数参数
 */
function myNew(Constructor, ...args) {
  // 创建一个新对象，并将其原型指向构造函数的prototype
  const obj = Object.create(Constructor.prototype);
  
  // 执行构造函数，并将this指向新创建的对象
  const result = Constructor.apply(obj, args);
  
  // 如果构造函数返回一个对象，则返回该对象
  // 否则返回创建的新对象
  return result instanceof Object ? result : obj;
}

/**
 * 手写 instanceof 操作符
 * @param {Object} obj 要检查的对象
 * @param {Function} Constructor 构造函数
 */
function myInstanceof(obj, Constructor) {
  if (obj === null || typeof obj !== 'object') return false;
  
  let proto = Object.getPrototypeOf(obj);
  const prototype = Constructor.prototype;
  
  while (proto) {
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

/**
 * 手写 Object.create
 * @param {Object} proto 原型对象
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null');
  }
  
  function F() {}
  F.prototype = proto;
  return new F();
}

// 测试用例
function Person(name) {
  this.name = name;
}

// 测试 myNew
const person = myNew(Person, 'John');
console.log(person instanceof Person); // true
console.log(person.name); // 'John'

// 测试 myInstanceof
console.log(myInstanceof(person, Person)); // true
console.log(myInstanceof(person, Object)); // true
console.log(myInstanceof(person, Array)); // false

// 测试 myObjectCreate
const proto = { x: 1 };
const obj = myObjectCreate(proto);
console.log(obj.x); // 1
console.log(Object.getPrototypeOf(obj) === proto); // true
