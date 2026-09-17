Absolutely 👍 These five are **core JavaScript object methods/syntax** and are very common in interviews.

The easiest way to remember them:

```text
Object.keys()     → get keys
Object.values()   → get values
Object.entries() → get key + value pairs
Object.assign()  → copy/merge objects
Spread (...)     → copy/merge objects in a cleaner syntax
```

---

# 1. `Object.keys()`

`Object.keys()` returns an **array containing the object's property names (keys)**.

### Syntax

```js
Object.keys(object);
```

### Example

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

let keys = Object.keys(user);

console.log(keys);
```

Output:

```js
["name", "age", "city"]
```

Think:

```text
Object
   ↓
name: Rahul
age: 25
city: Mumbai

Object.keys()
   ↓
["name", "age", "city"]
```

---

## Practical use case

Suppose you want to know **how many properties** an object has:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

console.log(Object.keys(user).length);
```

Output:

```text
3
```

This is commonly useful for checking whether an object is empty:

```js
let obj = {};

console.log(Object.keys(obj).length === 0);
```

Output:

```text
true
```

---

## Using `Object.keys()` with a loop

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

Object.keys(user).forEach(key => {
  console.log(key);
});
```

Output:

```text
name
age
city
```

You can then access the value:

```js
Object.keys(user).forEach(key => {
  console.log(key, user[key]);
});
```

Output:

```text
name Rahul
age 25
city Mumbai
```

Notice the use of:

```js
user[key]
```

because `key` is a variable.

---

# 2. `Object.values()`

`Object.values()` returns an **array containing the object's values**.

### Example

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

console.log(Object.values(user));
```

Output:

```js
["Rahul", 25, "Mumbai"]
```

Think:

```text
Object
   ↓
name: Rahul
age: 25
city: Mumbai

Object.values()
   ↓
["Rahul", 25, "Mumbai"]
```

---

## Practical use case

Suppose you have scores:

```js
let scores = {
  math: 90,
  science: 85,
  english: 95
};

let values = Object.values(scores);

console.log(values);
```

Output:

```js
[90, 85, 95]
```

Now you can use array methods:

```js
let total = Object.values(scores)
  .reduce((sum, score) => sum + score, 0);

console.log(total);
```

Output:

```text
270
```

This is one reason these methods are useful:

> They convert object data into arrays, allowing you to use `map()`, `filter()`, `reduce()`, `forEach()`, etc.

---

# 3. `Object.entries()`

`Object.entries()` returns an array containing **key-value pairs**.

### Example

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

console.log(Object.entries(user));
```

Output:

```js
[
  ["name", "Rahul"],
  ["age", 25],
  ["city", "Mumbai"]
]
```

Each item is itself an array:

```text
["name", "Rahul"]
["age", 25]
["city", "Mumbai"]
```

Think:

```text
Object.entries()
       ↓
[
  [key, value],
  [key, value],
  [key, value]
]
```

---

# Why is `entries()` useful?

Because you get **both key and value together**.

For example:

```js
let user = {
  name: "Rahul",
  age: 25
};

Object.entries(user).forEach(([key, value]) => {
  console.log(key, value);
});
```

Output:

```text
name Rahul
age 25
```

Notice this:

```js
([key, value])
```

That's **array destructuring**.

Each entry:

```js
["name", "Rahul"]
```

gets destructured into:

```js
key = "name"
value = "Rahul"
```

---

# `keys()` vs `values()` vs `entries()`

Suppose:

```js
let user = {
  name: "Rahul",
  age: 25
};
```

### `Object.keys()`

```js
Object.keys(user);
```

Output:

```js
["name", "age"]
```

### `Object.values()`

```js
Object.values(user);
```

Output:

```js
["Rahul", 25]
```

### `Object.entries()`

```js
Object.entries(user);
```

Output:

```js
[
  ["name", "Rahul"],
  ["age", 25]
]
```

### Memory trick

```text
keys()
  ↓
["name", "age"]

values()
  ↓
["Rahul", 25]

entries()
  ↓
[
  ["name", "Rahul"],
  ["age", 25]
]
```

---

# 4. `Object.assign()`

`Object.assign()` is used to **copy properties from one or more objects into a target object**.

### Syntax

```js
Object.assign(target, source1, source2, ...);
```

---

## Basic example

```js
let source = {
  name: "Rahul",
  age: 25
};

let target = {};

Object.assign(target, source);

console.log(target);
```

Output:

```js
{
  name: "Rahul",
  age: 25
}
```

Think:

```text
source
   ↓
{name: "Rahul", age: 25}

        copy

        ↓

target
{name: "Rahul", age: 25}
```

---

# `Object.assign()` can merge objects

```js
let user = {
  name: "Rahul"
};

let details = {
  age: 25,
  city: "Mumbai"
};

let result = Object.assign({}, user, details);

console.log(result);
```

Output:

```js
{
  name: "Rahul",
  age: 25,
  city: "Mumbai"
}
```

The `{}` is the target.

```js
Object.assign({}, user, details);
```

means:

```text
Start with {}
      ↓
copy user
      ↓
