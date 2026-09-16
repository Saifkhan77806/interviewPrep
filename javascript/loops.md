# Loops in JavaScript

A **loop** allows you to execute the same block of code repeatedly until a certain condition is met.

Instead of writing:

```javascript
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
```

you can use a loop:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

So the basic idea is:

> **Loop = repeat some code while a condition is satisfied.**

---

# 1. Types of Loops in JavaScript

The main loops you'll encounter are:

```text
1. for
2. while
3. do...while
4. for...of
5. for...in
```

There are also array methods such as:

```text
forEach()
map()
filter()
reduce()
```

These aren't technically loop statements, but they're commonly used for iteration.

Let's understand each one.

---

# 2. `for` Loop

The `for` loop is probably the most common loop.

### Syntax

```javascript
for (initialization; condition; increment / decrement) {
  // code
}
```

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Output:

```text
1
2
3
4
5
```

Let's break it down:

```javascript
for (let i = 1; i <= 5; i++) {
  //        │       │
  //        │       └── update
  //        └────────── condition
  // initialization
}
```

### Step-by-step execution

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

JavaScript does:

```text
i = 1
↓
1 <= 5 → true → print 1
↓
i++ → 2

2 <= 5 → true → print 2
↓
i++ → 3

3 <= 5 → true → print 3
↓
i++ → 4

4 <= 5 → true → print 4
↓
i++ → 5

5 <= 5 → true → print 5
↓
i++ → 6

6 <= 5 → false
↓
STOP
```

---

# 3. Reverse Loop

You can also count backwards.

```javascript
for (let i = 5; i >= 1; i--) {
  console.log(i);
}
```

Output:

```text
5
4
3
2
1
```

---

# 4. Loop Through an Array with `for`

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

Output:

```text
Apple
Banana
Mango
```

Remember that array indexes start at `0`:

```text
fruits:

index:   0        1         2
        Apple    Banana    Mango
```

---

# 5. `while` Loop

A `while` loop executes code **as long as the condition is true**.

### Syntax

```javascript
while (condition) {
  // code
}
```

Example:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
  i++;
}
```

Output:

```text
1
2
3
4
5
```

The important thing is that you need to update the variable yourself.

```javascript
i++;
```

Otherwise, you can accidentally create an **infinite loop**.

---

# 6. Infinite Loop

Be careful with:

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
}
```

This never changes `i`.

So:

```text
i = 1
↓
1 <= 5 → true
↓
print 1
↓
1 <= 5 → true
↓
print 1
↓
...
```

It continues forever.

You need:

```javascript
i++;
```

to eventually make the condition false.

---

# 7. `do...while` Loop

A `do...while` loop is similar to `while`, but there is one important difference:

> **`do...while` executes the code at least once.**

Example:

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Output:

```text
1
2
3
4
5
```

---

# 8. Difference Between `while` and `do...while`

Consider:

```javascript
let i = 10;

while (i < 5) {
  console.log(i);
}
```

Output:

```text
// nothing
```

The condition is false from the beginning.

Now:

```javascript
let i = 10;

do {
  console.log(i);
} while (i < 5);
```

Output:

```text
10
```

Even though the condition is false, the `do` block runs once.

### Remember

```text
while
↓
check condition
↓
execute if true
```

Whereas:

```text
do...while
↓
execute first
↓
check condition
↓
repeat if true
```

---

# 9. `for...of`

`for...of` is used to iterate over the **values of an iterable**, such as an array or string.

For arrays:

```javascript
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

Notice that you don't need:

```javascript
fruits[i];
```

JavaScript gives you each value directly.

---

# 10. `for...of` with Strings

It also works with strings.

```javascript
let name = "John";

for (let character of name) {
  console.log(character);
}
```

Output:

```text
J
o
h
n
```

---

# 11. `for...in`

`for...in` is generally used to iterate over the **keys/property names of an object**.

```javascript
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
};

for (let key in user) {
  console.log(key);
}
```

Output:

```text
name
age
city
```

You can get the value using:

```javascript
for (let key in user) {
  console.log(user[key]);
}
```

Output:

```text
Rahul
25
Mumbai
```

Or both:

```javascript
for (let key in user) {
  console.log(key, user[key]);
}
```

---

# 12. `for...in` vs `for...of`

This is **very important for interviews**.

Given:

```javascript
let fruits = ["Apple", "Banana", "Mango"];
```

### `for...in`

Gives you the **keys/indexes**:

```javascript
for (let index in fruits) {
  console.log(index);
}
```

Output:

```text
0
1
2
```

### `for...of`

Gives you the **values**:

```javascript
for (let fruit of fruits) {
  console.log(fruit);
}
```

Output:

```text
Apple
Banana
Mango
```

### Easy memory trick

> **`for...in` → keys/indexes**
> **`for...of` → values**

For objects, `for...of` doesn't directly work because ordinary objects aren't iterable:

```javascript
let user = {
  name: "Rahul",
  age: 25,
};

