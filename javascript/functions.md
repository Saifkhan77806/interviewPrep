# Functions in JavaScript

A **function** is a reusable block of code designed to perform a specific task.

Instead of writing the same code repeatedly:

```javascript
console.log("Hello Rahul");
console.log("Hello Rahul");
console.log("Hello Rahul");
```

you can create a function once:

```javascript
function greet() {
  console.log("Hello Rahul");
}

greet();
greet();
greet();
```

Output:

```text
Hello Rahul
Hello Rahul
Hello Rahul
```

So the basic idea is:

> **Function = reusable piece of code that can receive input and optionally return output.**

---

# 1. Creating a Function

The basic syntax is:

```javascript
function functionName() {
  // code
}
```

Example:

```javascript
function greet() {
  console.log("Hello!");
}
```

But simply defining a function doesn't execute it.

You need to **call/invoke** it:

```javascript
greet();
```

### Think of it like this:

```text
Define function
      ↓
function greet() { ... }
      ↓
Call function
      ↓
greet()
      ↓
Code executes
```

---

# 2. Function Parameters

A function can accept input through **parameters**.

```javascript
function greet(name) {
  console.log("Hello " + name);
}

greet("Rahul");
greet("Amit");
```

Output:

```text
Hello Rahul
Hello Amit
```

Here:

```javascript
function greet(name)
```

`name` is a **parameter**.

When we call:

```javascript
greet("Rahul");
```

`"Rahul"` is an **argument**.

### Parameter vs Argument

```javascript
function add(a, b) {
  // a and b → parameters
}

add(10, 20);
// 10 and 20 → arguments
```

Easy way to remember:

> **Parameter = variable defined by the function.**
> **Argument = actual value passed to the function.**

---

# 3. Multiple Parameters

A function can accept multiple parameters.

```javascript
function add(a, b) {
  console.log(a + b);
}

add(10, 20);
```

Output:

```text
30
```

Another example:

```javascript
function introduce(name, age, city) {
  console.log(name, age, city);
}

introduce("Rahul", 25, "Mumbai");
```

---

# 4. `return`

A function can send a value back using `return`.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

Think:

```text
10 + 20
   ↓
function
   ↓
 return 30
   ↓
result = 30
```

---

# 5. `console.log()` vs `return`

This is **very important**.

### `console.log()`

Displays something in the console.

```javascript
function add(a, b) {
  console.log(a + b);
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
undefined
```

Why?

The function printed `30`, but it didn't return anything.

---

### `return`

Sends the value back to the caller.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(10, 20);

console.log(result);
```

Output:

```text
30
```

### Remember:

> `console.log()` → displays a value
> `return` → gives a value back from the function

---

# 6. `return` Stops Function Execution

Once JavaScript reaches `return`, the function immediately exits.

```javascript
function test() {
  console.log("A");

  return;

  console.log("B");
}

test();
```

Output:

```text
A
```

`"B"` is never executed.

---

# 7. Functions Without `return`

If a function doesn't explicitly return a value, JavaScript returns:

```javascript
undefined;
```

Example:

```javascript
function greet() {
  console.log("Hello");
}

let result = greet();

console.log(result);
```

Output:

```text
Hello
undefined
```

---

# 8. Function Declaration

The function we've been using is called a **function declaration**.

```javascript
function add(a, b) {
  return a + b;
}
```

One important characteristic is **hoisting**.

You can call it before its declaration:

```javascript
add(10, 20);

function add(a, b) {
  return a + b;
}
```

Output:

```text
30
```

We'll discuss hoisting in more detail later.

---

# 9. Function Expression

You can also store a function inside a variable.

```javascript
const add = function (a, b) {
  return a + b;
};

console.log(add(10, 20));
```

Output:

```text
30
```

Here:

```javascript
const add = function...
```

is called a **function expression**.

Unlike a function declaration, the variable itself is not usable before its initialization:

```javascript
add(10, 20); // ReferenceError

