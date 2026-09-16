# `map()` in JavaScript

`map()` is one of the **most important array methods** in JavaScript.

If you work with JavaScript, React, Node.js, or APIs, you'll use it constantly.

The simple definition is:

> **`map()` takes every element of an array, transforms it, and returns a new array containing the transformed values.**

---

# 1. Basic Example

Suppose we have:

```javascript
const numbers = [1, 2, 3, 4, 5];
```

We want to double every number.

Without `map()`:

```javascript
const numbers = [1, 2, 3, 4, 5];
const result = [];

for (let i = 0; i < numbers.length; i++) {
  result.push(numbers[i] * 2);
}

console.log(result);
```

Output:

```text
[2, 4, 6, 8, 10]
```

With `map()`:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (number) {
  return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6, 8, 10]
```

Much cleaner.

---

# 2. How `map()` Works

Think of it like this:

```text
Original array
[1, 2, 3, 4, 5]

      map()
       ↓

Transform each value
1 → 2
2 → 4
3 → 6
4 → 8
5 → 10

       ↓

New array
[2, 4, 6, 8, 10]
```

The key word is **transform**.

---

# 3. Syntax

```javascript
array.map(callback);
```

For example:

```javascript
const result = numbers.map(function (value) {
  return value * 2;
});
```

The callback function is executed once for every element.

---

# 4. Using Arrow Functions

Since you've just learned arrow functions, you'll commonly see:

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.map((number) => number * 2);

console.log(result);
```

Output:

```text
[2, 4, 6, 8, 10]
```

This is probably the form you'll see most often.

---

# 5. `map()` Does NOT Modify the Original Array

This is important.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((number) => number * 2);

console.log(numbers);
console.log(result);
```

Output:

```text
[1, 2, 3]

[2, 4, 6]
```

The original array remains unchanged.

```text
numbers
[1, 2, 3]
    │
    │ map()
    ↓
result
[2, 4, 6]
```

`map()` creates a **new array**.

---

# 6. `map()` Must Return Something

This is a very common beginner mistake.

### Correct

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((number) => {
  return number * 2;
});

console.log(result);
```

Output:

```text
[2, 4, 6]
```

### Incorrect

```javascript
const result = numbers.map((number) => {
  number * 2;
});

console.log(result);
```

Output:

```text
[undefined, undefined, undefined]
```

Why?

Because:

```javascript
{
  number * 2;
}
```

doesn't return anything.

Remember the arrow-function rule:

```javascript
(number) => number * 2;
```

has an **implicit return**.

But:

```javascript
(number) => {
  number * 2;
};
```

does **not** automatically return the expression.

You need:

```javascript
(number) => {
  return number * 2;
};
```

---

# 7. `map()` Callback Parameters

The callback can receive three parameters:

```javascript
array.map((value, index, array) => {
  // ...
});
```

They are:

| Parameter | Meaning         |
| --------- | --------------- |
| `value`   | Current element |
| `index`   | Current index   |
| `array`   | Original array  |

---

## Example

```javascript
const fruits = ["Apple", "Banana", "Mango"];

const result = fruits.map((fruit, index) => {
  return `${index}: ${fruit}`;
});

console.log(result);
```

Output:

```javascript
["0: Apple", "1: Banana", "2: Mango"];
```

---

# 8. Using the Index

You can use the index when transforming data.

```javascript
const names = ["Rahul", "Amit", "Priya"];

const result = names.map((name, index) => {
  return {
    id: index + 1,
    name: name,
  };
});

console.log(result);
```

Output:

```javascript
[
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" },
];
```

This is a very practical use case.

---

# 9. `map()` with Objects

This is extremely common when working with API data.

Suppose:

```javascript
const users = [
  {
    name: "Rahul",
    age: 25,
  },
  {
    name: "Amit",
    age: 30,
  },
  {
    name: "Priya",
    age: 28,
  },
];
```

You only want the names.

```javascript
const names = users.map((user) => user.name);

console.log(names);
```

Output:

```javascript
["Rahul", "Amit", "Priya"];
```

Think:

```text
User object → name

{ name: "Rahul" } → "Rahul"
{ name: "Amit" }  → "Amit"
{ name: "Priya" } → "Priya"
```

---

# 10. Practical Use Case — API Response

Imagine your backend returns:

```javascript
const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
  },
];
```

You want to display product names:

```javascript
const productNames = products.map((product) => product.name);

console.log(productNames);
```

Output:

```text
["Laptop", "Phone"]
```

Or you could transform each product:

```javascript
const updatedProducts = products.map((product) => ({
  ...product,
  priceWithTax: product.price * 1.18,
}));

console.log(updatedProducts);
```

Output conceptually:

```javascript
[
  {
    id: 1,
    name: "Laptop",
    price: 50000,
    priceWithTax: 59000,
  },
  {
    id: 2,
    name: "Phone",
    price: 30000,
    priceWithTax: 35400,
  },
];
```

Notice how this combines concepts you've already learned:

```text
map()
  +
arrow function
  +
spread operator
```

---

# 11. Practical Use Case — React

This is one of the most important real-world uses.

Suppose:

```javascript
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" },
];
```

In React, you commonly use:

```jsx
users.map((user) => <div key={user.id}>{user.name}</div>);
```

Conceptually:

```text
users
 ↓
map()
 ↓
<div>Rahul</div>
<div>Amit</div>
<div>Priya</div>
```

You're transforming each JavaScript object into a React element.

---

# 12. `map()` vs `forEach()`

This is a **very common interview question**.

### `map()`

Returns a new array.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => n * 2);

console.log(result);
```

```text
[2, 4, 6]
```

### `forEach()`

Does not return a new transformed array.

```javascript
const numbers = [1, 2, 3];

const result = numbers.forEach((n) => {
  console.log(n * 2);
});

console.log(result);
```

Output:

```text
2
4
6
undefined
```

### Easy rule

> **Need a new array? → `map()`**

> **Just want to perform an action for each element? → `forEach()`**

---

# 13. `map()` vs `filter()`

Another important interview question.

### `map()`

**Transforms** every element.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.map((n) => n * 10);

console.log(result);
```

```text
[10, 20, 30, 40]
```

Same number of elements.

---

### `filter()`

**Selects** elements based on a condition.

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((n) => n > 2);

console.log(result);
```

```text
[3, 4]
```

Potentially fewer elements.

### Remember

```text
map()
 ↓
Transform

filter()
 ↓
Select
```

---

# 14. `map()` vs `reduce()`

### `map()`

Produces an array.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => n * 2);

console.log(result);
```

```text
[2, 4, 6]
```

### `reduce()`

Usually combines many values into one result.

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((sum, n) => sum + n, 0);

console.log(result);
```

```text
6
```

Think:

```text
map()
[1,2,3] → [2,4,6]

filter()
[1,2,3] → [2,3]

reduce()
[1,2,3] → 6
```

---

# 15. Can `map()` Change the Array Length?

Normally, no.

If you start with:

```javascript
[1, 2, 3, 4, 5];
```

`map()` gives you:

```javascript
[...5 elements...]
```

One output value is produced for each input element.

For example:

```javascript
const result = [1, 2, 3].map((n) => n * 2);
```

Result:

```text
[2, 4, 6]
```

Same length.

If you want to remove elements, use `filter()`.

---

# 16. `map()` on an Empty Array

```javascript
const numbers = [];

const result = numbers.map((n) => n * 2);

console.log(result);
```

Output:

```javascript
[];
```

---

# 17. A Common Mistake

Don't use `map()` if you don't need its returned array.

For example:

```javascript
const users = ["Rahul", "Amit", "Priya"];

users.map((user) => {
  console.log(user);
});
```

This technically works, but you're using `map()` only for its side effect.

Better:

```javascript
users.forEach((user) => {
  console.log(user);
});
```

Because the intent is clearer.

---

# 18. Chaining `map()` with Other Methods

This is where array methods become powerful.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((n) => n % 2 === 0).map((n) => n * 10);

console.log(result);
```

Step 1:

```text
[1,2,3,4,5,6]
       ↓ filter even
[2,4,6]
```

