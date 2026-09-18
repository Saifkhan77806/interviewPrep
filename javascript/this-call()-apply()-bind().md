Absolutely. These four are **extremely important JavaScript interview topics** because they are all connected to **function invocation and `this`**.

The most important thing to understand first is:

> **`this` is determined by how a regular function is called, not where the function was defined.**

`call()`, `apply()`, and `bind()` let you control `this` explicitly for **regular functions**.

---

# 1. `this`

## What is `this`?

`this` is a special keyword that refers to the **object/context associated with the current function call**.

The value of `this` depends mainly on **how the function is called**.

---

# Basic Example

```js
const user = {
    name: "Rahul",

    greet: function () {
        console.log(this.name);
    }
};

user.greet();
```

Output:

```text
Rahul
```

Why?

The call is:

```js
user.greet();
```

So:

```text
user → this
```

Therefore:

```js
this.name
```

means:

```js
user.name
```

---

# Important Rule

Don't ask:

> "Where was the function created?"

Ask:

> **"How was the function called?"**

For regular functions, that's the key to understanding `this`.

---

# Example

```js
const user1 = {
    name: "Rahul",

    greet: function () {
        console.log(this.name);
    }
};

const user2 = {
    name: "Amit",
    greet: user1.greet
};

user2.greet();
```

Output:

```text
Amit
```

The function was originally inside `user1`, but it was called as:

```js
user2.greet();
```

Therefore:

```text
this → user2
```

This is a classic interview concept.

---

# `this` in a Regular Function

Consider:

```js
function showThis() {
    console.log(this);
}

showThis();
```

The exact result depends on whether you're running in **strict mode**.

### Non-strict mode

In a browser/global script, `this` may refer to the global object.

### Strict mode

```js
"use strict";

function showThis() {
    console.log(this);
}

showThis();
```

Output:

```text
undefined
```

For modern JavaScript, especially modules, strict-mode semantics are important.

---

# `this` in an Object Method

```js
const person = {
    name: "Rahul",

    sayName() {
        console.log(this.name);
    }
};

person.sayName();
```

Output:

```text
Rahul
```

Here:

```text
person.sayName()
       ↓
     this
       ↓
    person
```

---

# Nested Function Trap

This is important.

```js
const person = {
    name: "Rahul",

    greet() {
        function inner() {
            console.log(this.name);
        }

        inner();
    }
};

person.greet();
```

The `greet()` method gets:

```js
this === person
```

But `inner()` is called as:

```js
inner();
```

It is **not** called as `person.inner()`.

Therefore `inner` gets its own `this` according to regular-function call rules.

This is one reason arrow functions are useful inside methods.

---

# Arrow Functions and `this`

Arrow functions are different.

> **Arrow functions do not have their own `this`.**

They inherit `this` from their surrounding lexical scope.

Example:

```js
const person = {
    name: "Rahul",

    greet() {
        const inner = () => {
            console.log(this.name);
        };

        inner();
    }
};

person.greet();
```

Output:

```text
Rahul
```

Why?

```text
person.greet()
      ↓
this = person

arrow function
      ↓
inherits this
      ↓
person
```

This is called **lexical `this`**.

---

# 2. `call()`

## What does `call()` do?

`call()` allows you to:

1. Explicitly set `this`
2. Immediately call the function
3. Pass arguments individually

Syntax:

```js
functionName.call(thisValue, arg1, arg2, arg3);
```

---

# Basic Example

```js
function greet() {
    console.log(`Hello ${this.name}`);
}

const user = {
    name: "Rahul"
};

greet.call(user);
```

Output:

```text
Hello Rahul
```

Normally:

```js
greet();
```

doesn't have `user` as its `this`.

But:

```js
greet.call(user);
```

means:

> "Call `greet` with `this = user`."

---

# `call()` with Arguments

```js
function introduce(age, city) {
    console.log(`${this.name} is ${age} years old and lives in ${city}.`);
}

const user = {
    name: "Rahul"
};

introduce.call(user, 25, "Mumbai");
```

Output:

```text
Rahul is 25 years old and lives in Mumbai.
```

Notice the arguments:

```js
.call(user, 25, "Mumbai")
           ↑    ↑
          arg1  arg2
```

---

# 3. `apply()`

`apply()` is almost the same as `call()`.

The major difference is:

> **`call()` takes arguments individually, while `apply()` takes arguments as an array-like value.**

---

## `call()`

```js
function introduce(age, city) {
    console.log(this.name, age, city);
}

introduce.call(user, 25, "Mumbai");
```

---

## `apply()`

```js
introduce.apply(user, [25, "Mumbai"]);
```

Output is the same:

```text
Rahul 25 Mumbai
```

