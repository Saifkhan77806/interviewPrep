Absolutely. This is a **very common JavaScript interview topic**, especially because it connects directly to **hoisting, `var`/`let`/`const`, and callbacks**.

# Function Declaration vs Function Expression

Both create functions, but the way JavaScript handles them—especially **hoisting**—is different.

---

# 1. Function Declaration

A **function declaration** defines a function using the `function` keyword as a standalone declaration.

```js
function greet() {
    console.log("Hello");
}

greet();
```

Output:

```text
Hello
```

### Syntax

```js
function functionName(parameters) {
    // code
}
```

Example:

```js
function add(a, b) {
    return a + b;
}
```

---

# 2. Function Expression

A **function expression** creates a function and assigns it to a variable.

```js
const greet = function () {
    console.log("Hello");
};

greet();
```

Output:

```text
Hello
```

Here:

```js
const greet = function () {};
```

The function itself is an **expression**, and the result is assigned to `greet`.

### Syntax

```js
const functionName = function (parameters) {
    // code
};
```

---

# The Main Difference: Hoisting

This is the **most important interview difference**.

## Function Declaration

```js
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

Conceptually, you can think of it as:

```js
function greet() {
    console.log("Hello");
}

greet();
```

So calling it before its written position works.

---

# Function Expression with `const`

Now:

```js
greet();

const greet = function () {
    console.log("Hello");
};
```

Output:

```text
ReferenceError: Cannot access 'greet' before initialization
```

Why?

Because `greet` is a `const` variable and is in the **Temporal Dead Zone** before initialization.

Remember:

```text
Function declaration
        ↓
Fully hoisted
        ↓
Can call before declaration


Function expression + const
        ↓
Variable is hoisted
        ↓
TDZ
        ↓
Cannot access before initialization
```

---

# Function Expression with `let`

```js
greet();

let greet = function () {
    console.log("Hello");
};
```

Result:

```text
ReferenceError
```

Same TDZ concept.

---

# Function Expression with `var`

Now something interesting:

```js
greet();

var greet = function () {
    console.log("Hello");
};
```

Result:

```text
TypeError: greet is not a function
```

Why?

Conceptually:

```js
var greet;

greet(); // ❌ greet is undefined

greet = function () {
    console.log("Hello");
};
```

So:

```text
var greet
    ↓
hoisted
    ↓
undefined
    ↓
greet()
    ↓
TypeError
```

---

# Compare All Three

```js
// 1. Function declaration
greet1();

function greet1() {
    console.log("Hello");
}
```

✅ Works.

---

```js
// 2. Function expression with const
greet2();

const greet2 = function () {
    console.log("Hello");
};
```

❌ ReferenceError.

---

```js
// 3. Function expression with var
greet3();

var greet3 = function () {
    console.log("Hello");
};
```

❌ TypeError.

---

# Why `TypeError` for `var`?

At the point of execution:

```js
var greet3;
```

means:

```js
greet3 === undefined
```

Then:

```js
greet3();
```

is effectively:

```js
undefined();
```

You can't call `undefined` as a function.

Therefore:

```text
TypeError: greet3 is not a function
```

---

# Named vs Anonymous Function Expressions

A function expression can be anonymous:

```js
const greet = function () {
    console.log("Hello");
};
```

Or named:

```js
const greet = function sayHello() {
    console.log("Hello");
};
```

In the second example:

```js
sayHello
```

is the function's internal name.

```js
const greet = function sayHello() {
    console.log("Hello");
};
```

You normally call it using:

```js
greet();
```

not:

```js
sayHello(); // ❌ outside the function
```

The internal name is useful for things like recursion and debugging.

---

# Function Declaration vs Expression

| Feature                          | Function Declaration       | Function Expression                        |
| -------------------------------- | -------------------------- | ------------------------------------------ |
| Syntax                           | `function greet() {}`      | `const greet = function() {}`              |
| Standalone function              | ✅                          | ❌ assigned as an expression                |
| Hoisted                          | ✅                          | Variable follows `var`/`let`/`const` rules |
| Can call before declaration      | ✅                          | ❌ generally                                |
| Can be anonymous                 | ❌ declaration needs a name | ✅                                          |
| Can be assigned to variable      | Not in the same sense      | ✅                                          |
| Can be passed as callback        | ✅                          | ✅                                          |
| Can return from another function | Not inherently different   | ✅                                          |

---

# Function Expressions Are Values

This is an important concept.

JavaScript treats functions as **first-class values**.

Therefore:

```js
const greet = function () {
    console.log("Hello");
};
```

You can put the function into a variable.

You can also put it into an array:

```js
const functions = [
    function () {
        console.log("Hello");
    },

    function () {
        console.log("Bye");
    }
];

functions[0]();
functions[1]();
```

Output:

```text
Hello
Bye
```

You can pass it to another function:

```js
function execute(fn) {
    fn();
}

const greet = function () {
    console.log("Hello");
};

execute(greet);
```

Output:

```text
Hello
```

This is why function expressions are heavily used with **callbacks and higher-order functions**.

---

# Practical Use Case: Callback

Function expression:

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(function (num) {
    return num * 2;
});

console.log(doubled);
```

