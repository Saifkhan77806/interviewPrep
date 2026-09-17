# `reduce()` in JavaScript

`reduce()` is one of the most powerful and sometimes confusing array methods.

The simplest definition is:

> **`reduce()` takes all elements of an array and combines them into a single result.**

That result can be:

* a number
* a string
* an object
* an array
* or even another complex data structure

The key idea is:

```text
Array
  ↓
reduce()
  ↓
One final result
```

---

# 1. Basic Example — Sum of Numbers

Suppose:

```javascript
const numbers = [10, 20, 30, 40];
```

We want the total.

Using a loop:

```javascript
let total = 0;

for (const number of numbers) {
    total += number;
}

console.log(total);
```

Output:

```text
100
```

Using `reduce()`:

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);

console.log(total);
```

Output:

```text
100
```

---

# 2. Understand the Two Important Parts

Look at:

```javascript
numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

There are two important things:

```text
sum
 ↓
Accumulator

number
 ↓
Current value
```

And:

```javascript
0
```

is the **initial value**.

So:

```javascript
reduce(callback, initialValue)
```

---

# 3. What Is an Accumulator?

This is the most important concept in `reduce()`.

The **accumulator** stores the result from the previous iteration.

Consider:

```javascript
const numbers = [10, 20, 30, 40];

const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Let's execute it step by step.

### First iteration

```text
sum = 0
number = 10

0 + 10 = 10
```

Accumulator becomes:

```text
10
```

### Second iteration

```text
sum = 10
number = 20

10 + 20 = 30
```

Accumulator becomes:

```text
30
```

### Third iteration

```text
sum = 30
number = 30

30 + 30 = 60
```

### Fourth iteration

```text
sum = 60
number = 40

60 + 40 = 100
```

Final result:

```text
100
```

Think:

```text
          accumulator
              ↓
0 → +10 → 10 → +20 → 30 → +30 → 60 → +40 → 100
                                                        ↓
                                                   final result
```

---

# 4. Syntax

The full syntax is:

```javascript
array.reduce((accumulator, currentValue, currentIndex, array) => {
    // return updated accumulator
}, initialValue);
```

The callback can receive:

| Parameter      | Meaning                        |
| -------------- | ------------------------------ |
| `accumulator`  | Result accumulated so far      |
| `currentValue` | Current array element          |
| `currentIndex` | Current index                  |
| `array`        | Original array                 |
| `initialValue` | Starting value for accumulator |

Usually you'll mainly use:

```javascript
(accumulator, currentValue)
```

---

# 5. Why Is It Called `reduce()`?

Because you're reducing many values into one result.

```text
[10, 20, 30, 40]
       ↓
    reduce()
       ↓
     100
```

But don't think it can only produce numbers.

That's an important point.

---

# 6. `reduce()` Can Produce Different Types

For example:

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Result:

```text
10
```

But you could produce a string:

```javascript
const words = ["Hello", "World"];

const result = words.reduce((sentence, word) => {
    return sentence + " " + word;
}, "");

console.log(result);
```

Output:

```text
Hello World
```

Or an object:

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((obj, number) => {
    obj[number] = number * 10;
    return obj;
}, {});

console.log(result);
```

Output:

```javascript
{
    1: 10,
    2: 20,
    3: 30
}
```

So:

> `reduce()` doesn't necessarily mean "calculate a number."

It means:

> **Take multiple values and build one final result.**

---

# 7. The Initial Value Is Important

Consider:

```javascript
const numbers = [10, 20, 30];

const result = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Here:

```javascript
0
```

is the initial accumulator value.

So:

```text
initial accumulator = 0
```

Then:

```text
0 + 10
10 + 20
30 + 30
```

Result:

```text
60
```

---

# 8. What Happens Without an Initial Value?

You can write:

```javascript
const numbers = [10, 20, 30];

const result = numbers.reduce((sum, number) => {
    return sum + number;
});
```

This still works.

But now JavaScript uses the **first array element as the initial accumulator**.

So:

```text
sum = 10
number = 20
```

Then:

```text
10 + 20 = 30
```

Then:

```text
30 + 30 = 60
```

Result:

```text
60
```

---

# 9. Difference With and Without Initial Value

### With initial value

```javascript
[10, 20, 30].reduce((sum, n) => sum + n, 0);
```

Execution:

```text
accumulator = 0
current     = 10
```

---

### Without initial value

```javascript
[10, 20, 30].reduce((sum, n) => sum + n);
```

Execution starts with:

```text
accumulator = 10
current     = 20
```

This distinction is very important in interviews.

---

# 10. Practical Use Case — Calculate Total Price

Suppose you have:

```javascript
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 1000 },
    { name: "Keyboard", price: 2000 }
];
```

Calculate total:

```javascript
const total = products.reduce((sum, product) => {
    return sum + product.price;
}, 0);

console.log(total);
```

Output:

```text
53000
```

This is a very common real-world use case.

---

# 11. Practical Use Case — Shopping Cart

Imagine:

```javascript
const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];
```

Calculate cart total:

```javascript
const total = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
}, 0);

