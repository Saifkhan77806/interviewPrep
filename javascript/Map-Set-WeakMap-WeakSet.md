Absolutely 👍 This is a **very important JavaScript topic** because `Map`, `Set`, `WeakMap`, and `WeakSet` solve problems that ordinary objects and arrays don't handle as cleanly.

We'll build this from the basics:

1. `Map`
2. `Set`
3. `WeakMap`
4. `WeakSet`
5. When to use `Map` instead of an object
6. Duplicate removal
7. Frequency counting
8. Object keys and equality
9. Memory-related use cases
10. Interview questions

---

# 1. `Map`

A `Map` is a collection of **key-value pairs**.

It looks somewhat like an object:

```js id="7b2n1d"
let user = {
  name: "Rahul",
  age: 25
};
```

But with `Map`:

```js id="v70r9u"
let user = new Map();

user.set("name", "Rahul");
user.set("age", 25);

console.log(user);
```

Conceptually:

```text id="1f8o6y"
"name" → "Rahul"
"age"  → 25
```

---

# 2. Basic `Map` Methods

## `set()`

Adds or updates a key-value pair.

```js id="l0e5u5"
let map = new Map();

map.set("name", "Rahul");
map.set("age", 25);
```

---

## `get()`

Gets a value.

```js id="xg5q3h"
console.log(map.get("name"));
```

Output:

```text id="f9d8w7"
Rahul
```

---

## `has()`

Checks whether a key exists.

```js id="i8j9px"
console.log(map.has("name"));
console.log(map.has("city"));
```

Output:

```text id="t7l4go"
true
false
```

---

## `delete()`

Removes a key-value pair.

```js id="v7l4ue"
map.delete("age");

console.log(map.has("age"));
```

Output:

```text id="w3b5f9"
false
```

---

## `size`

Gets the number of entries.

```js id="1z8lq4"
console.log(map.size);
```

Output:

```text id="4t8k3y"
1
```

---

## `clear()`

Removes everything.

```js id="u8d1vp"
map.clear();

console.log(map.size);
```

Output:

```text id="n4g8r2"
0
```

---

# 3. `Map` Can Use Almost Anything as a Key

This is one of the **biggest differences between `Map` and objects**.

A `Map` can use:

```text id="4n0a6v"
string
number
boolean
object
array
function
symbol
etc.
```

as keys.

For example:

```js id="4s8x5j"
let map = new Map();

let user = {
  name: "Rahul"
};

map.set(user, "Logged In");

console.log(map.get(user));
```

Output:

```text id="s6q5az"
Logged In
```

Here the object itself is the key.

---

# 4. Why is this useful?

Imagine you have DOM elements and want to associate data with each element:

```js id="e0j3h2"
let button = document.querySelector("#submit");

let metadata = new Map();

metadata.set(button, {
  clicked: false,
  attempts: 0
});
```

The DOM element is the key.

Objects aren't as natural for this because object property keys are restricted to strings and symbols.

---

# 5. `Map` vs Object

This is one of your requested topics and a **very common interview question**.

Both can store key-value data:

### Object

```js id="5n1j2x"
let user = {
  name: "Rahul",
  age: 25
};
```

### Map

```js id="l0g0d6"
let user = new Map();

user.set("name", "Rahul");
user.set("age", 25);
```

So when should you use which?

---

## Use an Object when...

Your data naturally represents an **entity with named properties**.

For example:

```js id="x0e4v6"
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};
```

This describes a user.

An object is a natural choice.

---

## Use `Map` when...

Your data is conceptually a **lookup table / dictionary**.

For example:

```js id="f1v9m4"
let scores = new Map();

scores.set("Rahul", 90);
scores.set("Amit", 85);
scores.set("Priya", 95);
```

You're mapping:

```text id="x7d0n2w"
student → score
```

That's a good `Map` use case.

---

# 6. Major Differences

| Feature           | Object                            | Map                        |
| ----------------- | --------------------------------- | -------------------------- |
| Key types         | String/Symbol                     | Any value                  |
| Get value         | `obj[key]`                        | `map.get(key)`             |
| Set value         | `obj[key] = value`                | `map.set(key, value)`      |
| Check key         | `key in obj` / `hasOwn`           | `map.has(key)`             |
| Number of entries | `Object.keys(obj).length`         | `map.size`                 |
| Clear all         | Manual                            | `map.clear()`              |
| Iteration         | Need `Object.keys/values/entries` | Directly iterable          |
| Object keys       | Converted to property keys        | Can remain object identity |
| Intended use      | Structured records                | Key-value collections      |

