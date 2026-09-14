# 3-Day Software Engineer Interview Preparation Plan

Saif, we'll prepare you for **software developer and software engineering interviews at MNCs, big-tech-style companies, product startups, and early-stage startups** in 3 days.

Your resume gives us a strong foundation: you have full-stack experience with TypeScript, Angular, React, Next.js, Node.js, databases, asynchronous processing, AI applications, and production systems. The goal is to turn that experience into **strong interview answers, advanced technical understanding, and coding-round readiness**. 

Three days is an aggressive timeline. We cannot realistically master every advanced topic in that time, but we can prioritize the topics most likely to produce results and prepare you to discuss your actual projects confidently.

## 1. Your Interview Preparation Strategy

We'll divide preparation into five tracks:

| Track                            | What we'll prepare                                                                                              |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **DSA and coding**               | Arrays, strings, hash maps, sliding window, binary search, recursion, trees, graphs, heaps, dynamic programming |
| **JavaScript / TypeScript**      | Closures, promises, event loop, async/await, prototypes, types, generics, advanced language questions           |
| **Full-stack technical rounds**  | React, Angular, Next.js, Node.js, REST APIs, authentication, state management, performance                      |
| **Backend and system design**    | Database design, Redis, queues, distributed locks, state machines, scalable APIs, system design                 |
| **Resume and behavioral rounds** | Every project, every technology, architecture decisions, performance claims, challenges, teamwork, HR questions |

**Our priority:** Your resume should become your biggest advantage, not a source of difficult questions you cannot answer.

Your most important projects to prepare are:

1. **TopRankr** — AI recruiting and candidate-ranking platform.
2. **DealTouch Website Builder** — visual editor with Angular Signals and undo/redo.
3. **Deal Travel** — booking platform with queues, Redis, distributed locking, and booking state machines.
4. **Developer Tooling** — VS Code extension and NPX CLI.

These projects appear in your resume and will likely attract detailed interviewer questions. 

---


# 2. The 3-Day Intensive Roadmap

Assume you can dedicate approximately **10–12 focused hours per day**. If you have less time, I'll help you prioritize the highest-value topics.

---

# DAY 1 — Coding Fundamentals + JavaScript + Resume Deep Dive

### Goal

Build coding-round confidence, master the JavaScript concepts commonly asked in interviews, and prepare explanations for your professional experience.

## Morning: DSA and Coding — 4 hours

We will focus on patterns rather than solving random problems.

### Topic 1: Arrays and Hash Maps

**Difficulty:** Easy → Medium → Advanced

Learn:

* Two Sum
* Frequency counting
* Prefix sums
* Subarray problems
* Hash map optimization
* Time and space complexity

Practice problems:

1. Two Sum
2. Best Time to Buy and Sell Stock
3. Product of Array Except Self
4. Subarray Sum Equals K
5. Longest Consecutive Sequence

**Interview expectation:** You should be able to explain why a solution is `O(n)` instead of `O(n²)`.

---

### Topic 2: Strings and Sliding Window

Learn:

* Frequency maps
* Fixed-size windows
* Variable-size windows
* Two pointers
* String manipulation

Practice:

1. Valid Anagram
2. Longest Substring Without Repeating Characters
3. Longest Repeating Character Replacement
4. Minimum Window Substring
5. Valid Palindrome

**Important:** Sliding window is one of the highest-value patterns for coding interviews.

---

### Topic 3: Binary Search

Learn:

* Standard binary search
* Search in rotated sorted arrays
* Binary search on the answer
* Finding minimum feasible values

Practice:

1. Binary Search
2. Search in Rotated Sorted Array
3. Find Minimum in Rotated Sorted Array
4. Koko Eating Bananas
5. Capacity to Ship Packages Within D Days

---

## Afternoon: JavaScript and TypeScript — 3 hours

Since your resume emphasizes TypeScript, JavaScript, Angular, React, and Node.js, this section is particularly important. 

### Must-Know JavaScript Topics

| Topic             | What you must understand                    |
| ----------------- | ------------------------------------------- |
| Execution context | Call stack, scope, lexical environment      |
| Hoisting          | `var`, `let`, `const`, functions            |
| Closures          | Practical use cases and memory implications |
| `this`            | Regular functions, arrow functions, methods |
| Prototypes        | Prototype chain and inheritance             |
| Event loop        | Call stack, microtasks, macrotasks          |
| Promises          | Chaining, error handling, concurrency       |
| Async/await       | Execution behavior and error handling       |
| Debouncing        | Search boxes, resize events                 |
| Throttling        | Scroll events, rate limiting                |
| Equality          | `==` vs `===`, coercion                     |
| Immutability      | Objects, arrays, state updates              |
| Memory            | Garbage collection and common leaks         |