// TypeError
for (let value of user) {
  console.log(value);
}
```

For an object, use:

```javascript
Object.keys(user);
Object.values(user);
Object.entries(user);
```

For example:

```javascript
for (let value of Object.values(user)) {
  console.log(value);
}
```

---

# 13. `break`

`break` immediately **stops the loop**.

Example:

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

When `i` becomes `5`:

```javascript
break;
```

stops the loop completely.

---

# 14. `continue`

`continue` skips the **current iteration** and moves to the next one.

Example:

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

When `i === 3`, JavaScript skips that iteration.

### Remember

```text
break
→ stop the entire loop

continue
→ skip current iteration
```

---

# 15. Nested Loops

A loop inside another loop is called a **nested loop**.

Example:

```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}
```

Output:

```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

The inner loop completes all its iterations for every iteration of the outer loop.

If both loops run `n` times, this often leads to **O(n²)** time complexity.

---

# 16. `forEach()`

`forEach()` is an array method used to execute a function for each array element.

```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function (fruit) {
  console.log(fruit);
});
```

Output:

```text
Apple
Banana
Mango
```

With an arrow function:

```javascript
fruits.forEach((fruit) => {
  console.log(fruit);
});
```

You can also get the index:

```javascript
fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});
```

Output:

```text
0 Apple
1 Banana
2 Mango
```

---

# 17. `forEach()` vs `for`

A major difference is that `forEach()` doesn't work with `break` and `continue` in the same way a normal loop does.

This is invalid:

```javascript
fruits.forEach((fruit) => {
  if (fruit === "Banana") {
    break; // SyntaxError
  }
});
```

If you need to stop early, a regular `for`, `for...of`, or another appropriate method may be better.

---

# 18. Which Loop Should You Use?

A practical guide:

### Use `for`

When you need an index or precise control:

```javascript
for (let i = 0; i < arr.length; i++) {
  // ...
}
```

### Use `while`

When the number of iterations isn't necessarily known beforehand:

```javascript
while (condition) {
  // ...
}
```

### Use `do...while`

When the operation must happen **at least once**:

```javascript
do {
  // ...
} while (condition);
```

### Use `for...of`

When you want the **values** of an iterable:

```javascript
for (let item of items) {
  // ...
}
```

### Use `for...in`

When you want the **property keys of an object**:

```javascript
for (let key in object) {
  // ...
}
```

### Use `forEach()`

When you simply want to perform an action for every array element:

```javascript
items.forEach((item) => {
  // ...
});
```

---

# 19. A Real-World Example

Suppose you have a list of users:

```javascript
let users = [
  { name: "Rahul", age: 25 },
  { name: "Amit", age: 17 },
  { name: "Priya", age: 30 },
];
```

You want to print users who are adults.

Using `for...of`:

```javascript
for (let user of users) {
  if (user.age >= 18) {
    console.log(user.name);
  }
}
```

Output:

```text
Rahul
Priya
```

Notice how **loops and conditional statements work together**:

```text
Loop through users
       ↓
Check age
       ↓
age >= 18?
   ↙       ↘
 yes        no
  ↓          ↓
print      skip
```

---

# Quick Cheat Sheet

| Loop         | What it does                               |
| ------------ | ------------------------------------------ |
| `for`        | General-purpose loop                       |
| `while`      | Repeats while condition is true            |
| `do...while` | Executes at least once                     |
| `for...of`   | Iterates over values                       |
| `for...in`   | Iterates over keys                         |
| `forEach()`  | Executes a callback for each array element |
| `break`      | Stops the loop                             |
| `continue`   | Skips current iteration                    |

### Most important distinction

```javascript
for (let key in obj)
```

→ **keys**

```javascript
for (let value of arr)
```

→ **values**

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### Q1. What is a loop?

**Answer:**

A loop is a programming construct that repeatedly executes a block of code while a condition is satisfied or while there are items to process.

---

### Q2. What are the main types of loops in JavaScript?

**Answer:**

```text
for
while
do...while
for...of
for...in
```

Array methods such as `forEach()` are also commonly used for iteration.

---

### Q3. What is the output?

```javascript
for (let i = 0; i < 3; i++) {
  console.log(i);
}
```

**Answer:**

```text
0
1
2
```

The loop stops when `i < 3` becomes false.

---

