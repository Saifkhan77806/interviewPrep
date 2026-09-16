# Conditional Statements in JavaScript

Conditional statements allow your program to **make decisions**.

In simple words:

> **"If this condition is true, do this; otherwise, do something else."**

For example:

```javascript
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}
```

Here JavaScript checks:

```text
age >= 18
   ↓
 true
   ↓
execute the code
```

---

# 1. `if` Statement

The simplest conditional statement is `if`.

### Syntax

```javascript
if (condition) {
  // code to execute if condition is true
}
```

### Example

```javascript
let age = 20;

if (age >= 18) {
  console.log("You can vote");
}
```

Since `age >= 18` is `true`, the message is printed.

If:

```javascript
let age = 15;
```

the condition is false, so nothing happens.

---

# 2. `if...else`

Use `else` when you want to execute one block if the condition is true and another block if it's false.

```javascript
let age = 15;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

Output:

```text
Minor
```

Think of it as:

```text
       age >= 18?
        /      \
      yes       no
       ↓         ↓
    Adult      Minor
```

---

# 3. `if...else if...else`

When you have **multiple conditions**, use `else if`.

```javascript
let marks = 75;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
```

Output:

```text
Grade B
```

### Important

JavaScript checks the conditions **from top to bottom**.

Once it finds a true condition, it executes that block and skips the remaining `else if`/`else` blocks.

For example:

```javascript
let marks = 95;

if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
}
```

Output:

```text
A+
```

It doesn't also print `A`.

---

# 4. Nested `if`

You can put an `if` statement inside another `if`.

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18) {
  if (hasLicense) {
    console.log("You can drive");
  }
}
```

This means:

```text
Is age >= 18?
      ↓
     yes
      ↓
Does user have license?
      ↓
     yes
      ↓
You can drive
```

However, deeply nested conditions can become difficult to read.

Often you can simplify them using logical operators:

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
}
```

---

# 5. Using Logical Operators in Conditions

You can combine multiple conditions using:

```text
&&   AND
||   OR
!    NOT
```

## `&&`

Both conditions must be true.

```javascript
let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
}
```

---

## `||`

At least one condition must be true.

```javascript
let isAdmin = false;
let isOwner = true;

if (isAdmin || isOwner) {
  console.log("Access granted");
}
```

---

## `!`

Reverses a Boolean value.

```javascript
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please login");
}
```

Since:

```javascript
!false; // true
```

the message is printed.

---

# 6. Truthy and Falsy in Conditional Statements

This connects directly to the topic we discussed earlier.

JavaScript doesn't require the condition to literally be `true` or `false`.

For example:

```javascript
let username = "Rahul";

if (username) {
  console.log("Username exists");
}
```

`"Rahul"` is **truthy**, so the condition passes.

But:

```javascript
let username = "";

if (username) {
  console.log("Username exists");
}
```

`""` is **falsy**, so it doesn't execute.

### Another example

```javascript
let count = 0;

if (count) {
  console.log("There are items");
} else {
  console.log("No items");
}
```

Output:

```text
No items
```

because `0` is falsy.

---

# 7. `switch` Statement

`switch` is useful when you're comparing **one value against multiple possible values**.

### Example

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```text
Tuesday
```

---

# 8. Why Do We Need `break`?

This is extremely important with `switch`.

Consider:

```javascript
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");

  case 2:
    console.log("Tuesday");

  case 3:
    console.log("Wednesday");
}
```

Output:

```text
Tuesday
Wednesday
```

Why?

Because without `break`, JavaScript continues executing the following cases.

This is called **fall-through**.

With `break`:

```javascript
case 2:
  console.log("Tuesday");
  break;
```

JavaScript exits the `switch`.

---

# 9. `default` in `switch`

`default` runs when none of the cases match.

```javascript
let day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  default:
    console.log("Invalid day");
}
```

Output:

```text
Invalid day
```

Think of `default` as the `else` of a `switch`.

---

# 10. Multiple Cases with the Same Code

You can intentionally use fall-through when multiple cases should do the same thing.

```javascript
let day = "Saturday";