---

# 7. Map is directly iterable

You can do:

```js id="3t5n8w"
let map = new Map([
  ["name", "Rahul"],
  ["age", 25]
]);

for (let [key, value] of map) {
  console.log(key, value);
}
```

Output:

```text id="9a2j5x"
name Rahul
age 25
```

You can also use:

```js id="g5q8s2"
map.keys();
map.values();
map.entries();
```

---

# 8. Creating a Map directly

Instead of:

```js id="g7q9d1"
let map = new Map();

map.set("name", "Rahul");
map.set("age", 25);
```

you can write:

```js id="0t2r5b"
let map = new Map([
  ["name", "Rahul"],
  ["age", 25]
]);
```

---

# 9. `Set`

A `Set` is a collection of **unique values**.

This is the easiest way to remember it:

> **Map → key + value**
> **Set → values only, no duplicates**

Example:

```js id="x4w8p2"
let numbers = new Set();

numbers.add(10);
numbers.add(20);
numbers.add(10);

console.log(numbers);
```

Output:

```text id="q5k7m1"
Set(2) { 10, 20 }
```

The second `10` is ignored.

---

# 10. Set Methods

### `add()`

```js id="3d9v6a"
let set = new Set();

set.add("JavaScript");
set.add("React");
```

### `has()`

```js id="8x5k1p"
console.log(set.has("JavaScript"));
```

Output:

```text id="j3m8q2"
true
```

### `delete()`

```js id="4r1n7c"
set.delete("React");
```

### `size`

```js id="9y2v5k"
console.log(set.size);
```

### `clear()`

```js id="p8m4s6"
set.clear();
```

---

# 11. Duplicate Removal

This is one of the **most common uses of `Set`**.

Suppose:

```js id="s3c9x1"
let numbers = [1, 2, 2, 3, 3, 3, 4];

let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

Output:

```js id="b5q7m2"
[1, 2, 3, 4]
```

Let's break it down.

First:

```js id="c1w6z8"
new Set(numbers)
```

gives:

```text id="n5d2k7"
Set { 1, 2, 3, 4 }
```

Then:

```js id="m7x3p9"
[...new Set(numbers)]
```

converts the Set back into an array:

```text id="e4k1q8"
[1, 2, 3, 4]
```

### Very common interview answer:

```js id="6s1v4n"
let unique = [...new Set(array)];
```

---

# 12. Set and Strings

You can also remove duplicate characters:

```js id="q2x8m4"
let str = "javascript";

let unique = [...new Set(str)];

console.log(unique);
```

Output:

```js id="0v6k3n"
["j", "a", "v", "s", "c", "r", "i", "p", "t"]
```

---

# 13. Set and Equality

A Set uses **SameValueZero** equality.

For most everyday values, this behaves much like `===`, with an important difference:

```js id="9j2k5m"
NaN === NaN
```

is:

```text id="7f8n1p"
false
```

But:

```js id="5h3q7w"
let set = new Set([NaN]);

console.log(set.has(NaN));
```

Output:

```text id="j6m2q9"
true
```

Also:

```js id="r4t8x1"
0
```

and:

```js id="s7v3k5"
-0
```

are treated as the same value.

---

# 14. Object Equality in `Set`

Here's an important trap.

```js id="k5p9r2"
let set = new Set();

set.add({ name: "Rahul" });
set.add({ name: "Rahul" });

console.log(set.size);
```

Output:

```text id="x8m3q6"
2
```

Why?

Because these are two different objects:

```js id="v2n7c4"
{ name: "Rahul" } !== { name: "Rahul" }
```

They have identical contents, but different references.

---

# 15. Object Reference Equality in `Map`

The same applies to `Map`.

```js id="b3k8w5"
let map = new Map();

let user1 = { name: "Rahul" };
let user2 = { name: "Rahul" };

map.set(user1, "User 1");

console.log(map.get(user1));
console.log(map.get(user2));
```

Output:

```text id="n7q4s1"
User 1
undefined
```

Even though:

```js id="z6m1p8"
user1.name === user2.name
```

is:

```text id="c5v9x3"
true
```

the objects themselves are different.

```js id="m4r8k2"
user1 === user2
```

is:

```text id="j1q7v5"
false
```

Therefore the Map doesn't treat them as the same key.

---

# 16. `WeakMap`

Now we get into memory-related use cases.

A `WeakMap` is similar to a `Map`, but it is specifically designed for **object-keyed associations that should not keep those objects alive in memory**.

The key must be an **object or non-registered symbol**.

Typical beginner example:

```js id="u5r2k8"
let weakMap = new WeakMap();