### Questions You Must Be Able to Answer

**1. What is the output?**

```javascript
console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

Promise.resolve().then(() => {
  console.log("C");
});

console.log("D");
```

Expected output:

```text
A
D
C
B
```

You must explain why Promise callbacks execute before timer callbacks.

---

**2. Implement debounce**

```javascript
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
```

Be prepared to explain:

* Closures
* Timer cancellation
* `this`
* Arguments
* Real-world usage in search interfaces

---

**3. Explain the difference between:**

```javascript
Promise.all()
Promise.allSettled()
Promise.race()
Promise.any()
```

---

**4. Advanced TypeScript**

You should understand:

```typescript
type User = {
  id: number;
  name: string;
};

type ApiResponse<T> = {
  data: T;
  error?: string;
};

function getUser(): ApiResponse<User> {
  return {
    data: {
      id: 1,
      name: "Saif",
    },
  };
}
```

Also prepare:

* `type` vs `interface`
* Generics
* Union and intersection types
* Type narrowing
* Utility types
* `unknown` vs `any`
* Type guards
* Discriminated unions
* Function overloads

---

## Evening: Resume Deep Dive — 4 hours

We will prepare a detailed explanation of each major project.

### A. DealTouch Website Builder

Your resume describes a drag-and-drop website builder with multi-device preview, Angular Signals, reusable components, and page-aware undo/redo. 

Prepare answers to:

1. What problem does the website builder solve?
2. What is your overall architecture?
3. How did you model pages, sections, and UI elements?
4. Why did you use Angular Signals?
5. How does drag-and-drop work?
6. How does undo/redo work?
7. Why is the undo history page-aware?
8. How do you prevent unnecessary re-renders?
9. How do you handle invalid or conflicting edits?
10. How would you scale the editor to thousands of components?
11. How do you persist changes?
12. How would you implement collaborative editing?

### Important architecture concept

A possible undo/redo design:

```typescript
type EditorState = {
  pages: Record<string, Page>;
  activePageId: string;
};

type HistoryState = {
  past: EditorState[];
  present: EditorState;
  future: EditorState[];
};
```

The interviewer may ask:

> Why not simply store every complete application state?

You should discuss:

* Memory usage
* Immutable state
* Structural sharing
* Command-based history
* Snapshots versus patches
* Performance trade-offs

We will work through your **actual implementation**, rather than inventing architecture that you did not build.

---

### B. Deal Travel — Booking Platform

Your resume mentions supplier integrations, a unified booking workflow, Redis, BullMQ, distributed locking, and a booking state machine. 

This is likely your strongest project for advanced backend and system-design interviews.

Prepare these questions:

1. How do you integrate multiple travel suppliers?
2. Why use a source-discriminator architecture?
3. What happens if a supplier API times out?
4. How do you prevent duplicate bookings?
5. What is a distributed lock?
6. What happens if a process crashes while holding a lock?
7. How does Redis help?
8. Why use BullMQ instead of processing synchronously?
9. How do you handle duplicate callbacks?
10. How do you handle payment success but booking failure?
11. What is an idempotency key?
12. How do you handle retries?
13. How do you track booking states?
14. How do you reconcile inconsistent supplier and internal states?
15. How would you scale this system?

### Booking state machine

A conceptual example:

```text
INITIATED
    |
    v
PAYMENT_PENDING
    |
    v
PAYMENT_SUCCESS
    |
    v
BOOKING_IN_PROGRESS
    |
    +----> BOOKED
    |
    +----> BOOKING_FAILED
    |
    +----> UNKNOWN / RECONCILIATION_REQUIRED
```

**Advanced interview point:** A distributed lock alone does not guarantee exactly-once booking. You also need idempotency, durable state transitions, safe retries, and reconciliation.

We will examine exactly how your system handles these cases.

---

# DAY 2 — Advanced Full-Stack + Backend + System Design

### Goal

Become comfortable with technical interviews focused on your actual engineering stack.

## Morning: React, Angular, and Next.js — 4 hours

### React

Must know:

* Component lifecycle
* `useState`
* `useEffect`
* `useMemo`
* `useCallback`
* `useRef`
* Context API
* Controlled versus uncontrolled components
* React reconciliation
* Keys
* Memoization
* State management
* Rendering optimization
* Server-side rendering concepts

### Interview questions

1. What causes a React component to re-render?
2. When should you use `useMemo`?
3. Why can incorrect keys cause bugs?
4. What is the difference between `useEffect` and `useLayoutEffect`?
5. How would you optimize a slow React page?
6. How do you prevent unnecessary API requests?
7. How do you manage complex global state?
8. How do you handle race conditions in search requests?
9. What is hydration?
10. What is the difference between SSR, SSG, and CSR?

