# ▲ Next.js Interview Preparation: Beginner to Advanced

This roadmap is designed to help you prepare for **Next.js interviews**, including conceptual questions, practical coding rounds, debugging, performance optimization, architecture, and project discussions.

It assumes you already know the basics of **JavaScript, TypeScript, React, HTTP, and REST APIs**.

---

## 🗺️ Complete Next.js Learning Roadmap

### Level 1: Next.js Fundamentals

* What Next.js is
* Why Next.js is used
* React versus Next.js
* Benefits of Next.js
* Next.js project structure
* Creating a Next.js application
* `create-next-app`
* App Router versus Pages Router
* File-based routing
* Pages
* Layouts
* Nested routes
* Dynamic routes
* Catch-all routes
* Optional catch-all routes
* Route groups
* Private folders
* `page.tsx`
* `layout.tsx`
* `loading.tsx`
* `error.tsx`
* `not-found.tsx`
* `global-error.tsx`
* `template.tsx`
* `default.tsx`
* `route.ts`

---

## Level 2: Routing and Navigation

* Static routes
* Dynamic segments
* Nested dynamic segments
* Catch-all segments
* Optional catch-all segments
* Route groups
* Parallel routes
* Intercepting routes
* Navigation using `Link`
* Programmatic navigation
* `useRouter`
* `usePathname`
* `useSearchParams`
* Route parameters
* Query parameters
* Redirects
* Permanent redirects
* `notFound()`
* Middleware-based redirects
* Protected routes
* Route-level loading states
* Route-level error handling

### Important Interview Questions

* How does file-based routing work in Next.js?
* What is the difference between route parameters and query parameters?
* What is the difference between `Link` and `useRouter`?
* What are dynamic routes?
* What are parallel routes?
* What are intercepting routes?
* How would you implement protected routes?

---

## Level 3: App Router and Rendering

* App Router architecture
* Server Components
* Client Components
* Server Component boundaries
* The `'use client'` directive
* The `'use server'` directive
* Server-only code
* Client-only code
* Component composition
* Rendering on the server
* Rendering on the client
* Static rendering
* Dynamic rendering
* Streaming
* Partial rendering
* Suspense boundaries
* Loading UI
* Error boundaries
* Hydration
* Hydration mismatches
* Client-side navigation
* Server-side navigation

### Important Interview Questions

* What is the difference between Server Components and Client Components?
* When should you use `'use client'`?
* Can a Server Component import a Client Component?
* Can a Client Component import a Server Component directly?
* Why should you avoid unnecessary Client Components?
* What causes hydration errors?
* What is streaming in Next.js?
* How does Suspense work with the App Router?

---

## Level 4: Data Fetching

* Fetching data in Server Components
* Fetching data in Client Components
* Native `fetch`
* API routes
* Route Handlers
* Database access from Server Components
* Request-time data fetching
* Build-time data fetching
* Client-side data fetching
* Parallel data fetching
* Sequential data fetching
* Dependent data fetching
* Loading states
* Error states
* Empty states
* Request cancellation
* Request deduplication
* Request caching
* Data cache
* Full route cache
* Router cache
* Cache invalidation
* Revalidation
* Background revalidation
* Optimistic updates
* Polling
* Pagination
* Infinite scrolling
* TanStack Query
* SWR

### Example: Server-side Data Fetching

```tsx
// app/products/page.tsx

export default async function ProductsPage() {
  const response = await fetch("https://api.example.com/products");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>

      {products.map((product: { id: number; name: string }) => (
        <p key={product.id}>{product.name}</p>
      ))}
    </main>
  );
}
```

### Interview Questions

* Where should data fetching happen in Next.js?
* What is the difference between server-side and client-side data fetching?
* How do you fetch data in a Server Component?
* How do you handle loading and error states?
* How do you avoid waterfalls?
* What is request memoization?
* What is the difference between the Data Cache and Router Cache?
* How do you invalidate cached data?

---

## Level 5: Caching and Revalidation

* Why caching is important
* Request memoization
* Data Cache
* Full Route Cache
* Router Cache
* Cache-Control concepts
* Static caching
* Dynamic rendering
* Time-based revalidation
* On-demand revalidation
* `revalidate`
* `revalidatePath`
* `revalidateTag`
* Cache tags
* `unstable_cache`
* Dynamic APIs
* Cookies and rendering
* Headers and rendering
* Cache invalidation
* Stale data
* Cache consistency
* Cache stampede
* Cache warming

### Important Interview Questions

