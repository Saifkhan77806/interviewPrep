# Function Expressions in JavaScript

A **function expression** is a function that is **created and assigned to a variable**.

The easiest way to recognize one is:

```javascript
const greet = function () {
  console.log("Hello");
};
```

Here, the function itself is an expression, and we're assigning it to `greet`.

You can then call it:

```javascript
greet();
// Hello
```

Think of it as:

```text
function → create a function
   ↓
assign it to a variable
   ↓
const greet = function() { ... }
   ↓
call it
   ↓
greet()
```

---

# 1. Basic Function Expression

```javascript
const greet = function () {
  console.log("Hello");
};

greet();
```

Output:

```text
Hello
```

Compare this with a **function declaration**:

```javascript
function greet() {
  console.log("Hello");
}
```

Both create callable functions, but they have important differences.

---

# 2. Function Declaration vs Function Expression

### Function Declaration

```javascript
function add(a, b) {
  return a + b;
}
```

### Function Expression

```javascript
const add = function (a, b) {
  return a + b;
};
```

The key difference is **how the function is defined and hoisted**.

---

# 3. Function Expressions Can Be Anonymous

Most function expressions are anonymous.

```javascript
const greet = function () {
  console.log("Hello");
};
```

There is no name after `function`.

```text
function
   ↓
anonymous function
   ↓
stored in greet
```

The variable `greet` is used to access the function.

---

# 4. Named Function Expression

A function expression can also have its own name.

```javascript
const greet = function sayHello() {
  console.log("Hello");
};

greet();
```

Here:

```text
greet       → variable/reference
sayHello    → function's internal name
```

The function can use its own name internally.

This is particularly useful for recursion:

```javascript
const factorial = function calculate(n) {
  if (n <= 1) {
    return 1;
  }

  return n * calculate(n - 1);
};

console.log(factorial(5));
// 120
```

Here `calculate()` can call itself.

---

# 5. Function Expressions Are Values

This is a very important JavaScript concept.

Functions are **first-class values**, which means you can store them in variables.

```javascript
const greet = function () {
  console.log("Hello");
};
```

You can also put them in an array:

```javascript
const functions = [
  function () {
    console.log("One");
  },
  function () {
    console.log("Two");
  },
];

functions[0]();
functions[1]();
```

Output:

```text
One
Two
```

You can also put them inside objects:

```javascript
const user = {
  greet: function () {
    console.log("Hello");
  },
};

user.greet();
```

Here the function is a **method** of the object.

---

# 6. Passing a Function Expression as an Argument

Because functions are values, you can pass them to another function.

```javascript
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Hello");
});
```

Output:

```text
Hello
```

The anonymous function:

```javascript
function () {
  console.log("Hello");
}
```

is passed directly to `execute()`.

This is a **callback function**.

---

# 7. Function Expression with Parameters

Function expressions can accept parameters just like normal functions.

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

---

# 8. Function Expression with `return`

```javascript
const square = function (number) {
  return number * number;
};

const result = square(5);

console.log(result);
// 25
```

The function expression returns a value that can be stored in another variable.

---

# 9. Function Expression vs Arrow Function

An arrow function is another way of creating a function expression.

Traditional function expression:

```javascript
const add = function (a, b) {
  return a + b;
};
```

Arrow function:

```javascript
const add = (a, b) => {
  return a + b;
};
```

And because it's a single expression:

```javascript
const add = (a, b) => a + b;
```

So you can think of:

```text
Function Expression
       │
       ├── Traditional
       │     const fn = function() {}
       │
       └── Arrow
             const fn = () => {}
```

But arrow functions have important differences, especially around `this`, `arguments`, constructors, and `prototype`.

---

# 10. The Big Difference: Hoisting

This is probably the **most important interview topic** related to function expressions.

### Function declaration

You can call it before its declaration:

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

Output:

```text
Hello
```

Function declarations are hoisted with their function definition.

---

### Function expression with `const`

```javascript
greet();

const greet = function () {
  console.log("Hello");
};
```

This throws:

```text
ReferenceError
```

Why?

Because the `const` variable cannot be accessed before initialization.

---

# 11. Function Expression with `var`

Here's an interesting case:

```javascript
greet();

var greet = function () {
  console.log("Hello");
};
```

This also fails, but typically with:

```text
TypeError: greet is not a function
```

Why?