---

### Angular

This is especially important because your current professional work involves Angular and Angular Signals. 

Learn:

* Components and services
* Dependency injection
* Change detection
* Angular Signals
* `computed`
* `effect`
* RxJS
* Observables
* Subjects
* `switchMap`
* `mergeMap`
* `concatMap`
* `exhaustMap`
* Reactive forms
* Lazy loading
* Route guards
* Interceptors
* Component communication

### Critical interview question

**What is the difference between RxJS and Angular Signals?**

Prepare to explain:

| Angular Signals                | RxJS                                |
| ------------------------------ | ----------------------------------- |
| Reactive state model           | Reactive programming library        |
| Tracks dependencies            | Represents streams over time        |
| Useful for synchronous state   | Useful for async events and streams |
| `signal`, `computed`, `effect` | `Observable`, operators, subjects   |
| Fine-grained state updates     | Powerful event composition          |

You should also be ready to explain why you chose Signals for your website builder.

---

### Next.js

Your resume includes Next.js and production websites using SSR/SSG and performance optimization.  

Prepare:

* App Router
* Server and client components
* SSR
* SSG
* ISR
* Dynamic routes
* Middleware
* Caching
* Data fetching
* Hydration
* SEO
* Image optimization
* Core Web Vitals
* Authentication

### Advanced question

> How would you design a Next.js application where public pages are SEO-friendly but the dashboard is highly interactive?

You should be able to discuss:

* Server-rendered public pages
* Client components only where necessary
* API boundaries
* Authentication
* Caching
* Loading and error states
* Performance measurement

---

## Afternoon: Node.js, APIs, Databases, and Redis — 4 hours

### Node.js

Master:

* Event loop
* Non-blocking I/O
* Worker threads
* Streams
* Buffers
* Event emitters
* Express middleware
* Error handling
* Authentication
* Rate limiting
* Graceful shutdown
* Memory leaks
* CPU-bound tasks

### Backend API Design

You should be able to design:

```text
POST   /api/bookings
GET    /api/bookings/:id
PATCH  /api/bookings/:id
DELETE /api/bookings/:id
```

Prepare:

* REST conventions
* HTTP status codes
* Pagination
* Filtering
* Sorting
* Validation
* Authentication
* Authorization
* Rate limiting
* Idempotency
* API versioning
* Centralized error handling
* Logging
* Observability

### Important security topics

* JWT access and refresh tokens
* Password hashing
* CORS
* CSRF
* XSS
* SQL injection
* NoSQL injection
* Input validation
* Secure cookies
* Secrets management
* API rate limiting

---

### Databases

Your resume lists PostgreSQL, MongoDB, MySQL, SQL, indexing, query optimization, and relational modeling. 

#### SQL

Practice:

```sql
SELECT department, COUNT(*) AS employee_count
FROM employees
GROUP BY department;
```

Advanced concepts:

* Joins
* Aggregations
* Subqueries
* CTEs
* Window functions
* Indexes
* Transactions
* ACID
* Isolation levels
* Deadlocks
* Query plans
* Normalization
* Denormalization

#### MongoDB

Prepare:

* Document modeling
* Embedding versus referencing
* Indexes
* Aggregation pipeline
* Transactions
* Query optimization
* Schema validation

### Redis

You should explain:

* Caching
* TTL
* Cache invalidation
* Distributed locks
* Atomic operations
* Pub/Sub
* Queues
* Rate limiting
* Redis persistence

**Important:** Redis locks are not automatically a solution to every concurrency problem. Be prepared to explain lock expiration, ownership, retries, and idempotency.

---

## Evening: System Design — 3 hours

Start with these designs:

### 1. Design a URL Shortener

Learn:

* API design
* Database schema
* Short-code generation
* Collision handling
* Caching
* Scaling
* Analytics

### 2. Design a Job Queue

Relevant to your BullMQ, Redis, Celery, and asynchronous-processing experience. 

Discuss:

* Producers
* Consumers
* Queue storage
* Retries
* Dead-letter queues
* Visibility timeouts
* Duplicate processing
* Monitoring
* Backpressure

### 3. Design a Travel Booking System

This should be your most important system-design exercise.

Architecture:

```text
                 ┌──────────────────┐
                 │   Client / Web   │
                 └────────┬─────────┘
                          │
                 ┌────────▼─────────┐
                 │    API Gateway   │
                 └────────┬─────────┘
                          │
                 ┌────────▼─────────┐
                 │ Booking Service  │
                 └─────┬──────┬─────┘
                       │      │
             ┌─────────▼─┐  ┌─▼───────────┐
             │ PostgreSQL│  │ Redis       │
             │ Booking DB│  │ Lock/Cache  │
             └───────────┘  └─────────────┘
                       │
                 ┌─────▼─────┐
                 │  BullMQ   │
                 │   Queue   │
                 └─────┬─────┘
                       │
             ┌─────────▼──────────┐
             │ Supplier Workers   │
             └─────┬──────┬───────┘
                   │      │
              ┌────▼─┐ ┌──▼────┐
              │Hotel │ │Flight │
              │API   │ │API    │
              └──────┘ └───────┘
```

Questions to answer:

* How do you prevent double booking?
* What happens if the payment gateway times out?
* How do you retry safely?
* How do you recover from worker crashes?
* How do you reconcile supplier responses?
* How do you track state transitions?
* How do you scale to 10,000 concurrent searches?

---

# DAY 3 — Advanced Coding + AI Engineering + Mock Interviews

### Goal

Simulate real interviews and close the biggest knowledge gaps.

## Morning: Advanced DSA — 4 hours

Focus on high-value patterns.

| Pattern             | Problems to practice                                         |
| ------------------- | ------------------------------------------------------------ |
| Linked lists        | Reverse Linked List, Linked List Cycle                       |
| Stack               | Valid Parentheses, Daily Temperatures                        |
| Heap                | Kth Largest Element, Top K Frequent Elements                 |
| Trees               | Maximum Depth, Level Order Traversal, Lowest Common Ancestor |
| Graphs              | Number of Islands, Clone Graph, Course Schedule              |
| Backtracking        | Subsets, Permutations, Combination Sum                       |
| Dynamic programming | Climbing Stairs, House Robber, Coin Change                   |
| Intervals           | Merge Intervals, Meeting Rooms                               |
| Greedy              | Jump Game, Gas Station                                       |

### Advanced coding expectations

For each problem:

1. Clarify assumptions.
2. Explain the brute-force approach.
3. Identify the bottleneck.
4. Derive the optimized approach.
5. Write clean code.
6. Test edge cases.
7. Explain time and space complexity.

### Suggested challenge

Implement an **LRU Cache**.

Requirements:

```text
get(key)
put(key, value)
```

Expected average complexity:

```text
get → O(1)
put → O(1)
```

You should understand how a hash map and doubly linked list work together.

---

## Afternoon: AI Engineering and Resume Projects — 3 hours

Your TopRankr project is a major differentiator because it combines backend engineering with semantic search, vector retrieval, LLM reranking, document processing, and security checks. 

### AI topics to prepare

#### Embeddings

* What is an embedding?
* Why use vector representations?
* Cosine similarity
* Euclidean distance
* Embedding dimensions
* Chunking
* Embedding model selection

#### FAISS and semantic search

Be prepared to explain:

```text
Resume
   ↓
Document extraction
   ↓
Text cleaning
   ↓
Chunking
   ↓
Embedding generation
   ↓
FAISS vector search
   ↓
Candidate retrieval
   ↓
LLM reranking
   ↓
Final ranking and explanation
```

Questions:

1. Why is keyword search insufficient?
2. Why use FAISS?
3. How does vector similarity work?
4. What is the difference between retrieval and reranking?
5. How do you evaluate search quality?
6. How do you handle poor-quality resumes?
7. How do you detect prompt injection?
8. How do you prevent hallucinated recommendations?
9. How do you protect candidate data?
10. How do you handle large document uploads?

---

### Advanced AI architecture questions

**Question:** Why not send every resume directly to an LLM?

Possible engineering considerations:

* Cost
* Latency
* Context-window limitations
* Retrieval efficiency
* Relevance
* Privacy
* Reliability
* Reproducibility

**Question:** How would you evaluate a candidate-ranking system?

Prepare:

* Retrieval precision and recall
* Ranking quality
* Human evaluation
* Relevance
* Fairness and bias
* Explainability
* Latency
* Cost
* Robustness

Do not claim that your system uses a metric unless you actually implemented and measured it.

---

## Evening: Full Mock Interview — 4–5 hours

We'll simulate the following rounds.

### Round 1: Resume Screening — 30 minutes

I will ask questions such as:

1. Tell me about yourself.
2. Walk me through your current role.
3. What is the most complex system you have built?
4. Explain your Deal Travel architecture.
5. What was the hardest technical problem you solved?
6. Tell me about a production issue.
7. Why did you choose Angular Signals?
8. What was your contribution to TopRankr?
9. Explain one performance improvement you made.
10. What would you improve in your current system?