---

# `call()` vs `apply()`

|                     | `call()`             | `apply()`               |
| ------------------- | -------------------- | ----------------------- |
| Sets `this`         | ✅                    | ✅                       |
| Immediately invokes | ✅                    | ✅                       |
| Arguments           | Individual           | Array/array-like        |
| Example             | `fn.call(obj, 1, 2)` | `fn.apply(obj, [1, 2])` |

### Memory trick

```text
call  → comma-separated arguments

apply → array of arguments
```

---

# Practical Use Case: Finding Maximum

Historically, a common use of `apply()` was passing an array as arguments.

```js
const numbers = [10, 20, 30, 40];

const max = Math.max.apply(null, numbers);

console.log(max);
```

Output:

```text
40
```

Today, spread syntax is usually cleaner:

```js
const max = Math.max(...numbers);
```

So you may still see `apply()` in older code and interview questions.

---

# 4. `bind()`

This one is slightly different.

## What does `bind()` do?

`bind()`:

1. Sets `this`
2. **Does not immediately execute the function**
3. Returns a **new function**

Syntax:

```js
const newFunction = originalFunction.bind(thisValue, arg1, arg2);
```

---

# Basic Example

```js
const user = {
    name: "Rahul"
};

function greet() {
    console.log(`Hello ${this.name}`);
}

const greetUser = greet.bind(user);

greetUser();
```

Output:

```text
Hello Rahul
```

The important difference:

```js
greet.bind(user);
```

doesn't call `greet`.

It creates a new function.

```text
greet
 ↓
bind(user)
 ↓
new function
 ↓
greetUser()
 ↓
executes
```

---

# `bind()` with Arguments

```js
function introduce(age, city) {
    console.log(`${this.name} is ${age} and lives in ${city}`);
}

const user = {
    name: "Rahul"
};

const fn = introduce.bind(user, 25, "Mumbai");

fn();
```

Output:

```text
Rahul is 25 and lives in Mumbai
```

You can also partially provide arguments:

```js
const fn = introduce.bind(user, 25);

fn("Mumbai");
```

This is called **partial application** (or partial argument binding).

---

# The Most Important Difference

Compare:

```js
call()
apply()
bind()
```

### `call`

```js
fn.call(obj, 10, 20);
```

➡️ Sets `this`
➡️ Calls immediately
➡️ Arguments individually

---

### `apply`

```js
fn.apply(obj, [10, 20]);
```

➡️ Sets `this`
➡️ Calls immediately
➡️ Arguments as array/array-like

---

### `bind`

```js
const newFn = fn.bind(obj, 10, 20);
```

➡️ Sets `this`
➡️ **Doesn't call immediately**
➡️ Returns a new function

---

# 🔥 One Table to Memorize

| Method    | Sets `this` | Executes immediately | Arguments           |
| --------- | ----------: | -------------------: | ------------------- |
| `call()`  |           ✅ |                    ✅ | Individual          |
| `apply()` |           ✅ |                    ✅ | Array-like          |
| `bind()`  |           ✅ |                    ❌ | Individual / preset |

### Easy memory trick

```text
CALL  → Call now
APPLY → Apply arguments as an array
BIND  → Bind for later
```

---

# Practical Use Case: Reusing a Function

Suppose:

```js
function greet() {
    console.log(`Hello ${this.name}`);
}

const user1 = {
    name: "Rahul"
};

const user2 = {
    name: "Amit"
};
```

Same function can work with different objects:

```js
greet.call(user1);
greet.call(user2);
```

Output:

```text
Hello Rahul
Hello Amit
```

We didn't duplicate the function.

---

# Practical Use Case: Event Handlers

`bind()` is useful when you need a function with a specific `this`:

```js
const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

const handler = user.greet.bind(user);

// Later:
handler();
```

The bound function retains the desired `this`.

---

# Very Important: Arrow Functions

This is a **major interview trap**.

Consider:

```js
const greet = () => {
    console.log(this);
};

greet.call({ name: "Rahul" });
```

You might expect:

```text
{ name: "Rahul" }
```

But **`call()` does not change the `this` of an arrow function**.

Why?

Because arrow functions don't have their own `this`.

They use lexical `this`.

The same applies to:

```js
apply()
bind()
```

So:

```text
Regular function
   ↓
call/apply/bind can control this


Arrow function
   ↓
this is lexical
   ↓
call/apply/bind cannot change it
```

---

# `call()` Example — Method Borrowing

A useful real-world pattern:

```js
const person1 = {
    name: "Rahul",

    greet() {
        console.log(`Hello, ${this.name}`);
    }
};

const person2 = {
    name: "Amit"
};

person1.greet.call(person2);
```

