# Rest and Spread Operators in JavaScript

The **Rest (`...`)** and **Spread (`...`)** operators use the same `...` syntax, but they do **opposite things**.

The easiest way to remember:

> **Rest = collect multiple values into one**
> **Spread = expand one value into multiple values**

---

# 1. Rest Operator (`...`)

Rest is used when you want to **collect multiple remaining values into a single array**.

### Example

```javascript
function add(...numbers) {
  console.log(numbers);
}

add(10, 20, 30, 40);
```

Output:

```javascript
[10, 20, 30, 40];
```

Here:

```javascript
...numbers
```

collects all the arguments into an array.

### Mental model

```text
10  20  30  40
 \   |   |   /
   ...numbers
       ↓
[10, 20, 30, 40]
```

---

# 2. Rest with Regular Parameters

You can have normal parameters before the rest parameter.

```javascript
function introduce(name, age, ...skills) {
  console.log(name);
  console.log(age);
  console.log(skills);
}

introduce("Rahul", 25, "JavaScript", "React", "Node.js");
```

Output:

```text
Rahul
25
["JavaScript", "React", "Node.js"]
```

So:

```javascript
name  → "Rahul"
age   → 25
skills → ["JavaScript", "React", "Node.js"]
```

### Important rule

Rest parameter **must be the last parameter**.

✅ Valid:

```javascript
function test(a, b, ...rest) {}
```

❌ Invalid:

```javascript
function test(...rest, a, b) {}
```

---

# 3. Rest in Array Destructuring

Rest isn't limited to functions.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, second, ...remaining] = numbers;

console.log(first);
console.log(second);
console.log(remaining);
```

Output:

```text
10
20
[30, 40, 50]
```

Here:

```javascript
[first, second, ...remaining];
```

means:

```text
first     → 10
second    → 20
remaining → [30, 40, 50]
```

---

# 4. Rest in Object Destructuring

You can also use rest with objects.

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
  role: "Developer",
};

const { name, ...otherDetails } = user;

console.log(name);
console.log(otherDetails);
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

So `...otherDetails` collects the **remaining properties**.

This is extremely common in React and modern JavaScript.

---

# 5. Spread Operator (`...`)

Now let's look at Spread.

Spread does the opposite of Rest.

It **expands** an iterable/object into individual elements/properties.

For example:

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output:

```text
10 20 30
```

Without spread:

```javascript
console.log(numbers);
```

Output:

```text
[10, 20, 30]
```

So:

```text
[10, 20, 30]
      ↓ spread
10  20  30
```

---

# 6. Spread with Arrays

One of the most common use cases is combining arrays.

```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const skills = [...frontend, ...backend];

console.log(skills);
```

Output:

```javascript
["HTML", "CSS", "JavaScript", "Node.js", "Express"];
```

Without spread, you might accidentally create a nested array:

```javascript
const skills = [frontend, backend];

console.log(skills);
```

Output:

```javascript
[
  ["HTML", "CSS", "JavaScript"],
  ["Node.js", "Express"],
];
```

---

# 7. Copying an Array

Spread is commonly used to create a **shallow copy** of an array.

```javascript
const original = [10, 20, 30];

const copy = [...original];

console.log(copy);
```

Output:

```javascript
[10, 20, 30];
```

Now:

```javascript
console.log(original === copy);
```

Output:

```text
false
```

They are two different array objects.

---

# 8. Adding Elements While Copying

Very useful:

```javascript
const numbers = [20, 30, 40];

const newNumbers = [10, ...numbers, 50];

console.log(newNumbers);
```

Output:

```javascript
[10, 20, 30, 40, 50];
```

This is commonly used when you want to create a new array without modifying the original.

---

# 9. Spread with Objects

Spread can also expand object properties.

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const updatedUser = {
  ...user,
  city: "Mumbai",
};

console.log(updatedUser);
```

Output:

```javascript
{
    name: "Rahul",
    age: 25,
    city: "Mumbai"
}
```

---

# 10. Updating an Object with Spread

This is a **very important real-world use case**.

Suppose:

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
};
```

You want to change only the age.

You can do:

```javascript
const updatedUser = {
  ...user,
  age: 26,
};

console.log(updatedUser);
```

Output:

```javascript
{
    name: "Rahul",
    age: 26,
    city: "Mumbai"
}
```

The later property wins.

```javascript
{
    ...user,
    age: 26
}
```

Think:

```text
copy everything from user
        +
overwrite age with 26
```

---

# 11. Property Overwriting

This is important to understand.

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const updated = {
  ...user,
  age: 30,
};
```

