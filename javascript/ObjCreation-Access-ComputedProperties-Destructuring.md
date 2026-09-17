Absolutely 👍 These four concepts are fundamental to working with JavaScript objects, and they come up constantly in interviews and real-world code.

We'll go step by step:

1. **Object creation**
2. **Property access**
3. **Computed properties**
4. **Object destructuring**

---

# 1. Object Creation

An **object** is a collection of data stored as **key-value pairs**.

For example:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};
```

Here:

```text
key      value
 ↓        ↓
name   → "Rahul"
age    → 25
city   → "Mumbai"
```

An object can contain different types of values:

```js
let user = {
  name: "Rahul",          // string
  age: 25,                // number
  isLoggedIn: true,       // boolean
  skills: ["JS", "React"], // array
  address: {              // nested object
    city: "Mumbai"
  }
};
```

---

## Object using `{}`

The most common way to create an object is with an **object literal**:

```js
let person = {
  name: "Amit",
  age: 30
};
```

You can create an empty object:

```js
let person = {};
```

Then add properties later:

```js
person.name = "Amit";
person.age = 30;

console.log(person);
```

Output:

```js
{
  name: "Amit",
  age: 30
}
```

---

## Creating an object with `new Object()`

You may also see:

```js
let person = new Object();

person.name = "Amit";
person.age = 30;
```

But generally, prefer:

```js
let person = {
  name: "Amit",
  age: 30
};
```

It's simpler and more idiomatic.

---

# 2. Property Access

Once you have an object, you need to access its properties.

There are two main ways:

```text
1. Dot notation
2. Bracket notation
```

---

# 2.1 Dot notation

```js
let user = {
  name: "Rahul",
  age: 25
};

console.log(user.name);
console.log(user.age);
```

Output:

```js
Rahul
25
```

The syntax is:

```js
object.property
```

Example:

```js
user.name
```

means:

> Get the `name` property from `user`.

---

## Updating properties

You can change a property:

```js
let user = {
  name: "Rahul",
  age: 25
};

user.age = 26;

console.log(user.age);
```

Output:

```js
26
```

---

## Adding properties

If the property doesn't exist, assignment creates it:

```js
let user = {
  name: "Rahul"
};

user.city = "Mumbai";

console.log(user);
```

Output:

```js
{
  name: "Rahul",
  city: "Mumbai"
}
```

---

## Deleting properties

Use `delete`:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

delete user.age;

console.log(user);
```

Output:

```js
{
  name: "Rahul",
  city: "Mumbai"
}
```

---

# 2.2 Bracket notation

You can also access properties using:

```js
object["property"]
```

Example:

```js
let user = {
  name: "Rahul",
  age: 25
};

console.log(user["name"]);
console.log(user["age"]);
```

Output:

```js
Rahul
25
```

So these are equivalent:

```js
user.name
```

and:

```js
user["name"]
```

---

# Why do we need bracket notation?

The biggest reason is **dynamic property access**.

Suppose:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

let property = "name";

console.log(user[property]);
```

Output:

```js
Rahul
```

JavaScript evaluates:

```js
user[property]
```

as:

```js
user["name"]
```

---

### Important difference

Look carefully:

```js
user.property
```

means:

> Find a property literally named `"property"`.

Whereas:

```js
user[property]
```

means:

> Use the value stored in the variable `property` as the property name.

Example:

```js
let user = {
  name: "Rahul"
};

let key = "name";

console.log(user.key);
console.log(user[key]);
```

Output:

```js
undefined
Rahul
```

Why?

```js
user.key
```

looks for:

```js
{
  key: ...
}
```

But:

```js
user[key]
```

uses:

```js
key = "name"
```

so it becomes:

```js
user["name"]
```

---

# 3. Computed Properties

Now we get to an important concept.

Sometimes you want to **create an object property using a variable's value**.

This is called a **computed property name**.

---

## Without computed property

```js
let key = "name";

let user = {
  key: "Rahul"
};

console.log(user);
```

Output:

```js
{
  key: "Rahul"
}
```

It creates a property literally called `"key"`.

But maybe we want:

```js
{
  name: "Rahul"
}
```

That's where computed properties come in.

---

# Computed property syntax

Use square brackets:

```js
let key = "name";

let user = {
  [key]: "Rahul"
};

console.log(user);
```

Output:

```js
{
  name: "Rahul"
}
```

JavaScript evaluates:

```js
[key]
```

and gets:

```js
"name"
```

So it effectively becomes:

```js
{
  name: "Rahul"
}
```

---

# Example with dynamic keys

```js
let propertyName = "age";
let propertyValue = 25;

let user = {
  [propertyName]: propertyValue
};

