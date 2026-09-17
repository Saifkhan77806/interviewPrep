Absolutely 👍 Scope is one of the **most important JavaScript fundamentals** because it explains **where variables can be accessed**. It also leads directly into **closures, hoisting, and the `this` keyword**.

We'll cover:

1. Global scope
2. Function scope
3. Block scope
4. Lexical scope
5. How they interact
6. Common interview traps
7. Interview questions — Easy → Advanced

---

# First: What is Scope?

**Scope** determines **where a variable is accessible in your code**.

For example:

```js
let name = "Rahul";

console.log(name);
```

`name` is accessible here because it is in the current scope.

But:

```js
function test() {
  let age = 25;
}

console.log(age); // ❌
```

`age` exists only inside the function.

So think:

> **Scope = the area of code where a variable can be accessed.**

---

# 1. Global Scope

A variable declared outside all functions and blocks is generally in the **global scope**.

```js
let name = "Rahul";

function greet() {
  console.log(name);
}

greet();
```

Output:

```text
Rahul
```

Why?

`name` is globally accessible, so the function can access it.

Visualize:

```text
GLOBAL SCOPE
│
├── name = "Rahul"
│
└── function greet()
       │
       └── can access name
```

---

## Another example

```js
let x = 10;

console.log(x);

if (true) {
  console.log(x);
}

function test() {
  console.log(x);
}

test();
```

Output:

```text
10
10
10
```

The global variable can be accessed from these nested scopes.

---

# Important: Global variables can cause problems

For example:

```js
let userName = "Rahul";

function updateUser() {
  userName = "Amit";
}

updateUser();

console.log(userName);
```

Output:

```text
Amit
```

The function modified the global variable.

In large applications, excessive global state can make code harder to reason about.

So generally:

> Keep variables as close as possible to where they're needed.

---

# 2. Function Scope

A variable declared inside a function is generally accessible only inside that function.

```js
function greet() {
  let message = "Hello";

  console.log(message);
}

greet();
```

Output:

```text
Hello
```

But:

```js
console.log(message);
```

causes:

```text
ReferenceError
```

because `message` belongs to the function's scope.

Visual:

```text
GLOBAL
│
└── greet()
      │
      └── message
```

`message` is available inside `greet()`, but not outside.

---

# Function Scope with `var`

This is particularly associated with `var`.

```js
function test() {
  var x = 10;

  if (true) {
    var y = 20;
  }

  console.log(x);
  console.log(y);
}

test();
```

Output:

```text
10
20
```

Why is `y` accessible outside the `if` block?

Because `var` is **function-scoped**, not block-scoped.

Its scope is the entire `test()` function.

---

# 3. Block Scope

A **block** is code surrounded by `{}`.

Examples:

```js
if (true) {
  // block
}
```

```js
for (let i = 0; i < 5; i++) {
  // block
}
```

```js
{
  // block
}
```

Variables declared using:

```js
let
const
```

are **block-scoped**.

---

## Example

```js
if (true) {
  let message = "Hello";

  console.log(message);
}
```

Output:

```text
Hello
```

But:

```js
if (true) {
  let message = "Hello";
}

console.log(message);
```

Result:

```text
ReferenceError
```

Because `message` belongs to the `if` block.

Visual:

```text
GLOBAL
│
└── if BLOCK
      │
      └── message
```

---

# `const` is also block-scoped

```js
{
  const age = 25;

  console.log(age); // 25
}

console.log(age); // ReferenceError
```

So:

```text
let   → block scoped
const → block scoped
```

---

# `var` vs `let` vs `const`

This is a **must-know interview topic**.

```js
if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}

console.log(a); // 10
console.log(b); // ReferenceError
console.log(c); // ReferenceError
```

Why?

```text
var   → function scoped
let   → block scoped
const → block scoped
```

---

# Nested Blocks

Blocks can be nested:

```js
{
  let a = 10;

  {
    let b = 20;

    console.log(a);
    console.log(b);
  }
}
```

Output:

```text
10
20
```

The inner block can access variables from the outer block.

But the outer block cannot access variables declared in the inner block:

```js
{
  let a = 10;

  {
    let b = 20;
  }

  console.log(b); // ReferenceError
}
```

This is an important idea that leads us to **lexical scope**.

---

# 4. Lexical Scope

This is the most important of the four concepts.

**Lexical scope** means:

> A function's access to variables is determined by **where the function is written in the source code**, not where the function is called.

Let's look at an example.

```js
let name = "Rahul";

function greet() {
  console.log(name);
}

greet();
```

`greet()` was written in the global scope.

Therefore it can access `name` from the surrounding lexical scope.

---

# Nested Function Example

```js
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```

Output:

```text
Hello
```

Why can `inner()` access `message`?

Because `inner` was **defined inside `outer`**.

Its lexical environment includes access to the surrounding scope.

Visualize:

```text
GLOBAL
│
└── outer()
      │
      ├── message = "Hello"
      │
      └── inner()
            │
            └── can access message
```