Result:

```javascript
{
    name: "Rahul",
    age: 30
}
```

But:

```javascript
const updated = {
  age: 30,
  ...user,
};
```

Result:

```javascript
{
    name: "Rahul",
    age: 25
}
```

Because the later `...user` overwrites `age`.

---

# 12. Spread with Function Arguments

Suppose you have:

```javascript
const numbers = [10, 20, 30];

function add(a, b, c) {
  return a + b + c;
}

console.log(add(...numbers));
```

Output:

```text
60
```

This:

```javascript
add(...numbers);
```

becomes conceptually:

```javascript
add(10, 20, 30);
```

This was particularly common before newer APIs such as `Math.max(...array)` patterns became commonplace.

Example:

```javascript
const numbers = [10, 50, 30, 90, 20];

console.log(Math.max(...numbers));
```

Output:

```text
90
```

---

# 13. Rest vs Spread — The Most Important Difference

Look at these two examples.

### Rest

```javascript
function test(...numbers) {
  console.log(numbers);
}

test(10, 20, 30);
```

Result:

```javascript
[10, 20, 30];
```

Rest **collects** values.

---

### Spread

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Result:

```text
10 20 30
```

Spread **expands** values.

### Easy memory trick

```text
REST
10 20 30
 \  |  /
  collect
    ↓
[10,20,30]


SPREAD
[10,20,30]
    ↓
 expand
    ↓
10 20 30
```

---

# 14. Same `...`, Different Meaning

This often confuses beginners.

```javascript
function test(...args) {}
```

Here `...` is **Rest** because it collects values.

But:

```javascript
const numbers = [10, 20, 30];

test(...numbers);
```

Here `...` is **Spread** because it expands values.

So don't identify Rest/Spread just by seeing `...`.

Ask:

> **Is it collecting values? → Rest**

> **Is it expanding values? → Spread**

---

# 15. Rest vs Spread in One Example

```javascript
function calculate(first, ...remaining) {
  console.log(first);
  console.log(remaining);
}

const numbers = [10, 20, 30, 40];

calculate(...numbers);
```

First:

```javascript
calculate(...numbers);
```

Spread expands:

```javascript
calculate(10, 20, 30, 40);
```

Then the function receives them:

```javascript
first = 10;
remaining = [20, 30, 40];
```

So in the **same piece of code**, you can have both:

```text
...numbers
    ↓
  SPREAD
    ↓
10,20,30,40
    ↓
function parameters
    ↓
...remaining
    ↓
  REST
    ↓
[20,30,40]
```

---

# 16. Practical Use Case — Function with Unlimited Arguments

Suppose you don't know how many numbers a function will receive.

Instead of:

```javascript
function add(a, b, c, d, e) {
  // ...
}
```

Use rest:

```javascript
function add(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(add(10, 20));
console.log(add(10, 20, 30, 40));
console.log(add(1, 2, 3, 4, 5, 6));
```

Output:

```text
30
100
21
```

This is a very practical use of Rest.

---

# 17. Practical Use Case — React

Spread is extremely common in React.

For example, updating state immutably:

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const updatedUser = {
  ...user,
  age: 26,
};
```

Similarly, passing props:

```jsx
<User name="Rahul" age={25} city="Mumbai" />
```

can be represented with an object:

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
};
```

and:

```jsx
<User {...user} />
```

Spread passes the object's properties as props.

---

# 18. Practical Use Case — Function Arguments

Suppose:

```javascript
const user = ["Rahul", 25];

function introduce(name, age) {
  console.log(`My name is ${name} and I am ${age}`);
}

introduce(...user);
```

Conceptually:

```javascript
introduce("Rahul", 25);
```

Output:

```text
My name is Rahul and I am 25
```

---

# 19. Important: Spread Creates a Shallow Copy

This is an important interview concept.

```javascript
const user = {
  name: "Rahul",
  address: {
    city: "Mumbai",
  },
};

const copy = {
  ...user,
};
```

The outer objects are different:

```javascript
console.log(user === copy);
```

```text
false
```

But the nested object is still shared:

```javascript
console.log(user.address === copy.address);
```

```text
true
```

So spread performs a **shallow copy**, not a deep copy.

---

# 20. Spread with Strings

Strings are iterable, so you can spread them into an array.

```javascript
const name = "Rahul";

const letters = [...name];

console.log(letters);
```

Output:

```javascript
["R", "a", "h", "u", "l"];
```

---

# 21. Common Interview Trap

What does this return?

```javascript
const user = {
  name: "Rahul",
};

const copy = {
  ...user,
};

console.log(copy === user);
```