Output:

```text
Hello, Amit
```

We're borrowing `person1.greet()` and executing it with:

```js
this = person2
```

This is called **method borrowing**.

---

# `call()` vs Normal Method Call

```js
const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

Here:

```text
this → user
```

But:

```js
user.greet.call({ name: "Amit" });
```

Here:

```text
this → { name: "Amit" }
```

So `call()` explicitly controls the receiver/context.

---

# `this` with Destructuring / Function Reference

Another classic trap:

```js
const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

✅

But:

```js
const fn = user.greet;

fn();
```

Now the function is no longer called as:

```js
user.greet()
```

It's called as:

```js
fn()
```

So `this` is different.

You can fix it with:

```js
const fn = user.greet.bind(user);

fn();
```

Output:

```text
Rahul
```

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `this` in JavaScript?

**Answer:**

`this` is a special keyword whose value for a regular function is determined primarily by how that function is invoked.

---

### 2. What is `call()`?

**Answer:**

`call()` invokes a function immediately while explicitly setting its `this` value and passing arguments individually.

```js
fn.call(obj, arg1, arg2);
```

---

### 3. What is `apply()`?

**Answer:**

`apply()` is similar to `call()`, but it accepts function arguments as an array or array-like value.

```js
fn.apply(obj, [arg1, arg2]);
```

---

### 4. What is `bind()`?

**Answer:**

`bind()` creates and returns a new function with a specified `this` value and optionally pre-filled arguments. It doesn't execute the function immediately.

---

## Intermediate

### 5. What is the output?

```js
const user = {
    name: "Rahul",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

**Answer:**

```text
Rahul
```

Because `this` refers to `user`.

---

### 6. What is the output?

```js
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rahul"
};

greet.call(user);
```

**Answer:**

```text
Rahul
```

---

### 7. What's the difference?

```js
fn.call(obj, 1, 2);
```

vs

```js
fn.apply(obj, [1, 2]);
```

**Answer:**

Both immediately invoke `fn` with `this = obj`.

`call()` receives arguments individually; `apply()` receives them as an array-like value.

---

### 8. What is the output?

```js
function greet() {
    console.log(this.name);
}

const user = {
    name: "Rahul"
};

const fn = greet.bind(user);

fn();
```

**Answer:**

```text
Rahul
```

`bind()` creates a new function whose `this` is bound to `user`.

---

## Advanced

### 9. What is the output?

```js
const user = {
    name: "Rahul",

    greet() {
        return function () {
            console.log(this.name);
        };
    }
};

const fn = user.greet();

fn();
```

**Answer:**

It does **not** print `"Rahul"`.

The inner regular function is called as:

```js
fn();
```

not:

```js
user.fn();
```

So it gets its own `this` according to normal regular-function invocation rules.

---

### 10. How would you fix the previous example using an arrow function?

```js
const user = {
    name: "Rahul",

    greet() {
        return () => {
            console.log(this.name);
        };
    }
};

const fn = user.greet();

fn();
```

Output:

```text
Rahul
```

The arrow function inherits `this` from `greet()`.

---

### 11. Can `call()`, `apply()`, and `bind()` change `this` of an arrow function?

**Answer:**

No.

```js
const greet = () => {
    console.log(this);
};

greet.call({ name: "Rahul" });
```

`call()` cannot override the arrow function's lexical `this`.

---

### 12. What is method borrowing?

**Answer:**

Using a method belonging to one object with another object by changing its `this`.

```js
person1.greet.call(person2);
```

---

### 13. Advanced: What is the difference between `bind()` and `call()`?

```js
fn.call(obj);
```

➡️ Executes immediately.

```js
const newFn = fn.bind(obj);
```

➡️ Creates a new function that can be executed later.

---

# 🔥 Final Mental Model

When you see:

```js
obj.method();
```

think:

```text
this → obj
```

When you see:

```js
fn.call(obj);
```

think:

```text
this → obj
execute now
```

When you see:

```js
fn.apply(obj, [1, 2]);
```

think:

```text
this → obj
execute now
arguments → array
```

When you see:

```js
const newFn = fn.bind(obj);
```

think:

```text
this → obj
don't execute yet
return new function
```

And the biggest rule:

```text
Regular Function
    ↓
this determined by invocation
    ↓
call/apply/bind can control it


Arrow Function
    ↓
no own this
    ↓
lexical this
    ↓
call/apply/bind cannot change it
```

### One-sentence interview answer

> **`this` depends on how a regular function is invoked; `call()` and `apply()` immediately invoke the function with an explicitly chosen `this`, while `bind()` returns a new function with `this` permanently bound for later invocation. Arrow functions are different because they inherit `this` lexically.**