### Q4. What is the purpose of `break`?

**Answer:**

`break` immediately terminates the loop.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}
```

Output:

```text
1
2
3
4
```

---

### Q5. What is the purpose of `continue`?

**Answer:**

`continue` skips the current iteration and proceeds to the next iteration.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}
```

Output:

```text
1
2
4
5
```

---

# Intermediate

### Q6. What is the difference between `while` and `do...while`?

**Answer:**

`while` checks the condition **before** executing the body.

`do...while` executes the body **before** checking the condition, so it always runs at least once.

```javascript
let x = 10;

while (x < 5) {
  console.log(x);
}
// nothing
```

But:

```javascript
do {
  console.log(x);
} while (x < 5);
```

prints:

```text
10
```

---

### Q7. What is the difference between `for...in` and `for...of`?

**Answer:**

```text
for...in → property keys
for...of → iterable values
```

Example:

```javascript
let arr = ["A", "B", "C"];

for (let x in arr) {
  console.log(x);
}
```

Output:

```text
0
1
2
```

While:

```javascript
for (let x of arr) {
  console.log(x);
}
```

Output:

```text
A
B
C
```

---

### Q8. Can you use `break` inside `forEach()`?

**Answer:**

No. `break` cannot be used directly inside a `forEach()` callback.

```javascript
arr.forEach(item => {
  break; // SyntaxError
});
```

If you need early termination, use a loop such as `for...of` or a suitable array method such as `some()` or `find()` depending on your goal.

---

### Q9. What is an infinite loop?

**Answer:**

An infinite loop is a loop whose condition never becomes false.

```javascript
let i = 1;

while (i <= 5) {
  console.log(i);
}
```

`i` never changes, so `i <= 5` remains true forever.

---

# Advanced

### Q10. What is the output?

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}
```

**Answer:**

```text
0 0
0 1
1 0
1 1
2 0
2 1
```

The inner loop executes completely for each iteration of the outer loop.

Total iterations:

```text
3 × 2 = 6
```

---

### Q11. What is the time complexity of this?

```javascript
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    console.log(i, j);
  }
}
```

**Answer:**

**O(n²)**.

The outer loop runs `n` times and for each outer iteration, the inner loop runs `n` times:

```text
n × n = n²
```

---

### Q12. What is the output?

```javascript
let arr = [10, 20, 30];

for (let i in arr) {
  console.log(typeof i);
}
```

**Answer:**

```text
string
string
string
```

This is a common interview trap.

Even though array indexes look like numbers:

```text
0
1
2
```

`for...in` gives property keys, which are strings.

---

### Q13. What happens here?

```javascript
let arr = [10, 20, 30];

for (let value of arr) {
  console.log(typeof value);
}
```

**Answer:**

```text
number
number
number
```

`for...of` gives the actual values:

```text
10
20
30
```

---

### 🔥 Q14. What is the output?

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }

  if (i === 4) {
    break;
  }

  console.log(i);
}
```

**Answer:**

```text
0
1
3
```

Execution:

```text
i = 0 → print 0
i = 1 → print 1
i = 2 → continue → skip
i = 3 → print 3
i = 4 → break → stop
```

---

### 🔥 Q15. What is the difference between `for...of` and `forEach()`?

**Answer:**

Both can iterate over array values, but they behave differently.

`for...of` is a loop statement:

```javascript
for (let value of arr) {
  if (value === 20) {
    break;
  }
}
```

It supports:

```text
break
continue
return (when inside a function)
```

`forEach()` executes a callback for every element:

```javascript
arr.forEach((value) => {
  console.log(value);
});
```

You cannot directly use `break` or `continue` inside its callback.

`for...of` is often more convenient when you need flow control such as stopping or skipping iterations.

---

### 🔥 Q16. Predict the output

```javascript
let arr = [1, 2, 3];

for (let i in arr) {
  console.log(i);
}

for (let value of arr) {
  console.log(value);
}
```

**Answer:**

```text
0
1
2
1
2
3
```

First loop:

```text
for...in → indexes/keys
```

Second loop:

```text
for...of → values
```

---

## 🧠 Final Mental Model

If you remember only this, remember:

```text
                 LOOPS
                   │
       ┌───────────┼────────────┐
       ↓           ↓            ↓
      for        while       do...while
       │
       ├── for...of → VALUES
       │
       └── for...in → KEYS
```

And:

```text
break    → "I'm done. Stop the loop."
continue → "Skip this one. Go to the next."
```

The next concepts that naturally build on loops are **arrays + `forEach()` + `map()` + `filter()` + `reduce()`**, because these are heavily used in real-world JavaScript and interviews.
