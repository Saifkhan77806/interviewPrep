# Arrow Functions in JavaScript

An **arrow function** is a shorter way to write a function expression.

It was introduced in **ES6 (ECMAScript 2015)**.

### Regular function

```javascript
function add(a, b) {
  return a + b;
}
```

### Arrow function

```javascript
const add = (a, b) => {
  return a + b;
};
```

And when the function contains only one expression:

```javascript
const add = (a, b) => a + b;
```

So, the basic idea is:

> **Arrow function = concise function syntax + different `this` behavior.**

The second part is very important. Arrow functions aren't simply "shorter functions"; they behave differently from regular functions in several ways.

---

# 1. Basic Syntax

The general syntax is:

```javascript
const functionName = (parameters) => {
  // function body
};
```

Example:

```javascript
const greet = (name) => {
  console.log(`Hello ${name}`);
};

greet("Rahul");
```

Output:

```text
Hello Rahul
```

---

# 2. Arrow Function with No Parameters

If there are no parameters, you need empty parentheses:

```javascript
const greet = () => {
  console.log("Hello");
};

greet();
```

---

# 3. Arrow Function with One Parameter

With a single parameter, parentheses are optional:

```javascript
const square = (number) => {
  return number * number;
};
```

You can write:

```javascript
const square = (number) => {
  return number * number;
};
```

Both are valid.

For consistency/readability, many codebases still prefer parentheses:

```javascript
const square = (number) => number * number;
```

---

# 4. Multiple Parameters

With multiple parameters, parentheses are required.

```javascript
const add = (a, b) => {
  return a + b;
};
```

You cannot write:

```javascript
const add = a, b => a + b; // ❌ Invalid
```

---

# 5. Implicit Return

This is one of the most useful features of arrow functions.

If the function body contains a **single expression**, you can omit `{}` and `return`.

### Normal

```javascript
const square = (x) => {
  return x * x;
};
```

### Arrow with implicit return

```javascript
const square = (x) => x * x;
```

These are equivalent in terms of the returned value.

```javascript
console.log(square(5));
// 25
```

---

# 6. Explicit vs Implicit Return

### Explicit return

When you use `{}`, you normally need `return`:

```javascript
const add = (a, b) => {
  return a + b;
};
```

### Implicit return

When you omit `{}`, the expression is automatically returned:

```javascript
const add = (a, b) => a + b;
```

### Common interview trap

Look at this:

```javascript
const add = (a, b) => {
  a + b;
};

console.log(add(2, 3));
```

Output:

```text
undefined
```

Why?

Because `{}` creates a function body, but you didn't use `return`.

Correct:

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

# 7. Returning an Object

Here's another common interview trap.

You might try:

```javascript
const getUser = () => {
  name: "Rahul";
};
```

This does **not** return the object.

You need parentheses around the object:

```javascript
const getUser = () => ({
  name: "Rahul",
});
```

Now:

```javascript
console.log(getUser());
```

Output:

```javascript
{
  name: "Rahul";
}
```

Why?

Because:

```javascript
() => ({ ... })
```

means:

> implicitly return this object.

---

# 8. Arrow Functions Are Function Expressions

An arrow function is generally assigned to a variable:

```javascript
const add = (a, b) => a + b;
```

So it is a type of **function expression**.

Compare:

```javascript
const add = function (a, b) {
  return a + b;
};
```

with:

```javascript
const add = (a, b) => a + b;
```

The second is more concise.

---

# 9. Use Case #1 — Array `map()`

One of the most common real-world uses of arrow functions is with array methods.

Suppose:

```javascript
const numbers = [1, 2, 3, 4];
```

You want to create a new array containing the squares.

Without arrow function:

```javascript
const squares = numbers.map(function (number) {
  return number * number;
});
```

With arrow function:

```javascript
const squares = numbers.map((number) => number * number);

console.log(squares);
```

Output:

```javascript
[1, 4, 9, 16];
```

This is extremely common in React and modern JavaScript.

---

# 10. Use Case #2 — `filter()`

Suppose you want only numbers greater than 10.

```javascript
const numbers = [5, 12, 8, 20, 15];

const result = numbers.filter((number) => number > 10);

console.log(result);
```

Output:

```javascript
[12, 20, 15];
```

The arrow function:

```javascript
(number) => number > 10;
```

returns `true` or `false` for each item.

---

# 11. Use Case #3 — `reduce()`

Calculate the total:

```javascript
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => sum + price, 0);

console.log(total);
```

Output:

```text
600
```

Here:

```javascript
(sum, price) => sum + price;
```

is the callback.

---

# 12. Use Case #4 — Event Handlers

Arrow functions are commonly used for event handlers.