console.log(user);
```

Output:

```js
{
  age: 25
}
```

---

# Practical use case

Computed properties are very useful when building objects dynamically.

For example, suppose you have a form:

```js
let fieldName = "email";
let fieldValue = "rahul@example.com";

let formData = {
  [fieldName]: fieldValue
};

console.log(formData);
```

Output:

```js
{
  email: "rahul@example.com"
}
```

Later:

```js
fieldName = "password";
fieldValue = "123456";

let formData = {
  [fieldName]: fieldValue
};
```

Now:

```js
{
  password: "123456"
}
```

This pattern is commonly used with:

* forms
* API payloads
* dynamic configuration
* reducers/state updates
* dynamically generated objects

---

# Computed properties with expressions

You aren't limited to a variable.

You can use an expression:

```js
let prefix = "user";

let obj = {
  [prefix + "Name"]: "Rahul"
};

console.log(obj);
```

Output:

```js
{
  userName: "Rahul"
}
```

Another example:

```js
let a = "first";
let b = "Name";

let user = {
  [a + b]: "Rahul"
};

console.log(user);
```

Output:

```js
{
  firstName: "Rahul"
}
```

---

# 4. Object Destructuring

Object destructuring allows you to **extract properties from an object into variables**.

Instead of doing:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

let name = user.name;
let age = user.age;
let city = user.city;
```

You can write:

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai"
};

let { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);
```

Output:

```text
Rahul
25
Mumbai
```

That's object destructuring.

---

# How does destructuring work?

Look at:

```js
let { name, age } = user;
```

Think:

```text
user.name → name variable
user.age  → age variable
```

So:

```js
let { name, age } = user;
```

is conceptually similar to:

```js
let name = user.name;
let age = user.age;
```

---

# Important: Object destructuring uses property names

Consider:

```js
let user = {
  name: "Rahul",
  age: 25
};

let { name, age } = user;
```

The names must match the object's property names.

```text
Object              Variables

name: "Rahul"   →   name
age: 25         →   age
```

Unlike array destructuring, **position does not matter**.

```js
let { age, name } = user;
```

works perfectly:

```js
console.log(age);  // 25
console.log(name); // Rahul
```

---

# Renaming during destructuring

What if you don't want the variable to be called `name`?

You can rename it:

```js
let user = {
  name: "Rahul",
  age: 25
};

let { name: userName, age: userAge } = user;

console.log(userName);
console.log(userAge);
```

Output:

```text
Rahul
25
```

Syntax:

```js
{ propertyName: variableName }
```

So:

```js
name: userName
```

means:

> Take the `name` property and store it in a variable called `userName`.

---

# Default values

You can provide a default value.

```js
let user = {
  name: "Rahul"
};

let { name, age = 18 } = user;

console.log(name);
console.log(age);
```

Output:

```text
Rahul
18
```

Because `age` doesn't exist.

---

### Important interview point

The default is used when the property is `undefined`.

```js
let user = {
  name: "Rahul",
  age: undefined
};

let { age = 18 } = user;

console.log(age);
```

Output:

```js
18
```

But:

```js
let user = {
  age: null
};

let { age = 18 } = user;

console.log(age);
```

Output:

```js
null
```

Default destructuring values apply to `undefined`, **not `null`**.

---

# Rest with object destructuring

You can collect the remaining properties using `...`.

```js
let user = {
  name: "Rahul",
  age: 25,
  city: "Mumbai",
  role: "Developer"
};

let { name, ...otherDetails } = user;

console.log(name);
console.log(otherDetails);
```

Output:

```js
Rahul
{
  age: 25,
  city: "Mumbai",
  role: "Developer"
}
```

Remember from our earlier discussion:

```text
... in destructuring → REST
... when expanding → SPREAD
```

---

# Nested object destructuring

Objects can contain other objects.

```js
let user = {
  name: "Rahul",
  address: {
    city: "Mumbai",
    pincode: 400001
  }
};
```

You can destructure the nested object:

```js
let {
  name,
  address: { city, pincode }
} = user;

console.log(name);
console.log(city);
console.log(pincode);
```

Output:

```text
Rahul
Mumbai
400001
```

---

# Destructuring in function parameters

This is **extremely common in modern JavaScript**.

Instead of:

```js
function displayUser(user) {
  console.log(user.name);
  console.log(user.age);
}
```

You can write:

```js
function displayUser({ name, age }) {
  console.log(name);
  console.log(age);
}

displayUser({
  name: "Rahul",
  age: 25
});
```

Output:

```text
Rahul
25
```

This is heavily used in:

* React components
* API functions
* configuration objects
* callbacks
* Node.js code

---

# Real-world example

Imagine an API returns:

```js
let response = {
  id: 101,
  name: "Rahul",
  email: "rahul@example.com",
  role: "Developer",
  active: true
};
```

Instead of:

```js
console.log(response.name);
console.log(response.email);
console.log(response.role);
```

You can do:

```js
let { name, email, role } = response;