let user = {
  name: "Rahul"
};

weakMap.set(user, {
  loginTime: Date.now()
});
```

You can retrieve it:

```js id="p3m7x1"
console.log(weakMap.get(user));
```

---

# 17. Why "Weak"?

Consider a normal `Map`:

```js id="e7q4m2"
let map = new Map();

let user = {
  name: "Rahul"
};

map.set(user, "some data");

user = null;
```

The Map still has a reference to the original object as its key.

Conceptually:

```text id="c9x2v6"
Map ─────→ user object
```

So the object cannot be garbage-collected merely because your `user` variable no longer references it.

---

With `WeakMap`:

```js id="k3n8w5"
let weakMap = new WeakMap();

let user = {
  name: "Rahul"
};

weakMap.set(user, "some data");

user = null;
```

Once there are no other strong references to that object, the garbage collector can eventually reclaim it.

Conceptually:

```text id="m4v7q1"
user ─────→ Object

user = null

WeakMap
  - - - - → Object
  weak reference
```

The WeakMap association doesn't by itself keep the object alive.

---

# 18. Important: You Cannot Iterate a WeakMap

Unlike `Map`, you cannot do:

```js id="z1q5m8"
weakMap.keys();
```

or:

```js id="d7v2k4"
for (let item of weakMap) {}
```

Why?

Because garbage collection can happen at unpredictable times.

If you could iterate a WeakMap, its contents could change invisibly depending on garbage collection.

Therefore WeakMap intentionally does **not** expose enumeration.

You mainly use:

```js id="n4p8x2"
weakMap.set()
weakMap.get()
weakMap.has()
weakMap.delete()
```

---

# 19. WeakMap Practical Use Case

A classic use case is storing **private metadata associated with objects**.

```js id="x8m5q3"
const metadata = new WeakMap();

function trackUser(user) {
  metadata.set(user, {
    loginCount: 1
  });
}

let user = {
  name: "Rahul"
};

trackUser(user);

console.log(metadata.get(user));
```

Output:

```js id="b6r1k9"
{
  loginCount: 1
}
```

If the `user` object eventually becomes unreachable elsewhere, the associated metadata can become collectible too.

This is useful for:

* caches
* metadata
* DOM element associations
* object-specific internal state
* avoiding memory retention

---

# 20. `WeakSet`

`WeakSet` is similar to `Set`, but it holds **objects weakly**.

Example:

```js id="r2k7m4"
let weakSet = new WeakSet();

let user = {
  name: "Rahul"
};

weakSet.add(user);

console.log(weakSet.has(user));
```

Output:

```text id="p9x3v6"
true
```

But:

```js id="n5q1w8"
weakSet.add(10);
```

throws an error because WeakSet only accepts objects and non-registered symbols.

---

# 21. WeakSet Practical Use Case

Suppose you want to track whether particular objects have already been processed.

```js id="h7m2q5"
const processed = new WeakSet();

function processUser(user) {
  if (processed.has(user)) {
    console.log("Already processed");
    return;
  }

  processed.add(user);

  console.log("Processing user...");
}
```

Then:

```js id="v3x8k1"
let user = {
  name: "Rahul"
};

processUser(user);
processUser(user);
```

Output:

```text id="q4n7m2"
Processing user...
Already processed
```

Because the object itself is tracked.

And if that object becomes unreachable elsewhere, the WeakSet doesn't prevent it from being garbage-collected.

---

# 22. Map vs WeakMap

| Feature                              | Map                       | WeakMap                                      |
| ------------------------------------ | ------------------------- | -------------------------------------------- |
| Key types                            | Any value                 | Objects + non-registered symbols             |
| `get()`                              | ✅                         | ✅                                            |
| `set()`                              | ✅                         | ✅                                            |
| `has()`                              | ✅                         | ✅                                            |
| `delete()`                           | ✅                         | ✅                                            |
| `size`                               | ✅                         | ❌                                            |
| Iteration                            | ✅                         | ❌                                            |
| `keys()`                             | ✅                         | ❌                                            |
| `values()`                           | ✅                         | ❌                                            |
| Keeps object keys strongly reachable | Yes                       | No                                           |
| Main purpose                         | General key-value storage | Object-associated data without preventing GC |

---

# 23. Set vs WeakSet

| Feature      | Set           | WeakSet                                  |
| ------------ | ------------- | ---------------------------------------- |
| Values       | Any value     | Objects + non-registered symbols         |
| Duplicates   | ❌             | ❌                                        |
| `add()`      | ✅             | ✅                                        |
| `has()`      | ✅             | ✅                                        |
| `delete()`   | ✅             | ✅                                        |
| `size`       | ✅             | ❌                                        |
| Iteration    | ✅             | ❌                                        |
| Main purpose | Unique values | Track objects without keeping them alive |

---

# 24. Frequency Counting with `Map`

This is another **very common interview problem**.

Suppose:

```js id="k8m2p4"
let fruits = [
  "apple",
  "banana",
  "apple",
  "orange",
  "banana",
  "apple"
];
```

We want:

```text id="c5x7q1"
apple  → 3
banana → 2
orange → 1
```

Use a `Map`:

```js id="w4n9s6"
let frequency = new Map();

