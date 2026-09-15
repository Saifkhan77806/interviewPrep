# JavaScript Interview Preparation: Easy → Advanced 🚀

Great! Let's focus exclusively on **JavaScript**, from fundamentals to advanced interview-level concepts.

Our goal is to prepare you for JavaScript interviews at **Meta, Anthropic, Amazon, Netflix, Google, OpenAI, and product startups**, especially for your full-stack engineering background.

Since your resume includes JavaScript, TypeScript, React, Angular, Next.js, and Node.js, we'll build a strong JavaScript foundation before moving into framework-specific questions. 

We'll study JavaScript in a structured way:

> **Understand → Visualize → Write Code → Solve Problems → Interview Questions → Advanced Follow-ups**

---

# 1. Complete JavaScript Interview Roadmap

## Level 1 — JavaScript Fundamentals

**Goal:** Understand how JavaScript works and write clean, reliable code.

### Topics

1. JavaScript introduction and execution
2. Variables: `var`, `let`, `const`
3. Primitive and reference data types
4. Type coercion
5. `==` vs `===`
6. Truthy and falsy values
7. Operators
8. Conditional statements
9. Loops
10. Functions
11. Function expressions
12. Arrow functions
13. Default parameters
14. Rest and spread operators
15. Template literals
16. Destructuring
17. Optional chaining
18. Nullish coalescing

### Practice questions

* What is the difference between `var`, `let`, and `const`?
* What are JavaScript's primitive data types?
* What is the output of `[] == false`?
* What is the difference between `null` and `undefined`?
* What is the difference between rest and spread?
* What happens when a variable is declared but not initialized?

---

## Level 2 — Arrays, Objects, and Built-in Methods

**Goal:** Become comfortable manipulating data, a daily requirement in frontend and backend development.

### Arrays

* `map()`
* `filter()`
* `reduce()`
* `forEach()`
* `find()`
* `findIndex()`
* `some()`
* `every()`
* `includes()`
* `sort()`
* `slice()`
* `splice()`
* `flat()`
* `flatMap()`

### Objects

* Object creation
* Property access
* Computed properties
* Object destructuring
* `Object.keys()`
* `Object.values()`
* `Object.entries()`
* `Object.assign()`
* Spread syntax
* Shallow copy versus deep copy

### Map, Set, WeakMap, WeakSet

* When to use `Map` instead of an object
* Duplicate removal
* Frequency counting
* Object keys and equality
* Memory-related use cases

### Practice problems

1. Flatten a nested array.
2. Group objects by a property.
3. Remove duplicate objects.
4. Implement your own `map()`.
5. Implement your own `filter()`.
6. Implement your own `reduce()`.
7. Sort an array of objects.
8. Count the frequency of each element.

---

## Level 3 — Functions, Scope, and Closures

**This is one of the most important JavaScript interview sections.**

### Topics

1. Global scope
2. Function scope
3. Block scope
4. Lexical scope
5. Scope chain
6. Hoisting
7. Temporal Dead Zone
8. Closures
9. Higher-order functions
10. Callback functions
11. IIFE
12. Function declarations versus expressions
13. `this`
14. `call()`
15. `apply()`
16. `bind()`

### Example: Closure

```javascript
function counter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const increment = counter();

console.log(increment()); // 1
console.log(increment()); // 2
console.log(increment()); // 3
```

### Interview questions

* What is a closure?
* Where are closures useful?
* How does a closure retain access to variables?
* What is lexical scoping?
* What is the difference between scope and context?
* What is the difference between `call`, `apply`, and `bind`?
* Can closures cause memory leaks?

---

## Level 4 — Asynchronous JavaScript

**Critical for React, Angular, Node.js, and full-stack interviews.**

### Topics

1. Synchronous versus asynchronous execution
2. Call stack
3. Web APIs and runtime APIs
4. Callback queue
5. Microtask queue
6. Macrotask queue
7. Event loop
8. `setTimeout`
9. `setInterval`
10. Promises
11. Promise states
12. Promise chaining
13. `async/await`
14. Error handling
15. `Promise.all()`
16. `Promise.allSettled()`
17. `Promise.race()`
18. `Promise.any()`

### Essential interview question

What is the output?

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Expected output:

```text
A
D
C
B
```

You must be able to explain the complete execution order.

### Advanced asynchronous questions

* What happens when an `async` function encounters `await`?
* How do you handle multiple API requests?
* How do you cancel a request?
* What is the difference between concurrency and parallelism?
* How do you prevent race conditions?
* How do you implement retry logic?
* How do you limit concurrent requests?

---

## Level 5 — Advanced Objects and Prototypes

### Topics

1. Objects and references
2. Shallow copy
3. Deep copy
4. Prototypes
5. Prototype chain
6. Constructor functions
7. `new` keyword
8. Classes
9. Inheritance
10. Getters and setters
11. Property descriptors
12. Enumerability
13. `Object.freeze()`
14. `Object.seal()`
15. `Object.create()`

### Interview questions

