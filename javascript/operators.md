Sure. Let's understand **JavaScript Operators** from the basics and then move toward interview-level concepts.

# JavaScript Operators

An **operator** is a symbol or keyword that tells JavaScript to perform an operation on one or more values.

For example:

```javascript
let a = 10;
let b = 5;

let result = a + b;
```

Here:

```text
a + b
│ │ │
│ │ └── operand
│ └──── operator
└────── operand
```

`+` is the **operator**, while `a` and `b` are **operands**.

---

# 1. Arithmetic Operators

Used for mathematical calculations.

| Operator | Meaning        | Example  | Result |
| -------- | -------------- | -------- | ------ |
| `+`      | Addition       | `10 + 5` | `15`   |
| `-`      | Subtraction    | `10 - 5` | `5`    |
| `*`      | Multiplication | `10 * 5` | `50`   |
| `/`      | Division       | `10 / 5` | `2`    |
| `%`      | Remainder      | `10 % 3` | `1`    |
| `**`     | Exponentiation | `2 ** 3` | `8`    |

### Example

```javascript
let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### `%` is especially useful

```javascript
console.log(10 % 2); // 0
console.log(11 % 2); // 1
```

You can use it to check whether a number is even:

```javascript
let number = 10;

if (number % 2 === 0) {
  console.log("Even");
}
```

---

# 2. Assignment Operators

Used to assign or update values.

### Basic assignment

```javascript
let x = 10;
```

`=` means **assign**, not "equals" in the mathematical sense.

### Compound assignment operators

```javascript
let x = 10;

x += 5; // x = x + 5
x -= 2; // x = x - 2
x *= 3; // x = x * 3
x /= 2; // x = x / 2
x %= 4; // x = x % 4
x **= 2; // x = x ** 2
```

For example:

```javascript
let x = 10;

x += 5;

console.log(x); // 15
```

---

# 3. Comparison Operators

Comparison operators compare values and return a **Boolean** (`true` or `false`).

| Operator | Meaning               |
| -------- | --------------------- |
| `==`     | Loose equality        |
| `===`    | Strict equality       |
| `!=`     | Loose inequality      |
| `!==`    | Strict inequality     |
| `>`      | Greater than          |
| `<`      | Less than             |
| `>=`     | Greater than or equal |
| `<=`     | Less than or equal    |

Example:

```javascript
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 <= 5); // false
```

### `==` vs `===`

You just learned this:

```javascript
console.log(5 == "5"); // true
console.log(5 === "5"); // false
```

`==` allows type coercion.

`===` does not perform that kind of type coercion.

**In most code, prefer `===`.**

---

# 4. Logical Operators

Logical operators are commonly used with conditions.

There are three main logical operators:

```text
&&  AND
||  OR
!   NOT
```

## `&&` — AND

Both conditions must be truthy.

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}
```

Both conditions are true, so it prints:

```text
Can drive
```

Think:

```text
true && true   → true
true && false  → false
false && true  → false
false && false → false
```

---

## `||` — OR

At least one condition must be truthy.

```javascript
let isAdmin = false;
let isManager = true;

if (isAdmin || isManager) {
  console.log("Has access");
}
```

Since `isManager` is true:

```text
Has access
```

Think:

```text
true || true   → true
true || false  → true
false || true  → true
false || false → false
```

---

## `!` — NOT

Reverses a Boolean value.

```javascript
console.log(!true); // false
console.log(!false); // true
```

It also works with truthy/falsy values:

```javascript
console.log(!0); // true
console.log(!"hello"); // false
console.log(!null); // true
```

---

# 5. Increment and Decrement Operators

Used to increase or decrease a value by `1`.

```javascript
let x = 10;

x++;
console.log(x); // 11

x--;
console.log(x); // 10
```

There are two forms:

```javascript
x++; // postfix
++x; // prefix
```

and:

```javascript
x--; // postfix
--x; // prefix
```

The difference becomes important when the operator is used **inside an expression**.

### Post-increment

```javascript
let x = 5;

let y = x++;

console.log(x); // 6
console.log(y); // 5
```

The old value is used first, then `x` is incremented.

### Pre-increment

```javascript
let x = 5;

let y = ++x;

console.log(x); // 6
console.log(y); // 6
```

`x` is incremented first, then its new value is used.

---

# 6. String Operator

The `+` operator also works with strings.

```javascript
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;

console.log(fullName);
// John Doe
```

This is related to **type coercion**.

```javascript
console.log(10 + "5");
// "105"
```

Because JavaScript converts the number to a string for this operation.

---

# 7. Ternary Operator

The ternary operator is a short way of writing a simple `if...else`.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";

console.log(result);
// Adult
```

Equivalent `if...else`:

```javascript
let result;