For example:

```javascript
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

The arrow function is passed as a callback.

You can also use parameters:

```javascript
button.addEventListener("click", (event) => {
  console.log(event.target);
});
```

---

# 13. Use Case #5 — `setTimeout()`

Arrow functions are very convenient for callbacks.

```javascript
setTimeout(() => {
  console.log("Hello after 2 seconds");
}, 2000);
```

Instead of:

```javascript
setTimeout(function () {
  console.log("Hello after 2 seconds");
}, 2000);
```

Both work, but the arrow syntax is concise.

---

# 14. The Most Important Difference: `this`

This is the **most important interview topic** related to arrow functions.

Regular functions have their own `this` depending on how they're called.

Arrow functions **do not have their own `this`**.

Instead:

> An arrow function captures `this` from its surrounding lexical scope.

Let's see why this matters.

---

# 15. Regular Function and `this`

Consider:

```javascript
const user = {
  name: "Rahul",

  greet: function () {
    console.log(this.name);
  },
};

user.greet();
```

Output:

```text
Rahul
```

Here:

```javascript
user.greet();
```

calls the function as a method of `user`.

So inside the regular function:

```javascript
this === user;
```

Therefore:

```javascript
this.name;
```

is `"Rahul"`.

---

# 16. Arrow Function and `this`

Now change it to an arrow function:

```javascript
const user = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  },
};

user.greet();
```

This does **not** behave like the previous example.

Why?

Because the arrow function doesn't create its own `this`.

It gets `this` from the surrounding scope.

So:

```javascript
user.greet();
```

doesn't make `this` point to `user` for the arrow function.

### Important rule

```text
Regular function
→ `this` depends on how the function is called.

Arrow function
→ `this` comes from the surrounding lexical scope.
```

---

# 17. Use Case #6 — Arrow Functions Inside Methods

This is where arrow functions become especially useful.

Suppose:

```javascript
const user = {
  name: "Rahul",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

Output after 1 second:

```text
Rahul
```

Why?

The `greet()` method has `this === user`.

The arrow function inside `setTimeout()` doesn't create its own `this`.

So it **inherits `this` from `greet()`**.

Conceptually:

```text
user.greet()
     ↓
 this = user
     ↓
setTimeout(() => {
     ↓
 arrow function inherits this
     ↓
 this = user
})
```

This is one of the most practical uses of arrow functions.

---

# 18. Before Arrow Functions

Before arrow functions, developers commonly wrote:

```javascript
const user = {
  name: "Rahul",

  greet() {
    const self = this;

    setTimeout(function () {
      console.log(self.name);
    }, 1000);
  },
};
```

Or:

```javascript
const user = {
  name: "Rahul",

  greet() {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000,
    );
  },
};
```

With arrow functions:

```javascript
const user = {
  name: "Rahul",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
```

Much cleaner.

---

# 19. Arrow Functions Don't Have Their Own `arguments`

Regular functions have an `arguments` object.

```javascript
function test(a, b) {
  console.log(arguments);
}

test(10, 20);
```

The function can access the arguments through `arguments`.

Arrow functions don't have their own `arguments`.

```javascript
const test = (a, b) => {
  console.log(arguments);
};
```

You should not rely on `arguments` inside an arrow function.

Instead, use **rest parameters**:

```javascript
const test = (...args) => {
  console.log(args);
};

test(10, 20, 30);
```

Output:

```javascript
[10, 20, 30];
```

---

# 20. Arrow Functions Cannot Be Used as Constructors

Regular functions can be used with `new`:

```javascript
function User(name) {
  this.name = name;
}

const user = new User("Rahul");

console.log(user.name);
// Rahul
```

Arrow functions cannot be used as constructors:

```javascript
const User = (name) => {
  this.name = name;
};

const user = new User("Rahul");
// TypeError
```

Arrow functions don't have the internal constructor behavior required by `new`.

---

# 21. Arrow Functions Don't Have Their Own `prototype`

Regular constructor functions have a `prototype` property:

```javascript
function User() {}

console.log(User.prototype);
```

Arrow functions don't:

```javascript
const User = () => {};

console.log(User.prototype);
// undefined
```

This is another reason arrow functions aren't suitable for constructor functions/classes.

---

# 22. Arrow Functions and `call()`, `apply()`, `bind()`

Regular functions can have their `this` changed using:

```javascript
call();
apply();
bind();
```

Example:

```javascript
function greet() {
  console.log(this.name);
}

const user = {
  name: "Rahul",
};

greet.call(user);
// Rahul
```

With an arrow function:

```javascript
const greet = () => {
  console.log(this.name);
};

greet.call(user);
```

`call()` doesn't change the arrow function's `this`.

Why?

Because arrow functions have **lexical `this`**.

---

# 23. Regular Function vs Arrow Function

This table is worth remembering for interviews:

| Feature                                      | Regular Function | Arrow Function |
| -------------------------------------------- | ---------------- | -------------- |
| Syntax                                       | `function () {}` | `() => {}`     |
| Own `this`                                   | Yes              | ❌ No          |
| Own `arguments`                              | Yes              | ❌ No          |
| Can use `new`                                | Yes              | ❌ No          |
| Own `prototype`                              | Yes              | ❌ No          |
| Implicit return                              | ❌               | ✅             |
| Good for callbacks                           | Yes              | Very common    |
| `this` can be changed with `call/apply/bind` | Yes              | ❌             |
| Lexical `this`                               | ❌               | ✅             |

---

# 24. When Should You Use Arrow Functions?

### Good use cases

#### 1. Array methods

```javascript
const doubled = numbers.map((n) => n * 2);
```

#### 2. Callbacks

```javascript
setTimeout(() => {
  console.log("Done");
}, 1000);
```

#### 3. Event handlers

```javascript
button.addEventListener("click", () => {
  console.log("Clicked");
});
```

#### 4. Short utility functions

```javascript
const square = (n) => n * n;
```

#### 5. Preserving surrounding `this`

```javascript
const user = {
  name: "Rahul",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};
```

---

# 25. When Should You NOT Use Arrow Functions?

### Object methods where you need dynamic `this`

Prefer:

```javascript
const user = {
  name: "Rahul",

  greet() {
    console.log(this.name);
  },
};
```

rather than:

```javascript
const user = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  },
};
```

---

### Constructor functions

Don't use:

```javascript
const User = (name) => {
  this.name = name;
};
```

Use a class or a regular constructor function:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }
}
```

---

### When you need `arguments`

Use a regular function or rest parameters:

```javascript
const sum = (...numbers) => {
  // ...
};
```

---

# 26. A Real-World Example

Imagine an e-commerce application:

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 1000 },
];
```

