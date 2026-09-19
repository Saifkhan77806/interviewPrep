Absolutely. These two topics are directly connected to Promises. Since you already understand **Promises, Promise states, and chaining**, `async/await` will make much more sense.

# 1. `async/await`

`async/await` is a cleaner way to work with **Promises**.

Instead of:

```js
getUser()
  .then(user => {
    return getOrders(user.id);
  })
  .then(orders => {
    console.log(orders);
  })
  .catch(error => {
    console.log(error);
  });
```

we can write:

```js
async function loadData() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);

    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}
```

The second version often looks more like normal synchronous code.

---

# What does `async` mean?

When you put `async` before a function:

```js
async function greet() {
  return "Hello";
}
```

that function **always returns a Promise**.

Even though we returned a normal string:

```js
return "Hello";
```

the actual result is conceptually:

```js
Promise.resolve("Hello");
```

So:

```js
const result = greet();

console.log(result);
```

will be a Promise.

You can consume it with:

```js
greet().then(result => {
  console.log(result);
});
```

Output:

```text
Hello
```

---

# Important Interview Point

An `async` function **always returns a Promise**.

For example:

```js
async function getNumber() {
  return 10;
}
```

This:

```js
const result = getNumber();

console.log(result);
```

does **not** give:

```text
10
```

It gives a Promise that fulfills with `10`.

To get the value:

```js
getNumber().then(value => {
  console.log(value);
});
```

or:

```js
async function main() {
  const value = await getNumber();

  console.log(value);
}
```

---

# What does `await` mean?

`await` waits for a Promise to settle and gives you its fulfilled value.

Example:

```js
function getData() {
  return Promise.resolve("Data received");
}

async function main() {
  const result = await getData();

  console.log(result);
}

main();
```

Output:

```text
Data received
```

Conceptually:

```text
getData()
   ↓
Promise
   ↓
await
   ↓
"Data received"
```

---

# `await` works with Promises

Usually you'll see:

```js
const result = await somePromise;
```

For example:

```js
const response = await fetch("/users");
```

`fetch()` returns a Promise.

`await` waits for that Promise to fulfill and gives you the response.

---

# Does `await` block JavaScript?

This is a **very important interview question**.

Many beginners think:

> `await` blocks JavaScript.

That's not quite correct.

It **pauses the execution of that async function**, but it does **not block the entire JavaScript thread/event loop**.

Example:

```js
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");
```

Output:

```text
A
C
B
```

Why?

```text
test()
 ↓
"A"
 ↓
await Promise
 ↓
pause test()
 ↓
"C" executes
 ↓
Promise settles
 ↓
"B" continues
```

So:

> `await` pauses the current async function, not the entire JavaScript runtime.

---

# `async/await` vs Promise `.then()`

Promise chaining:

```js
getUser()
  .then(user => {
    return getOrders(user.id);
  })
  .then(orders => {
    return getPayment(orders[0].id);
  })
  .then(payment => {
    console.log(payment);
  });
```

With `async/await`:

```js
async function loadData() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  const payment = await getPayment(orders[0].id);

  console.log(payment);
}
```

The second is often easier to read.

---

# Sequential execution

Suppose:

```js
const user = await getUser();
const orders = await getOrders(user.id);
const payment = await getPayment(orders[0].id);
```

The operations happen sequentially:

```text
getUser()
   ↓
user
   ↓
getOrders()
   ↓
orders
   ↓
getPayment()
   ↓
payment
```

This is useful when each operation depends on the previous result.

---

# Practical Use Case: API Calls

Imagine an application needs to load a user's profile.

```js
async function loadUser() {
  const response = await fetch("/api/user");

  const user = await response.json();

  console.log(user);
}
```

This is much easier to read than nesting callbacks.

---

# 2. Error Handling

Asynchronous operations can fail.

For example:

```js
async function loadUser() {
  const response = await fetch("/api/user");

  const user = await response.json();

  console.log(user);
}
```