for (let fruit of fruits) {
  frequency.set(
    fruit,
    (frequency.get(fruit) || 0) + 1
  );
}

console.log(frequency);
```

Conceptually:

```text id="z2v8m5"
apple  → 3
banana → 2
orange → 1
```

---

# 25. How does frequency counting work?

First:

```js id="q6x3m8"
frequency.get("apple")
```

returns:

```text id="0y7k2p"
undefined
```

So:

```js id="v1m5q9"
undefined || 0
```

becomes:

```text id="b4x8c2"
0
```

Then:

```js id="j3n7w5"
0 + 1
```

becomes:

```text id="f8q2m6"
1
```

Next time:

```js id="r5k9x1"
frequency.get("apple")
```

returns:

```text id="t2v7m4"
1
```

Then:

```text id="3w8q5n"
1 + 1 = 2
```

And so on.

---

# 26. Frequency Counting with an Object

You could also do:

```js id="h2m6q8"
let frequency = {};

for (let fruit of fruits) {
  frequency[fruit] = (frequency[fruit] || 0) + 1;
}
```

This works.

So why use Map?

`Map` is particularly useful when:

* keys aren't naturally strings
* you want explicit key-value semantics
* you want convenient `size`, `has`, `get`, `set`
* you're building a true lookup collection

---

# 27. Frequency Counting with Objects as Keys

Here's where `Map` becomes much more powerful.

Suppose:

```js id="c4n8x2"
let user1 = { name: "Rahul" };
let user2 = { name: "Amit" };

let visits = new Map();

visits.set(user1, 5);
visits.set(user2, 3);

console.log(visits.get(user1));
```

Output:

```text id="r6m2v9"
5
```

You cannot naturally do this with an ordinary object while preserving the object itself as the key.

---

# 28. Object Keys in an Object

This is an important interview trap.

Consider:

```js id="x7p3m5"
let key = {
  id: 1
};

let obj = {};

obj[key] = "Hello";

console.log(obj);
```

You might expect the object itself to become the key.

But ordinary object property keys are converted to strings (except symbols).

So the key effectively becomes:

```text id="b4n8q2"
"[object Object]"
```

This is one reason `Map` is useful when you need **objects as keys**.

---

# 29. Same Object Key vs Different Object Key

With `Map`:

```js id="m8q2v5"
let map = new Map();

let obj1 = {};
let obj2 = {};

map.set(obj1, "A");

console.log(map.get(obj1));
console.log(map.get(obj2));
```

Output:

```text id="f3k7n1"
A
undefined
```

Because:

```js id="r5x9c2"
obj1 === obj2
```

is:

```text id="z6m4q8"
false
```

Map uses object identity for object keys.

---

# 30. Same Reference

But:

```js id="h2q7m9"
let obj1 = {};
let obj2 = obj1;

let map = new Map();

map.set(obj1, "Hello");

console.log(map.get(obj2));
```

Output:

```text id="w4n8p3"
Hello
```

Because:

```js id="v6m2x9"
obj1 === obj2
```

is:

```text id="j8q5k1"
true
```

Both variables refer to the same object.

---

# 31. `Map` Equality

For primitive keys:

```js id="p3x7m2"
let map = new Map();

map.set(1, "number");
map.set("1", "string");

console.log(map.get(1));
console.log(map.get("1"));
```

Output:

```text id="q8n4v6"
number
string
```

Unlike an ordinary object, `Map` distinguishes these keys naturally:

```text id="c1m7x5"
1    → number
"1"  → string
```

---

# 32. Map + Object Equality

Remember:

```js id="x5q2m8"
let a = {};
let b = {};