You want to display product names:

```javascript
const names = products.map((product) => product.name);

console.log(names);
```

Output:

```javascript
["Laptop", "Phone", "Mouse"];
```

Then filter expensive products:

```javascript
const expensiveProducts = products.filter((product) => product.price > 20000);

console.log(expensiveProducts);
```

Then calculate total:

```javascript
const total = products.reduce((sum, product) => sum + product.price, 0);

console.log(total);
```

Arrow functions make this kind of data transformation concise and readable.

---

# 27. One Important Syntax Detail

If your arrow function returns an object, use parentheses:

```javascript
const createUser = (name) => ({
  name: name,
});
```

You can simplify the property:

```javascript
const createUser = (name) => ({
  name,
});
```

This is called **object property shorthand**.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### Q1. What is an arrow function?

**Answer:**

An arrow function is a concise syntax for creating a function expression.

```javascript
const add = (a, b) => a + b;
```

It was introduced in ES6.

---

### Q2. How do you write an arrow function with no parameters?

**Answer:**

```javascript
const greet = () => {
  console.log("Hello");
};
```

---

### Q3. How do you write an arrow function with one parameter?

**Answer:**

Parentheses are optional for a single parameter:

```javascript
const square = (n) => n * n;
```

or:

```javascript
const square = (n) => n * n;
```

Both are valid.

---

### Q4. What is an implicit return?

**Answer:**

When an arrow function doesn't use `{}`, the expression is automatically returned.

```javascript
const add = (a, b) => a + b;
```

This is equivalent to:

```javascript
const add = (a, b) => {
  return a + b;
};
```

---

## Intermediate

### Q5. What is wrong with this code?

```javascript
const add = (a, b) => {
  a + b;
};
```

**Answer:**

It doesn't return the result.

```javascript
add(2, 3); // undefined
```

Correct:

```javascript
const add = (a, b) => {
  return a + b;
};
```

or:

```javascript
const add = (a, b) => a + b;
```

---

### Q6. How do you return an object from an arrow function?

**Answer:**

Wrap the object in parentheses:

```javascript
const getUser = () => ({
  name: "Rahul",
  age: 25,
});
```

Without the parentheses, `{}` is interpreted as a function body rather than an object expression.

---

### Q7. Why are arrow functions commonly used with `map()`?

**Answer:**

Because they make callback functions concise.

Instead of:

```javascript
const doubled = numbers.map(function (n) {
  return n * 2;
});
```

you can write:

```javascript
const doubled = numbers.map((n) => n * 2);
```

---

### Q8. Do arrow functions have their own `this`?

**Answer:**

No.

