Absolutely 👍 These three array methods are **very important for JavaScript interviews**, and they are easy to confuse:

* `sort()` → **rearranges** elements
* `slice()` → **copies/extracts** part of an array
* `splice()` → **adds/removes/replaces** elements in the original array

---

# 1. `sort()`

`sort()` is used to **sort the elements of an array**.

### Basic syntax

```js
array.sort(compareFunction);
```

### Example

```js
let fruits = ["banana", "apple", "mango"];

fruits.sort();

console.log(fruits);
```

Output:

```js
["apple", "banana", "mango"]
```

### Important: `sort()` mutates the original array

```js
let numbers = [30, 10, 5, 20];

numbers.sort();

console.log(numbers);
```

You might expect:

```js
[5, 10, 20, 30]
```

But you actually get:

```js
[10, 20, 30, 5]
```

Why?

By default, JavaScript converts elements to **strings** and sorts them lexicographically.

It's effectively comparing:

```text
"30"
"10"
"5"
"20"
```

So `"10"` comes before `"20"`, and `"5"` comes after `"30"`.

---

## Numeric sorting

For numbers, provide a compare function.

### Ascending

```js
let numbers = [30, 10, 5, 20];

numbers.sort((a, b) => a - b);

console.log(numbers);
```

Output:

```js
[5, 10, 20, 30]
```

### Descending

```js
numbers.sort((a, b) => b - a);

console.log(numbers);
```

Output:

```js
[30, 20, 10, 5]
```

### How does `(a, b) => a - b` work?

The sorting algorithm uses the return value:

| Result   | Meaning                   |
| -------- | ------------------------- |
| negative | `a` comes before `b`      |
| positive | `b` comes before `a`      |
| `0`      | keep their relative order |

Example:

```js
a = 10
b = 20

a - b = -10
```

Negative → `10` comes before `20`.

---

## Sorting objects

Very common in real applications:

```js
let users = [
  { name: "Rahul", age: 30 },
  { name: "Amit", age: 20 },
  { name: "Priya", age: 25 }
];

users.sort((a, b) => a.age - b.age);

console.log(users);
```

Output:

```js
[
  { name: "Amit", age: 20 },
  { name: "Priya", age: 25 },
  { name: "Rahul", age: 30 }
]
```

### Use cases of `sort()`

* Sort products by price
* Sort users by age
* Sort employees by salary
* Sort dates
* Sort search results
* Sort scores/rankings

---

# 2. `slice()`

`slice()` is used to **extract/copy a portion of an array**.

### Syntax

```js
array.slice(start, end);
```

Important:

> `end` is **not included**.

---

### Example

```js
let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 4);

console.log(result);
```

Output:

```js
[20, 30, 40]
```

Indexes:

```text
       0   1   2   3   4
      10  20  30  40  50
          ↑       ↑
        start    end
```

`slice(1, 4)` means:

```text
start at index 1
stop before index 4
```

Therefore:

```js
[20, 30, 40]
```

---

## `slice()` does NOT modify the original array

```js
let numbers = [10, 20, 30, 40];

let result = numbers.slice(1, 3);

console.log(result);
console.log(numbers);
```

Output:

```js
[20, 30]
[10, 20, 30, 40]
```

This is a major difference from `splice()`.

---

## `slice()` with only start

```js
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(2));
```

Output:

```js
[30, 40, 50]
```

It means:

```text
from index 2 until the end
```

---

## `slice()` with negative indexes

Negative indexes count from the end.

```js
let numbers = [10, 20, 30, 40, 50];

console.log(numbers.slice(-2));
```

Output:

```js
[40, 50]
```

Another example:

```js
console.log(numbers.slice(1, -1));
```

Output:

```js
[20, 30, 40]
```

---

## Use cases of `slice()`

### Get first 3 elements

```js
let numbers = [10, 20, 30, 40, 50];

let firstThree = numbers.slice(0, 3);

console.log(firstThree);
```