const add = function (a, b) {
  return a + b;
};
```

---

# 10. Arrow Functions

Arrow functions provide a shorter syntax for writing functions.

Normal function:

```javascript
function add(a, b) {
  return a + b;
}
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

You can make it even shorter when the function has a single expression:

```javascript
const add = (a, b) => a + b;
```

This is called an **implicit return**.

---

# 11. Arrow Function Syntax

### No parameters

```javascript
const greet = () => {
  console.log("Hello");
};
```

### One parameter

Parentheses can be omitted:

```javascript
const greet = (name) => {
  console.log("Hello " + name);
};
```

You can also write:

```javascript
const square = (x) => x * x;
```

### Multiple parameters

Parentheses are required:

```javascript
const add = (a, b) => a + b;
```

---

# 12. Default Parameters

You can provide a default value for a parameter.

```javascript
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet("Rahul");
greet();
```

Output:

```text
Hello Rahul
Hello Guest
```

If no argument is provided, `"Guest"` is used.

---

# 13. Rest Parameters

Rest parameters allow a function to accept an arbitrary number of arguments.

```javascript
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30, 40);
```

Output:

```javascript
[10, 20, 30, 40];
```

`...numbers` collects the arguments into an array.

You can then process them:

```javascript
function add(...numbers) {
  let total = 0;

  for (let number of numbers) {
    total += number;
  }

  return total;
}

console.log(add(10, 20, 30));
// 60

console.log(add(1, 2, 3, 4, 5));
// 15
```

---

# 14. Functions Are First-Class Citizens

This is an **important JavaScript concept**.

In JavaScript, functions are treated like values.

That means you can:

- Store a function in a variable
- Pass a function as an argument
- Return a function from another function
- Store functions in arrays/objects

### Store in a variable

```javascript
const greet = function () {
  console.log("Hello");
};
```

### Pass as an argument

```javascript
function execute(fn) {
  fn();
}

execute(function () {
  console.log("Hello");
});
```

This concept leads directly to **callback functions**.

---

# 15. Callback Functions

A **callback** is a function passed to another function as an argument.

Example:

```javascript
function greet(name) {
  console.log("Hello " + name);
}

function processUser(callback) {
  callback("Rahul");
}

processUser(greet);
```

Output:

```text
Hello Rahul
```

Here:

```javascript
processUser(greet);
```

`greet` is passed as a callback.

Another common example:

```javascript
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

The arrow function is a callback passed to `setTimeout`.

---

# 16. Higher-Order Functions

A function is called a **higher-order function** if it:

1. Takes another function as an argument, or
2. Returns another function.

Example:

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log(calculate(10, 5, add));
// 15

console.log(calculate(10, 5, multiply));
// 50
```

`calculate()` is a higher-order function because it receives another function.

---

# 17. Function Returning a Function

A function can also return another function.

```javascript
function outer() {
  function inner() {
    console.log("Hello");
  }

  return inner;
}

const result = outer();

result();
```

Output:

```text
Hello
```

This concept is important when learning **closures**.

---

# 18. Scope Inside Functions

Variables declared inside a function are generally local to that function.

```javascript
function test() {
  let message = "Hello";

  console.log(message);
}

test();

console.log(message); // ReferenceError
```

`message` only exists inside the function's scope.

---

# 19. Function Scope vs Block Scope

This is an important distinction.

With `let` and `const`:

```javascript
function test() {
  if (true) {
    let x = 10;
    const y = 20;
  }

  console.log(x); // ReferenceError
  console.log(y); // ReferenceError
}
```

`let` and `const` are **block-scoped**.

`var` is function-scoped:

```javascript
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x); // 10
}
```

We'll cover scope and hoisting in depth later because they're important interview topics.

---

# 20. IIFE

IIFE stands for:

> **Immediately Invoked Function Expression**

It's a function that is executed immediately after it is created.

```javascript
(function () {
  console.log("Hello");
})();
```

Output:

```text
Hello
```

Another syntax:

```javascript
(() => {
  console.log("Hello");
})();
```

Historically, IIFEs were commonly used to create isolated scopes before modern JavaScript modules became widely used.

---

# 21. Recursive Functions

