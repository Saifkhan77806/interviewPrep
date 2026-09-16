Absolutely. These four features are very common in modern JavaScript and are especially useful for writing **cleaner, shorter, and safer code**.

I'll explain each with **syntax → examples → use cases → common mistakes → interview questions**.

---

# 1. Template Literals

Template literals allow you to create strings using **backticks** `` ` `` instead of quotes.

### Traditional way

```javascript
const name = "Rahul";
const age = 25;

const message = "My name is " + name + " and I am " + age + " years old.";

console.log(message);
```

Output:

```text
My name is Rahul and I am 25 years old.
```

With template literals:

```javascript
const name = "Rahul";
const age = 25;

const message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
```

Output:

```text
My name is Rahul and I am 25 years old.
```

## `${}` is called interpolation

Inside a template literal, you can put JavaScript expressions inside:

```javascript
${expression}
```

Example:

```javascript
const a = 10;
const b = 20;

console.log(`Sum is ${a + b}`);
```

Output:

```text
Sum is 30
```

You can even call functions:

```javascript
function getName() {
  return "Rahul";
}

console.log(`Hello ${getName()}`);
```

Output:

```text
Hello Rahul
```

---

## Multi-line strings

Without template literals:

```javascript
const message = "Hello\n" + "Welcome to JavaScript\n" + "Let's learn!";
```

With template literals:

```javascript
const message = `Hello
Welcome to JavaScript
Let's learn!`;

console.log(message);
```

Output:

```text
Hello
Welcome to JavaScript
Let's learn!
```

---

## Practical Use Case

Dynamic UI messages:

```javascript
const username = "Rahul";
const cartItems = 5;

const message = `Hello ${username}, you have ${cartItems} items in your cart.`;

console.log(message);
```

Output:

```text
Hello Rahul, you have 5 items in your cart.
```

Template literals are extremely common when generating:

- API messages
- HTML strings
- logs
- error messages
- dynamic UI text
- SQL/query strings
- URLs

---

# 2. Destructuring

**Destructuring** allows you to extract values from **arrays or objects** and store them in variables easily.

Think:

> "Take values out of this object/array and put them into variables."

There are two major types:

1. Array destructuring
2. Object destructuring

---

# Array Destructuring

Normally:

```javascript
const numbers = [10, 20, 30];

const first = numbers[0];
const second = numbers[1];
const third = numbers[2];

console.log(first, second, third);
```

With destructuring:

```javascript
const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```text
10
20
30
```

The positions matter.

```javascript
const [a, b, c] = [10, 20, 30];
```

means:

```text
a → 10
b → 20
c → 30
```

---

## Skipping values

You can skip elements using commas.

```javascript
const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

Output:

```text
10
30
```

---

## Default values

```javascript
const numbers = [10];

const [a, b = 20] = numbers;

console.log(a);
console.log(b);
```

Output:

```text
10
20
```

The default is used when the value is `undefined`.

---

# Object Destructuring

This is probably even more important in real-world JavaScript.

Suppose:

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
};
```

Without destructuring:

```javascript
const name = user.name;
const age = user.age;
const city = user.city;
```

With destructuring:

```javascript
const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output:

```text
Rahul
25
Mumbai
```

Here property names are used to match the object properties.

---

## Rename while destructuring

Suppose you don't want the variable to be called `name`.

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

Output:

```text
Rahul
25
```

Think:

```text
object property → variable

name → userName
age  → userAge
```

---

## Rest + Destructuring

This connects directly to what we just learned.

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
  role: "Developer",
};

const { name, ...details } = user;

console.log(name);
console.log(details);
```

Output:

```text
Rahul

{
    age: 25,
    city: "Mumbai",
    role: "Developer"
}
```

---

## Practical Use Case: Function Parameters

Very common:

```javascript
function printUser({ name, age }) {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);
}

const user = {
  name: "Rahul",
  age: 25,
};

printUser(user);
```

Instead of:

```javascript
function printUser(user) {
  console.log(user.name);
  console.log(user.age);
}
```

This becomes especially useful when working with API responses and React props.

---

# 3. Optional Chaining `?.`

Optional chaining allows you to safely access nested properties **without getting an error when something is `null` or `undefined`**.

This is extremely useful when dealing with API responses.

Suppose:

```javascript
const user = {
  name: "Rahul",
};

console.log(user.address.city);
```

This throws:

```text
TypeError: Cannot read properties of undefined
```

Because:

```javascript
user.address;
```

is `undefined`.

---

## Without Optional Chaining

You might write:

```javascript
if (user.address) {
  console.log(user.address.city);
}
```

With optional chaining:

```javascript
console.log(user.address?.city);
```

Output:

```text
undefined
```

No error.

---

# How `?.` works

```javascript
user.address?.city;
```

means approximately:

> "If `user.address` exists, access `.city`; otherwise return `undefined`."

---

## Multiple levels

Suppose:

```javascript
const user = {
  profile: {
    address: {
      city: "Mumbai",
    },
  },
};
```

You can write:

```javascript
console.log(user?.profile?.address?.city);
```

Output:

```text
Mumbai
```

If some level doesn't exist:

```javascript
const user = {};

console.log(user?.profile?.address?.city);
```

Output:

```text
undefined
```

No error.

---

# Optional Chaining with Functions

You can also safely call a function.

```javascript
const user = {
  greet() {
    console.log("Hello");
  },
};

user.greet?.();
```

Output:

```text
Hello
```

If `greet` doesn't exist:

```javascript
const user = {};

user.greet?.();
```

No error.

---

# Optional Chaining with Arrays

```javascript
const users = [
  {
    name: "Rahul",
  },
];

console.log(users[0]?.name);
```

Output:

```text
Rahul
```

If:

```javascript
console.log(users[5]?.name);
```

Output:

```text
undefined
```

---

## Practical Use Case: API Response

Imagine an API sometimes returns:

```javascript
{
  user: {
    profile: {
      name: "Rahul";
    }
  }
}
```

But sometimes `profile` isn't present.

Instead of:

```javascript
if (data && data.user && data.user.profile) {
  console.log(data.user.profile.name);
}
```

You can write:

```javascript
console.log(data?.user?.profile?.name);
```

Much cleaner.

---

# 4. Nullish Coalescing `??`

Nullish coalescing provides a **default value when something is `null` or `undefined`**.

Syntax:

```javascript
value ?? defaultValue;
```

Example:

```javascript
const username = null;

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Because `username` is `null`.

---

## What counts as "nullish"?

Only:

```javascript
null;
undefined;
```

That's it.

This is where `??` differs significantly from `||`.

---

# `??` vs `||`

Consider:

```javascript
const count = 0;

console.log(count || 10);
```

Output:

```text
10
```

Why?

Because `0` is falsy.

But:

```javascript
const count = 0;

console.log(count ?? 10);
```

Output:

```text
0
```

Because `0` is **not nullish**.

---

## Very Important Comparison

| Value       | `value      |             | "Default"` | `value ?? "Default"` |
| ----------- | ----------- | ----------- | ---------- | -------------------- |
| `null`      | `"Default"` | `"Default"` |
| `undefined` | `"Default"` | `"Default"` |
| `0`         | `"Default"` | `0`         |
| `""`        | `"Default"` | `""`        |
| `false`     | `"Default"` | `false`     |
| `"Hello"`   | `"Hello"`   | `"Hello"`   |

### Remember:

`||` asks:

> Is this value **falsy**?

`??` asks:

> Is this value **null or undefined**?

---

# Practical Use Case — Default API Data

Suppose:

```javascript
const user = {
  name: "Rahul",
  age: null,
};

const age = user.age ?? 18;

console.log(age);
```

Output:

```text
18
```

But if:

```javascript
const user = {
  name: "Rahul",
  age: 0,
};

const age = user.age ?? 18;

console.log(age);
```

Output:

```text
0
```

That's often exactly what you want because `0` can be a meaningful value.

---

# Combining All Four

These features become especially powerful when used together.

Suppose you receive:

```javascript
const response = {
  user: {
    name: "Rahul",
    profile: {
      age: 25,
    },
  },
};
```

You can do:

```javascript
const { user } = response;

const name = user?.name ?? "Guest";
const age = user?.profile?.age ?? 18;

console.log(`Name: ${name}, Age: ${age}`);
```

Output:

```text
Name: Rahul, Age: 25
```

Here:

### Destructuring

```javascript
const { user } = response;
```

Extracts `user`.

### Optional chaining

```javascript
user?.profile?.age;
```

Safely accesses nested properties.

### Nullish coalescing

```javascript
?? 18
```

Provides a default if the age is `null` or `undefined`.

### Template literal

```javascript
`Name: ${name}, Age: ${age}`;
```

Builds the final string.

---

# 🔥 A Real-World Example

Imagine an API returns:

```javascript
const response = {
  user: {
    name: "Rahul",
    settings: {
      theme: "dark",
    },
  },
};
```

You want to display:

```text
Welcome Rahul! Your theme is dark.
```

Modern JavaScript:

```javascript
const { user } = response;