### Get last 2 elements

```js
let lastTwo = numbers.slice(-2);
```

### Create a shallow copy

```js
let copy = numbers.slice();
```

Now:

```js
copy !== numbers
```

because they are different arrays.

---

# 3. `splice()`

`splice()` is used to **add, remove, or replace elements** in an array.

### Syntax

```js
array.splice(start, deleteCount, item1, item2, ...);
```

This one is extremely important:

> `splice()` **changes the original array**.

---

# Removing elements with `splice()`

```js
let numbers = [10, 20, 30, 40, 50];

let removed = numbers.splice(1, 2);

console.log(removed);
console.log(numbers);
```

Output:

```js
[20, 30]
[10, 40, 50]
```

Let's understand:

```js
numbers.splice(1, 2);
```

means:

```text
start at index 1
remove 2 elements
```

Before:

```text
[10, 20, 30, 40, 50]
     ↑   ↑
   remove these
```

After:

```text
[10, 40, 50]
```

And `splice()` returns the elements that were removed:

```js
[20, 30]
```

---

# Adding elements with `splice()`

You can use `deleteCount = 0`.

```js
let numbers = [10, 20, 40, 50];

numbers.splice(2, 0, 30);

console.log(numbers);
```

Output:

```js
[10, 20, 30, 40, 50]
```

Meaning:

```js
splice(2, 0, 30)
```

```text
index 2
↓
[10, 20, 40, 50]

insert 30
↓
[10, 20, 30, 40, 50]
```

---

# Adding multiple elements

```js
let numbers = [10, 50];

numbers.splice(1, 0, 20, 30, 40);

console.log(numbers);
```

Output:

```js
[10, 20, 30, 40, 50]
```

---

# Replacing elements

`splice()` can remove and add at the same time.

```js
let fruits = ["apple", "banana", "mango"];

fruits.splice(1, 1, "orange");

console.log(fruits);
```

Output:

```js
["apple", "orange", "mango"]
```

Explanation:

```js
splice(1, 1, "orange")
```

means:

```text
start at index 1
remove 1 element
add "orange"
```

So:

```text
["apple", "banana", "mango"]
          ↓
["apple", "orange", "mango"]
```

---

# `sort()` vs `slice()` vs `splice()`

This is the most important comparison:

| Method     | Purpose            | Changes original? | Returns          |
| ---------- | ------------------ | ----------------: | ---------------- |
| `sort()`   | Sort array         |             ✅ Yes | Sorted array     |
| `slice()`  | Extract/copy       |              ❌ No | New array        |
| `splice()` | Add/remove/replace |             ✅ Yes | Removed elements |

### Easy memory trick

```text
sort   → rearrange
slice  → take a piece
splice → modify the array
```

---

# `slice()` vs `splice()` — Interview Favorite

These two are frequently asked together.

### `slice()`

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.slice(1, 3);

console.log(result);
console.log(arr);
```

Output:

```js
[2, 3]
[1, 2, 3, 4, 5]
```

Original unchanged.

---

### `splice()`

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.splice(1, 2);

console.log(result);
console.log(arr);
```

Output:

```js
[2, 3]
[1, 4, 5]
```

Original changed.

### Remember:

```text
slice  → doesn't mutate
splice → mutates
```

---

# Negative indexes in `splice()`

Just like `slice()`, `splice()` supports negative indexes.

```js
let numbers = [10, 20, 30, 40, 50];

numbers.splice(-2, 1);

console.log(numbers);
```

Output:

```js
[10, 20, 30, 50]
```

`-2` refers to:

```text
10  20  30  40  50
          -3  -2  -1
```

So `40` is removed.

---

# Important Interview Example

What is the output?

```js
let arr = [1, 2, 3, 4, 5];

let result = arr.splice(2, 1);

console.log(result);
console.log(arr);
```

Answer:

```js
[3]
[1, 2, 4, 5]
```

Why?

