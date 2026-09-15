In **JavaScript**, data types are broadly divided into two categories:

1. **Primitive data types**
2. **Reference data types** (also called non-primitive data types)

The main difference is how values are stored and copied.

## 1. Primitive Data Types

Primitive data types represent **single, simple values**. They are immutable, meaning their values cannot be changed directly.

JavaScript has **7 primitive data types**:

| Data Type | Example         |
| --------- | --------------- |
| String    | `"Hello"`       |
| Number    | `42`, `3.14`    |
| BigInt    | `123n`          |
| Boolean   | `true`, `false` |
| Undefined | `undefined`     |
| Null      | `null`          |
| Symbol    | `Symbol("id")`  |

### Example

```javascript
let name = "Rahul";
let age = 25;
let isStudent = true;
```

Here:

- `name` contains a string.
- `age` contains a number.
- `isStudent` contains a boolean.

### Primitive values are copied by value

When you assign one primitive variable to another, the **value is copied**.

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

### Strings are immutable

```javascript
let name = "Hello";

name[0] = "Y";

console.log(name); // "Hello"
```

You cannot directly change an individual character of a string.

---

## 2. Reference Data Types

Reference data types are objects that can contain **multiple values or more complex structures**.

Common reference types include:

- Objects
- Arrays
- Functions
- Dates
- Maps
- Sets

Technically, arrays, functions, and other complex structures are objects in JavaScript.

### Example

```javascript
let person = {
  name: "Rahul",
  age: 25,
};

let numbers = [10, 20, 30];

function greet() {
  console.log("Hello");
}
```

Here:

- `person` is an object.
- `numbers` is an array.
- `greet` is a function.

### Reference values are copied by reference

When you assign an object to another variable, both variables refer to the **same object**.

```javascript
let person1 = {
  name: "Rahul",
};

let person2 = person1;

person2.name = "Amit";

console.log(person1.name); // "Amit"
console.log(person2.name); // "Amit"
```

### Why did `person1` change?

Because:

```javascript
let person2 = person1;
```

does not create a new object.

Both variables point to the same object.

Conceptually:

```text
person1 ──┐
          ├──> { name: "Amit" }
person2 ──┘
```

---

## 3. Main Differences

| Feature    | Primitive               | Reference                              |
| ---------- | ----------------------- | -------------------------------------- |
| Represents | Simple value            | Object or complex structure            |
| Examples   | String, Number, Boolean | Object, Array, Function                |
| Mutable?   | Values are immutable    | Objects can be modified                |
| Assignment | Value is copied         | Reference to the same object is copied |
| Comparison | Values are compared     | Object identity is compared            |
| Example    | `let a = 10`            | `let obj = { x: 10 }`                  |

---

## 4. Important Interview Concept: Comparison

### Primitive comparison

```javascript
let a = 10;
let b = 10;

console.log(a === b); // true
```

Both variables contain the same value.

### Reference comparison

```javascript
let obj1 = { name: "Rahul" };
let obj2 = { name: "Rahul" };

console.log(obj1 === obj2); // false
```

Even though both objects contain the same data, they are different objects.

```text
obj1 ──> { name: "Rahul" }

obj2 ──> { name: "Rahul" }
```

They have different identities.

### Same reference

```javascript
let obj1 = { name: "Rahul" };
let obj2 = obj1;

console.log(obj1 === obj2); // true
```

Both variables refer to the same object.

---

## 5. Important Clarification: JavaScript Is Pass-by-Value

A common misconception is that JavaScript is "pass-by-reference."

**JavaScript is always pass-by-value.**

For objects, the value being copied is a reference to the object.

Example:

```javascript
function changeName(person) {
  person.name = "Amit";
}

let user = {
  name: "Rahul",
};

changeName(user);

console.log(user.name); // "Amit"
```

The function receives a copy of the object's reference. Both references point to the same object, so modifying the object affects the original.

However:

```javascript
function replaceObject(person) {
  person = {
    name: "Amit",
  };
}

let user = {
  name: "Rahul",
};

replaceObject(user);

console.log(user.name); // "Rahul"
```

Here, assigning a new object to `person` does not change the original `user` variable.

---

### Easy way to remember

> **Primitive:** Copy the value.
> **Reference:** Copy the reference to the object.

One more important point: JavaScript engines may internally store values in different ways, but the distinction above describes how JavaScript behaves when you assign, modify, and compare values.