console.log(total);
```

Calculation:

```text
Laptop   → 50000 × 1 = 50000
Mouse    → 1000 × 2  = 2000
Keyboard → 2000 × 1  = 2000
                       ------
                       54000
```

Output:

```text
54000
```

---

# 12. Practical Use Case — Count Occurrences

This is an excellent `reduce()` example.

Suppose:

```javascript
const fruits = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple"
];
```

We want:

```javascript
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

Using `reduce()`:

```javascript
const count = fruits.reduce((result, fruit) => {
    result[fruit] = (result[fruit] || 0) + 1;

    return result;
}, {});

console.log(count);
```

Output:

```javascript
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

Let's understand this carefully.

First:

```text
result = {}
fruit = "apple"
```

We do:

```javascript
result["apple"] = (result["apple"] || 0) + 1;
```

Since `result.apple` doesn't exist:

```text
undefined || 0
        ↓
        0
```

Then:

```text
0 + 1 = 1
```

So:

```javascript
{
    apple: 1
}
```

Next `"banana"`:

```javascript
{
    apple: 1,
    banana: 1
}
```

Next `"apple"`:

```text
apple already exists → 1 + 1
```

So:

```javascript
{
    apple: 2,
    banana: 1
}
```

Eventually:

```javascript
{
    apple: 3,
    banana: 2,
    orange: 1
}
```

This pattern is extremely useful.

---

# 13. Practical Use Case — Grouping Data

You can use `reduce()` to group objects.

Suppose:

```javascript
const users = [
    { name: "Rahul", role: "developer" },
    { name: "Amit", role: "designer" },
    { name: "Priya", role: "developer" },
    { name: "John", role: "designer" }
];
```

We want:

```javascript
{
    developer: [
        { name: "Rahul", role: "developer" },
        { name: "Priya", role: "developer" }
    ],
    designer: [
        { name: "Amit", role: "designer" },
        { name: "John", role: "designer" }
    ]
}
```

Using `reduce()`:

```javascript
const grouped = users.reduce((result, user) => {
    if (!result[user.role]) {
        result[user.role] = [];
    }

    result[user.role].push(user);

    return result;
}, {});

console.log(grouped);
```

This is a useful real-world data-processing pattern.

---

# 14. `reduce()` vs `map()`

You should be very clear about this.

### `map()`

Transforms every element and returns an array.

```javascript
const numbers = [1, 2, 3];

const result = numbers.map(n => n * 2);

console.log(result);
```

```text
[2, 4, 6]
```

### `reduce()`

Combines values into one final result.

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
[1,2,3]
   ↓
[2,4,6]


reduce()
[1,2,3]
   ↓
   6
```

---

# 15. `reduce()` vs `filter()`

### `filter()`

Selects elements.

```javascript
const numbers = [1, 2, 3, 4, 5];

const result = numbers.filter(n => n > 3);

console.log(result);
```

```text
[4, 5]
```

### `reduce()`

Combines values.

```javascript
const result = numbers.reduce((sum, n) => sum + n, 0);
```

```text
15
```

Remember:

```text
filter → Which elements?
map    → What should each element become?
reduce → What single result can I build?
```

---

# 16. `reduce()` Can Replace Some Loops

This:

```javascript
let total = 0;

for (const number of numbers) {
    total += number;
}
```

Can become:

```javascript
const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);
```

But don't assume `reduce()` is always better.

For complicated logic, a normal `for...of` loop can sometimes be easier to understand.

Use `reduce()` when the accumulation logic is clear.

---

# 17. Important: Don't Forget `return`

This is a common mistake.

❌ Wrong:

```javascript
const total = numbers.reduce((sum, number) => {
    sum + number;
}, 0);
```

The callback doesn't return the new accumulator.

Result:

```text
undefined
```

Correct:

```javascript
const total = numbers.reduce((sum, number) => {
    return sum + number;
}, 0);
```

Or using implicit return:

```javascript
const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);
```

---

# 18. `reduce()` Can Return an Array

Remember, the result doesn't have to be a number.

For example, flattening:

```javascript
const numbers = [
    [1, 2],
    [3, 4],
    [5, 6]
];

const result = numbers.reduce((acc, current) => {
    return acc.concat(current);
}, []);

console.log(result);
```

Output:

```text
[1, 2, 3, 4, 5, 6]
```

Although for this particular task, modern JavaScript provides the clearer:

```javascript
numbers.flat();
```

So `reduce()` is powerful, but don't use it just because you can.

---

# 19. A Very Important `reduce()` Mental Model

When you see:

```javascript
const result = array.reduce(
    (accumulator, currentValue) => {
        // update accumulator
        return accumulator;
    },
    initialValue
);
```

Ask yourself:

### Question 1

**What is the accumulator?**

Example:

```javascript
0
```

or:

```javascript
{}
```

or:

```javascript
[]
```

### Question 2

