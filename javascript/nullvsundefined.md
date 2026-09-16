# `null` vs `undefined` in JavaScript

This is a very common JavaScript interview topic because both represent **"no value"**, but they mean different things.

The easiest way to remember:

> **`undefined` → JavaScript says: "there is no value assigned."**
> **`null` → Developer says: "intentionally, there is no value."**

---

# 1. `undefined`

`undefined` means a variable/property exists, but **a value has not been assigned**.

### Example

```javascript
let name;

console.log(name);
```

Output:

```text
undefined
```

You declared the variable:

```javascript
let name;
```

but didn't give it a value.

Therefore JavaScript gives it:

```javascript
undefined;
```

---

# 2. `null`

`null` means **an intentional absence of a value**.

```javascript
let selectedUser = null;

console.log(selectedUser);
```

Output:

```text
null
```

Here, you're explicitly saying:

> "There is currently no selected user."

So `null` is a value that represents **intentional emptiness**.

---

# 3. Simple Real-World Example

Imagine a user profile:

```javascript
const user = {
  name: "Rahul",
  profilePicture: null,
};
```

`profilePicture: null` could mean:

> The user doesn't currently have a profile picture.

Now consider:

```javascript
const user = {
  name: "Rahul",
};
```

There is no `profilePicture` property at all.

If you access it:

```javascript
console.log(user.profilePicture);
```

You get:

```text
undefined
```

So:

```text
Property doesn't exist
        ↓
    undefined


Property exists but intentionally has no value
        ↓
       null
```

---

# 4. How They Are Created

## `undefined`

Common situations:

### Variable declared but not assigned

```javascript
let x;

console.log(x);
```

```text
undefined
```

### Missing object property

```javascript
const user = {
  name: "Rahul",
};

console.log(user.age);
```

```text
undefined
```

### Missing array element

```javascript
const arr = [10, 20];

console.log(arr[5]);
```

```text
undefined
```

### Function with no return

```javascript
function test() {
  // nothing returned
}

console.log(test());
```

```text
undefined
```

---

# 5. `null` Is Explicit

Unlike `undefined`, you normally assign `null` yourself.

```javascript
let user = null;
```

You are explicitly saying:

```text
user exists as a variable,
but currently has no object/value.
```

Another example:

```javascript
let selectedProduct = null;

// Later
selectedProduct = {
  id: 101,
  name: "Laptop",
};
```

This is a common pattern for representing "nothing selected yet."

---

# 6. `typeof` — Important Interview Question

Here's the famous JavaScript weirdness:

```javascript
console.log(typeof undefined);
```

Output:

```text
undefined
```

Makes sense.

But:

```javascript
console.log(typeof null);
```

Output:

```text
object
```

😵

This is a **historical JavaScript bug/legacy behavior**.

`null` is **not actually an object**. But:

```javascript
typeof null === "object";
```

is `true`.

This behavior is retained for backward compatibility.

### Interview answer

If asked:

> Why does `typeof null` return `"object"`?

Say:

> "`typeof null` returning `object` is a historical legacy behavior in JavaScript. Although `null` represents the intentional absence of a value and is not an object, changing this behavior would break existing code."

---

# 7. `null` vs `undefined` — Comparison

| Feature                     | `undefined`                                 | `null`                       |
| --------------------------- | ------------------------------------------- | ---------------------------- |
| Meaning                     | Value hasn't been assigned / is unavailable | Intentional absence of value |
| Usually assigned by         | JavaScript                                  | Developer                    |
| Type                        | `"undefined"`                               | `"object"` ⚠️                |
| Default value               | Yes, in several situations                  | No                           |
| Represents absence?         | Yes                                         | Yes                          |
| Can be explicitly assigned? | Yes                                         | Yes                          |

---

# 8. Equality

Now an important interview question.

```javascript
console.log(null == undefined);
```

Output:

```text
true
```

Why?

Because `==` performs special coercion rules and treats `null` and `undefined` as loosely equal to each other.

But:

```javascript
console.log(null === undefined);
```

Output:

```text
false
```

Why?

Because `===` checks both:

```text
value + type
```

And:

```text
null      → object
undefined → undefined
```

So their types differ.

---

# 9. Very Important Rule

```javascript
null == undefined;
```

✅ `true`

```javascript
null === undefined;
```

❌ `false`

This is one of the most common JavaScript interview questions.

---

# 10. What About Other Values?

```javascript
console.log(null == 0);
console.log(null == "");
console.log(null == false);
```

All are:

```text
false
```

But:

```javascript
console.log(null == undefined);
```

is:

```text
true
```

`null` has special behavior with loose equality.

---

# 11. `null` vs `0` vs `""`

These are **not the same thing**.

```javascript
const age = 0;
const name = "";
const user = null;
```

They represent different situations:

```text
0
↓
A numeric value of zero


""
↓
An empty string


null
↓
Intentionally no value
```

This distinction becomes important when validating forms and processing API data.

---

# 12. `undefined` vs Missing Property

Consider:

```javascript
const user = {
  name: "Rahul",
};
```

Now:

```javascript
console.log(user.age);
```

returns:

```text
undefined
```

But there is an important distinction between:

```javascript
user.age;
```

and explicitly setting:

```javascript
const user = {
  name: "Rahul",
  age: undefined,
};
```

Both give:

```javascript
user.age === undefined;
```

but the property itself differs.

You can check whether the property exists:

```javascript
console.log("age" in user);
```

For the first object:

```text
false
```

For the second:

```text
true
```

So:

> A property having the value `undefined` is not necessarily the same as the property not existing.

---

# 13. `null` and Optional Chaining

This connects directly to the previous topic.

Suppose:

```javascript
const user = null;
```

Without optional chaining:

```javascript
console.log(user.name);
```

You get an error:

```text
TypeError
```

With optional chaining:

```javascript
console.log(user?.name);
```

Output:

```text
undefined
```

Optional chaining safely handles both:

```javascript
null;
undefined;
```

---

# 14. `null` and Nullish Coalescing

This also connects directly to `??`.

```javascript
const username = null;

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

Because:

```text
null
↓
nullish
↓
use "Guest"
```

Same with `undefined`:

```javascript
const username = undefined;

const name = username ?? "Guest";

console.log(name);
```

Output:

```text
Guest
```

---

# 15. `??` vs `||`

Remember:

```javascript
value ?? defaultValue;
```

only considers:

```text
null
undefined
```

as missing.

But:

```javascript
value || defaultValue;
```

considers all falsy values:

```text
false
0
""
null
undefined
NaN
```

Example:

```javascript
const age = 0;

console.log(age ?? 18);
```

Output:

```text
0
```

But:

```javascript
console.log(age || 18);
```

Output:

```text
18
```

This is why `??` is often better when `0`, `false`, or `""` are valid values.

---

# 16. Function Parameters

Here's another interesting case.

```javascript
function greet(name) {
  console.log(name);
}

greet();
```

Output:

```text
undefined
```

Because no argument was supplied.

But:

```javascript
greet(null);
```

Output:

```text
null
```

Difference:

```text
greet()
   ↓
undefined
   ↓
No argument provided


greet(null)
   ↓
null
   ↓
Argument was explicitly provided as "no value"
```

---

# 17. Default Parameters

This is an important detail.

```javascript
function greet(name = "Guest") {
  console.log(name);
}
```

Now:

```javascript
greet();
```

Output:

```text
Guest
```

And:

```javascript
greet(undefined);
```

Output:

```text
Guest
```

But:

```javascript
greet(null);
```

Output:

```text
null
```

Why?

Default parameters are used when the argument is `undefined`, **not when it is `null`**.

This is a great interview point.

---

# 18. API Example

Imagine an API response:

```javascript
const user = {
  name: "Rahul",
  middleName: null,
};
```

`middleName: null` could mean:

> The field is known, but there is intentionally no middle name.

Whereas:

```javascript
const user = {
  name: "Rahul",
};
```

and:

```javascript
user.middleName;
```

returns `undefined`, meaning the property isn't present.

In real APIs, however, different systems may use `null`, omitted fields, or `undefined` differently, so you should follow that API's documented contract.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `undefined`?

**Answer:**

`undefined` generally means a value hasn't been assigned or isn't available.

```javascript
let x;

console.log(x); // undefined
```

---

### 2. What is `null`?

**Answer:**

`null` represents an intentional absence of a value.

```javascript
let user = null;
```

---

### 3. What is the type of `undefined`?

```javascript
typeof undefined;
```

Answer:

```text
"undefined"
```

---

### 4. What is the type of `null`?

```javascript
typeof null;
```

Answer:

```text
"object"
```

This is a historical JavaScript behavior.

---

# Intermediate

### 5. What is the difference?

```javascript
console.log(null == undefined);
console.log(null === undefined);
```

Answer:

```text
true
false
```

`==` performs loose equality.

`===` checks type and value.

---

### 6. What is the output?

```javascript
function test(value = 10) {
  console.log(value);
}

test();
test(undefined);
test(null);
```

Answer:

```text
10
10
null
```

Default parameters apply to `undefined`, not `null`.

---

### 7. What is the output?

```javascript
const user = {};

console.log(user.name);
console.log(user.name ?? "Guest");
```

Answer:

```text
undefined
Guest
```

---

# Advanced

### 8. What is the difference between these?

```javascript
const a = {};
const b = {
  name: undefined,
};

console.log(a.name === b.name);
console.log("name" in a);
console.log("name" in b);
```

Answer:

```text
true
false
true
```

Both property accesses produce `undefined`, but only `b` actually has a `name` property.

---

### 9. What is the output?

```javascript
console.log(null || "A");
console.log(null ?? "B");

console.log(0 || "C");
console.log(0 ?? "D");
```

Answer:

```text
A
B
C
0
```

Because:

```text
|| → falsy
?? → null / undefined
```

---

### 10. What is the output?

```javascript
const user = null;

console.log(user?.name ?? "Guest");
```

Answer:

```text
Guest
```

Step-by-step:

```text
user
 ↓
null
 ↓
user?.name
 ↓
undefined
 ↓
undefined ?? "Guest"
 ↓
"Guest"
```

---

# 🧠 Final Mental Model

Keep this in your head:

```text
undefined
    ↓
"JavaScript doesn't have a value here."


null
    ↓
"I intentionally have no value here."
```

And remember these interview facts:

```javascript
typeof undefined;
// "undefined"

typeof null;
// "object"  ← historical behavior

null == undefined;
// true

null === undefined;
// false

null ?? "Guest";
// "Guest"

undefined ?? "Guest";
// "Guest"

0 ?? "Guest";
// 0

"" ?? "Guest";
// ""
```

### One-line interview answer

> **"`undefined` usually means a value hasn't been assigned or isn't available, while `null` is an explicitly assigned value representing intentional absence. `undefined` has type `undefined`, whereas `typeof null` returns `object` because of a historical JavaScript behavior."**
