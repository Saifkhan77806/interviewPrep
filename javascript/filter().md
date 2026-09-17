# `filter()` in JavaScript

`filter()` is one of the most important **array methods** in JavaScript.

The simplest definition:

> **`filter()` creates a new array containing only the elements that pass a condition.**

Think:

```text
Original array
      ↓
   filter()
      ↓
Keep elements that satisfy condition
      ↓
New array
```

---

# 1. Basic Example

Suppose we have:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
```

We want only the even numbers.

```javascript
const result = numbers.filter((number) => number % 2 === 0);

console.log(result);
```

Output:

```text
[2, 4, 6]
```

The callback is executed for every element:

```text
1 → false → ❌
2 → true  → ✅
3 → false → ❌
4 → true  → ✅
5 → false → ❌
6 → true  → ✅
```

Final result:

```text
[2, 4, 6]
```

---

# 2. How `filter()` Works

The important thing is:

> The callback must return something that can be treated as `true` or `false`.

For example:

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter((number) => number > 20);
```

Internally:

```text
10 > 20 → false → remove
20 > 20 → false → remove
30 > 20 → true  → keep
40 > 20 → true  → keep
```

Result:

```text
[30, 40]
```

---

# 3. Syntax

```javascript
array.filter(callback);
```

The callback can receive three arguments:

```javascript
array.filter((value, index, array) => {
  // condition
});
```

| Parameter | Meaning         |
| --------- | --------------- |
| `value`   | Current element |
| `index`   | Current index   |
| `array`   | Original array  |

Usually, you'll only need `value`.

---

# 4. `filter()` Does Not Modify the Original Array

This is important.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((n) => n % 2 === 0);

console.log(numbers);
console.log(evenNumbers);
```

Output:

```text
[1, 2, 3, 4, 5]

[2, 4]
```

The original array remains unchanged.

---

# 5. `filter()` vs `map()`

Since you just learned `map()`, this distinction is extremely important.

## `map()` → Transform

```javascript
const numbers = [1, 2, 3];

const result = numbers.map((n) => n * 10);

console.log(result);
```

Output:

```text
[10, 20, 30]
```

Every element gets transformed.

---

## `filter()` → Select

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter((n) => n > 1);

console.log(result);
```

Output:

```text
[2, 3]
```

Elements are selected based on a condition.

### Remember:

```text
map()
 ↓
"What should each item become?"

filter()
 ↓
"Which items should I keep?"
```

---

# 6. Filtering Objects

This is where `filter()` becomes very useful in real applications.

Suppose:

```javascript
const users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 17 },
  { name: "Priya", age: 30 },
  { name: "John", age: 15 },
];
```

We want users who are adults.

```javascript
const adults = users.filter((user) => user.age >= 18);

console.log(adults);
```

Output:

```javascript
[
  { name: "Rahul", age: 25 },
  { name: "Priya", age: 30 },
];
```

The objects themselves are kept.

---

# 7. Practical Use Case — Search

Suppose you have products:

```javascript
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];
```

You want products below ₹5,000:

```javascript
const affordableProducts = products.filter((product) => product.price < 5000);

console.log(affordableProducts);
```

Output:

```javascript
[
  { name: "Mouse", price: 1000 },
  { name: "Keyboard", price: 2000 },
];
```

This pattern is common in:

- product filtering
- search results
- user lists
- dashboards
- tables
- API data processing

---

# 8. Practical Use Case — Search by Name

```javascript
const users = [
  { name: "Rahul" },
  { name: "Amit" },
  { name: "Priya" },
  { name: "Rohan" },
];

const search = "ra";

const result = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase()),
);

console.log(result);
```

Result:

```javascript
[{ name: "Rahul" }, { name: "Rohan" }];
```

This is similar to what you might implement for a search box.

---

# 9. Practical Use Case — Removing an Item

Suppose:

```javascript
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Priya" },
];
```

You want to remove the user with `id = 2`.

You can create a new array:

```javascript
const updatedUsers = users.filter((user) => user.id !== 2);

console.log(updatedUsers);
```

Output:

```javascript
[
  { id: 1, name: "Rahul" },
  { id: 3, name: "Priya" },
];
```

Notice:

```javascript
user.id !== 2;
```

means:

> Keep everything whose ID is **not** 2.

This is very common in React state updates.

---

# 10. Filtering with Strings

You can filter strings too.

```javascript
const names = ["Rahul", "Amit", "Rohan", "Priya", "Raj"];

const result = names.filter((name) => name.startsWith("R"));

console.log(result);
```

Output:

```text
["Rahul", "Rohan", "Raj"]
```