Step 2:

```text
[2,4,6]
  ↓ map ×10
[20,40,60]
```

Final:

```text
[20, 40, 60]
```

This pattern is very common in real applications.

---

# 19. Important: `map()` Is Synchronous

For a normal callback:

```javascript
const result = numbers.map((n) => n * 2);
```

`map()` immediately creates the resulting array.

But there's an important async trap.

If you do:

```javascript
const result = users.map(async (user) => {
  return await fetchUser(user.id);
});
```

you don't get the actual users.

You get:

```text
[Promise, Promise, Promise]
```

For multiple asynchronous operations, you commonly use:

```javascript
const result = await Promise.all(users.map((user) => fetchUser(user.id)));
```

This is an **advanced but very useful interview concept**.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `map()`?

**Answer:**

`map()` is an array method that executes a callback for each element and returns a **new array** containing the callback's returned values.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => n * 2);
```

Result:

```text
[2, 4, 6]
```

---

### 2. Does `map()` modify the original array?

**Answer:**

No. `map()` returns a new array.

```javascript
const arr = [1, 2, 3];

const result = arr.map((n) => n * 2);

console.log(arr); // [1, 2, 3]
console.log(result); // [2, 4, 6]
```

---

### 3. What does `map()` return?

**Answer:**

A new array.

---

### 4. How many times is the callback executed?

For a normal array, once for each existing element.

```javascript
[10, 20, 30].map(...)
```

The callback executes 3 times.

---

# Intermediate

### 5. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => {
  n * 2;
});

console.log(result);
```

Answer:

```text
[undefined, undefined, undefined]
```

Because the callback doesn't return anything.

---

### 6. What is the difference between these?

```javascript
numbers.map((n) => n * 2);
```

and:

```javascript
numbers.map((n) => {
  return n * 2;
});
```

They produce the same result.

The first uses **implicit return**.

The second uses **explicit return**.

---

### 7. What are the parameters of the `map()` callback?

```javascript
array.map((value, index, array) => {});
```

They are:

```text
value → current element
index → current index
array → original array
```

---

### 8. What's the difference between `map()` and `forEach()`?

**Answer:**

`map()` returns a new array.

`forEach()` is generally used when you simply want to perform an action for every element and doesn't produce a transformed array.

---

# Advanced

### 9. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => [n, n * 2]);

console.log(result);
```

Answer:

```javascript
[
  [1, 2],
  [2, 4],
  [3, 6],
];
```

Why?

Each callback returns an array, so `map()` creates an array **containing those arrays**.

`map()` does not automatically flatten the result.

---

### 10. What happens here?

```javascript
const users = [{ name: "Rahul" }, { name: "Amit" }];

const result = users.map((user) => user.name);

console.log(result);
```

Answer:

```javascript
["Rahul", "Amit"];
```

`map()` transforms each object into its `name` value.

---

### 11. What happens when using `async` with `map()`?

```javascript
const result = users.map(async (user) => {
  return await getUser(user.id);
});
```

Answer:

`result` is an array of promises:

```javascript
[Promise, Promise, ...]
```

To wait for all of them:

```javascript
const result = await Promise.all(users.map((user) => getUser(user.id)));
```

---

### 12. What is the difference between `map()` and `filter()`?

**Answer:**

```text
map()
→ transforms every element
→ output length normally equals input length

filter()
→ selects elements based on a condition
→ output can have fewer elements
```

Example:

```javascript
const numbers = [1, 2, 3, 4];

numbers.map((n) => n * 2);
// [2, 4, 6, 8]

numbers.filter((n) => n > 2);
// [3, 4]
```

---

# ⭐ Interview Shortcut

If an interviewer asks:

> **"When would you use `map()`?"**

A good answer is:

> **"I use `map()` when I need to transform every element of an array and create a new array from the results. For example, converting API objects into a list of names, calculating new values, or rendering a list of components in React."**

And remember this:

```text
map()     → Transform
filter()  → Select
reduce()  → Combine
forEach() → Perform an action
```

That four-way distinction is **very important for JavaScript interviews**.
