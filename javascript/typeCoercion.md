## What is Type Coercion in JavaScript?

**Type coercion** is the process of converting a value from one data type to another.

For example, JavaScript may convert a number into a string when performing certain operations.

```javascript
let age = 25;
let message = "I am " + age;

console.log(message); // "I am 25"
```

Here, JavaScript automatically converts the number `25` into a string.

This is called **implicit type coercion**.

---

## 1. Types of Type Coercion

There are two main types:

### A. Implicit Type Coercion

JavaScript automatically converts the data type.

#### Example 1: Number to String

```javascript
let result = 10 + "5";

console.log(result); // "105"
console.log(typeof result); // "string"
```

Why?

The `+` operator is used with a number and a string.

JavaScript converts `10` into `"10"` and concatenates the strings.

```text
10 + "5"
↓
"10" + "5"
↓
"105"
```

#### Example 2: String to Number

```javascript
let result = "10" - 5;

console.log(result); // 5
console.log(typeof result); // "number"
```

The `-` operator performs numeric subtraction, so JavaScript converts `"10"` into `10`.

```text
"10" - 5
↓
10 - 5
↓
5
```

#### Example 3: Boolean to Number

```javascript
console.log(true + 1); // 2
console.log(false + 1); // 1
```

During numeric conversion:

```text
true  → 1
false → 0
```

---

### B. Explicit Type Coercion

The developer manually converts a value into another type.

#### Convert String to Number

```javascript
let value = "123";

let number = Number(value);

console.log(number); // 123
console.log(typeof number); // "number"
```

#### Convert Number to String

```javascript
let value = 123;

let text = String(value);

console.log(text); // "123"
console.log(typeof text); // "string"
```

#### Convert Value to Boolean

```javascript
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true
```

---

## 2. Type Coercion with `==` and `===`

This is one of the most important interview concepts.

### `==` — Loose Equality

The `==` operator allows type coercion before comparing values.

```javascript
console.log(5 == "5"); // true
```

JavaScript converts `"5"` into a number before comparing.

```text
5 == "5"
↓
5 == 5
↓
true
```

Another example:

```javascript
console.log(true == 1); // true
```

Because `true` is converted to `1`.

---

### `===` — Strict Equality

The `===` operator checks both:

1. Value
2. Data type

It does **not** perform type coercion between different types.

```javascript
console.log(5 === "5"); // false
```

Why?

```text
5    → number
"5"  → string
```

The types are different, so the result is `false`.

### Comparison Table

| Expression    | Result  | Reason                      |
| ------------- | ------- | --------------------------- |
| `5 == "5"`    | `true`  | Type coercion occurs        |
| `5 === "5"`   | `false` | Different types             |
| `true == 1`   | `true`  | Boolean converted to number |
| `true === 1`  | `false` | Different types             |
| `0 == false`  | `true`  | Type coercion occurs        |
| `0 === false` | `false` | Different types             |

**Best practice:** Prefer `===` and `!==` unless you specifically need the behavior of loose equality.

---

## 3. Truthy and Falsy Values

Type coercion also happens when JavaScript expects a Boolean, such as in an `if` statement.

```javascript
let value = 0;

if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}
```

Output:

```text
Falsy
```

JavaScript converts `0` into `false` in this Boolean context.

### Common Falsy Values

These values become `false` when converted to Boolean:

```javascript
false;
0 - 0;
0n;
("");
null;
undefined;
NaN;
```

Most other values are truthy, including:

```javascript
"0"
"false"
[]
{}
```

For example:

```javascript
console.log(Boolean("0")); // true
console.log(Boolean([])); // true
console.log(Boolean({})); // true
```

An empty string is falsy, but an empty array and empty object are truthy.

---

## 4. Common Interview Examples

Try to predict the output before looking at the answers.

### Example 1

```javascript
console.log(1 + "2" + 3);
```

**Output:**

```javascript
"123";
```

Explanation:

```text
1 + "2" → "12"
"12" + 3 → "123"
```

Once string concatenation begins, the `+` operator continues concatenating strings in this expression.

---

### Example 2

```javascript
console.log(1 + 2 + "3");
```

**Output:**

```javascript
"33";
```

Explanation:

```text
1 + 2 → 3
3 + "3" → "33"
```

---

### Example 3

```javascript
console.log("5" - 2);
```

**Output:**

```javascript
3;
```

The string `"5"` is converted to a number.

---

### Example 4

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

**Output:**

```javascript
true;
false;
```

Loose equality treats `null` and `undefined` as equal to each other in this specific comparison. Strict equality considers their types different.

---

## 5. A Simple Real-World Example

Suppose you receive a number from an HTML input:

```html
<input id="age" value="25" />
```

When you read its value in JavaScript:

```javascript
let age = document.getElementById("age").value;

console.log(typeof age); // "string"
```

Even though the user entered `25`, the value is a string.

If you perform arithmetic:

```javascript
console.log(age + 5); // "255"
```

To get the expected numeric result:

```javascript
console.log(Number(age) + 5); // 30
```

---

### Key Takeaway

> **Type coercion is JavaScript's conversion of one data type into another, either automatically or explicitly.**

Remember these three points:

1. `+` can perform string concatenation.
2. `-`, `*`, and `/` generally convert operands to numbers.
3. `==` allows type coercion, while `===` does not.