---

# 11. Filtering Falsy Values

Here's a useful trick:

```javascript
const values = [0, 1, false, true, "", "Hello", null, undefined];

const result = values.filter(Boolean);

console.log(result);
```

Output:

```javascript
[1, true, "Hello"];
```

Why?

`Boolean` converts each value into `true`/`false`.

```text
0         → false ❌
1         → true  ✅
false     → false ❌
true      → true  ✅
""        → false ❌
"Hello"   → true  ✅
null      → false ❌
undefined → false ❌
```

So:

```javascript
filter(Boolean);
```

means roughly:

> Keep only truthy values.

---

# 12. Empty Result

What happens if nothing passes the condition?

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter((n) => n > 100);

console.log(result);
```

Output:

```javascript
[];
```

`filter()` always returns an array.

Even if no elements match.

---

# 13. All Elements Pass

If everything passes:

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter((n) => n > 0);

console.log(result);
```

Output:

```text
[1, 2, 3]
```

It's a **new array**, even when all elements are retained.

---

# 14. `filter()` Doesn't Change the Array Length Directly

Unlike `map()`, the resulting array can have:

```text
0 elements
1 element
2 elements
...
all elements
```

Example:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.filter((n) => n > 3);
```

Result:

```text
[4, 5]
```

So:

```text
Input length  = 5
Output length = 2
```

---

# 15. `filter()` and Truthy/Falsy

Because the callback result is interpreted as truthy/falsy, this works:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((n) => n % 2);

console.log(result);
```

Output:

```text
[1, 3]
```

Why?

```text
1 % 2 → 1 → truthy → keep
2 % 2 → 0 → falsy  → remove
3 % 2 → 1 → truthy → keep
4 % 2 → 0 → falsy  → remove
```

Although this works, writing:

```javascript
n % 2 !== 0;
```

is generally clearer.

---

# 16. `filter()` + `map()`

This is a very common pattern.

Suppose:

```javascript
const users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 17 },
  { name: "Priya", age: 30 },
];
```

First, get adults:

```javascript
const adults = users.filter((user) => user.age >= 18);
```

Then get their names:

```javascript
const names = adults.map((user) => user.name);
```

Result:

```javascript
["Rahul", "Priya"];
```

You can chain them:

```javascript
const names = users.filter((user) => user.age >= 18).map((user) => user.name);

console.log(names);
```

Output:

```text
["Rahul", "Priya"]
```

Think:

```text
users
  ↓
filter()
  ↓
adult users
  ↓
map()
  ↓
adult user names
```

---

# 17. `filter()` + `map()` + `reduce()`

Modern JavaScript often combines array methods.

```javascript
const products = [
  { name: "Laptop", price: 50000, available: true },
  { name: "Phone", price: 30000, available: false },
  { name: "Mouse", price: 1000, available: true },
];
```

Find the total price of available products:

```javascript
const total = products
  .filter((product) => product.available)
  .map((product) => product.price)
  .reduce((sum, price) => sum + price, 0);

console.log(total);
```

Output:

```text
51000
```

Step-by-step:

```text
filter()
↓
Laptop, Mouse

map()
↓
50000, 1000

reduce()
↓
51000
```

This is a powerful pattern to understand.

---

# 18. `filter()` vs `find()`

Another common interview question.

### `filter()`

Returns **all matching elements**.

```javascript
const users = [
  { id: 1, name: "Rahul" },
  { id: 2, name: "Amit" },
  { id: 3, name: "Rahul" },
];

const result = users.filter((user) => user.name === "Rahul");

console.log(result);
```

Output:

```javascript
[
  { id: 1, name: "Rahul" },
  { id: 3, name: "Rahul" },
];
```

---

### `find()`

Returns the **first matching element**.

```javascript
const result = users.find((user) => user.name === "Rahul");

console.log(result);
```

Output:

```javascript
{ id: 1, name: "Rahul" }
```

If nothing is found:

```text
filter() → []
find()   → undefined
```

### Remember:

```text
filter → Give me ALL matches
find   → Give me the FIRST match
```

---

# 19. `filter()` vs `some()`

### `filter()`

Returns matching elements:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((n) => n > 2);

console.log(result);
```

```text
[3, 4]
```

### `some()`

Returns a boolean:

```javascript
const result = numbers.some((n) => n > 2);

console.log(result);
```

```text
true
```

Think:

```text
filter → "Which ones?"
some   → "Does at least one exist?"
```

---

# 20. `filter()` vs `every()`

`every()` asks:

> Do **all** elements satisfy this condition?

```javascript
const numbers = [2, 4, 6, 8];