What if:

* network request fails?
* server returns an error?
* JSON parsing fails?
* some other operation throws an error?

We need **error handling**.

With `async/await`, the most common approach is:

```js
try {
  // code that may fail
} catch (error) {
  // handle error
}
```

---

# `try...catch`

Example:

```js
async function loadUser() {
  try {
    const response = await fetch("/api/user");

    const user = await response.json();

    console.log(user);
  } catch (error) {
    console.log("Something went wrong:", error);
  }
}
```

If something throws/rejects inside the `try` section, execution jumps to `catch`.

Visualize:

```text
try
 │
 ├── success → continue
 │
 └── error → catch
```

---

# Example with a Rejected Promise

```js
function getUser() {
  return Promise.reject("Unable to get user");
}

async function main() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.log(error);
  }
}

main();
```

Output:

```text
Unable to get user
```

The rejected Promise becomes an exception at the `await` expression.

Conceptually:

```text
Promise rejected
      ↓
    await
      ↓
    throw
      ↓
   catch
```

That's a very useful mental model.

---

# `try...catch` with Multiple `await`s

```js
async function loadData() {
  try {
    const user = await getUser();
    const orders = await getOrders(user.id);
    const payment = await getPayment(orders[0].id);

    console.log(payment);
  } catch (error) {
    console.log("Error:", error);
  }
}
```

If any of these fails:

```text
getUser()
   ↓
getOrders()
   ↓
getPayment()
```

execution jumps to:

```js
catch (error) {
  console.log(error);
}
```

---

# `finally`

JavaScript also provides:

```js
try
catch
finally
```

`finally` runs whether the operation succeeds or fails.

```js
async function loadData() {
  try {
    const data = await fetchData();

    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finished");
  }
}
```

Possible success:

```text
data
Finished
```

Possible failure:

```text
error
Finished
```

A common use case is hiding a loading indicator:

```js
async function loadUsers() {
  showLoader();

  try {
    const users = await fetchUsers();

    displayUsers(users);
  } catch (error) {
    showError(error);
  } finally {
    hideLoader();
  }
}
```

---

# Error Handling with Promise `.catch()`

You can also handle an `async` function's rejection using `.catch()`:

```js
async function loadUser() {
  const user = await getUser();

  return user;
}

loadUser()
  .then(user => {
    console.log(user);
  })
  .catch(error => {
    console.log(error);
  });
```

So there are two common styles.

### Style 1: `try...catch`

```js
async function main() {
  try {
    const user = await getUser();
    console.log(user);
  } catch (error) {
    console.log(error);
  }
}
```

### Style 2: `.catch()`

```js
main()
  .catch(error => {
    console.log(error);
  });
```

Both are valid.

---

# Throwing Errors

You can manually throw an error:

```js
async function getUser() {
  const user = null;

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}
```

Then:

```js
async function main() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.log(error.message);
  }
}

main();
```

Output:

```text
User not found
```

---

# `throw` vs `return`

This distinction is important.

```js
return "Success";
```

means:

```text
Successful result
```

while:

```js
throw new Error("Failed");
```

means:

```text
Failure
```

In an async function:

```js
async function test() {
  return "Success";
}
```

produces:

```text
fulfilled Promise
```

But:

```js
async function test() {
  throw new Error("Failed");
}
```

produces:

```text
rejected Promise
```

---

# Important: `fetch()` and HTTP Errors

This is a common interview trap.

Consider:

```js
async function getData() {
  try {
    const response = await fetch("/api/users");

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
```

Many developers assume `fetch()` automatically throws for HTTP errors like:

```text
404
500
```

But **`fetch()` normally rejects for network-level failures, not merely because the HTTP response status is 4xx/5xx**.

So you often need:

```js
async function getData() {
  try {
    const response = await fetch("/api/users");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}
```

Now an HTTP error can enter the `catch`.

---

# Sequential vs Parallel `await`

This is another important interview topic.