console.log(a === b);
```

Output:

```text id="n4v7c1"
false
```

Therefore:

```js id="j8m3q6"
let map = new Map();

map.set(a, "A");

console.log(map.has(b));
```

Output:

```text id="r2x9k5"
false
```

This is **reference identity**, not deep equality.

Map does NOT look inside the objects and compare:

```js id="f6p1w8"
{ name: "Rahul" }
```

with:

```js id="s3k7q2"
{ name: "Rahul" }
```

---

# 33. Memory-related Use Case

This is where `WeakMap` and `WeakSet` become particularly useful.

Imagine a UI application creates lots of temporary DOM elements.

You want to associate metadata:

```js id="n5x8q3"
const metadata = new WeakMap();

metadata.set(element, {
  clicked: true
});
```

If the DOM element is later removed and no other references exist, the WeakMap doesn't keep the element alive just because it has metadata associated with it.

This can help avoid **unintentional memory retention** in long-running applications.

---

# 34. Important Garbage Collection Concept

JavaScript has **garbage collection**.

Very simplified:

```text id="y7m2q4"
Object has reachable references
        ↓
Object stays in memory

No reachable references
        ↓
Garbage collector may reclaim it
```

A normal `Map` creates a strong reference to an object used as a key.

A `WeakMap` does not prevent garbage collection of an otherwise unreachable object.

### Important wording:

Don't say:

> "WeakMap immediately deletes the object."

That's incorrect.

Say:

> "When an object becomes otherwise unreachable, a WeakMap does not prevent it from being garbage-collected."

The exact time of garbage collection is not something JavaScript code can rely on.

---

# 35. When Should You Use Each?

## Use `Object`

When representing a structured entity:

```js id="q3m7x1"
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};
```

Think:

> **What are this thing's properties?**

---

## Use `Map`

When you need a dynamic key-value collection:

```js id="w8p2k5"
let scores = new Map();

scores.set("Rahul", 90);
scores.set("Amit", 85);
```

Think:

> **What does this key map to?**

Especially useful when keys can be objects or other non-string values.

---

## Use `Set`

When you need unique values:

```js id="x4n9m2"
let ids = new Set([101, 102, 103]);
```

Think:

> **Have I seen this value already?**

---

## Use `WeakMap`

When you need to associate data with objects **without preventing those objects from being garbage-collected**.

Think:

> **This metadata belongs to this object, but shouldn't keep it alive.**

---

## Use `WeakSet`

When you need to track whether objects have been seen/processed **without keeping them alive**.

Think:

> **Has this object been processed?**

---

# 🧠 Master Comparison

|                       | Object                 | Map           | Set           | WeakMap         | WeakSet         |
| --------------------- | ---------------------- | ------------- | ------------- | --------------- | --------------- |
| Stores                | Key/value              | Key/value     | Values        | Key/value       | Values          |
| Duplicate keys/values | Keys unique            | Keys unique   | Values unique | Keys unique     | Objects unique  |
| Object keys           | Not as object identity | ✅             | N/A           | ✅               | N/A             |
| Any key/value type    | Limited keys           | ✅             | ✅             | Object keys     | Object values   |
| Iterable              | Not directly           | ✅             | ✅             | ❌               | ❌               |
| `.size`               | ❌                      | ✅             | ✅             | ❌               | ❌               |
| Weak references       | ❌                      | ❌             | ❌             | ✅               | ✅               |
| Main use              | Records                | Lookup tables | Uniqueness    | Object metadata | Object tracking |

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is a `Map`?

A `Map` is a collection of key-value pairs where keys can be values of many types, including objects.

```js id="p7x2m5"
let map = new Map();

map.set("name", "Rahul");

console.log(map.get("name"));
```

---

### 2. What is a `Set`?

A `Set` is a collection of unique values.

```js id="k4n8q1"
let set = new Set([1, 2, 2, 3]);

console.log(set);
```

Conceptually:

```text id="z6m3v9"
{1, 2, 3}
```

---

### 3. How do you remove duplicates from an array?

```js id="w2q7x4"
let unique = [...new Set(array)];
```

---

### 4. How do you check whether a Map contains a key?

```js id="m8p3k5"
map.has(key);
```

---

## Medium

### 5. When would you choose `Map` over an object?

Use `Map` when you need a dedicated key-value collection, especially when:

* keys can be objects or other non-string values
* you need convenient `size`
* you want direct iteration
* you frequently add/remove entries dynamically

Use an object when the data represents a structured record with named properties.

---

### 6. What's the output?

```js id="q5n2x8"
let map = new Map();