Arrow functions use **lexical `this`**, meaning they inherit `this` from the surrounding scope.

---

### Q9. What is the difference between regular function and arrow function regarding `this`?

**Answer:**

A regular function gets its `this` based on how it is called.

```javascript
const user = {
  name: "Rahul",

  greet: function () {
    console.log(this.name);
  },
};

user.greet(); // Rahul
```

An arrow function doesn't create its own `this`.

```javascript
const user = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  },
};
```

The arrow function's `this` comes from its surrounding lexical scope, not from `user`.

---

## Advanced

### Q10. Can arrow functions be used as constructors?

**Answer:**

No.

```javascript
const User = (name) => {
  this.name = name;
};

const user = new User("Rahul");
// TypeError
```

Arrow functions cannot be called with `new`.

---

### Q11. Do arrow functions have their own `arguments`?

**Answer:**

No.

```javascript
const test = () => {
  console.log(arguments);
};
```

Arrow functions don't have their own `arguments`.

Use rest parameters instead:

```javascript
const test = (...args) => {
  console.log(args);
};
```

---

### Q12. Can `call()`, `apply()`, or `bind()` change `this` inside an arrow function?

**Answer:**

No.

```javascript
const greet = () => {
  console.log(this.name);
};

greet.call({ name: "Rahul" });
```

`call()` does not change the arrow function's lexical `this`.

---

### 🔥 Q13. What is the output?

```javascript
const obj = {
  name: "Rahul",

  greet() {
    const fn = () => {
      console.log(this.name);
    };

    fn();
  },
};

obj.greet();
```

**Answer:**

```text
Rahul
```

The `greet()` method is called as `obj.greet()`, so its `this` is `obj`.

The arrow function inherits that `this`.

---

### 🔥 Q14. What is the output?

```javascript
const obj = {
  name: "Rahul",

  greet: () => {
    console.log(this.name);
  },
};

obj.greet();
```

**Answer:**

It does **not** print `"Rahul"`.

The arrow function doesn't get `this` from `obj`. It inherits `this` from the surrounding lexical scope.

The exact value of `this.name` depends on the environment (browser script/module, Node.js, etc.), so don't memorize a particular output such as `undefined` without considering the execution environment.

The important answer is:

> **An arrow function used as an object method does not bind `this` to the object.**

---

### 🔥 Q15. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => {
  n * 2;
});

console.log(result);
```

**Answer:**

```javascript
[undefined, undefined, undefined];
```

Because `{}` creates a function body and there is no `return`.

Correct:

```javascript
const result = numbers.map((n) => n * 2);
```

or:

```javascript
const result = numbers.map((n) => {
  return n * 2;
});
```

---

### 🔥 Q16. Why does this work?

```javascript
const user = {
  name: "Rahul",

  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  },
};

user.greet();
```

**Answer:**

`user.greet()` establishes:

```text
this → user
```

The arrow function doesn't create its own `this`, so it lexically inherits `this` from `greet()`.

Therefore:

```text
this.name → "Rahul"
```

This is one of the most useful practical reasons to use arrow functions.

---

### 🔥 Q17. Advanced: What's the difference between these?

```javascript
const fn1 = function () {
  return {
    name: "Rahul",
  };
};
```

and:

```javascript
const fn2 = () => ({
  name: "Rahul",
});
```

**Answer:**

Both return an object:

```javascript
fn1(); // { name: "Rahul" }
fn2(); // { name: "Rahul" }
```

With `fn2`, the parentheses tell JavaScript that `{ name: "Rahul" }` is an **object expression** being implicitly returned.

---

# 🧠 Final Mental Model

Think of arrow functions as having **two major advantages**:

```text
                 Arrow Function
                       │
            ┌──────────┴──────────┐
            ↓                     ↓
       Short syntax          Lexical `this`
            │                     │
            ↓                     ↓
       map/filter/etc.       callbacks,
       short utilities       setTimeout,
                             nested functions
```

But remember the limitations:

```text
Arrow Function
     │
     ├── ❌ no own `this`
     ├── ❌ no own `arguments`
     ├── ❌ cannot use `new`
     ├── ❌ no own `prototype`
     │
     └── ✅ implicit return
```

### The most important interview sentence:

> **Arrow functions don't have their own `this`; they lexically inherit `this` from their surrounding scope.**

And in practical development:

```javascript
// Great use
const doubled = numbers.map((n) => n * 2);

// Great use
setTimeout(() => {
  console.log("Done");
}, 1000);

// Be careful
const user = {
  name: "Rahul",
  greet: () => console.log(this.name),
};
```

For the last case, a **regular method** is generally appropriate when you want `this` to refer to the object.