switch (day) {
  case "Saturday":
  case "Sunday":
    console.log("Weekend");
    break;

  default:
    console.log("Weekday");
}
```

Output:

```text
Weekend
```

Here both `"Saturday"` and `"Sunday"` execute the same block.

---

# 11. Ternary Operator

The ternary operator is another way to write a simple condition.

Syntax:

```javascript
condition ? valueIfTrue : valueIfFalse;
```

Example:

```javascript
let age = 20;

let message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

Output:

```text
Adult
```

Equivalent `if...else`:

```javascript
let message;

if (age >= 18) {
  message = "Adult";
} else {
  message = "Minor";
}
```

### When should you use it?

Good:

```javascript
let status = isLoggedIn ? "Logout" : "Login";
```

Avoid complicated nested ternaries like:

```javascript
let result = a ? b : c ? d : e ? f : g;
```

They're harder to read and maintain.

---

# 12. `if` vs `switch` vs Ternary

A useful way to think about them:

### `if`

Use when you're evaluating **conditions or ranges**:

```javascript
if (age >= 18) {
  // ...
}
```

### `switch`

Use when you're comparing **one value against multiple specific values**:

```javascript
switch (role) {
  case "admin":
    // ...
    break;

  case "user":
    // ...
    break;
}
```

### Ternary

Use for a **simple two-way choice**:

```javascript
let result = age >= 18 ? "Adult" : "Minor";
```

---

# 13. Important Difference: Multiple `if` vs `else if`

This is a common interview question.

### Multiple `if`

Every `if` is checked independently.

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adult");
}

if (age >= 20) {
  console.log("20 or older");
}
```

Output:

```text
Adult
20 or older
```

Both conditions are checked.

### `else if`

Only the **first matching condition** executes.

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else if (age >= 20) {
  console.log("20 or older");
}
```

Output:

```text
Adult
```

Once the first `if` is true, JavaScript doesn't check the `else if`.

---

# 14. Conditional Assignment with `??`

You can also use the nullish coalescing operator when you want a fallback for only `null` or `undefined`.

```javascript
let username = null;

let displayName = username ?? "Guest";

console.log(displayName);
```

Output:

```text
Guest
```

But:

```javascript
let username = "";

let displayName = username ?? "Guest";

console.log(displayName);
```

Output:

```text
""
```

Because an empty string is not `null` or `undefined`.

---

# 15. A Real-World Example

Imagine a login system:

```javascript
let isLoggedIn = true;
let isAdmin = false;

if (!isLoggedIn) {
  console.log("Please log in");
} else if (isAdmin) {
  console.log("Welcome Admin");
} else {
  console.log("Welcome User");
}
```

Output:

```text
Welcome User
```

The program evaluates:

```text
isLoggedIn?
   ↓
 true

isAdmin?
   ↓
 false

→ Welcome User
```

This is the basic pattern behind many real-world decisions in applications.

---

# Quick Summary

| Statement             | Use                                      |     |                                      |
| --------------------- | ---------------------------------------- | --- | ------------------------------------ |
| `if`                  | One condition                            |     |                                      |
| `if...else`           | Two alternatives                         |     |                                      |
| `if...else if...else` | Multiple conditions                      |     |                                      |
| Nested `if`           | Condition inside another condition       |     |                                      |
| `switch`              | Compare one value against multiple cases |     |                                      |
| `ternary ? :`         | Short/simple two-way condition           |     |                                      |
| `&&`                  | All conditions need to pass              |     |                                      |
| `                     |                                          | `   | At least one condition needs to pass |
| `!`                   | Reverse truthiness/Boolean               |     |                                      |

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### Q1. What is a conditional statement?

**Answer:**

A conditional statement allows JavaScript to execute different code depending on whether a condition is true or false.

Examples:

```javascript
if
if...else
else if
switch
```

---

### Q2. What is the syntax of an `if` statement?

**Answer:**

```javascript
if (condition) {
  // code
}
```

The code executes when the condition is truthy.

---

### Q3. What is the output?

```javascript
let age = 20;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

**Answer:**

```text
Adult
```

---

### Q4. What is the purpose of `else`?

**Answer:**

`else` executes when the preceding `if` condition is falsy.

```javascript
if (condition) {
  // condition is true
} else {
  // condition is false
}
```

---

## Intermediate

### Q5. What is the difference between `if` and `else if`?

**Answer:**

Multiple independent `if` statements can all execute if their conditions are true.

An `else if` belongs to the same conditional chain, and once one branch is matched, the remaining branches are skipped.

---

### Q6. What is the output?

```javascript
let x = 10;