if (age >= 18) {
  result = "Adult";
} else {
  result = "Minor";
}
```

Use ternary for **simple conditions**. Avoid deeply nested ternaries because they become difficult to read.

---

# 8. Nullish Coalescing Operator `??`

This is an important modern JavaScript operator.

```javascript
let username = null;

let name = username ?? "Guest";

console.log(name);
// Guest
```

`??` uses the right-hand value only when the left-hand value is:

```javascript
null;
undefined;
```

For example:

```javascript
console.log(null ?? "Hello"); // "Hello"
console.log(undefined ?? "Hello"); // "Hello"
console.log("John" ?? "Guest"); // "John"
console.log(0 ?? 100); // 0
console.log(false ?? true); // false
console.log("" ?? "Default"); // ""
```

This is different from `||`.

---

# 9. `||` vs `??`

This is a **very common interview question**.

Consider:

```javascript
let count = 0;

console.log(count || 10);
console.log(count ?? 10);
```

Output:

```text
10
0
```

Why?

`||` checks **truthiness**.

Since `0` is falsy:

```text
0 || 10 → 10
```

`??` checks specifically for `null` or `undefined`.

Since `0` is neither:

```text
0 ?? 10 → 0
```

So:

```text
||  → uses right side for any falsy value
??  → uses right side only for null/undefined
```

---

# 10. Optional Chaining `?.`

Optional chaining lets you safely access nested properties when something might be `null` or `undefined`.

Without optional chaining:

```javascript
let user = {};

console.log(user.address.city);
```

This throws an error because `user.address` is undefined.

With optional chaining:

```javascript
console.log(user.address?.city);
```

Result:

```javascript
undefined;
```

Another example:

```javascript
let user = {
  address: {
    city: "Mumbai",
  },
};

console.log(user.address?.city);
// Mumbai
```

It's very useful when working with API responses.

---

# 11. `typeof` Operator

`typeof` tells you the type of a value.

```javascript
console.log(typeof 10); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
```

Example:

```javascript
let value = 100;

if (typeof value === "number") {
  console.log("It's a number");
}
```

### Important interview trick

```javascript
typeof null;
```

returns:

```javascript
"object";
```

This is a long-standing JavaScript quirk.

---

# 12. `in` Operator

The `in` operator checks whether a property exists in an object.

```javascript
let user = {
  name: "Rahul",
  age: 25,
};

console.log("name" in user); // true
console.log("email" in user); // false
```

It can also find properties inherited through the prototype chain.

---

# 13. `instanceof` Operator

`instanceof` checks whether an object is an instance of a particular constructor/class.

```javascript
let numbers = [1, 2, 3];

console.log(numbers instanceof Array);
// true
```

Another example:

```javascript
let date = new Date();

console.log(date instanceof Date);
// true
```

---

# 14. `delete` Operator

Used to remove a property from an object.

```javascript
let user = {
  name: "Rahul",
  age: 25,
};

delete user.age;

console.log(user);
// { name: "Rahul" }
```

It deletes an **object property**, not a variable declared with `let`, `const`, or `var`.

---

# 15. Operator Precedence

When multiple operators are present, JavaScript follows rules about which operation happens first.

For example:

```javascript
let result = 2 + 3 * 4;

console.log(result);
```

Output:

```text
14
```

Not `20`.

Multiplication happens before addition:

```text
3 * 4 = 12
2 + 12 = 14
```

You can use parentheses to make the order explicit:

```javascript
let result = (2 + 3) * 4;

console.log(result);
// 20
```

---

# 16. Short-Circuit Evaluation

This is an **important advanced operator concept**.

Consider:

```javascript
let isLoggedIn = true;

isLoggedIn && console.log("Welcome");
```

Because the left side is truthy, JavaScript evaluates the right side.

Output:

```text
Welcome
```

With `||`:

```javascript
let username = "";

let name = username || "Guest";

console.log(name);
// Guest
```

Because `username` is falsy, JavaScript evaluates and returns `"Guest"`.

---

# Quick Cheat Sheet

| Category            | Operators                 |     |     |
| ------------------- | ------------------------- | --- | --- |
| Arithmetic          | `+ - * / % **`            |     |     |
| Assignment          | `= += -= *= /= %= **=`    |     |     |
| Comparison          | `== === != !== > < >= <=` |     |     |
| Logical             | `&&                       |     | !`  |
| Increment/Decrement | `++ --`                   |     |     |
| Ternary             | `? :`                     |     |     |
| Nullish             | `??`                      |     |     |
| Optional chaining   | `?.`                      |     |     |
| Type                | `typeof`                  |     |     |
| Property check      | `in`                      |     |     |
| Instance check      | `instanceof`              |     |     |
| Delete property     | `delete`                  |     |     |

---

# 🎯 Interview Questions: Easy → Advanced

## Easy

### Q1. What is an operator?

**Answer:**
An operator is a symbol or keyword used to perform an operation on one or more operands.

```javascript
10 + 5;
```

Here `+` is the operator.

---

### Q2. What is the difference between `=` and `===`?

**Answer:**

`=` is an **assignment operator**:

```javascript
let x = 10;
```

`===` is a **strict equality operator**:

```javascript
x === 10;
```

It checks value and type.

---

### Q3. What is the output?

```javascript
console.log(10 % 3);
```

**Answer:**

```text
1
```

`%` returns the remainder.

---

### Q4. What does `++` do?

**Answer:**
It increases a number by `1`.

```javascript
let x = 5;