map.set(1, "number");
map.set("1", "string");

console.log(map.size);
console.log(map.get(1));
console.log(map.get("1"));
```

Answer:

```text id="c7m4p9"
2
number
string
```

---

### 7. What's the output?

```js id="x3q8m1"
let set = new Set();

set.add(10);
set.add(10);
set.add(20);

console.log(set.size);
```

Answer:

```text id="v6n2k5"
2
```

---

### 8. Why does this Set contain two values?

```js id="r4m9x2"
let set = new Set();

set.add({ id: 1 });
set.add({ id: 1 });

console.log(set.size);
```

Answer:

```text id="b8q3n7"
2
```

Because the two object literals are two different object references.

---

## Advanced

### 9. What is the output?

```js id="j2x7m4"
let map = new Map();

let a = { id: 1 };
let b = { id: 1 };

map.set(a, "User A");

console.log(map.get(a));
console.log(map.get(b));
```

Answer:

```text id="p5n8q3"
User A
undefined
```

Because:

```js id="q7m2x9"
a !== b
```

---

### 10. Why can't you use `size` on a WeakMap?

Because WeakMap doesn't expose enumeration or a count of its keys.

The garbage collector can remove otherwise-unreachable keys at times that JavaScript code cannot observe reliably.

---

### 11. Why can't WeakMap keys be primitive values?

WeakMap's weak-reference behavior is designed around objects (and non-registered symbols). Primitive values aren't objects that can become unreachable through object reference semantics, so they aren't supported as WeakMap keys.

---

### 12. What is the main memory-related difference between `Map` and `WeakMap`?

A normal `Map` strongly retains its object keys.

A `WeakMap` does not prevent an otherwise unreachable object key from being garbage-collected.

---

### 13. What is the output?

```js id="m6q2x8"
let obj = {};

let map = new Map();
let weakMap = new WeakMap();

map.set(obj, "Map");
weakMap.set(obj, "WeakMap");

obj = null;
```

Can you determine exactly when the object is garbage-collected?

**No.**

Garbage collection timing is not deterministic from JavaScript code.

The important distinction is:

```text id="v9n3k5"
Map
 ↓
strong reference

WeakMap
 ↓
doesn't prevent garbage collection
```

---

# 🔥 Three Interview Problems You Should Know

## Problem 1: Remove duplicates

```js id="x8m2q4"
let arr = [1, 2, 2, 3, 3, 4];

let unique = [...new Set(arr)];

console.log(unique);
```

Output:

```js id="n5k7p1"
[1, 2, 3, 4]
```

---

## Problem 2: Frequency count

```js id="r3x9m6"
let arr = ["a", "b", "a", "c", "b", "a"];

let count = new Map();

for (let item of arr) {
  count.set(item, (count.get(item) || 0) + 1);
}

console.log(count);
```

Conceptually:

```text id="q7m2v5"
a → 3
b → 2
c → 1
```

---

## Problem 3: Find duplicates

You can use a Set to track what you've already seen:

```js id="k4x8n2"
let arr = [1, 2, 3, 2, 4, 1];

let seen = new Set();
let duplicates = new Set();

for (let value of arr) {
  if (seen.has(value)) {
    duplicates.add(value);
  } else {
    seen.add(value);
  }
}

console.log([...duplicates]);
```

Output:

```js id="w6p3q9"
[2, 1]
```

---

# 🧠 Final Mental Model

Think of them like this:

```text
OBJECT
  ↓
A thing with properties

Map
  ↓
KEY → VALUE

Set
  ↓
UNIQUE VALUES

WeakMap
  ↓
OBJECT → VALUE
      +
doesn't prevent object GC

WeakSet
  ↓
TRACK OBJECTS
      +
doesn't prevent object GC
```

### The four lines I'd memorize for interviews:

> **Map** → key-value collection, supports arbitrary key types.

> **Set** → collection of unique values.

> **WeakMap** → object-associated key-value data that doesn't prevent the key from being garbage-collected.

> **WeakSet** → tracks objects without preventing them from being garbage-collected.

And the most common practical patterns:

```js id="r5m8x2"
// Remove duplicates
[...new Set(array)]

// Frequency counting
const count = new Map();

// Object as a key
map.set(object, value);

// Object metadata
const metadata = new WeakMap();

// Track processed objects
const processed = new WeakSet();
```