This is the foundation of **closures**.

---

# Lexical Scope Example That Confuses Beginners

Consider:

```js
let name = "Global";

function outer() {
  let name = "Outer";

  function inner() {
    console.log(name);
  }

  return inner;
}

let fn = outer();

fn();
```

Output:

```text
Outer
```

You might ask:

> `outer()` has already finished. Why does `fn()` still know `"Outer"`?

Because `inner()` was **lexically defined inside `outer()`**.

It retains access to its surrounding lexical environment.

That's a **closure**.

We'll get into closures separately, but for now remember:

> **Lexical scope is one of the foundations of closures.**

---

# Lexical Scope vs Dynamic Scope

JavaScript uses **lexical scope**, not dynamic scope.

Consider:

```js
let name = "Global";

function printName() {
  console.log(name);
}

function test() {
  let name = "Local";
  printName();
}

test();
```

What is the output?

```text
Global
```

Many beginners expect:

```text
Local
```

because `printName()` was called inside `test()`.

But that's not how lexical scoping works.

`printName()` was **defined in the global scope**.

Therefore it looks for `name` starting from its lexical environment:

```text
printName()
    ↓
its own scope
    ↓
global scope
    ↓
name = "Global"
```

It does **not** look at the caller's scope:

```text
test()
   ↓
name = "Local"
```

---

# This is the Key Difference

### Lexical scope

Looks at:

> **Where the function was defined**

### Not:

> Where the function was called

Example:

```js
let x = "global";

function printX() {
  console.log(x);
}

function test() {
  let x = "local";

  printX();
}

test();
```

Output:

```text
global
```

Because `printX()` was defined globally.

---

# Scope Chain

JavaScript searches for variables through a **scope chain**.

Consider:

```js
let a = 10;

function outer() {
  let b = 20;

  function inner() {
    let c = 30;

    console.log(a);
    console.log(b);
    console.log(c);
  }

  inner();
}

outer();
```

`inner()` needs `a`.

JavaScript searches:

```text
inner scope
    ↓
outer scope
    ↓
global scope
```

It finds:

```text
a → global
b → outer
c → inner
```

Visual:

```text
GLOBAL
│
│ a = 10
│
└── outer
     │
     │ b = 20
     │
     └── inner
          │
          │ c = 30
          │
          └── searches outward
```

This is called the **scope chain**.

---

# What if the variable isn't found?

```js
function outer() {
  function inner() {
    console.log(x);
  }

  inner();
}

outer();
```

JavaScript searches:

```text
inner scope
     ↓
outer scope
     ↓
global scope
     ↓
not found
```

Result:

```text
ReferenceError: x is not defined
```

---

# Important Rule: Inner → Outer

An inner scope can generally access variables from its outer scopes.

But an outer scope cannot access variables from an inner scope.

Example:

```js
let global = "Global";

function outer() {
  let outer = "Outer";

  function inner() {
    let inner = "Inner";

    console.log(global); // ✅
    console.log(outer);  // ✅
    console.log(inner);  // ✅
  }

  inner();

  console.log(global); // ✅
  console.log(outer);  // ✅
  console.log(inner);  // ❌
}

outer();
```

Think:

```text
Inner
  ↓ can access
Outer
  ↓ can access
Global
```

But:

```text
Global
  ✕ cannot access
Outer's variables

Outer
  ✕ cannot access
Inner's variables
```

---

# All Four Together

Let's combine everything:

```js
let globalVar = "Global";

function outer() {
  let functionVar = "Function";

  if (true) {
    let blockVar = "Block";

    function inner() {
      console.log(globalVar);
      console.log(functionVar);
      console.log(blockVar);
    }

    inner();
  }
}

outer();
```

Output:

```text
Global
Function
Block
```

Why?

`inner()` can access:

```text
its own scope
    ↓
if block
    ↓
outer function
    ↓
global scope
```

That's the **scope chain**, based on lexical structure.

---

# A Very Important `var` Example

```js
function test() {
  if (true) {
    var x = 10;
  }

  console.log(x);
}

test();
```

Output:

```text
10
```

Because `var` is function-scoped.

Now:

```js
function test() {
  if (true) {
    let x = 10;
  }

  console.log(x);
}

test();
```

Result:

```text
ReferenceError
```

Because `let` is block-scoped.

---

# Scope and Loops

This is another classic example.

### `let`

```js
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
ReferenceError
```

`i` is scoped to the `for` loop.

---

### `var`

```js
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
```

Output:

```text
0
1
2
3
```

Because `var` isn't block-scoped.

---

# Scope vs Hoisting

These concepts are related but different.

### Scope asks:

> Where can I access this variable?

### Hoisting asks:

> What happens to the declaration before its line is reached?

For example:

```js
function test() {
  console.log(x);

  let x = 10;
}
```

`x` is function/block scoped, but accessing it before initialization results in a `ReferenceError` because `let` has a **Temporal Dead Zone (TDZ)**.

So don't confuse:

```text
Scope     → where variable is accessible
Hoisting  → behavior of declarations before execution reaches them
```

---

# Scope vs `this`

Another important distinction:

```text
Scope       → determines variable lookup
this        → determined by how a function is called
```

For example:

```js
let name = "Rahul";

function greet() {
  console.log(name);
}
```

`name` is found through the **scope chain**.

But:

```js
console.log(this);
```

involves the `this` binding rules, which are a separate concept.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is scope?

Scope determines **where variables can be accessed in a program**.

---

### 2. What is global scope?

A variable declared outside functions and blocks is generally accessible from the surrounding global scope.

```js
let x = 10;

function test() {
  console.log(x);
}
```

`test()` can access `x`.

---

### 3. What is function scope?

Variables declared with `var` inside a function are accessible throughout that function.

```js
function test() {
  var x = 10;

  if (true) {
    var y = 20;
  }

  console.log(y); // 20
}
```

---

### 4. What is block scope?

Variables declared with `let` and `const` are accessible only within the block where they are declared.

```js
{
  let x = 10;
}

console.log(x); // ReferenceError
```

---

## Medium

### 5. What is the difference between `var`, `let`, and `const` regarding scope?

```text
var   → function scoped
let   → block scoped
const → block scoped
```

---

### 6. What is lexical scope?

Lexical scope means variable accessibility is determined by **where code/functions are written in the source code**.

JavaScript uses lexical scoping.

---

### 7. What is a scope chain?

When JavaScript looks for a variable, it searches from the current scope outward through its enclosing lexical scopes.

```text
Current scope
     ↓
Outer scope
     ↓
Global scope
```

---

### 8. What is the output?

```js
let x = "global";

function test() {
  let x = "local";
  console.log(x);
}

test();
```

Answer:

```text
local
```

The local `x` shadows the global `x`.

---

# Advanced

### 9. What is the output?

```js
let x = "global";

function printX() {
  console.log(x);
}

function test() {
  let x = "local";
  printX();
}

test();
```

Answer:

```text
global
```

Why?

`printX()` was **defined in the global lexical scope**.

It does not use the caller's `test()` scope.

---

### 10. What is variable shadowing?

When a variable in an inner scope has the same name as a variable in an outer scope.

```js
let name = "Global";

function test() {
  let name = "Local";

  console.log(name);
}

test();
```

Output:

```text
Local
```

The inner `name` shadows the outer `name`.

---

### 11. What is the output?

```js
let x = 10;

function outer() {
  let x = 20;

  function inner() {
    let x = 30;

    console.log(x);
  }

  inner();
}

outer();
```

Answer:

```text
30
```

JavaScript starts searching from the nearest scope.

```text
inner x = 30  ← found first
outer x = 20
global x = 10
```

---

### 12. What is the output?

```js
let x = 10;

function outer() {
  let y = 20;

  function inner() {
    console.log(x + y);
  }

  inner();
}

outer();
```

Answer:

```text
30
```

`inner()` searches:

```text
inner scope → x not found, y not found
     ↓
outer scope → y found
     ↓
global scope → x found
```

---

### 13. What is the output?

```js
function test() {
  if (true) {
    var a = 10;
    let b = 20;
  }

  console.log(a);
  console.log(b);
}

test();
```

Answer:

```text
10
ReferenceError
```

Because:

```text
var a → function scoped
let b → block scoped
```

---

# 🔥 The Most Important Interview Question

Consider:

```js
let name = "Rahul";

function outer() {
  let name = "Amit";

  function inner() {
    console.log(name);
  }

  return inner;
}

let fn = outer();

fn();
```

What is the output?

```text
Amit
```

Why?

Because `inner()` was **defined inside `outer()`**.

Its lexical environment gives it access to `outer()`'s `name`.

Even after `outer()` has finished executing, the returned function retains access to that environment.

That's a **closure**.

So the progression is:

```text
Scope
  ↓
Lexical Scope
  ↓
Scope Chain
  ↓
Closure
```

Understanding today's topic will make closures much easier.

---

# 🧠 Final Cheat Sheet

```text
1. Global Scope
   ↓
   Available in the global context and accessible
   from nested scopes.

2. Function Scope
   ↓
   `var` inside a function belongs to that function.

3. Block Scope
   ↓
   `let` and `const` belong to their `{}` block.

4. Lexical Scope
   ↓
   Scope is determined by where code is written,
   not where a function is called.
```

### Visual mental model

```text
GLOBAL SCOPE
│
│ globalVar
│
└── FUNCTION SCOPE
     │
     │ functionVar
     │
     └── BLOCK SCOPE
          │
          │ blockVar
          │
          └── INNER FUNCTION
                 │
                 └── searches outward
                     ↓
                  Block
                     ↓
                  Function
                     ↓
                  Global
```

### One sentence to remember for interviews:

> **JavaScript uses lexical scoping: an inner scope can access variables from its outer lexical scopes, while `let`/`const` are block-scoped and `var` is function-scoped.**