x++;

console.log(x); // 6
```

---

## Intermediate

### Q5. What's the difference between `&&` and `||`?

**Answer:**

`&&` requires both sides to be truthy for the overall logical condition to be truthy.

```javascript
true && true; // true
```

`||` requires at least one side to be truthy.

```javascript
true || false; // true
```

---

### Q6. What is the difference between `x++` and `++x`?

**Answer:**

`x++` returns the old value and then increments.

```javascript
let x = 5;
let y = x++;

console.log(y); // 5
console.log(x); // 6
```

`++x` increments first and returns the new value.

```javascript
let x = 5;
let y = ++x;

console.log(y); // 6
console.log(x); // 6
```

---

### Q7. What is the ternary operator?

**Answer:**

It is a concise way to write a simple conditional expression.

```javascript
let age = 20;

let result = age >= 18 ? "Adult" : "Minor";
```

---

### Q8. What is the difference between `||` and `??`?

**Answer:**

`||` considers **all falsy values**:

```javascript
0 || 10; // 10
"" || "Hello"; // "Hello"
false || true; // true
```

`??` only considers `null` and `undefined`:

```javascript
0 ?? 10; // 0
"" ?? "Hello"; // ""
false ?? true; // false
null ?? 10; // 10
```

---

## Advanced

### Q9. What is short-circuit evaluation?

**Answer:**

JavaScript may stop evaluating a logical expression as soon as its result is known.

```javascript
false && console.log("Hello");
```

`console.log()` never executes because `false && anything` is always false.

Similarly:

```javascript
true || console.log("Hello");
```

The `console.log()` doesn't execute because `true || anything` is already true.

---

### Q10. What will this output?

```javascript
console.log(1 + 2 + "3");
console.log("1" + 2 + 3);
```

**Answer:**

```text
"33"
"123"
```

First:

```text
1 + 2 → 3
3 + "3" → "33"
```

Second:

```text
"1" + 2 → "12"
"12" + 3 → "123"
```

This involves **operator evaluation + string concatenation + type coercion**.

---

### Q11. What will this output?

```javascript
console.log(10 || 20);
console.log(0 || 20);

console.log(10 ?? 20);
console.log(0 ?? 20);
```

**Answer:**

```text
10
20
10
0
```

`||` uses truthiness, while `??` checks only `null`/`undefined`.

---

### Q12. What will this output?

```javascript
let a = 5;

console.log(a++ + ++a);
```

**Answer:**

```text
12
```

Step by step:

```text
a++ → returns 5, then a becomes 6
++a → a becomes 7, returns 7

5 + 7 = 12
```

These expressions are legal, but in production code it's generally clearer to avoid modifying the same variable multiple times within one expression.

---

### Q13. What is the output?

```javascript
console.log([] || "Hello");
console.log([] ?? "Hello");
```

**Answer:**

```text
[]
[]
```

Why?

An empty array is **truthy**.

Therefore:

```javascript
[] || "Hello";
```

returns `[]`.

And `[]` isn't `null` or `undefined`, so:

```javascript
[] ?? "Hello";
```

also returns `[]`.

---

### Q14. What is the difference between `?.` and `.`?

**Answer:**

Normal property access:

```javascript
user.address.city;
```

throws an error if `user.address` is `null` or `undefined`.

Optional chaining:

```javascript
user.address?.city;
```

returns `undefined` instead of throwing when the value immediately before `?.` is `null` or `undefined`.

---

### 🔥 Q15. Advanced: What is the output?

```javascript
let a = 0;
let b = "hello";

console.log(a || b);
console.log(a ?? b);
```

**Answer:**

```text
hello
0
```

Because:

```text
0 || "hello"
→ "hello"
```

`0` is falsy.

But:

```text
0 ?? "hello"
→ 0
```

`0` is not `null` or `undefined`.

---

### 🔥 Q16. Advanced: What does this print?

```javascript
console.log(true + true);
console.log(true + false);
console.log(false + false);
```

**Answer:**

```text
2
1
0
```

In numeric operations:

```text
true  → 1
false → 0
```

So:

```text
true + true   → 1 + 1 → 2
true + false  → 1 + 0 → 1
false + false → 0 + 0 → 0
```

This is a good example of **type coercion interacting with operators**.