A function that calls itself is called a **recursive function**.

Example:

```javascript
function countDown(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  countDown(n - 1);
}

countDown(5);
```

Output:

```text
5
4
3
2
1
```

Every recursive function needs a **base condition** to stop recursion.

Without one:

```javascript
function test() {
  test();
}

test();
```

you'll eventually get a stack overflow.

---

# 22. Pure Functions

A **pure function** is a function that:

1. Given the same input, always produces the same output.
2. Doesn't cause observable side effects.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

For the same inputs:

```javascript
add(2, 3); // 5
add(2, 3); // 5
```

A function that modifies external state is not pure:

```javascript
let total = 0;

function addToTotal(value) {
  total += value;
}
```

The function changes something outside itself.

Pure functions are especially useful in functional programming and predictable application logic.

---

# 23. Function vs Method

A **function** is a standalone callable value.

```javascript
function greet() {
  console.log("Hello");
}
```

A **method** is a function associated with an object.

```javascript
const user = {
  name: "Rahul",

  greet() {
    console.log("Hello " + this.name);
  },
};

user.greet();
```

Here:

```javascript
user.greet();
```

`greet` is a method of `user`.

---

# 24. The `this` Difference

One of the biggest differences between regular functions and arrow functions is how they handle `this`.

Regular function:

```javascript
const user = {
  name: "Rahul",

  greet: function () {
    console.log(this.name);
  },
};

user.greet();
// Rahul
```

Arrow functions **do not have their own `this`**.

```javascript
const user = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

This does **not** behave like the regular method above.

The arrow function gets `this` lexically from its surrounding scope rather than from the object that calls it.

We'll cover `this` separately because it is one of the most frequently tested JavaScript concepts.

---

# 25. Important Function Terminology

You should know these terms:

```text
Function
   ↓
Parameter → variable in function definition
Argument  → value passed during function call
Return    → value sent back from function
Callback  → function passed to another function
Higher-order function → takes/returns a function
Arrow function → shorter function syntax with lexical `this`
Recursive function → function calls itself
IIFE → function executed immediately
```

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### Q1. What is a function?

**Answer:**

A function is a reusable block of code that can accept inputs, perform an operation, and optionally return a result.

```javascript
function add(a, b) {
  return a + b;
}
```

---

### Q2. What is the difference between a parameter and an argument?

**Answer:**

```javascript
function greet(name) {
  // name → parameter
}

greet("Rahul");
// "Rahul" → argument
```

Parameter is defined in the function declaration. Argument is the actual value passed during invocation.

---

### Q3. What happens if a function doesn't have a `return` statement?

**Answer:**

It returns `undefined`.

```javascript
function test() {
  console.log("Hello");
}

let result = test();

console.log(result);
```

Output:

```text
Hello
undefined
```

---

### Q4. What's the difference between `return` and `console.log()`?

**Answer:**

`console.log()` displays a value.

`return` sends a value back to the caller and terminates the current function execution.

```javascript
function add(a, b) {
  return a + b;
}

let result = add(2, 3);
```

`result` receives `5`.

---

## Intermediate

### Q5. What is a function expression?

**Answer:**

A function expression is a function assigned to a variable.

```javascript
const add = function (a, b) {
  return a + b;
};
```

---

### Q6. What is an arrow function?

**Answer:**

An arrow function is a shorter syntax for defining functions.

```javascript
const add = (a, b) => a + b;
```

Arrow functions also have different `this` behavior from regular functions: they don't create their own `this`.

---

### Q7. What are default parameters?

**Answer:**

Default parameters provide a fallback value when an argument is `undefined` or omitted.

```javascript
function greet(name = "Guest") {
  return `Hello ${name}`;
}

greet();
// "Hello Guest"
```

---

### Q8. What are rest parameters?

**Answer:**

Rest parameters collect remaining arguments into an array.

```javascript
function sum(...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 4);
```

Output:

```text
[1, 2, 3, 4]
```

---

### Q9. What is a callback function?

**Answer:**

A callback is a function passed to another function to be called later or as part of that function's operation.

```javascript
function process(callback) {
  callback();
}