* Explain the different caches in Next.js.
* What is the difference between `revalidatePath()` and `revalidateTag()`?
* What makes a route dynamic?
* How do cookies affect rendering?
* How would you refresh product data after an admin update?
* How would you prevent users from receiving stale data?

---

## Level 6: Static and Dynamic Rendering

* Static Site Generation
* Server-Side Rendering
* Client-Side Rendering
* Incremental Static Regeneration
* Hybrid rendering
* Dynamic rendering
* Static rendering
* Build-time generation
* Request-time rendering
* Streaming SSR
* Route-level rendering
* Dynamic route generation
* `generateStaticParams`
* Runtime configuration
* Edge runtime
* Node.js runtime

### Compare Rendering Strategies

| Strategy  | Description                               | Typical Use Case                          |
| --------- | ----------------------------------------- | ----------------------------------------- |
| CSR       | Rendering occurs in the browser           | Highly interactive dashboards             |
| SSR       | HTML is generated per request             | Personalized or frequently changing pages |
| SSG       | HTML is generated during build            | Documentation and static content          |
| ISR       | Static pages are revalidated periodically | Product and blog pages                    |
| Streaming | UI is sent progressively                  | Slow or complex pages                     |

### Interview Questions

* Compare CSR, SSR, SSG, and ISR.
* When should you use static rendering?
* When should you use dynamic rendering?
* How does ISR work?
* What is the role of `generateStaticParams()`?
* What are the advantages of streaming SSR?

---

## Level 7: Server Actions and Mutations

* What Server Actions are
* The `'use server'` directive
* Server-side mutations
* Form actions
* Calling Server Actions
* Validation
* Authentication in Server Actions
* Authorization in Server Actions
* Error handling
* Revalidation after mutations
* Optimistic UI
* Progressive enhancement
* `useActionState`
* `useFormStatus`
* `useOptimistic`
* Preventing duplicate submissions
* Idempotent mutations
* Server Action security

### Example

```tsx
// app/actions.ts
"use server";

export async function createProduct(formData: FormData) {
  const name = formData.get("name");

  if (typeof name !== "string" || name.trim() === "") {
    throw new Error("Product name is required");
  }

  // Validate authorization.
  // Save the product to the database.
}
```

```tsx
// app/products/page.tsx

import { createProduct } from "../actions";

export default function ProductPage() {
  return (
    <form action={createProduct}>
      <input name="name" placeholder="Product name" />
      <button type="submit">Create Product</button>
    </form>
  );
}
```

### Interview Questions

* What are Server Actions?
* How are Server Actions different from API routes?
* Are Server Actions public endpoints?
* How do you validate Server Action input?
* How do you authenticate a Server Action?
* How do you revalidate data after a mutation?
* How do you prevent duplicate submissions?

---

## Level 8: Route Handlers and APIs

* Route Handlers
* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`
* Request objects
* Response objects
* `NextRequest`
* `NextResponse`
* Route parameters
* Query parameters
* Headers
* Cookies
* JSON responses
* File uploads
* Streaming responses
* Webhooks
* API authentication
* API authorization
* Validation
* Rate limiting
* CORS
* API versioning
* Error responses
* Status codes
* Idempotency
* Database integration

### Example

```ts
// app/api/products/route.ts