console.log(numbers.every((n) => n % 2 === 0));
```

Output:

```text
true
```

Comparison:

```text
filter() → returns elements
some()   → checks if at least one matches
every()  → checks if all match
```

---

# ⚠️ Common Mistake

Don't confuse the condition with the returned element.

This:

```javascript
const result = numbers.filter((n) => n > 10);
```

doesn't return:

```text
true / false / true / false
```

It returns the **actual elements** for which the condition is true.

For example:

```javascript
[5, 15, 20].filter((n) => n > 10);
```

returns:

```text
[15, 20]
```

Not:

```text
[false, true, true]
```

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `filter()`?

**Answer:**

`filter()` is an array method that creates a new array containing elements that satisfy a specified condition.

```javascript
const result = [1, 2, 3, 4].filter((n) => n > 2);

console.log(result);
```

```text
[3, 4]
```

---

### 2. Does `filter()` modify the original array?

**Answer:**

No. It returns a new array.

```javascript
const arr = [1, 2, 3];

const result = arr.filter((n) => n > 1);

console.log(arr); // [1, 2, 3]
console.log(result); // [2, 3]
```

---

### 3. What does `filter()` return if nothing matches?

**Answer:**

An empty array:

```javascript
[];
```

Example:

```javascript
[1, 2, 3].filter((n) => n > 100);
```

Result:

```javascript
[];
```

---

## Intermediate

### 4. What is the output?

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter((n) => n % 2 === 0);

console.log(result);
```

Answer:

```text
[2, 4]
```

---

### 5. What is the difference between `map()` and `filter()`?

**Answer:**

```text
map()
→ transforms elements
→ normally same number of elements

filter()
→ selects elements
→ can return fewer elements
```

Example:

```javascript
[1, 2, 3].map((n) => n * 2);
// [2, 4, 6]

[1, 2, 3].filter((n) => n > 1);
// [2, 3]
```

---

### 6. What is the difference between `filter()` and `find()`?

**Answer:**

```text
filter() → returns ALL matching elements as an array
find()   → returns FIRST matching element
```

If nothing matches:

```text
filter() → []
find()   → undefined
```

---

### 7. What is the output?

```javascript
const values = [0, 1, false, 2, "", 3];

console.log(values.filter(Boolean));
```

Answer:

```text
[1, 2, 3]
```

It removes falsy values.

---

## Advanced

### 8. What is the output?

```javascript
const users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 17 },
  { name: "Priya", age: 30 },
];

const result = users.filter((user) => user.age >= 18).map((user) => user.name);

console.log(result);
```

Answer:

```text
["Rahul", "Priya"]
```

First `filter()` selects adults, then `map()` extracts their names.

---

### 9. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.filter((n) => {
  n > 1;
});

console.log(result);
```

Answer:

```text
[]
```

Why?

Because the callback doesn't return anything.

You need:

```javascript
const result = numbers.filter((n) => {
  return n > 1;
});
```

or:

```javascript
const result = numbers.filter((n) => n > 1);
```

---

### 10. What is the output?

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.filter((value, index) => {
  return index % 2 === 0;
});

console.log(result);
```

Answer:

```text
[1, 3]
```

Because indexes `0` and `2` are even.

---

### 11. Can `filter()` be chained with other array methods?

**Answer:** Yes.

For example:

```javascript
const result = products
  .filter((product) => product.price < 5000)
  .map((product) => product.name);
```

This is very common in production JavaScript.

---

# 🧠 The Array Methods You Should Know

At this point, you have learned `map()` and `filter()`. Keep this mental model:

```text
┌──────────┬──────────────────────────────┐
│ map()    │ Transform every element      │
├──────────┼──────────────────────────────┤
│ filter() │ Keep elements matching test  │
├──────────┼──────────────────────────────┤
│ find()   │ Find first matching element  │
├──────────┼──────────────────────────────┤
│ some()   │ Does at least one match?     │
├──────────┼──────────────────────────────┤
│ every()  │ Do all elements match?       │
├──────────┼──────────────────────────────┤
│ forEach()│ Perform action for each      │
├──────────┼──────────────────────────────┤
│ reduce() │ Combine values into one      │
└──────────┴──────────────────────────────┘
```

### ⭐ Most important distinction

```javascript
// Transform
numbers.map((n) => n * 2);

// Select
numbers.filter((n) => n > 10);

// Find one
numbers.find((n) => n > 10);

// Check at least one
numbers.some((n) => n > 10);

// Check all
numbers.every((n) => n > 10);
```

If you remember **`map = transform`** and **`filter = select`**, you're already halfway to mastering these array methods.