Conceptually, `var` is hoisted and initialized with `undefined`:

```javascript
var greet; // undefined

greet(); // trying to call undefined
```

Then later:

```javascript
greet = function () {
  console.log("Hello");
};
```

So:

```text
function declaration
→ function itself is available during hoisting

function expression + var
→ variable is hoisted as undefined

function expression + let/const
→ variable is in TDZ until initialization
```

---

# 12. Function Expressions and Scope

Consider:

```javascript
function test() {
  const greet = function () {
    console.log("Hello");
  };

  greet();
}

test();
```

`greet` exists only inside the function's scope.

You can't do:

```javascript
console.log(greet);
```

outside `test()`.

This is because `greet` is a local variable.

---

# 13. Why Use Function Expressions?

Function expressions are useful when you want to **treat a function as a value**.

For example, suppose you want different operations:

```javascript
const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};
```

You can choose which function to execute:

```javascript
const operation = multiply;

console.log(operation(5, 4));
// 20
```

This is powerful because functions can be dynamically selected, passed around, and composed.

---

# 14. Function Expressions in Callbacks

You'll see this everywhere in JavaScript.

For example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.forEach(function (number) {
  console.log(number);
});
```

The function:

```javascript
function (number) {
  console.log(number);
}
```

is a function expression being passed as a callback.

Modern JavaScript often uses an arrow function instead:

```javascript
numbers.forEach((number) => {
  console.log(number);
});
```

---

# 15. Function Expression and Closures

Function expressions can create closures just like function declarations.

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```

The returned function is a function expression.

It remembers the `count` variable from the outer function.

That's a **closure**.

We'll go much deeper into closures later.

---

# 16. Immediately Invoked Function Expression — IIFE

A function expression can be executed immediately after it is created.

This is called an **IIFE**:

> Immediately Invoked Function Expression

Example:

```javascript
(function () {
  console.log("Hello");
})();
```

Output:

```text
Hello
```

You can also pass arguments:

```javascript
(function (name) {
  console.log("Hello " + name);
})("Rahul");
```

Output:

```text
Hello Rahul
```

Historically, IIFEs were commonly used to create private scopes before ES modules became standard.

---

# 17. A Common Interview Trap

Look at this:

```javascript
const foo = function () {
  console.log("Hello");
};

console.log(typeof foo);
```

What is the output?

```text
function
```

Why?

Because functions are values and their `typeof` is `"function"`.

---

# 18. Another Interview Trap

```javascript
const foo = function () {
  return 10;
};

console.log(foo);
console.log(foo());
```

Output conceptually:

```text
ƒ () {
  return 10;
}

10
```

Notice the difference:

```javascript
foo;
```

means:

> Give me the function itself.

While:

```javascript
foo();
```

means:

> Execute the function.

This distinction is **very important** when working with callbacks.

---

# 19. Function Reference vs Function Call

Consider:

```javascript
function greet() {
  console.log("Hello");
}
```

### Reference

```javascript
const fn = greet;
```

Now both refer to the same function:

```text
greet ─────┐
           ↓
       [function]
           ↑
fn ────────┘
```

Calling either works:

```javascript
greet();
fn();
```

### Calling

```javascript
greet();
```

actually executes the function.

---

# Function Expression — Quick Summary

```javascript
const add = function (a, b) {
  return a + b;
};
```

Here:

```text
const add
   ↓
variable
   ↓
function expression
   ↓
function value
```

Important characteristics:

- A function expression creates a function as a **value**.
- It is commonly assigned to `const` or `let`.
- It can be anonymous or named.
- It can be passed as a callback.
- It can be returned from another function.
- It can be stored in arrays/objects.
- Function expressions assigned to `let`/`const` aren't callable before initialization.
- Arrow functions are another form of function expression.
- Function expressions are heavily used with callbacks and higher-order functions.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### Q1. What is a function expression?

**Answer:**

A function expression is a function created as part of an expression and typically assigned to a variable.

```javascript
const add = function (a, b) {
  return a + b;
};
```

---

### Q2. What is the difference between these?

```javascript
function greet() {}
```

and:

```javascript
const greet = function () {};
```

**Answer:**

The first is a **function declaration**.

The second is a **function expression**.

A major practical difference is hoisting: function declarations can generally be called before their declaration, while a function expression assigned to `const` cannot.

---

### Q3. Can a function expression have parameters?

**Answer:**

Yes.