Answer:

```text
false
```

Because spread creates a new object.

---

# 22. Another Interview Trap

```javascript
const numbers = [1, 2, 3];

const copy = [...numbers];

copy.push(4);

console.log(numbers);
console.log(copy);
```

Output:

```text
[1, 2, 3]

[1, 2, 3, 4]
```

The original isn't changed because the outer array was copied.

---

# 23. Quick Comparison

| Feature         | Rest                         | Spread                   |
| --------------- | ---------------------------- | ------------------------ |
| Syntax          | `...`                        | `...`                    |
| Purpose         | Collect                      | Expand                   |
| Common location | Function parameters          | Function calls           |
| Arrays          | Collect remaining items      | Expand array items       |
| Objects         | Collect remaining properties | Expand object properties |
| Example         | `function f(...args)`        | `f(...args)`             |

### Remember:

```javascript
function test(...args) {}
```

**Rest → collect**

```javascript
test(...args);
```

**Spread → expand**

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is the Rest operator?

**Answer:**
Rest (`...`) collects multiple remaining values into a single array.

```javascript
function test(...args) {
  console.log(args);
}

test(1, 2, 3);
```

```text
[1, 2, 3]
```

---

### 2. What is the Spread operator?

**Answer:**
Spread (`...`) expands an iterable or object into individual elements/properties.

```javascript
const arr = [1, 2, 3];

console.log(...arr);
```

```text
1 2 3
```

---

### 3. What is the difference between Rest and Spread?

**Answer:**

```text
Rest   → collects
Spread → expands
```

---

### 4. Can Rest parameter appear before another parameter?

❌ No.

```javascript
function test(...args, name) {}
```

This is invalid.

Rest must be the **last parameter**.

---

## Intermediate

### 5. What is the output?

```javascript
function test(a, ...b) {
  console.log(a);
  console.log(b);
}

test(10, 20, 30, 40);
```

**Answer:**

```text
10
[20, 30, 40]
```

---

### 6. What is the output?

```javascript
const arr = [1, 2, 3];

const newArr = [...arr, 4];

console.log(newArr);
```

**Answer:**

```javascript
[1, 2, 3, 4];
```

---

### 7. Does spread create a deep copy?

**Answer:** No.

Spread creates a **shallow copy**.

```javascript
const obj = {
  nested: {
    value: 10,
  },
};

const copy = { ...obj };

console.log(obj.nested === copy.nested);
```

```text
true
```

---

### 8. What happens when object properties conflict?

```javascript
const user = {
  name: "Rahul",
  age: 25,
};

const result = {
  ...user,
  age: 30,
};
```

Result:

```javascript
{
    name: "Rahul",
    age: 30
}
```

The later property overwrites the earlier one.

---

## Advanced

### 9. What is the output?

```javascript
function test(a, b, ...rest) {
  console.log(rest);
}

const values = [10, 20, 30, 40, 50];

test(...values);
```

**Answer:**

Spread first expands:

```javascript
test(10, 20, 30, 40, 50);
```

Then Rest collects the remaining arguments:

```javascript
a = 10;
b = 20;
rest = [30, 40, 50];
```

---

### 10. What is the output?

```javascript
const user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
};

const { name, ...details } = user;

console.log(details);
```

**Answer:**

```javascript
{
    age: 25,
    city: "Mumbai"
}
```

Here Rest collects the remaining object properties.

---

### 11. What is the output?

```javascript
const a = {
  x: 10,
  y: 20,
};

const b = {
  ...a,
  x: 100,
};

console.log(b);
```

**Answer:**

```javascript
{
    x: 100,
    y: 20
}
```

Because `x: 100` comes after `...a`.

---

### 12. What is the output?

```javascript
const a = {
  nested: {
    x: 10,
  },
};

const b = { ...a };

b.nested.x = 100;

console.log(a.nested.x);
```

**Answer:**

```text
100
```

Why?

Because spread makes a **shallow copy**.

Both objects point to the same nested object:

```text
a.nested ─────┐
              ↓
          { x: 100 }
              ↑
b.nested ─────┘
```

---

## ⭐ One-Line Interview Answer

If the interviewer asks:

> **"Explain Rest and Spread operators."**

You can say:

> **"Both use `...` syntax. Rest collects multiple remaining values into an array, while Spread expands an iterable or object into individual elements or properties. Rest is commonly used in function parameters and destructuring, while Spread is commonly used for copying/merging arrays and objects and passing array elements as function arguments."**

That is a strong interview-ready definition.