copy details
      ↓
new object
```

---

# What happens when properties conflict?

This is very important.

```js
let user1 = {
  name: "Rahul",
  age: 25
};

let user2 = {
  name: "Amit",
  city: "Mumbai"
};

let result = Object.assign({}, user1, user2);

console.log(result);
```

Output:

```js
{
  name: "Amit",
  age: 25,
  city: "Mumbai"
}
```

Why?

Because **later sources overwrite earlier properties**.

```text
user1:
name → Rahul

user2:
name → Amit
       ↓
Amit wins
```

---

# `Object.assign()` mutates the target

This is an important interview point.

```js
let target = {
  name: "Rahul"
};

let source = {
  age: 25
};

Object.assign(target, source);

console.log(target);
```

Output:

```js
{
  name: "Rahul",
  age: 25
}
```

The original `target` was modified.

But if you do:

```js
let result = Object.assign({}, target, source);
```

the `{}` is a new target, so `target` itself isn't modified.

---

# 5. Spread Syntax `...`

Spread syntax allows you to **expand/copy properties from an object into another object**.

### Example

```js
let user = {
  name: "Rahul",
  age: 25
};

let copy = {
  ...user
};

console.log(copy);
```

Output:

```js
{
  name: "Rahul",
  age: 25
}
```

Think:

```text
user
 ↓
{name: "Rahul", age: 25}

...user
 ↓
name: "Rahul",
age: 25
```

---

# Spread for merging objects

Instead of:

```js
Object.assign({}, user, details);
```

you can write:

```js
let result = {
  ...user,
  ...details
};
```

Example:

```js
let user = {
  name: "Rahul"
};

let details = {
  age: 25,
  city: "Mumbai"
};

let result = {
  ...user,
  ...details
};

console.log(result);
```

Output:

```js
{
  name: "Rahul",
  age: 25,
  city: "Mumbai"
}
```

This is extremely common in modern JavaScript.

---

# Spread and property conflicts

Just like `Object.assign()`, **later properties win**.

```js
let user1 = {
  name: "Rahul",
  age: 25
};

let user2 = {
  name: "Amit",
  city: "Mumbai"
};

let result = {
  ...user1,
  ...user2
};

console.log(result);
```

Output:

```js
{
  name: "Amit",
  age: 25,
  city: "Mumbai"
}
```

Because:

```text
...user1
   ↓
name: Rahul

...user2
   ↓
name: Amit
```

The second `name` replaces the first.

---

# A VERY common use case: updating objects

Suppose:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};
```

You want to change only the age.

You could do:

```js
user.age = 26;
```

But if you're following an **immutable update** pattern, use spread:

```js
let updatedUser = {
  ...user,
  age: 26
};

console.log(updatedUser);
```

Output:

```js
{
  name: "Rahul",
  age: 26,
  city: "Mumbai"
}
```

Original:

```js
console.log(user);
```

still gives:

```js
{
  name: "Rahul",
  age: 25,
  city: "Mumbai"
}
```

This pattern is extremely common in React/state management.

---

# Object spread vs Array spread

You already learned spread with arrays.

### Array

```js
let numbers = [1, 2, 3];

let copy = [...numbers];

console.log(copy);
```

Output:

```js
[1, 2, 3]
```

### Object

```js
let user = {
  name: "Rahul",
  age: 25
};

let copy = {
  ...user
};
```

Output:

```js
{
  name: "Rahul",
  age: 25
}
```

Same `...` syntax, but it behaves according to the context.

---

# `Object.assign()` vs Spread

These are often used for the same purpose.

### `Object.assign()`

```js
let result = Object.assign({}, obj1, obj2);
```

### Spread

```js
let result = {
  ...obj1,
  ...obj2
};
```

For simple object copying/merging, spread is generally easier to read.

---

# Important: Both are shallow copies

This is a very important interview concept.

Consider:

```js
let user = {
  name: "Rahul",
  address: {
    city: "Mumbai"
  }
};

let copy = {
  ...user
};

copy.address.city = "Pune";

console.log(user.address.city);
```

Output:

```text
Pune
```

Why?

Because spread creates a **shallow copy**.

The outer object is copied:

```text
user ──────→ outer object
copy ──────→ different outer object
```

But the nested object is still shared:

```text
user.address ──┐
               ├──→ same address object
copy.address ──┘
```

The same applies to:

```js
Object.assign({}, user);
```

It is also a shallow copy.

---

# `keys()`, `values()`, `entries()` with `map()`

Because these methods return arrays, you can combine them with array methods.

Example:

```js
let prices = {
  laptop: 800,
  phone: 500,
  tablet: 300
};

let discountedPrices = Object.values(prices)
  .map(price => price * 0.9);

console.log(discountedPrices);
```

Output:

```js
[720, 450, 270]
```

---

# `Object.entries()` + `map()`

Suppose you want to increase every price:

```js
let prices = {
  laptop: 800,
  phone: 500,
  tablet: 300
};

let updatedPrices = Object.fromEntries(
  Object.entries(prices)
    .map(([product, price]) => [product, price * 1.1])
);

console.log(updatedPrices);
```