process(() => {
  console.log("Done");
});
```

---

### Q10. What is a higher-order function?

**Answer:**

A higher-order function is a function that takes another function as an argument, returns a function, or both.

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}
```

`calculate()` is a higher-order function because it receives `operation` as a function.

---

## Advanced

### Q11. What is the difference between a function declaration and function expression?

**Answer:**

Function declaration:

```javascript
function add(a, b) {
  return a + b;
}
```

Function expression:

```javascript
const add = function (a, b) {
  return a + b;
};
```

A key difference is hoisting.

Function declarations can generally be called before their declaration:

```javascript
add(2, 3);

function add(a, b) {
  return a + b;
}
```

But a function expression assigned to a `const` cannot be called before initialization:

```javascript
add(2, 3); // ReferenceError

const add = function (a, b) {
  return a + b;
};
```

---

### Q12. What is a pure function?

**Answer:**

A pure function produces the same output for the same input and doesn't cause observable side effects.

```javascript
function square(x) {
  return x * x;
}
```

```text
square(5) → 25
square(5) → 25
```

---

### Q13. What is recursion?

**Answer:**

Recursion occurs when a function calls itself.

```javascript
function countdown(n) {
  if (n === 0) return;

  console.log(n);
  countdown(n - 1);
}
```

A recursive function needs a **base case** to stop the recursion.

---

### Q14. What is an IIFE?

**Answer:**

IIFE stands for **Immediately Invoked Function Expression**.

It is a function that is defined and executed immediately:

```javascript
(function () {
  console.log("Hello");
})();
```

---

### 🔥 Q15. What is the output?

```javascript
function test() {
  return;
  console.log("Hello");
}

test();
```

**Answer:**

Nothing is printed.

`return` immediately terminates the function, so the `console.log()` is unreachable.

---

### 🔥 Q16. What is the output?

```javascript
function add(a, b = 10) {
  return a + b;
}

console.log(add(5));
console.log(add(5, undefined));
console.log(add(5, null));
```

**Answer:**

```text
15
15
5
```

Why?

```text
add(5)
→ b is undefined → default 10 → 15

add(5, undefined)
→ b is undefined → default 10 → 15

add(5, null)
→ b is null → default is NOT used
→ 5 + null → 5
```

This is a good test of **default parameters + type coercion**.

---

### 🔥 Q17. What is the output?

```javascript
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}

const fn = outer();

fn();
```

**Answer:**

```text
10
```

The inner function can access `x` from the outer function's scope even after `outer()` has finished executing.

This behavior is called a **closure**.

Closures are one of the most important concepts to learn after functions.

---

### 🔥 Q18. What is the difference between these two?

```javascript
const add = (a, b) => a + b;
```

and:

```javascript
const add = (a, b) => {
  a + b;
};
```

**Answer:**

The first has an **implicit return**:

```javascript
const add = (a, b) => a + b;

add(2, 3); // 5
```

The second has no `return`:

```javascript
const add = (a, b) => {
  a + b;
};

add(2, 3); // undefined
```

When an arrow function uses `{}`, you need an explicit `return`:

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

# 🧠 Final Mental Model

Think of a function like a machine:

```text
             INPUT
               ↓
        ┌──────────────┐
        │   FUNCTION   │
        │              │
        │  processing  │
        └──────────────┘
               ↓
             OUTPUT
             return
```

For example:

```javascript
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 4);
```

```text
5, 4
 ↓
multiply()
 ↓
5 × 4
 ↓
20
 ↓
result
```

And the concepts to keep in your head are:

```text
Function declaration
        ↓
Parameters / Arguments
        ↓
return
        ↓
Function expression
        ↓
Arrow functions
        ↓
Default / Rest parameters
        ↓
Callbacks
        ↓
Higher-order functions
        ↓
Closures
        ↓
this
        ↓
Recursion
```

**The next major topic after functions is `scope + hoisting + closures`**, because these three concepts explain a lot of JavaScript behavior that comes up in interviews.
