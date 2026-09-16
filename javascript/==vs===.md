The main difference is **type coercion**.

### `==` — Loose Equality

`==` compares values **after converting types when necessary**.

```javascript
5 == "5"; // true
true == 1; // true
0 == false; // true
```

For example:

```javascript
5 == "5";
```

JavaScript converts `"5"` (string) → `5` (number), then compares:

```text
5 == 5  → true
```

---

### `===` — Strict Equality

`===` compares **both value AND type**. It does **not** perform the usual equality type conversion.

```javascript
5 === "5"; // false
true === 1; // false
0 === false; // false
```

For example:

```javascript
5 === "5";
```

Types are:

```text
5    → number
"5"  → string
```

Different types → `false`.

---

### Quick comparison

| Expression           |     `==` |    `===` |
| -------------------- | -------: | -------: |
| `5 == "5"`           |  ✅ true | ❌ false |
| `10 == "10"`         |  ✅ true | ❌ false |
| `true == 1`          |  ✅ true | ❌ false |
| `false == 0`         |  ✅ true | ❌ false |
| `"hello" == "hello"` |  ✅ true |  ✅ true |
| `5 == 6`             | ❌ false | ❌ false |

### Important example

```javascript
let a = 10;
let b = "10";

console.log(a == b); // true
console.log(a === b); // false
```

Think of it as:

```text
==   → "Are these equivalent after conversion?"
===  → "Are these exactly the same value AND type?"
```

**Best practice:** In most JavaScript code, use `===` because it avoids unexpected type coercion.

```javascript
if (age === 18) {
  // ...
}
```

rather than:

```javascript
if (age == 18) {
  // ...
}
```

A related interview topic worth learning next is **`!=` vs `!==`**, which follows the same loose-vs-strict distinction.