```js
splice(2, 1)
```

means:

```text
start = index 2
deleteCount = 1
```

Index `2` contains `3`.

---

# Another Important Example

```js
let arr = [1, 2, 3, 4, 5];

console.log(arr.slice(1, 4));
console.log(arr);
```

Output:

```js
[2, 3, 4]
[1, 2, 3, 4, 5]
```

Because `slice()` does not mutate.

---

# One More Interview Trap: `sort()` Mutation

```js
let numbers = [3, 1, 2];

let sorted = numbers.sort();

console.log(sorted);
console.log(numbers);
```

Output:

```js
[1, 2, 3]
[1, 2, 3]
```

Both show the same sorted contents because `sort()` modifies the original array.

If you want to preserve the original:

```js
let numbers = [3, 1, 2];

let sorted = [...numbers].sort((a, b) => a - b);

console.log(sorted);
console.log(numbers);
```

Output:

```js
[1, 2, 3]
[3, 1, 2]
```

---

# Real-World Use Case

Suppose you have products:

```js
let products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Monitor", price: 400 }
];
```

### Sort by price

```js
let sortedProducts = [...products].sort(
  (a, b) => a.price - b.price
);
```

### Get first 2 products

```js
let topProducts = sortedProducts.slice(0, 2);
```

### Remove a product

```js
products.splice(1, 1);
```

So in a real application you might use all three:

```text
sort()   → arrange products
slice()  → take a subset
splice() → modify the array
```

---

# 🎯 Interview Questions — Easy → Advanced

### Easy

**1. What does `sort()` do?**

It sorts the elements of an array **in place** and returns the array.

---

**2. What does `slice()` do?**

It returns a **shallow copy of a portion** of an array without modifying the original.

---

**3. What does `splice()` do?**

It can **add, remove, or replace** elements and modifies the original array.

---

### Medium

**4. What is the difference between `slice()` and `splice()`?**

```text
slice()  → does not modify original
splice() → modifies original
```

---

**5. How do you sort numbers in ascending order?**

```js
numbers.sort((a, b) => a - b);
```

---

**6. How do you sort numbers in descending order?**

```js
numbers.sort((a, b) => b - a);
```

---

**7. What does this return?**

```js
let arr = [10, 20, 30, 40];

arr.slice(1, 3);
```

Answer:

```js
[20, 30]
```

Because index `3` is excluded.

---

### Advanced

**8. What does this output?**

```js
let arr = [1, 2, 3, 4, 5];

let x = arr.splice(1, 2, 10, 20);

console.log(x);
console.log(arr);
```

Answer:

```js
[2, 3]
[1, 10, 20, 4, 5]
```

`splice(1, 2, 10, 20)`:

1. Start at index `1`
2. Remove `2` elements → `2, 3`
3. Insert `10, 20`

---

**9. Does `slice()` create a deep copy?**

No.

It creates a **shallow copy**.

```js
let arr = [{ name: "Rahul" }];

let copy = arr.slice();

copy[0].name = "Amit";

console.log(arr[0].name);
```

Output:

```js
"Amit"
```

The outer array is new, but the object inside is still the same reference.

---

**10. Why can `sort()` cause unexpected behavior with numbers?**

Because without a compare function, values are sorted as strings.

```js
[10, 2, 30].sort();
```

Output:

```js
[10, 2, 30]
```

For numeric sorting:

```js
[10, 2, 30].sort((a, b) => a - b);
```

Output:

```js
[2, 10, 30]
```

---

## 🧠 Final Cheat Sheet

```js
// SORT
arr.sort((a, b) => a - b);
// rearranges original array

// SLICE
arr.slice(start, end);
// copies part of array
// end excluded
// original unchanged

// SPLICE
arr.splice(start, deleteCount, items...);
// removes/adds/replaces
// original changed
```

### Remember this forever:

> **`sort()` = rearrange**
> **`slice()` = copy a piece**
> **`splice()` = change the array**