* How does JavaScript inheritance work?
* What is the prototype chain?
* What happens when you use `new`?
* What is the difference between `Object.create()` and a class?
* What is the difference between shallow and deep cloning?
* Why does modifying a nested object sometimes modify the original object?

---

## Level 6 — Advanced JavaScript Internals

### Topics

1. Execution contexts
2. Global execution context
3. Function execution context
4. Lexical environments
5. Environment records
6. Closures and memory
7. Garbage collection
8. Event loop internals
9. Task scheduling
10. JavaScript engine basics
11. JIT compilation concepts
12. Strict mode
13. Modules
14. ES modules versus CommonJS
15. Dynamic imports

### Interview questions

* How does JavaScript execute code?
* What is an execution context?
* How does garbage collection work conceptually?
* What causes memory leaks?
* What is the difference between CommonJS and ES modules?
* What is tree shaking?
* Why are ES modules statically analyzable?

---

## Level 7 — Advanced Coding and Polyfills

We'll implement important JavaScript features ourselves.

### Polyfills

1. `Array.prototype.map`
2. `Array.prototype.filter`
3. `Array.prototype.reduce`
4. `Array.prototype.forEach`
5. `Array.prototype.bind`
6. `Promise.all`
7. `Promise.allSettled`
8. `Promise.race`
9. `Promise.any`

### Utility implementations

1. Debounce
2. Throttle
3. Memoization
4. Currying
5. Function composition
6. Deep clone
7. Deep equality
8. Event emitter
9. LRU cache
10. Retry with exponential backoff
11. Concurrency limiter
12. Cancellable asynchronous operation

These are especially useful for advanced frontend and full-stack interviews.

---

# 2. Three-Day JavaScript Sprint

Because you initially wanted intensive preparation, here's how we can structure the first three days.

| Day       | Focus                                                                  | Outcome                            |
| --------- | ---------------------------------------------------------------------- | ---------------------------------- |
| **Day 1** | Fundamentals, arrays, objects, functions, scope, closures              | Strong core JavaScript             |
| **Day 2** | Event loop, promises, async/await, prototypes, `this`                  | Advanced language understanding    |
| **Day 3** | Polyfills, debounce, throttle, memoization, coding and mock interviews | Interview implementation readiness |

This is a **high-intensity introduction**, not mastery of every advanced concept. We'll continue practicing after the three days.

---

# 3. How We'll Practice

For each topic, I'll provide:

### A. Concept explanation

Simple explanation first, then interview-level depth.

### B. Code examples

We'll use **JavaScript first**, then TypeScript where appropriate.

### C. Output-based questions

You predict the output before running the code.

### D. Coding challenges

Easy → Medium → Hard.

### E. Interview questions

I'll ask questions as an interviewer.

### F. Follow-up questions

We'll explore edge cases and advanced variations.

### G. LeetCode practice

We'll use official LeetCode problem links wherever a problem maps naturally to an algorithmic pattern.

For JavaScript-specific language exercises, we'll also use coding tasks and polyfill implementations because LeetCode alone does not cover the entire JavaScript language.

---

# 4. Let's Start — JavaScript Fundamentals

## Topic 1: `var`, `let`, and `const`

These are the three traditional ways to declare variables in JavaScript.

### `var`

```javascript
var age = 25;

var age = 30; // Allowed

console.log(age); // 30
```

`var` is function-scoped and allows redeclaration.

### `let`

```javascript
let age = 25;

age = 30; // Allowed

// let age = 40; // SyntaxError in the same scope
```

`let` is block-scoped and allows reassignment.

### `const`

```javascript
const age = 25;

// age = 30; // TypeError
```

`const` is block-scoped and does not allow reassignment of the binding.

However:

```javascript
const user = {
  name: "Saif",
};

user.name = "Alex";

console.log(user.name); // Alex
```

Why? `const` prevents reassignment of the variable binding. It does not automatically make the referenced object immutable.

---

## Topic 2: Scope

Consider:

```javascript
var a = 10;
let b = 20;
const c = 30;

function test() {
  var x = 100;
  let y = 200;

  if (true) {
    var z = 300;
    let w = 400;
  }

  console.log(x);
  console.log(y);
  console.log(z);
  // console.log(w);
}

test();
```

### Your task

Before I explain further, answer:

1. Which variables are function-scoped?
2. Which variables are block-scoped?
3. Why is `z` accessible outside the `if` block?
4. Why is `w` inaccessible outside the `if` block?
5. What happens if we access a `let` variable before declaration?

---

# 5. First JavaScript Interview Challenge

Try this without running the code.

```javascript
console.log(a);
console.log(b);
console.log(c);

var a = 10;
let b = 20;
const c = 30;
```

### Questions

1. What happens when this code executes?
2. Does it print `undefined` for all three variables?
3. What is the Temporal Dead Zone?
4. Does hoisting mean variables are moved physically to the top of the file?

**Reply with your answers.** I'll evaluate them like an interviewer, explain the execution model, and then we'll move to **hoisting, closures, and the scope chain**.