**What does each iteration do to it?**

Example:

```javascript
accumulator + currentValue
```

### Question 3

**What is returned?**

That becomes the accumulator for the next iteration.

---

# 20. Visual Example

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (sum, number) => sum + number,
    0
);
```

Think:

```text
Initial
sum = 0

        current
           ↓
0 + 1 = 1
    ↓
sum = 1

1 + 2 = 3
    ↓
sum = 3

3 + 3 = 6
    ↓
sum = 6

6 + 4 = 10
    ↓
sum = 10

Final result = 10
```

That's `reduce()`.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `reduce()`?

**Answer:**

`reduce()` is an array method used to iterate over an array and accumulate its values into a single final result.

```javascript
const sum = [1, 2, 3].reduce(
    (acc, value) => acc + value,
    0
);
```

Result:

```text
6
```

---

### 2. What is an accumulator?

**Answer:**

The accumulator stores the result from previous iterations and is passed into the next iteration.

```javascript
(accumulator, currentValue)
```

---

### 3. What is the second argument of `reduce()`?

```javascript
numbers.reduce(callback, 0);
```

The `0` is the **initial value of the accumulator**.

---

## Intermediate

### 4. What is the output?

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(result);
```

Answer:

```text
10
```

---

### 5. What is the difference between these?

```javascript
[1, 2, 3].reduce((a, b) => a + b);
```

and:

```javascript
[1, 2, 3].reduce((a, b) => a + b, 0);
```

Both produce:

```text
6
```

But their initial accumulator differs.

With `0`:

```text
accumulator starts at 0
```

Without it:

```text
accumulator starts with first array element (1)
```

The callback therefore begins at a different point.

---

### 6. What happens with an empty array?

```javascript
const result = [].reduce((a, b) => a + b);
```

This throws a:

```text
TypeError
```

because there is no first element to use as the initial accumulator.

But:

```javascript
const result = [].reduce((a, b) => a + b, 0);
```

returns:

```text
0
```

This is one reason providing an appropriate initial value is often safer.

---

### 7. Can `reduce()` return an object?

**Answer:** Yes.

```javascript
const result = [1, 2, 3].reduce((obj, n) => {
    obj[n] = n * 10;
    return obj;
}, {});
```

Result:

```javascript
{
    1: 10,
    2: 20,
    3: 30
}
```

---

## Advanced

### 8. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => {
    acc.push(num * 2);
    return acc;
}, []);

console.log(result);
```

Answer:

```text
[2, 4, 6]
```

Here the accumulator starts as an empty array:

```javascript
[]
```

and each iteration adds a transformed value.

---

### 9. What is the output?

```javascript
const numbers = [1, 2, 3];

const result = numbers.reduce((acc, num) => {
    return acc + num;
}, "");

console.log(result);
```

Answer:

```text
"123"
```

Because the accumulator starts as a string:

```text
"" + 1 → "1"
"1" + 2 → "12"
"12" + 3 → "123"
```

This demonstrates that the **initial value determines the type and behavior of the accumulation**.

---

### 10. What is the output?

```javascript
const numbers = [1, 2, 3, 4];

const result = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.push(num);
    }

    return acc;
}, []);

console.log(result);
```

Answer:

```text
[2, 4]
```

Here `reduce()` is being used to build an array.

---

### 11. Can `reduce()` replace `map()` and `filter()`?

**Technically, yes**, but that doesn't mean you should.

For example, `map()`:

```javascript
const result = numbers.map(n => n * 2);
```

could be recreated with `reduce()`:

```javascript
const result = numbers.reduce((acc, n) => {
    acc.push(n * 2);
    return acc;
}, []);
```

But `map()` is much clearer for transformation.

Similarly, `filter()` can be recreated with `reduce()`, but `filter()` communicates the intent better.

### Good rule:

> Use the array method that most clearly expresses your intent.

---

# ⭐ The Big 4 You Now Know

You've now covered:

```text
map()
filter()
reduce()
forEach()
```

Keep this mental model:

```text
┌──────────┬───────────────────────────────┐
│ map()    │ Transform every element       │
│          │ [1,2,3] → [2,4,6]             │
├──────────┼───────────────────────────────┤
│ filter() │ Select matching elements      │
│          │ [1,2,3] → [2,3]               │
├──────────┼───────────────────────────────┤
│ reduce() │ Build one final result         │
│          │ [1,2,3] → 6                   │
├──────────┼───────────────────────────────┤
│ forEach()│ Perform an action on each     │
│          │ element                       │
└──────────┴───────────────────────────────┘
```

### ⭐ Interview shortcut

When you see a requirement, ask:

```text
"Change every item?"
       ↓
      map()


"Keep only some items?"
       ↓
     filter()


"Need one final result?"
       ↓
     reduce()


"Just execute something for each item?"
       ↓
    forEach()
```

The most important thing to master in `reduce()` is **the accumulator**. Once you understand how the accumulator changes from one iteration to the next, `reduce()` becomes much less mysterious.