```javascript
const add = function (a, b) {
  return a + b;
};
```

---

### Q4. Can a function expression be anonymous?

**Answer:**

Yes.

```javascript
const greet = function () {
  console.log("Hello");
};
```

This is an anonymous function expression.

---

# Intermediate

### Q5. What is the output?

```javascript
const add = function (a, b) {
  return a + b;
};

console.log(add(2, 3));
```

**Answer:**

```text
5
```

---

### Q6. What is the output?

```javascript
console.log(typeof function () {});
```

**Answer:**

```text
"function"
```

Functions are values, and `typeof` reports `"function"` for callable functions.

---

### Q7. What is the difference between `foo` and `foo()`?

**Answer:**

```javascript
foo;
```

refers to the function itself.

```javascript
foo();
```

calls/executes the function.

Example:

```javascript
const foo = function () {
  return 10;
};

console.log(foo); // function
console.log(foo()); // 10
```

---

### Q8. Can a function expression be passed as an argument?

**Answer:**

Yes.

```javascript
setTimeout(function () {
  console.log("Hello");
}, 1000);
```

The function expression is being passed as a callback.

---

### Q9. What is a named function expression?

**Answer:**

It's a function expression that has its own function name.

```javascript
const factorial = function calculate(n) {
  if (n <= 1) return 1;

  return n * calculate(n - 1);
};
```

`calculate` is the function's internal name.

---

# Advanced

### Q10. What happens here?

```javascript
greet();

const greet = function () {
  console.log("Hello");
};
```

**Answer:**

It throws a `ReferenceError`.

The `const` variable exists in the scope but cannot be accessed before its initialization because of the **Temporal Dead Zone (TDZ)**.

---

### Q11. What happens here?

```javascript
greet();

var greet = function () {
  console.log("Hello");
};
```

**Answer:**

It results in a `TypeError` because `greet` is `undefined` when the call occurs.

Conceptually:

```javascript
var greet;

greet(); // undefined is not callable

greet = function () {
  console.log("Hello");
};
```

---

### Q12. What happens here?

```javascript
greet();

function greet() {
  console.log("Hello");
}
```

**Answer:**

```text
Hello
```

Function declarations are hoisted with their function definition.

---

### 🔥 Q13. What is the output?

```javascript
const fn = function () {
  return function () {
    return 10;
  };
};

console.log(fn()());
```

**Answer:**

```text
10
```

Break it down:

```javascript
fn();
```

returns another function.

Then:

```javascript
fn()();
```

immediately calls that returned function.

---

### 🔥 Q14. What is the output?

```javascript
const fn = function () {
  console.log("A");
};

const x = fn;

console.log(x === fn);
```

**Answer:**

```text
true
```

Both `x` and `fn` reference the **same function object**.

Assigning a function to another variable doesn't create a new function.

---

### 🔥 Q15. What is the output?

```javascript
const fn = function () {
  return 10;
};

const result = fn;

console.log(result);
console.log(result());
```

**Answer:**

The first prints the function itself.

The second prints:

```text
10
```

Because:

```javascript
result;
```

is the function reference, while:

```javascript
result();
```

executes it.

---

### 🔥 Q16. Advanced: Why is this useful?

```javascript
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = function (a, b) {
  return a + b;
};

const multiply = function (a, b) {
  return a * b;
};

console.log(calculate(5, 3, add));
console.log(calculate(5, 3, multiply));
```

**Answer:**

Output:

```text
8
15
```

The important concept is that **functions are first-class values**.

`calculate()` doesn't need to know how the operation works. It receives a function and executes it.

This is the foundation for:

- callbacks
- higher-order functions
- `map()`
- `filter()`
- `reduce()`
- event handlers
- asynchronous JavaScript

---

## 🧠 Final Mental Model

Remember this distinction:

```javascript
function add(a, b) {
  return a + b;
}
```

**Function declaration**

versus:

```javascript
const add = function (a, b) {
  return a + b;
};
```

**Function expression**

versus:

```javascript
const add = (a, b) => a + b;
```

**Arrow function expression**

And the key interview rule:

```text
Function declaration
→ hoisted with its definition

Function expression + const/let
→ cannot be called before initialization

Function expression + var
→ variable is hoisted as undefined
```

The natural next step is **arrow functions**, where the really important interview differences are `this`, `arguments`, `return`, constructors, and `prototype`.
