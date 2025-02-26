/**
 * 闭包实践示例
 */

// 1. 数据私有化示例
function createCounter() {
  let count = 0;  // 私有变量
  
  return {
    increment() {
      count++;
      return count;
    },
    decrement() {
      count--;
      return count;
    },
    getCount() {
      return count;
    }
  };
}

// 2. 函数工厂示例
function multiply(x) {
  return function(y) {
    return x * y;
  };
}

// 3. 柯里化示例
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// 4. 模块模式示例
const calculator = (function() {
  let result = 0;
  
  return {
    add(x) {
      result += x;
      return this;
    },
    subtract(x) {
      result -= x;
      return this;
    },
    multiply(x) {
      result *= x;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

// 5. 事件处理与闭包
function createHandler() {
  let count = 0;
  
  return function handler() {
    count++;
    console.log(`Handler called ${count} times`);
  };
}

// 使用示例
const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(4)); // 8

const add = curry((a, b, c) => a + b + c);
console.log(add(1)(2)(3)); // 6

calculator.add(5).multiply(2).subtract(3);
console.log(calculator.getResult()); // 7

const handler = createHandler();
handler(); // Handler called 1 times
handler(); // Handler called 2 times