Suppose you have two independent operations:

```js
const users = await getUsers();
const products = await getProducts();
```

This runs sequentially:

```text
getUsers()
   ↓
wait
   ↓
getProducts()
   ↓
wait
```

If they don't depend on each other, you can start both together:

```js
const usersPromise = getUsers();
const productsPromise = getProducts();

const users = await usersPromise;
const products = await productsPromise;
```

Or more commonly:

```js
const [users, products] = await Promise.all([
  getUsers(),
  getProducts()
]);
```

Visual:

```text
getUsers()    ────────┐
                      ├── Promise.all()
getProducts() ────────┘
```

This can reduce total waiting time when the operations are independent.

---

# Practical Example

Suppose a dashboard needs:

```text
User profile
Orders
Notifications
```

They don't depend on each other.

Instead of:

```js
const user = await getUser();
const orders = await getOrders();
const notifications = await getNotifications();
```

you can do:

```js
async function loadDashboard() {
  try {
    const [user, orders, notifications] = await Promise.all([
      getUser(),
      getOrders(),
      getNotifications()
    ]);

    console.log(user);
    console.log(orders);
    console.log(notifications);
  } catch (error) {
    console.log("Failed:", error);
  }
}
```

This is often much more efficient.

---

# `async/await` Error Flow

Keep this mental model:

```text
async function
      │
      ↓
   await Promise
      │
      ├── fulfilled → continue
      │
      └── rejected → throw error
                         │
                         ↓
                    try/catch
```

---

# Common Mistake #1: Forgetting `await`

```js
async function main() {
  const user = getUser();

  console.log(user);
}
```

`user` is a Promise, not the actual user.

Correct:

```js
async function main() {
  const user = await getUser();

  console.log(user);
}
```

---

# Common Mistake #2: Forgetting `async`

This is invalid:

```js
function main() {
  const user = await getUser();
}
```

`await` normally needs to be inside an `async` function.

Correct:

```js
async function main() {
  const user = await getUser();
}
```

There is also **top-level `await`** in environments that support it, such as ES modules, but for now remember the basic rule:

> `await` is normally used inside an `async` function.

---

# Common Mistake #3: Not Handling Errors

Bad:

```js
async function main() {
  const user = await getUser();
}
```

Better:

```js
async function main() {
  try {
    const user = await getUser();
  } catch (error) {
    console.log(error);
  }
}
```

Or handle the returned Promise:

```js
main().catch(error => {
  console.log(error);
});
```

---

# Common Mistake #4: Sequentially Awaiting Independent Operations

Avoid:

```js
const users = await getUsers();
const products = await getProducts();
const orders = await getOrders();
```

if none depends on another.

Prefer:

```js
const [users, products, orders] = await Promise.all([
  getUsers(),
  getProducts(),
  getOrders()
]);
```

---

# `async/await` vs Promise Chaining

| Promise chaining                           | `async/await`                            |
| ------------------------------------------ | ---------------------------------------- |
| `.then()`                                  | `await`                                  |
| `.catch()`                                 | `try...catch`                            |
| `.finally()`                               | `finally`                                |
| Returns Promises                           | Async function returns Promise           |
| Can become harder to read with long chains | Often easier to read                     |
| Excellent for composing Promise operations | Excellent for sequential async workflows |

They're not two different asynchronous mechanisms.

Think:

```text
             Promise
                │
       ┌────────┴────────┐
       ↓                 ↓
 .then/.catch        async/await
```

`async/await` is built around Promises.

---

# 🎯 Interview Questions — Easy → Advanced

## Easy

### 1. What is `async/await`?

**Answer:**

`async/await` is syntax for working with Promises that makes asynchronous code easier to read and write.

---

### 2. What does an `async` function return?

**Answer:**

An `async` function always returns a Promise.

```js
async function test() {
  return 10;
}
```

is effectively:

```js
Promise.resolve(10);
```

---

### 3. What does `await` do?