import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Keyboard" },
  ];

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json(
      { error: "Name is required" },
      { status: 400 }
    );
  }

  return NextResponse.json(
    { message: "Product created" },
    { status: 201 }
  );
}
```

### Interview Questions

* What are Route Handlers?
* How are Route Handlers different from Express routes?
* How do you validate request bodies?
* How do you handle authentication in an API route?
* How do you implement file uploads?
* How do you handle API errors consistently?
* How do you protect an API from abuse?

---

## Level 9: Middleware

* What Middleware is
* `middleware.ts` or `proxy` conventions according to the project version
* Request interception
* Redirects
* Rewrites
* Authentication checks
* Authorization checks
* Locale detection
* A/B testing
* Request headers
* Response headers
* Matcher configuration
* Middleware limitations
* Edge execution considerations
* Avoiding expensive middleware operations
* Middleware security

### Interview Questions

* What is Middleware in Next.js?
* When should you use Middleware?
* What should not be done in Middleware?
* How do you protect routes?
* What is the difference between a redirect and a rewrite?
* What are Middleware performance concerns?

---

## Level 10: Authentication and Authorization

* Authentication versus authorization
* Login and logout
* Sessions
* Cookies
* Secure cookies
* HTTP-only cookies
* SameSite cookies
* JWT
* Access tokens
* Refresh tokens
* OAuth
* OpenID Connect
* NextAuth/Auth.js concepts
* Middleware protection
* Server-side session validation
* Role-based access control
* Permission-based access control
* Admin routes
* Protected Server Components
* Protected Server Actions
* Protected Route Handlers
* Session expiration
* Token rotation
* CSRF protection
* Brute-force protection
* Password hashing
* Secure redirects

### Interview Questions

* Where should authentication checks happen?
* How do you protect Server Components?
* How do you protect Route Handlers?
* Why are HTTP-only cookies useful?
* Where should tokens be stored?
* What is the difference between authentication and authorization?
* How would you implement role-based access control?

---

## Level 11: Forms and Validation

* HTML forms
* Controlled forms
* Uncontrolled forms
* Server Actions and forms
* Form submissions
* Form validation
* Client-side validation
* Server-side validation
* Zod
* React Hook Form
* Error messages
* Field-level errors
* Form-level errors
* Multi-step forms
* File uploads
* Dynamic fields
* Optimistic form updates
* Pending states
* Accessible forms
* Duplicate submission prevention

---

## Level 12: Metadata and SEO

* Static metadata
* Dynamic metadata
* `metadata`
* `generateMetadata`
* Page titles
* Descriptions
* Canonical URLs
* Open Graph metadata
* Twitter metadata
* Robots metadata
* Sitemap
* Robots file
* Structured data
* JSON-LD
* Dynamic SEO
* Social sharing previews
* SEO for dynamic routes
* SEO for paginated pages
* Search engine indexing

### Interview Questions

* How do you add metadata in Next.js?
* What is `generateMetadata()`?
* How do you generate dynamic SEO metadata?
* How do you create a sitemap?
* How do you improve SEO for dynamic pages?

---

## Level 13: Images, Fonts, and Assets

* `next/image`
* Image optimization
* Responsive images
* Image sizing
* `width` and `height`
* `fill`
* Image priority
* Lazy loading
* Remote image configuration
* Image loaders
* `next/font`
* Local fonts
* Google fonts
* Static assets
* Public directory
* Favicon
* SVG handling
* Image security
* Image performance

---

## Level 14: Performance Optimization

* Server Components
* Reducing JavaScript sent to the browser
* Code splitting
* Lazy loading
* Dynamic imports
* Suspense
* Streaming
* Parallel data fetching
* Avoiding request waterfalls
* Caching
* CDN usage
* Image optimization
* Font optimization
* Bundle analysis
* Tree shaking
* Compression
* Prefetching
* Route prefetching
* React memoization
* Virtualized lists
* Database query optimization
* API optimization
* Edge runtime
* Performance monitoring
* Core Web Vitals

### Important Metrics

* Largest Contentful Paint
* Cumulative Layout Shift
* Interaction to Next Paint
* First Contentful Paint
* Time to First Byte
* Total Blocking Time
* Server response time
* JavaScript bundle size
* Cache hit ratio

### Interview Questions

* How would you improve a slow Next.js page?
* How do Server Components improve performance?
* How do you reduce client-side JavaScript?
* How do you identify unnecessary JavaScript?
* How do you prevent request waterfalls?
* How do you optimize images?
* How do you improve Core Web Vitals?

---

## Level 15: Error Handling and Debugging

* `error.tsx`
* `global-error.tsx`
* `not-found.tsx`
* `notFound()`
* `redirect()`
* Error boundaries
* Expected errors
* Unexpected errors
* Server errors
* Client errors
* API errors
* Form errors
* Logging
* Error monitoring
* Debugging Server Components
* Debugging Client Components
* Hydration errors
* Environment-variable mistakes
* Production debugging
* Error recovery
* Retry mechanisms

---

## Level 16: Environment Variables and Configuration

* `.env`
* `.env.local`
* `.env.development`
* `.env.production`
* Public environment variables
* Private environment variables
* `NEXT_PUBLIC_`
* `next.config.js`
* Redirects
* Rewrites
* Headers
* Image configuration
* Experimental features
* Build configuration
* Runtime configuration
* Environment-specific behavior
* Secrets management
* Configuration validation

### Interview Questions

* What is the purpose of `NEXT_PUBLIC_`?
* Which environment variables are exposed to the browser?
* How should secrets be stored?
* What is the role of `next.config.js`?
* How do you configure redirects and rewrites?

---

## Level 17: TypeScript with Next.js

* Typed route parameters
* Typed search parameters
* Typed Server Components
* Typed Client Components
* Typed Route Handlers
* Typed API responses
* Form-data types
* Type-safe environment variables
* Shared types
* API schemas
* Zod validation
* Discriminated unions
* Generic components
* Type-safe metadata
* Type-safe database queries
* Type-safe Server Actions
* Avoiding unsafe `any`

---

## Level 18: Testing Next.js Applications

### Unit Testing

* Utility functions
* Validation functions
* Server-side functions
* Business logic
* Custom hooks

### Component Testing

* Client Components
* Forms
* Buttons
* Modals
* Loading states
* Error states
* Conditional rendering

### Integration Testing

* API integration
* Database integration
* Authentication flow
* Server Actions
* Route Handlers

### End-to-End Testing

* Playwright
* Cypress
* Login flow
* Checkout flow
* Protected routes
* Form submission
* Navigation
* Error handling

### Interview Questions

* How do you test Server Components?
* How do you test Client Components?
* How do you mock API requests?
* How do you test authentication?
* How do you test Server Actions?
* What should be covered by end-to-end tests?

---

## Level 19: Deployment and DevOps

* Production builds
* `next build`
* `next start`
* Vercel deployment
* Docker deployment
* Self-hosting
* Node.js runtime
* Edge runtime
* Environment variables
* CI/CD
* GitHub Actions
* Preview deployments
* Production deployments
* Build caching
* CDN
* Reverse proxy
* Load balancing
* Health checks
* Logging
* Monitoring
* Error tracking
* Rollbacks
* Blue-green deployment
* Canary deployment
* Database migrations
* Graceful shutdown

---

## Level 20: Advanced Architecture

* Feature-based architecture
* Domain-driven frontend design
* Shared component libraries
* Design systems
* Monorepos
* Turborepo
* Package boundaries
* Server and client boundaries
* Repository pattern
* Service layer
* Data-access layer
* Dependency injection
* Backend-for-Frontend architecture
* API gateway
* Microservices integration
* Event-driven frontend workflows
* State machines
* Distributed workflows
* Background jobs
* WebSockets
* Server-Sent Events
* Multi-tenant applications
* Internationalization
* Localization
* Multi-region deployment
* Fault tolerance
* Observability

---

# 🧪 Next.js Machine-Coding Projects

Build these projects progressively:

## Beginner Projects

1. Personal portfolio
2. Blog website
3. Documentation website
4. Product listing page
5. Static landing page

## Intermediate Projects

6. Blog with Markdown support
7. Authentication application
8. Admin dashboard
9. Product search application
10. E-commerce cart
11. Pagination and filtering system
12. Multi-step form
13. File-upload application
14. Role-based dashboard
15. Job listing application

## Advanced Projects

16. E-commerce platform
17. Travel-booking platform
18. Real-time chat application
19. SaaS dashboard
20. Multi-tenant application
21. Payment integration system
22. Notification platform
23. Content-management system
24. Collaborative editor
25. AI-powered search application
26. Recruitment platform
27. Analytics dashboard
28. Subscription-management platform
29. Event-booking platform
30. Scalable marketplace

For every project, prepare:

* Requirements
* User flows
* Folder structure
* Component architecture
* Data model
* API design
* Authentication
* Authorization
* Caching strategy
* Error handling
* Loading states
* Performance strategy
* Testing strategy
* Deployment strategy
* Scaling strategy
* Security considerations

---

# 🎤 Common Next.js Interview Questions

## Beginner

* What is Next.js?
* Why use Next.js instead of plain React?
* What is file-based routing?
* What is the App Router?
* What is a layout?
* What is a dynamic route?
* What is the purpose of `Link`?
* What is `next/image`?
* What is `next/font`?
* What is the `public` directory?

## Intermediate

* What are Server Components?
* What are Client Components?
* What does `'use client'` mean?
* How does data fetching work?
* What are Route Handlers?
* What is Middleware?
* What is ISR?
* What is hydration?
* What causes hydration mismatches?
* How do you handle errors?
* How do you implement authentication?
* How do you use environment variables?
* How do you optimize a Next.js application?

## Advanced

* Explain the Next.js caching model.
* Explain the difference between Data Cache, Full Route Cache, and Router Cache.
* Explain static and dynamic rendering.
* Explain streaming and Suspense.
* Explain Server Actions.
* How do you secure Server Actions?
* How do you design a scalable Next.js application?
* How do you prevent request waterfalls?
* How do you debug hydration issues?
* How do you optimize a large application?
* How would you deploy Next.js using Docker?
* How would you handle multi-tenant routing?
* How would you implement real-time updates?
* How would you handle cache invalidation?
* How would you design a Next.js application for millions of users?

---

# 📅 Eight-Week Study Plan

## Week 1: Fundamentals

* Next.js architecture
* App Router
* Project structure
* Routing
* Layouts
* Pages
* Loading and error files
* Static assets

## Week 2: Rendering

* Server Components
* Client Components
* SSR
* SSG
* ISR
* CSR
* Hydration
* Streaming
* Suspense

## Week 3: Data Fetching

* Server-side data fetching
* Client-side data fetching
* Route Handlers
* API integration
* Loading and error states
* Pagination
* Search
* Caching

## Week 4: Mutations and Authentication

* Server Actions
* Forms
* Validation
* Authentication
* Authorization
* Cookies
* Middleware
* Protected routes

## Week 5: Advanced Features

* Dynamic metadata
* Image optimization
* Font optimization
* Parallel routes
* Intercepting routes
* Error handling
* Internationalization
* Environment variables

## Week 6: Performance and Testing

* Bundle optimization
* Code splitting
* Lazy loading
* Suspense
* Core Web Vitals
* Unit testing
* Integration testing
* End-to-end testing

## Week 7: Architecture and Deployment

* Scalable folder structures
* Component architecture
* Database integration
* Docker
* CI/CD
* Monitoring
* Logging
* Deployment strategies

## Week 8: Interview Practice

* Conceptual questions
* Debugging questions
* Machine-coding tasks
* Project explanation
* Architecture discussions
* Performance scenarios
* Mock interviews
* Resume-based questions

---

# ✅ Next.js Interview Readiness Checklist

## Fundamentals

* [ ] I understand Next.js architecture.
* [ ] I can create a Next.js project.
* [ ] I understand the App Router.
* [ ] I can create static and dynamic routes.
* [ ] I understand layouts and nested layouts.
* [ ] I can use loading and error files.

## Rendering

* [ ] I understand Server Components.
* [ ] I understand Client Components.
* [ ] I can explain SSR, SSG, CSR, and ISR.
* [ ] I understand hydration.
* [ ] I understand streaming and Suspense.
* [ ] I can diagnose hydration mismatches.

## Data and APIs

* [ ] I can fetch data on the server.
* [ ] I can fetch data on the client.
* [ ] I can create Route Handlers.
* [ ] I understand caching.
* [ ] I can implement pagination.
* [ ] I can implement search and filtering.
* [ ] I can handle loading, error, and empty states.

## Authentication

* [ ] I can implement login and logout.
* [ ] I understand cookies and sessions.
* [ ] I can protect routes.
* [ ] I can implement role-based authorization.
* [ ] I can secure Server Actions and APIs.

## Performance

* [ ] I can reduce client-side JavaScript.
* [ ] I understand code splitting.
* [ ] I can optimize images and fonts.
* [ ] I can prevent request waterfalls.
* [ ] I understand Next.js caching.
* [ ] I can analyze performance bottlenecks.

## Advanced Topics

* [ ] I understand Server Actions.
* [ ] I understand parallel routes.
* [ ] I understand intercepting routes.
* [ ] I can implement dynamic metadata.
* [ ] I can use middleware appropriately.
* [ ] I understand deployment options.
* [ ] I can design a scalable Next.js architecture.

## Coding Round

* [ ] I can build a dashboard.
* [ ] I can implement authentication.
* [ ] I can create protected routes.
* [ ] I can build a search and filtering system.
* [ ] I can implement pagination.
* [ ] I can build a multi-step form.
* [ ] I can create a Route Handler.
* [ ] I can implement a Server Action.
* [ ] I can handle loading and error states.
* [ ] I can explain my project architecture.

---

# 📚 Recommended Resources

* [Next.js Documentation](https://nextjs.org/docs)
* [Next.js Learn](https://nextjs.org/learn)
* [React Documentation](https://react.dev/)
* [MDN Web Docs](https://developer.mozilla.org/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Web.dev](https://web.dev/)
* [Playwright Documentation](https://playwright.dev/docs/intro)
* [Vercel Documentation](https://vercel.com/docs)
* [Next.js GitHub Repository](https://github.com/vercel/next.js)

---

# 🚀 Final Goal

After completing this roadmap, you should be able to:

* Build production-ready Next.js applications.
* Explain the App Router clearly.
* Understand Server and Client Components.
* Choose the correct rendering strategy.
* Design efficient data-fetching flows.
* Implement authentication and authorization.
* Build secure APIs and Server Actions.
* Understand caching and revalidation.
* Optimize application performance.
* Debug hydration and rendering issues.
* Write tests for Next.js applications.
* Deploy and monitor Next.js applications.
* Explain your architecture and technical decisions in interviews.
* Solve Next.js machine-coding and project-based interview tasks.

> Learn the concept → build a feature → debug it → optimize it → explain the trade-offs → practice interview questions.