console.log(name);
console.log(email);
console.log(role);
```

Cleaner and easier to read.

---

# All four concepts together

Let's combine everything.

```js
let field = "name";

let user = {
  [field]: "Rahul",
  age: 25,
  city: "Mumbai"
};

let { name, age } = user;

console.log(user.name);
console.log(name);
console.log(age);
```

Output:

```text
Rahul
Rahul
25
```

Here:

```text
Object creation
      ↓
let user = { ... }

Computed property
      ↓
[field]: "Rahul"

Property access
      ↓
user.name

Destructuring
      ↓
let { name, age } = user
```

---

# 🧠 Important Differences

| Concept           | Example               | Purpose                        |
| ----------------- | --------------------- | ------------------------------ |
| Object creation   | `{ name: "Rahul" }`   | Create object                  |
| Dot access        | `user.name`           | Access known property          |
| Bracket access    | `user[key]`           | Access dynamic property        |
| Computed property | `{ [key]: value }`    | Create dynamic property        |
| Destructuring     | `let { name } = user` | Extract property into variable |

---

# 🎯 Interview Questions — Easy → Advanced

### Easy

**1. What is an object in JavaScript?**

An object is a collection of key-value pairs.

```js
let user = {
  name: "Rahul",
  age: 25
};
```

---

**2. What are the two ways to access object properties?**

```js
user.name;      // dot notation
user["name"];   // bracket notation
```

---

**3. What is object destructuring?**

It is a syntax for extracting properties from an object into variables.

```js
let user = { name: "Rahul", age: 25 };

let { name, age } = user;
```

---

### Medium

**4. What is the difference between `user.key` and `user[key]`?**

```js
let key = "name";

user.key
```

looks for a property literally called `"key"`.

```js
user[key]
```

uses the value of `key`:

```js
user["name"]
```

---

**5. What are computed properties?**

They allow you to dynamically create object property names.

```js
let key = "name";

let user = {
  [key]: "Rahul"
};
```

Result:

```js
{
  name: "Rahul"
}
```

---

**6. How do you rename a property during destructuring?**

```js
let user = {
  name: "Rahul"
};

let { name: userName } = user;

console.log(userName);
```

Output:

```text
Rahul
```

---

### Advanced

**7. What is the output?**

```js
let key = "name";

let user = {
  key: "Amit",
  [key]: "Rahul"
};

console.log(user.key);
console.log(user[key]);
```

Answer:

```text
Amit
Rahul
```

Because:

```js
key: "Amit"
```

creates a literal `"key"` property.

While:

```js
[key]: "Rahul"
```

evaluates `key` → `"name"`.

So the object is:

```js
{
  key: "Amit",
  name: "Rahul"
}
```

---

**8. What is the output?**

```js
let user = {
  name: "Rahul",
  age: undefined
};

let { name, age = 30 } = user;

console.log(name);
console.log(age);
```

Answer:

```text
Rahul
30
```

The default value is used because `age` is `undefined`.

---

**9. What is the output?**

```js
let user = {
  name: "Rahul",
  address: {
    city: "Mumbai"
  }
};

let {
  name,
  address: { city }
} = user;

console.log(name);
console.log(city);
```

Answer:

```text
Rahul
Mumbai
```

---

**10. Explain this syntax:**

```js
function greet({ name, age }) {
  console.log(name, age);
}
```

Answer:

The function expects an object and **destructures its `name` and `age` properties directly in the parameter list**.

```js
greet({
  name: "Rahul",
  age: 25
});
```

Output:

```text
Rahul 25
```

---

# 🔥 Interview Trap to Remember

Don't confuse these:

### Accessing dynamically

```js
user[key]
```

### Creating dynamically

```js
let user = {
  [key]: value
};
```

### Extracting

```js
let { name } = user;
```

The square brackets have different roles depending on where they're used.

---

## Final Cheat Sheet

```js
// 1. OBJECT CREATION
let user = {
  name: "Rahul",
  age: 25
};
```

```js
// 2. PROPERTY ACCESS
user.name;
user["name"];
```

```js
// 3. COMPUTED PROPERTY
let key = "name";

let user = {
  [key]: "Rahul"
};
```

```js
// 4. OBJECT DESTRUCTURING
let { name, age } = user;
```

```js
// Rename
let { name: userName } = user;
```

```js
// Default
let { age = 18 } = user;
```

```js
// Rest
let { name, ...details } = user;
```

```js
// Nested
let {
  address: { city }
} = user;
```

### One-line memory trick:

> **Create → Access → Compute → Destructure**
> `{}` → `.` / `[]` → `[key]` → `{ property } = object`