**Answer:**

`await` pauses the execution of the current async function until the Promise settles and, if fulfilled, gives its result.

It does **not block the entire JavaScript event loop**.

---

### 4. How do you handle errors with `async/await`?

**Answer:**

Use `try...catch`:

```js
async function main() {
  try {
    const data = await getData();
  } catch (error) {
    console.log(error);
  }
}
```

---

## Medium

### 5. What happens when an awaited Promise rejects?

```js
async function main() {
  try {
    const result = await Promise.reject("Failed");

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
```

Output:

```text
Failed
```

**Answer:**

The rejected Promise causes the `await` expression to throw, so control moves to `catch`.

---

### 6. Does `await` block the JavaScript thread?

**Answer:**

No.

It pauses the current async function while allowing the runtime/event loop to continue handling other work.

---

### 7. What happens when an async function throws an error?

```js
async function test() {
  throw new Error("Oops");
}
```

**Answer:**

The async function returns a **rejected Promise**.

```js
test().catch(error => {
  console.log(error.message);
});
```

---

### 8. What is the difference between these?

```js
const user = await getUser();
```

and:

```js
const user = getUser();
```

**Answer:**

The first waits for the Promise and gives its fulfilled value.

The second gives you the Promise itself.

---

### 9. When should you use `Promise.all()` with `async/await`?

**Answer:**

When multiple asynchronous operations are independent and can run concurrently.

```js
const [users, products] = await Promise.all([
  getUsers(),
  getProducts()
]);
```

---

## Advanced

### 10. What is the output?

```js
async function test() {
  console.log("A");

  await Promise.resolve();

  console.log("B");
}

test();

console.log("C");
```

**Answer:**

```text
A
C
B
```

The function pauses at `await`. The continuation runs through the Promise microtask mechanism after the current synchronous code finishes.

---

### 11. What's wrong with this?

```js
async function loadData() {
  const users = await getUsers();
  const products = await getProducts();
  const orders = await getOrders();
}
```

**Answer:**

Nothing is necessarily *wrong*, but if the three operations are independent, they're being awaited sequentially.

Potentially better:

```js
const [users, products, orders] = await Promise.all([
  getUsers(),
  getProducts(),
  getOrders()
]);
```

---

### 12. What's the difference between these two?

```js
const a = await getA();
const b = await getB();
```

versus:

```js
const [a, b] = await Promise.all([
  getA(),
  getB()
]);
```

**Answer:**

First version:

```text
getA → wait → getB → wait
```

Second version:

```text
getA ──┐
       ├── wait for both
getB ──┘
```

Use the second when the operations are independent.

---

### 13. Does `fetch()` reject when the server returns `404`?

**Answer:**

Normally, no. `fetch()` resolves with a `Response` even for HTTP error statuses such as 404 or 500.

You can explicitly check:

```js
const response = await fetch(url);

if (!response.ok) {
  throw new Error(`HTTP ${response.status}`);
}
```

Then your `catch` can handle it.

---

### 14. What is the difference between `throw` and `return` inside an async function?

```js
async function test() {
  return "Success";
}
```

produces a fulfilled Promise.

```js
async function test() {
  throw new Error("Failed");
}
```

produces a rejected Promise.

---

# ⭐ Final Cheat Sheet

```text
async
 ↓
makes function return a Promise

await
 ↓
waits for Promise result inside async function

try
 ↓
code that might fail

catch
 ↓
handles error

finally
 ↓
runs whether success or failure
```

And remember this particularly well for interviews:

```js
async function getData() {
  try {
    const response = await fetch("/api/data");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  } finally {
    console.log("Request finished");
  }
}
```

### The big picture

```text
Callback
   ↓
Promise
   ↓
.then() / .catch()
   ↓
async / await
   ↓
try / catch / finally
```

So the progression you've learned is:

**Callbacks → Promises → Promise chaining → async/await → error handling**

That's the core of modern JavaScript asynchronous programming.