if (x > 5) {
  console.log("A");
}

if (x > 8) {
  console.log("B");
} else {
  console.log("C");
}
```

**Answer:**

```text
A
B
```

Both `if` statements are independent.

---

### Q7. What is the output?

```javascript
let x = 10;

if (x > 5) {
  console.log("A");
} else if (x > 8) {
  console.log("B");
} else {
  console.log("C");
}
```

**Answer:**

```text
A
```

The first condition is already true, so the `else if` isn't evaluated.

---

### Q8. What happens if you forget `break` in a `switch`?

**Answer:**

JavaScript can continue executing subsequent cases. This is called **fall-through**.

```javascript
switch (x) {
  case 1:
    console.log("One");

  case 2:
    console.log("Two");
}
```

If `x === 1`, both `"One"` and `"Two"` can be printed.

---

## Advanced

### Q9. What is the output?

```javascript
let value = 0;

if (value) {
  console.log("A");
} else {
  console.log("B");
}
```

**Answer:**

```text
B
```

`0` is falsy.

---

### Q10. What is the output?

```javascript
let value = "false";

if (value) {
  console.log("A");
} else {
  console.log("B");
}
```

**Answer:**

```text
A
```

`"false"` is a non-empty string, so it is truthy.

---

### Q11. What is the difference between these?

```javascript
if (value)
```

and:

```javascript
if (value === true)
```

**Answer:**

`if (value)` checks whether the value is **truthy**.

`if (value === true)` checks whether the value is specifically the Boolean `true`.

```javascript
let value = "hello";

if (value) {
  console.log("A"); // runs
}

if (value === true) {
  console.log("B"); // doesn't run
}
```

---

### Q12. What is the output?

```javascript
let x = 10;

switch (x) {
  case 5:
    console.log("Five");
    break;

  case 10:
    console.log("Ten");

  case 15:
    console.log("Fifteen");
    break;

  default:
    console.log("Other");
}
```

**Answer:**

```text
Ten
Fifteen
```

Why?

`x` matches `case 10`.

There is no `break` after `case 10`, so execution falls through into `case 15`.

---

### 🔥 Q13. What is the output?

```javascript
let age = 20;
let hasLicense = false;

if (age >= 18 && hasLicense) {
  console.log("Can drive");
} else {
  console.log("Cannot drive");
}
```

**Answer:**

```text
Cannot drive
```

Because:

```text
age >= 18     → true
hasLicense    → false

true && false → false
```

---

### 🔥 Q14. What is the output?

```javascript
let a = 10;
let b = 20;

let result = a > b ? "A" : b > a ? "B" : "Equal";

console.log(result);
```

**Answer:**

```text
B
```

The expression is effectively:

```javascript
a > b ? "A" : b > a ? "B" : "Equal";
```

Since `b > a` is true, the result is `"B"`.

For production code, though, a normal `if...else if...else` would usually be easier to read here.

---

### 🔥 Q15. What is the difference between `switch` and `if...else`?

**Answer:**

`switch` is particularly useful when comparing **one expression against multiple discrete values**:

```javascript
switch (role) {
  case "admin":
    // ...
    break;

  case "user":
    // ...
    break;
}
```

`if...else` is more flexible for **ranges and complex Boolean conditions**:

```javascript
if (age >= 18 && hasLicense) {
  // ...
}
```

Neither is universally "better"; the appropriate choice depends on the condition you're expressing.

---

## 🧠 Interview Challenge

What will this print?

```javascript
let x = 0;

if (x) {
  console.log("A");
} else if (x === 0) {
  console.log("B");
} else {
  console.log("C");
}

let result = x || 10;
console.log(result);

let result2 = x ?? 10;
console.log(result2);
```

### Answer

```text
B
10
0
```

Why?

```text
x = 0

if (x)
→ 0 is falsy
→ skip

x === 0
→ true
→ print B

x || 10
→ 0 is falsy
→ 10

x ?? 10
→ 0 is NOT null/undefined
→ 0
```

This one question combines **conditional statements + truthy/falsy + `||` + `??`**, which are closely related concepts.