const name = user?.name ?? "Guest";
const theme = user?.settings?.theme ?? "light";

const message = `Welcome ${name}! Your theme is ${theme}.`;

console.log(message);
```

Output:

```text
Welcome Rahul! Your theme is dark.
```

This combination is **very common in production code**.

---

# ⚠️ Important Difference: `??` and `||`

Interviewers love this one.

```javascript
const username = "";

console.log(username || "Guest");
```

Output:

```text
Guest
```

But:

```javascript
const username = "";

console.log(username ?? "Guest");
```

Output:

```text
""
```

Because an empty string is falsy but **not nullish**.

---

# ⚠️ Another Important Point

You generally cannot mix `??` directly with `||` or `&&` without parentheses.

❌ Don't write:

```javascript
a ?? b || c
```

JavaScript requires you to make the grouping explicit.

✅ Write:

```javascript
(a ?? b) || c;
```

or:

```javascript
a ?? (b || c);
```

depending on the intended logic.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What are template literals?

**Answer:**

Template literals are strings created using backticks `` ` `` that support interpolation using `${}` and multi-line strings.

```javascript
const name = "Rahul";

console.log(`Hello ${name}`);
```

---

### 2. What is destructuring?

**Answer:**

Destructuring is a syntax for extracting values from arrays or properties from objects into variables.

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const { name, age } = user;
```

---

### 3. What does optional chaining `?.` do?

**Answer:**

It safely accesses properties, methods, or elements when an intermediate value may be `null` or `undefined`.

```javascript
const user = {};

console.log(user?.profile?.name);
```

Returns:

```text
undefined
```

instead of throwing an error.

---

### 4. What does `??` do?

**Answer:**

It returns the right-hand value only when the left-hand value is `null` or `undefined`.

```javascript
const name = null;

console.log(name ?? "Guest");
```

Output:

```text
Guest
```

---

# Intermediate

### 5. What is the output?

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const { name: username } = user;

console.log(username);
```

Answer:

```text
Rahul
```

The property `name` is assigned to the variable `username`.

---

### 6. What is the output?

```javascript
const user = {
  name: "Rahul",
};

console.log(user.profile?.age);
```

Answer:

```text
undefined
```

No error occurs because optional chaining safely handles the missing `profile`.

---

### 7. What is the difference?

```javascript
console.log(0 || 100);
console.log(0 ?? 100);
```

Answer:

```text
100
0
```

`||` checks falsiness.

`??` checks only `null`/`undefined`.

---

### 8. What is the output?

```javascript
const [a, b, ...rest] = [10, 20, 30, 40];

console.log(a);
console.log(b);
console.log(rest);
```

Answer:

```text
10
20
[30, 40]
```

This combines **destructuring + Rest**.

---

# Advanced

### 9. What is the output?

```javascript
const user = {
  profile: {
    name: "",
  },
};

const name = user?.profile?.name ?? "Guest";

console.log(name);
```

Answer:

```text
""
```

Why?

`name` is an empty string.

`??` does **not** treat `""` as nullish.

---

### 10. What is the output?

```javascript
const user = null;

const name = user?.profile?.name ?? "Guest";

console.log(name);
```

Answer:

```text
Guest
```

Step-by-step:

```text
user
 ↓
null
 ↓
user?.profile
 ↓
undefined
 ↓
undefined ?? "Guest"
 ↓
"Guest"
```

---

### 11. What is the output?

```javascript
const user = {
  name: "Rahul",
  address: {
    city: null,
  },
};

const { name } = user;

const city = user?.address?.city ?? "Unknown";

console.log(`User ${name} lives in ${city}`);
```

Answer:

```text
User Rahul lives in Unknown
```

This combines:

```text
Destructuring
     +
Optional chaining
     +
Nullish coalescing
     +
Template literals
```

---

# 🧠 Final Mental Model

Remember these four like this:

```text
Template Literal
        ↓
Build strings easily
`Hello ${name}`


Destructuring
        ↓
Take values OUT
const { name } = user


Optional Chaining
        ↓
Safely go DEEP
user?.profile?.name


Nullish Coalescing
        ↓
Provide DEFAULT
value ?? "Default"
```

And the four together:

```javascript
const { user } = response;

const name = user?.name ?? "Guest";
const city = user?.address?.city ?? "Unknown";

console.log(`Hello ${name}, you live in ${city}`);
```

This style of code is worth becoming comfortable with because you'll encounter it constantly in **modern JavaScript, React, Node.js, and API-based applications**.