Output:

```js
{
  laptop: 880,
  phone: 550,
  tablet: 330
}
```

Here we use another useful method:

```js
Object.fromEntries()
```

It converts:

```js
[
  ["laptop", 880],
  ["phone", 550],
  ["tablet", 330]
]
```

back into:

```js
{
  laptop: 880,
  phone: 550,
  tablet: 330
}
```

This `entries()` → transform → `fromEntries()` pattern is very useful when manipulating objects.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What does `Object.keys()` return?

An array containing the object's **own enumerable property names**.

```js
Object.keys({ name: "Rahul", age: 25 });
```

Output:

```js
["name", "age"]
```

---

### 2. What does `Object.values()` return?

An array containing the object's **own enumerable property values**.

```js
Object.values({ name: "Rahul", age: 25 });
```

Output:

```js
["Rahul", 25]
```

---

### 3. What does `Object.entries()` return?

An array of `[key, value]` pairs.

```js
Object.entries({ name: "Rahul", age: 25 });
```

Output:

```js
[
  ["name", "Rahul"],
  ["age", 25]
]
```

---

## Medium

### 4. What is the output?

```js
let user = {
  name: "Rahul",
  age: 25
};

console.log(Object.keys(user).length);
```

Answer:

```text
2
```

---

### 5. What happens if two objects have the same property?

```js
let a = {
  name: "Rahul"
};

let b = {
  name: "Amit"
};

let result = {
  ...a,
  ...b
};

console.log(result);
```

Answer:

```js
{
  name: "Amit"
}
```

The **later property wins**.

---

### 6. What is the difference between these?

```js
Object.assign({}, user);
```

and:

```js
{
  ...user
}
```

Both create a **shallow copy** of the object.

For straightforward copying/merging, spread syntax is generally more concise.

---

### 7. Does `Object.assign()` mutate the source?

No.

```js
let source = {
  name: "Rahul"
};

let target = {};

Object.assign(target, source);
```

`source` isn't changed.

However, `Object.assign()` **does mutate its target object**.

```js
Object.assign(target, source);
```

changes `target`.

---

## Advanced

### 8. What is the output?

```js
let obj = {
  a: 1,
  b: 2
};

let result = Object.assign(
  {},
  obj,
  { b: 10, c: 3 }
);

console.log(result);
```

Answer:

```js
{
  a: 1,
  b: 10,
  c: 3
}
```

Because later properties overwrite earlier ones.

---

### 9. What is the output?

```js
let user = {
  name: "Rahul",
  address: {
    city: "Mumbai"
  }
};

let copy = { ...user };

copy.address.city = "Pune";

console.log(user.address.city);
```

Answer:

```text
Pune
```

Because spread performs a **shallow copy**, not a deep copy.

---

### 10. How would you loop through both keys and values?

```js
let user = {
  name: "Rahul",
  age: 25
};

Object.entries(user).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
```

Output:

```text
name: Rahul
age: 25
```

---

### 11. How would you create a new object while changing one property?

Given:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};
```

Answer:

```js
let updatedUser = {
  ...user,
  age: 26
};
```

Output:

```js
{
  name: "Rahul",
  age: 26,
  city: "Mumbai"
}
```

Original `user` remains unchanged.

---

# 🔥 Important Interview Trap

Understand this:

```js
let key = "name";

let user = {
  name: "Rahul"
};
```

### Get the keys:

```js
Object.keys(user);
```

```js
["name"]
```

### Get the values:

```js
Object.values(user);
```

```js
["Rahul"]
```

### Get both:

```js
Object.entries(user);
```

```js
[["name", "Rahul"]]
```

### Dynamically access:

```js
user[key];
```

```text
"Rahul"
```

### Dynamically create:

```js
let obj = {
  [key]: "Rahul"
};
```

```js
{
  name: "Rahul"
}
```

These concepts work together constantly.

---

# 🧠 Final Cheat Sheet

```js
let user = {
  name: "Rahul",
  age: 25
};
```

### Get keys

```js
Object.keys(user);

// ["name", "age"]
```

### Get values

```js
Object.values(user);

// ["Rahul", 25]
```

### Get key + value

```js
Object.entries(user);

// [["name", "Rahul"], ["age", 25]]
```

### Copy

```js
let copy = Object.assign({}, user);
```

or:

```js
let copy = { ...user };
```

### Merge

```js
let result = Object.assign({}, obj1, obj2);
```

or:

```js
let result = {
  ...obj1,
  ...obj2
};
```

### Update immutably

```js
let updated = {
  ...user,
  age: 26
};
```

### The mental model

```text
Object.keys()       →  🔑 keys
Object.values()     →  📦 values
Object.entries()    →  🔑 + 📦
Object.assign()     →  📋 copy / merge
Spread (...)        →  📋 copy / merge
```

**One interview sentence to remember:**

> `Object.keys()`, `Object.values()`, and `Object.entries()` convert an object's enumerable own properties into arrays; `Object.assign()` and object spread can copy/merge properties, with later properties overriding earlier ones, and both copies are shallow.