Output:

```text
[2, 4, 6]
```

The function:

```js
function (num) {
    return num * 2;
}
```

is a function expression being passed as a callback.

Today, you'd commonly write this as an arrow function:

```js
const doubled = numbers.map(num => num * 2);
```

---

# Function Declaration Use Case

Function declarations are often good for named, reusable operations:

```js
function calculateTax(price) {
    return price * 0.18;
}

function calculateTotal(price) {
    return price + calculateTax(price);
}

console.log(calculateTotal(1000));
```

Output:

```text
1180
```

The functions have clear names and can be used throughout the surrounding scope.

---

# Important Interview Question

What is the output?

```js
console.log(add(2, 3));

function add(a, b) {
    return a + b;
}
```

Answer:

```text
5
```

Because `add` is a function declaration and is hoisted.

---

# Another Interview Question

What happens here?

```js
console.log(add(2, 3));

const add = function (a, b) {
    return a + b;
};
```

Answer:

```text
ReferenceError
```

Because `add` is a `const` variable in the TDZ.

---

# Another One

```js
console.log(add(2, 3));

var add = function (a, b) {
    return a + b;
};
```

Answer:

```text
TypeError: add is not a function
```

Because:

```js
var add;
```

is hoisted and initialized to `undefined`.

---

# Function Declaration vs Arrow Function

You can also have an arrow function expression:

```js
const add = (a, b) => {
    return a + b;
};
```

This is a **function expression**, specifically an **arrow function expression**.

So:

```js
function add(a, b) {
    return a + b;
}
```

➡️ Function declaration

while:

```js
const add = (a, b) => a + b;
```

➡️ Arrow function expression

And:

```js
const add = function (a, b) {
    return a + b;
};
```

➡️ Function expression

---

# One More Important Difference: `this`

Regular function expressions have their own `this` depending on how they're called:

```js
const obj = {
    name: "Rahul",

    greet: function () {
        console.log(this.name);
    }
};

obj.greet();
```

Output:

```text
Rahul
```

Arrow function expressions don't have their own `this`; they use lexical `this`.

```js
const obj = {
    name: "Rahul",

    greet: () => {
        console.log(this.name);
    }
};
```

This does **not** behave like the regular function method.

This is one reason you should not blindly replace every regular function with an arrow function.

---

# 🧠 Mental Model

Think of it this way:

```text
FUNCTION DECLARATION
        ↓
function greet() {}
        ↓
JavaScript knows the function during hoisting
        ↓
greet() can work before the declaration
```

Whereas:

```text
FUNCTION EXPRESSION
        ↓
const greet = function () {}
        ↓
variable must be initialized
        ↓
then function can be called
```

---

# 🎯 Interview Questions — Easy → Advanced

### Easy

**1. What is a function declaration?**

A standalone function defined using the `function` keyword.

```js
function greet() {}
```

---

**2. What is a function expression?**

A function created as part of an expression, commonly assigned to a variable.

```js
const greet = function () {};
```

---

**3. What is the biggest difference?**

**Hoisting behavior.**

Function declarations can generally be called before their declaration, while function expressions depend on the variable declaration's initialization rules.

---

### Intermediate

**4. What is the output?**

```js
sayHello();

function sayHello() {
    console.log("Hello");
}
```

**Answer:** `Hello`

---

**5. What is the output?**

```js
sayHello();

const sayHello = function () {
    console.log("Hello");
};
```

**Answer:** `ReferenceError`

---

**6. What is the output?**

```js
sayHello();

var sayHello = function () {
    console.log("Hello");
};
```

**Answer:** `TypeError: sayHello is not a function`

---

### Advanced

**7. Can a function expression be anonymous?**

Yes.

```js
const greet = function () {
    console.log("Hello");
};
```

---

**8. Can a function expression be passed as a callback?**

Yes.

```js
[1, 2, 3].map(function (num) {
    return num * 2;
});
```

---

**9. Is an arrow function a function expression?**

Usually, yes when used as an expression:

```js
const add = (a, b) => a + b;
```

It is an **arrow function expression**.

---

**10. Advanced: Why does this throw an error?**

```js
const fn = function () {
    console.log("Hello");
};

fn();
```

This doesn't throw an error—it works.

But:

```js
fn();

const fn = function () {
    console.log("Hello");
};
```

throws a `ReferenceError` because `fn` is a `const` binding in the TDZ.

---

# 🔥 Interview Answer to Memorize

> **A function declaration is a standalone named function and is hoisted with its definition, so it can generally be called before its declaration. A function expression creates a function as part of an expression, usually assigning it to a variable, and its availability depends on how that variable is declared (`var`, `let`, or `const`).**

### Quick revision

```text
function greet() {}
       ↓
Function Declaration
       ↓
Hoisted with definition
```

```text
const greet = function () {}
       ↓
Function Expression
       ↓
const → TDZ
var   → undefined until assignment
```

And:

```text
const greet = () => {}
       ↓
Arrow Function Expression
```