---

### Round 2: JavaScript and Full-Stack — 45 minutes

Topics:

* Event loop
* Closures
* Promises
* React
* Angular
* Node.js
* REST APIs
* Authentication
* Database design
* Performance optimization

---

### Round 3: Coding — 60 minutes

You will solve 2–3 problems under interview conditions.

Example:

> Given an array of integers, return the length of the longest consecutive sequence.

Then:

> Design an LRU cache with `O(1)` average `get` and `put`.

---

### Round 4: Backend and System Design — 60 minutes

Example:

> Design a scalable booking platform that integrates multiple suppliers and prevents duplicate bookings.

You must cover:

* Requirements
* APIs
* Data model
* Architecture
* Concurrency
* Queues
* Failure handling
* Scaling
* Monitoring

---

### Round 5: Behavioral and HR — 30 minutes

Prepare answers for:

* Tell me about yourself.
* Why should we hire you?
* Why are you looking for a change?
* What are your strengths?
* What is your biggest weakness?
* Tell me about a conflict.
* Tell me about a failure.
* Describe a time you worked under pressure.
* How do you handle ambiguous requirements?
* Where do you see yourself in 3–5 years?

---

# 3. How We Will Study Together

Reading a roadmap alone will not be enough. We should use an **interactive interview-preparation method**.

For every topic:

### Step 1 — Learn

I explain the concept from beginner to advanced level.

### Step 2 — Understand

We work through examples and real-world use cases.

### Step 3 — Implement

You write code or explain an architecture.

### Step 4 — Interview

I ask questions as an interviewer would.

### Step 5 — Evaluate

I identify:

* Knowledge gaps
* Incorrect assumptions
* Coding mistakes
* Weak explanations
* Complexity issues
* Missing edge cases

### Step 6 — Repeat

We revisit the weak areas until you can answer confidently.

---

# 4. What to Prioritize If Time Is Limited

If you cannot study for 10–12 hours each day, use this priority order.

### Must Master

1. JavaScript fundamentals and event loop
2. TypeScript
3. Arrays, strings, hash maps, sliding window
4. Binary search
5. React and Angular
6. Node.js and REST APIs
7. SQL and database fundamentals
8. Your three major projects
9. Booking-system design
10. Resume and behavioral questions

### Next Priority

11. Trees and graphs
12. Heaps and intervals
13. Redis and queues
14. Authentication and security
15. AI engineering fundamentals
16. Performance optimization

### If Time Remains

17. Dynamic programming
18. Advanced distributed systems
19. Low-level design
20. Advanced TypeScript patterns

---

# 5. Your Preparation Schedule

| Time        | Day 1                         | Day 2                  | Day 3               |
| ----------- | ----------------------------- | ---------------------- | ------------------- |
| 8:00–10:00  | Arrays, Hash Maps             | React, Angular         | Advanced DSA        |
| 10:15–12:00 | Sliding Window, Binary Search | Next.js, Node.js       | Trees, Graphs, DP   |
| 1:00–3:00   | JavaScript                    | Databases, Redis       | AI Engineering      |
| 3:15–5:00   | TypeScript                    | Backend API Design     | Resume Revision     |
| 6:00–8:00   | DealTouch + Deal Travel       | System Design          | Mock Coding         |
| 8:30–10:00  | Resume Questions              | Backend Mock Interview | Full Mock Interview |

Adjust the times according to your availability.

---

# 6. Let's Start: Day 1, Session 1

We should begin with **JavaScript fundamentals and coding**, because these are useful across MNCs, product companies, and startups.

## First Interview Challenge

Answer these questions without searching.

### Question 1 — JavaScript Event Loop

What will be the output?

```javascript
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

async function test() {
  console.log("4");
  await Promise.resolve();
  console.log("5");
}

test();

console.log("6");
```

Explain the execution order.

---

### Question 2 — Coding

Given:

```javascript
const nums = [2, 7, 11, 15];
const target = 9;
```

Return the indices of two numbers that add up to the target.

Expected output:

```javascript
[0, 1]
```

Requirements:

* Explain the brute-force approach.
* Explain the optimized approach.
* Write the solution in **TypeScript**.
* State time and space complexity.

---

### Question 3 — Resume

Explain your **Deal Travel project** as if you are in an interview.

Cover:

1. What problem does it solve?
2. What was your personal contribution?
3. What was the architecture?
4. How did you use Redis and BullMQ?
5. How did you prevent duplicate bookings?
6. What was the hardest technical challenge?

**Start by answering these three questions.** I will evaluate your answers like a real interviewer, correct your mistakes, and then take you through the next advanced topics.
