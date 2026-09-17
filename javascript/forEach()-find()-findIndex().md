# `forEach()`, `find()`, and `findIndex()` in JavaScript

These three array methods are simple once you understand **what they return** and **what problem they solve**.

A good mental model:

```text
forEach()   → Do something for every item
find()      → Find the first matching item
findIndex() → Find the index of the first matching item
```

Let's understand each one carefully.

---

# 1. `forEach()`

`forEach()` is used when you want to **perform an action for every element in an array**.

### Basic example

```javascript id="x0a9ef"
const numbers = [10, 20, 30, 40];

numbers.forEach(number => {
    console.log(number);
});
```

Output:

```text id="g2p7jv"
10
20
30
40
```

The callback runs once for every element.

Think:

```text id="n5x0ws"
[10, 20, 30, 40]
       ↓
   forEach()
       ↓
10 → execute
20 → execute
30 → execute
40 → execute
```

---

# 2. `forEach()` Syntax

```javascript id="1o4v2h"
array.forEach((value, index, array) => {
    // code
});
```

The callback receives three parameters:

| Parameter | Meaning         |
| --------- | --------------- |
| `value`   | Current element |
| `index`   | Current index   |
| `array`   | Original array  |

Usually, you only need the first one.

---

## Example with index

```javascript id="m1q9yt"
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(index, fruit);
});
```

Output:

```text id="t4y9cy"
0 Apple
1 Banana
2 Mango
```

---

# 3. `forEach()` Does NOT Return a New Array

This is one of the most important differences between `forEach()` and `map()`.

```javascript id="fjr3q5"
const numbers = [1, 2, 3];

const result = numbers.forEach(number => {
    return number * 2;
});

console.log(result);
```

Output:

```text id="c9j2q7"
undefined
```

Even though the callback has `return`, `forEach()` itself returns `undefined`.

If you want a transformed array:

```javascript id="5s4j0k"
const result = numbers.map(number => number * 2);

console.log(result);
```

Output:

```text id="5m4g9a"
[2, 4, 6]
```

### Remember

```text
forEach() → perform an action
map()     → create a new transformed array
```

---

# 4. Practical Use Case — Logging Data

```javascript id="0c4e6x"
const users = ["Rahul", "Amit", "Priya"];

users.forEach(user => {
    console.log(`User: ${user}`);
});
```

Output:

```text id="2m3j7z"
User: Rahul
User: Amit
User: Priya
```

This is a good use case because you're simply **doing something** with each element.

---

# 5. Practical Use Case — Updating the DOM

For example:

```javascript id="x6q3py"
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(fruit => {
    console.log(`Adding ${fruit} to UI`);
});
```

In a real application, you might create DOM elements inside the callback.

---

# 6. Important: `forEach()` and `break`

You **cannot use `break` directly inside `forEach()`**.

❌ This is invalid:

```javascript id="8m0d4w"
const numbers = [1, 2, 3, 4];

numbers.forEach(number => {
    if (number === 3) {
        break;
    }

    console.log(number);
});
```

If you need to stop iteration early, use a `for...of` loop:

```javascript id="b3k4ap"
for (const number of numbers) {
    if (number === 3) {
        break;
    }

    console.log(number);
}
```

Output:

```text id="zhq4nf"
1
2
```

---

# 7. `forEach()` and `continue`

Similarly, you cannot directly use `continue` inside a `forEach()` callback.

Instead, you can use `return` from the callback to skip that iteration:

```javascript id="q3a6xk"
const numbers = [1, 2, 3, 4];

numbers.forEach(number => {
    if (number === 2) {
        return;
    }

    console.log(number);
});
```

Output:

```text id="h4u2e1"
1
3
4
```

Here `return` exits the **current callback**, not the entire `forEach()`.

---

# 8. `find()`

Now let's look at `find()`.

`find()` is used when you want to **find the first element that satisfies a condition**.

### Example

```javascript id="v7f4j2"
const numbers = [10, 20, 30, 40];

const result = numbers.find(number => number > 20);

console.log(result);
```

Output:

```text id="j7z1cx"
30
```

Why 30?

Because:

```text
10 > 20 → false
20 > 20 → false
30 > 20 → true  ← STOP
40 > 20 → not checked
```

`find()` stops as soon as it finds the first match.

---

# 9. `find()` with Objects

This is extremely useful in real applications.

Suppose:

```javascript id="c5r7wy"
const users = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Priya" }
];
```

Find the user with ID 2:

```javascript id="i5j0qg"
const user = users.find(user => user.id === 2);

console.log(user);
```

Output:

```javascript id="9m7v5n"
{
    id: 2,
    name: "Amit"
}
```

This is one of the most common uses of `find()`.

---

# 10. Practical Use Case — Find Product

Imagine:

```javascript id="5b4m7q"
const products = [
    { id: 101, name: "Laptop", price: 50000 },
    { id: 102, name: "Phone", price: 30000 },
    { id: 103, name: "Mouse", price: 1000 }
];
```

Find product `102`:

```javascript id="y6w9v8"
const product = products.find(product => product.id === 102);

console.log(product);
```

Output:

```javascript id="x4t2hm"
{
    id: 102,
    name: "Phone",
    price: 30000
}
```

---

# 11. What If `find()` Doesn't Find Anything?

It returns:

```javascript id="k1z5jp"
undefined
```

Example:

```javascript id="1f9xv6"
const numbers = [10, 20, 30];

const result = numbers.find(number => number > 100);

console.log(result);
```

Output:

```text id="e2s0xn"
undefined
```

This is important.

Compare:

```text
find()   → matching element OR undefined
filter() → matching elements OR []
```

---

# 12. `find()` vs `filter()`

This is a **very common interview question**.

### `find()`

Returns the **first matching element**.

```javascript id="2t1y0n"
const numbers = [10, 20, 30, 40];

const result = numbers.find(n => n > 20);

console.log(result);
```

```text
30
```

### `filter()`

Returns **all matching elements**.

```javascript id="g6j0fz"
const result = numbers.filter(n => n > 20);

console.log(result);
```

```text
[30, 40]
```

### Remember:

```text
find()
  ↓
First match

filter()
  ↓
All matches
```

---

# 13. `findIndex()`

`findIndex()` is similar to `find()`, but instead of returning the element, it returns the **index of the first matching element**.

Example:

```javascript id="0e7s7j"
const numbers = [10, 20, 30, 40];

const index = numbers.findIndex(number => number > 20);

console.log(index);
```

Output:

```text id="p4c7va"
2
```

Why?

```text
index 0 → 10 → false
index 1 → 20 → false
index 2 → 30 → true ← STOP
```

So it returns:

```text
2
```

---

# 14. `find()` vs `findIndex()`

Consider:

```javascript id="h2q8mw"
const users = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Amit" },
    { id: 103, name: "Priya" }
];
```

Using `find()`:

```javascript id="q8e2h4"
const user = users.find(user => user.id === 102);

console.log(user);
```

Result:

```javascript id="7r8g1p"
{ id: 102, name: "Amit" }
```

Using `findIndex()`:

```javascript id="q1e3j4"
const index = users.findIndex(user => user.id === 102);

console.log(index);
```

Result:

```text id="t8x0sw"
1
```

So:

```text
find()
→ "Give me the object."

findIndex()
→ "Tell me where the object is."
```

---

# 15. Practical Use Case — Update an Array Item

`findIndex()` is very useful when you need to **locate an item and then update it**.

Suppose:

```javascript id="7v1g4r"
const users = [
    { id: 1, name: "Rahul", age: 25 },
    { id: 2, name: "Amit", age: 30 },
    { id: 3, name: "Priya", age: 28 }
];
```

Find Amit's index:

```javascript id="q8g0pw"
const index = users.findIndex(user => user.id === 2);

console.log(index);
```

Output:

```text
1
```

Now you can create an updated array:

```javascript id="x9r3qf"
const updatedUsers = [...users];

updatedUsers[index] = {
    ...updatedUsers[index],
    age: 31
};

console.log(updatedUsers);
```

This combines concepts you've already learned:

```text
findIndex()
+
spread operator
+
object spread
```

---

# 16. `findIndex()` When Nothing Matches

If no element satisfies the condition:

```javascript id="c3n7yu"
const numbers = [10, 20, 30];

const index = numbers.findIndex(n => n > 100);

console.log(index);
```

Output:

```text
-1
```

So:

```text
find()      → undefined
findIndex() → -1
```

This is important to remember.

---

# 17. Comparing the Three

Let's use:

```javascript id="b7x2mz"
const numbers = [10, 20, 30, 40];
```

### `forEach()`

```javascript id="2v6f7q"
numbers.forEach(n => console.log(n));
```

Purpose:

```text
Perform an action on every element.
```

Return:

```text
undefined
```

---

### `find()`

```javascript id="z0q4hd"
numbers.find(n => n > 20);
```

Result:

```text
30
```

Purpose:

```text
Find first matching element.
```

---

### `findIndex()`

```javascript id="y6e4x8"
numbers.findIndex(n => n > 20);
```

Result:

```text
2
```

Purpose:

```text
Find index of first matching element.
```

---

# 18. Important Comparison Table

| Method        | Purpose                  | Returns               | Stops Early? |
| ------------- | ------------------------ | --------------------- | ------------ |
| `forEach()`   | Perform action           | `undefined`           | ❌            |
| `map()`       | Transform                | New array             | ❌            |
| `filter()`    | Select all matches       | New array             | ❌            |
| `find()`      | Find first match         | Element / `undefined` | ✅            |
| `findIndex()` | Find first match's index | Index / `-1`          | ✅            |

This table is worth remembering.

---

# 19. Practical Example — User Search

Suppose:

```javascript id="l7q5w2"
const users = [
    { id: 1, name: "Rahul", active: true },
    { id: 2, name: "Amit", active: false },
    { id: 3, name: "Priya", active: true }
];
```

### Print every user

Use `forEach()`:

```javascript id="g3s9kt"
users.forEach(user => {
    console.log(user.name);
});
```

---

### Find one user

Use `find()`:

```javascript id="g0m2as"
const user = users.find(user => user.id === 2);
```

Result:

```javascript id="e4v1w8"
{ id: 2, name: "Amit", active: false }
```

---

### Find the user's position

Use `findIndex()`:

```javascript id="f7n1bw"
const index = users.findIndex(user => user.id === 2);
```

Result:

```text
1
```

---

### Find all active users

Use `filter()`:

```javascript id="r8k3ps"
const activeUsers = users.filter(user => user.active);
```

Result:

```javascript id="h9f5qk"
[
    { id: 1, name: "Rahul", active: true },
    { id: 3, name: "Priya", active: true }
]
```

Now the differences become very clear.

---

# 20. One Important `forEach()` Async Trap

You may eventually encounter this:

```javascript id="j4k6z2"
users.forEach(async user => {
    await saveUser(user);
});

console.log("Done");
```

Many beginners expect `"Done"` to wait until all users are saved.

It doesn't.

`forEach()` doesn't wait for asynchronous callbacks.

For multiple async operations, a common pattern is:

```javascript id="q7s2mp"
await Promise.all(
    users.map(user => saveUser(user))
);
```

This is an advanced concept, but it's very useful to know for interviews.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `forEach()`?

**Answer:**

`forEach()` executes a callback once for each element in an array. It's mainly used when you want to perform an action for every element.

```javascript id="u5x1r9"
[1, 2, 3].forEach(n => {
    console.log(n);
});
```

It returns `undefined`.

---

### 2. What is `find()`?

**Answer:**

`find()` returns the **first element** that satisfies a condition.

```javascript id="5y8w0p"
const result = [10, 20, 30].find(n => n > 15);

console.log(result);
```

Output:

```text
20
```

---

### 3. What is `findIndex()`?

**Answer:**

`findIndex()` returns the index of the **first element** that satisfies a condition.

```javascript id="7x3m1k"
const result = [10, 20, 30].findIndex(n => n > 15);

console.log(result);
```

Output:

```text
1
```

---

## Intermediate

### 4. What happens when `find()` doesn't find anything?

It returns:

```javascript id="q0r5e8"
undefined
```

---

### 5. What happens when `findIndex()` doesn't find anything?

It returns:

```javascript id="x6p2v9"
-1
```

---

### 6. What is the difference between `find()` and `filter()`?

```text
find()
→ first matching element
→ element / undefined

filter()
→ all matching elements
→ array / []
```

Example:

```javascript id="z4m8q2"
const numbers = [10, 20, 30, 40];

numbers.find(n => n > 20);
// 30

numbers.filter(n => n > 20);
// [30, 40]
```

---

### 7. Can you use `break` inside `forEach()`?

No.

If you need to stop iteration early, use a `for`, `for...of`, or another appropriate method such as `find()`/`some()` depending on the goal.

---

# Advanced

### 8. What is the output?

```javascript id="a2v7k1"
const numbers = [1, 2, 3, 4, 5];

const result = numbers.find(n => {
    console.log(n);
    return n > 2;
});

console.log(result);
```

Output:

```text
1
2
3
3
```

Why?

`find()` stops after the first match.

It checks:

```text
1 → false
2 → false
3 → true → STOP
```

---

### 9. What is the output?

```javascript id="j8s4p6"
const numbers = [1, 2, 3, 4, 5];

const result = numbers.findIndex(n => n % 2 === 0);

console.log(result);
```

Answer:

```text
1
```

Because the first even number is `2`, and its index is `1`.

---

### 10. What's wrong with this?

```javascript id="r5w9c3"
const result = numbers.forEach(n => n * 2);

console.log(result);
```

Answer:

`forEach()` doesn't create a transformed array and returns `undefined`.

Use:

```javascript id="f2k6v8"
const result = numbers.map(n => n * 2);
```

---

### 11. Which method would you use?

> "I need to get the first user whose ID is 10."

```javascript id="u3j7m2"
users.find(user => user.id === 10);
```

---

> "I need all users whose age is greater than 18."

```javascript id="n9k4p1"
users.filter(user => user.age > 18);
```

---

> "I need the position of the user whose ID is 10."

```javascript id="w6t2r8"
users.findIndex(user => user.id === 10);
```

---

> "I need to print every user's name."

```javascript id="k1v5s9"
users.forEach(user => {
    console.log(user.name);
});
```

---

# 🧠 Final Mental Model

Keep this in your head:

```text
forEach()
   ↓
"Do something with EVERY item."


find()
   ↓
"Give me the FIRST item that matches."


findIndex()
   ↓
"Give me the POSITION of the FIRST item that matches."
```

And your growing array-method cheat sheet is now:

```text
map()       → Transform every item
filter()    → Keep matching items
reduce()    → Build one final result
forEach()   → Perform an action on every item
find()      → Get first matching item
findIndex() → Get index of first matching item
```

### ⭐ Interview shortcut

If the requirement says:

> **"every"** → think `forEach()` / `map()`

> **"transform"** → `map()`

> **"all matching"** → `filter()`

> **"first matching"** → `find()`

> **"position of first matching"** → `findIndex()`

> **"one final result"** → `reduce()`
