# 🅰️ Angular Interview Preparation: Beginner to Advanced

This roadmap covers Angular concepts, practical development, debugging, architecture, performance, testing, and interview questions—from beginner level to advanced engineering interviews.

It is especially useful for preparing for **Angular, TypeScript, frontend, and full-stack developer roles**.

---

## 🗺️ Complete Angular Learning Roadmap

### Level 1: Web and TypeScript Foundations

Before starting Angular, revise:

* HTML
* Semantic HTML
* Forms
* CSS
* Flexbox
* CSS Grid
* Responsive design
* JavaScript fundamentals
* ES6+ features
* Variables and scope
* Functions
* Closures
* Promises
* Async/await
* DOM events
* Event bubbling and capturing
* Modules
* TypeScript types
* Interfaces
* Type aliases
* Generics
* Union and intersection types
* Type narrowing
* Access modifiers
* Classes
* Decorators
* `tsconfig`
* Strict mode

---

## Level 2: Angular Fundamentals

* What Angular is
* Angular versus React
* Angular framework architecture
* Angular CLI
* Creating an Angular application
* Angular project structure
* Components
* Templates
* Metadata
* Selectors
* Template syntax
* Interpolation
* Property binding
* Event binding
* Two-way binding
* Attribute binding
* Class binding
* Style binding
* Template expressions
* Template statements
* Angular expressions versus JavaScript expressions
* Component communication
* Parent-child relationships
* Component nesting
* Standalone components
* Angular modules
* Application bootstrap
* Angular compiler
* Angular development server
* Angular production build

### Important Questions

* What is Angular?
* Why use Angular?
* What are the main parts of Angular?
* What is a component?
* What is a standalone component?
* What is the difference between Angular and React?
* What is the Angular CLI?
* What is the difference between interpolation and property binding?
* What is the difference between property binding and attribute binding?

---

## Level 3: Components and Templates

* Component decorator
* Component selector
* Component template
* External templates
* Inline templates
* Component styles
* External stylesheets
* Style encapsulation
* Component inputs
* Component outputs
* Input binding
* Output binding
* Custom events
* Parent-to-child communication
* Child-to-parent communication
* Sibling communication
* Template reference variables
* Local template variables
* Content projection
* `ng-content`
* Single-slot projection
* Multi-slot projection
* Conditional projection
* Component composition
* Reusable components
* Presentational components
* Container components

### Interview Questions

* How does parent-child communication work?
* What is the difference between `@Input()` and `@Output()`?
* What is content projection?
* What is `ng-content`?
* What are template reference variables?
* How do you create reusable Angular components?
* What is the difference between a container and a presentational component?

---

## Level 4: Angular Template Syntax

* Interpolation
* Property binding
* Event binding
* Two-way binding
* Attribute binding
* Class binding
* Style binding
* Event modifiers
* Template reference variables
* Template expressions
* Pipes in templates
* Conditional rendering
* List rendering
* Track expressions
* Template control flow
* `@if`
* `@else`
* `@for`
* `@switch`
* `@empty`
* Legacy structural directives
* `*ngIf`
* `*ngFor`
* `*ngSwitch`
* Custom structural directives
* Template type checking
* Safe navigation operator
* Nullish handling in templates

### Example

```html
@if (isLoggedIn) {
  <p>Welcome back!</p>
} @else {
  <p>Please log in.</p>
}
```

```html
@for (user of users; track user.id) {
  <p>{{ user.name }}</p>
} @empty {
  <p>No users found.</p>
}
```

### Interview Questions

* What is the difference between `@if` and `*ngIf`?
* Why is tracking important when rendering lists?
* What is the purpose of `track` in `@for`?
* What are structural directives?
* What is the difference between property binding and interpolation?

---

## Level 5: Directives

### Built-in Directives

* Attribute directives
* Structural directives
* `ngClass`
* `ngStyle`
* `ngModel`
* `ngTemplateOutlet`
* `ngComponentOutlet`
* `ngIf`
* `ngFor`
* `ngSwitch`

### Custom Directives

* Creating attribute directives
* Creating structural directives
* `Directive`
* `ElementRef`
* `Renderer2`
* `TemplateRef`
* `ViewContainerRef`
* Host bindings
* Host listeners
* Directive inputs
* Directive outputs
* Directive lifecycle
* Reusable behavior directives
* Permission directives
* Tooltip directives
* Highlight directives
* Click-outside directives
* Infinite-scroll directives

### Interview Questions

* What is a directive?
* What is the difference between a component and a directive?
* What is the difference between attribute and structural directives?
* Why should direct DOM manipulation be avoided?
* What is the role of `Renderer2`?
* How would you create a custom permission directive?

---

## Level 6: Pipes

* What pipes are
* Built-in pipes
* `DatePipe`
* `CurrencyPipe`
* `DecimalPipe`
* `PercentPipe`
* `UpperCasePipe`
* `LowerCasePipe`
* `TitleCasePipe`
* `SlicePipe`
* `JsonPipe`
* `AsyncPipe`
* Custom pipes
* Pure pipes
* Impure pipes
* Pipe parameters
* Chaining pipes
* Pipe performance
* Pipes and change detection
* Pipes and observables

### Interview Questions

* What is a pipe?
* What is the difference between pure and impure pipes?
* When should you create a custom pipe?
* Why can impure pipes affect performance?
* How does the `async` pipe work?
* What are the benefits of using the `async` pipe?

---

## Level 7: Component Lifecycle

* Component lifecycle
* `ngOnChanges`
* `ngOnInit`
* `ngDoCheck`
* `ngAfterContentInit`
* `ngAfterContentChecked`
* `ngAfterViewInit`
* `ngAfterViewChecked`
* `ngOnDestroy`
* Lifecycle execution order
* Input changes
* View initialization
* Content initialization
* Cleanup logic
* Subscription cleanup
* Resource cleanup
* Destroy references
* `DestroyRef`
* `takeUntilDestroyed`

### Interview Questions

* Explain the Angular component lifecycle.
* When does `ngOnChanges` run?
* What is the difference between `ngOnInit` and a constructor?
* When should cleanup happen?
* What causes `ExpressionChangedAfterItHasBeenCheckedError`?
* When should you use `ngAfterViewInit`?

---

## Level 8: Services and Dependency Injection

* Services
* Injectable classes
* Dependency injection
* Providers
* Injector hierarchy
* Root providers
* Component-level providers
* Environment providers
* `providedIn`
* `providedIn: 'root'`
* `providedIn: 'platform'`
* Injection tokens
* `InjectionToken`
* `inject()`
* Constructor injection
* Provider configurations
* `useClass`
* `useValue`
* `useFactory`
* `useExisting`
* Multi providers
* Optional dependencies
* Self injection
* Skip-self injection
* Host injection
* Environment injectors
* Dependency scopes
* Singleton services
* Lazy-loaded service instances

### Interview Questions

* What is dependency injection?
* How does Angular’s injector hierarchy work?
* What is the difference between root-level and component-level providers?
* What is `providedIn: 'root'`?
* What is an `InjectionToken`?
* What are `useClass`, `useValue`, and `useFactory`?
* How can a service have multiple instances?
* What is the difference between constructor injection and `inject()`?

---

## Level 9: Signals

* What signals are
* Writable signals
* Read-only signals
* `signal()`
* `computed()`
* `effect()`
* Signal reads
* Signal writes
* Signal updates
* Signal dependencies
* Derived state
* Signal equality
* Signal inputs
* Model inputs
* Signal outputs
* Signals in templates
* Signals and change detection
* Signals and `OnPush`
* Signals and RxJS
* `toSignal`
* `toObservable`
* Signal-based component design
* Avoiding unnecessary effects
* Cleanup of effects

### Example

```ts
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <p>Count: {{ count() }}</p>
    <p>Double: {{ doubleCount() }}</p>

    <button (click)="increment()">Increment</button>
  `,
})
export class CounterComponent {
  count = signal(0);

  doubleCount = computed(() => this.count() * 2);

  increment() {
    this.count.update(value => value + 1);
  }
}
```

### Interview Questions

* What is a signal?
* What is the difference between `signal()` and `computed()`?
* When should you use `effect()`?
* How are signals different from RxJS observables?
* How do signals interact with change detection?
* What are signal inputs?
* Why should effects not be used for ordinary derived state?

---

## Level 10: Change Detection

* Angular change detection
* Default change detection
* `OnPush` change detection
* Change detection tree
* Change detection triggers
* Component references
* Immutable data
* Input reference changes
* Events
* Observable emissions
* Signals
* Zone-based change detection
* Zone-less Angular concepts
* `ChangeDetectorRef`
* `markForCheck`
* `detectChanges`
* `detach`
* `reattach`
* `ApplicationRef`
* Change detection errors
* Avoiding unnecessary checks
* Manual change detection
* Change detection performance

### Interview Questions

* What is change detection?
* How does `OnPush` work?
* What triggers an `OnPush` component to update?
* What is the difference between `markForCheck()` and `detectChanges()`?
* How do immutable objects help `OnPush`?
* What are the benefits of zone-less Angular?
* Why should manual change detection be used carefully?

---

## Level 11: RxJS and Observables

### Fundamentals

* Observable
* Observer
* Subscription
* `next`
* `error`
* `complete`
* Cold observables
* Hot observables
* Unicast observables
* Multicast observables
* Creation functions
* Operators
* Pipeable operators
* Subscription management

### Important Operators

* `map`
* `filter`
* `tap`
* `take`
* `takeUntil`
* `takeWhile`
* `first`
* `last`
* `skip`
* `distinctUntilChanged`
* `debounceTime`
* `throttleTime`
* `delay`
* `startWith`
* `scan`
* `reduce`
* `catchError`
* `retry`
* `retryWhen`
* `finalize`
* `switchMap`
* `mergeMap`
* `concatMap`
* `exhaustMap`
* `combineLatest`
* `forkJoin`
* `zip`
* `withLatestFrom`
* `merge`
* `concat`
* `share`
* `shareReplay`
* `Subject`
* `BehaviorSubject`
* `ReplaySubject`
* `AsyncSubject`

### Higher-Order Mapping

| Operator     | Behavior                         | Common Use                   |
| ------------ | -------------------------------- | ---------------------------- |
| `switchMap`  | Cancels previous inner stream    | Search requests              |
| `mergeMap`   | Runs inner streams concurrently  | Independent requests         |
| `concatMap`  | Queues inner streams             | Ordered operations           |
| `exhaustMap` | Ignores new streams while active | Preventing duplicate submits |

### Interview Questions

* What is an observable?
* What is the difference between a Promise and an Observable?
* What is the difference between `Subject` and `BehaviorSubject`?
* Explain `switchMap`, `mergeMap`, `concatMap`, and `exhaustMap`.
* When should you use `forkJoin`?
* What is the difference between cold and hot observables?
* What causes memory leaks in RxJS?
* What is the purpose of `shareReplay()`?
* How do you cancel an HTTP request?
* How do you handle RxJS errors?

---

## Level 12: Angular Forms

### Template-Driven Forms

* `FormsModule`
* `ngModel`
* `ngForm`
* Form controls
* Validation
* Form states
* Dirty and pristine
* Touched and untouched
* Valid and invalid
* Pending state
* Form submission

### Reactive Forms

* `ReactiveFormsModule`
* `FormControl`
* `FormGroup`
* `FormArray`
* `FormBuilder`
* `NonNullableFormBuilder`
* Synchronous validators
* Asynchronous validators
* Custom validators
* Cross-field validation
* Dynamic forms
* Nested forms
* Form arrays
* Form state
* Form reset
* Form patching
* Form value changes
* Form status changes
* Typed reactive forms
* Form error handling

### Advanced Forms

* Dynamic form generation
* Multi-step forms
* Reusable form controls
* `ControlValueAccessor`
* Custom form components
* Form validation messages
* Debounced validation
* Server-side validation
* File uploads
* Conditional fields
* Form performance

### Interview Questions

* What is the difference between template-driven and reactive forms?
* What is the difference between `setValue()` and `patchValue()`?
* What is `FormArray`?
* How do you create a custom validator?
* What is `ControlValueAccessor`?
* How do you build a reusable custom form control?
* How do you implement cross-field validation?

---

## Level 13: Routing

* Angular Router
* Router configuration
* Routes
* Components and routes
* `RouterOutlet`
* `RouterLink`
* `RouterLinkActive`
* Route parameters
* Query parameters
* Fragments
* Child routes
* Nested routes
* Auxiliary routes
* Lazy-loaded routes
* Route redirects
* Wildcard routes
* Route ordering
* Route data
* Resolvers
* Guards
* Navigation events
* Router state
* Programmatic navigation
* Relative navigation
* Preloading strategies
* Custom preloading
* Route reuse strategies
* Standalone route configuration
* Functional guards
* Functional resolvers

### Route Guards

* `CanActivate`
* `CanActivateChild`
* `CanDeactivate`
* `CanMatch`
* `Resolve`
* Authentication guards
* Authorization guards
* Unsaved-changes guards
* Role-based routing
* Lazy-route protection

### Interview Questions

* How does Angular routing work?
* What is the difference between `CanActivate` and `CanMatch`?
* What is lazy loading?
* How do route guards work?
* How do you protect routes?
* What is a route resolver?
* What is the difference between route parameters and query parameters?
* How do you prevent users from leaving a form with unsaved changes?

---

## Level 14: HTTP and API Integration

* `HttpClient`
* HTTP requests
* `GET`
* `POST`
* `PUT`
* `PATCH`
* `DELETE`
* Request headers
* Query parameters
* Request bodies
* HTTP responses
* Typed HTTP responses
* HTTP error handling
* HTTP interceptors
* Functional interceptors
* Authentication headers
* Token refresh
* Retry logic
* Request cancellation
* Request caching
* Request deduplication
* File uploads
* File downloads
* Progress events
* Upload progress
* Download progress
* Polling
* API pagination
* API filtering
* API sorting
* API search
* Global error handling
* API response transformation

### Interview Questions

* How does `HttpClient` work?
* What is an HTTP interceptor?
* How do you attach an access token to requests?
* How do you implement token refresh?
* How do you handle HTTP errors globally?
* How do you cancel an HTTP request?
* How do you upload a file?
* How do you implement API retries safely?
* How do you prevent duplicate API calls?

---

## Level 15: Interceptors

* HTTP interceptors
* Functional interceptors
* Class-based interceptors
* Authentication interceptors
* Logging interceptors
* Error interceptors
* Retry interceptors
* Caching interceptors
* Loading indicators
* Request timing
* Correlation IDs
* Request modification
* Response modification
* Interceptor ordering
* Multiple interceptors
* Avoiding infinite refresh loops
* Excluding public endpoints

### Interview Questions

* What is an interceptor?
* What are common interceptor use cases?
* How do you implement a global loading indicator?
* How do you prevent infinite token-refresh loops?
* What is the difference between functional and class-based interceptors?

---

## Level 16: Angular Architecture

* Feature modules
* Standalone architecture
* Core services
* Shared components
* Shared directives
* Shared pipes
* Feature-based folders
* Domain-based folders
* Smart and presentational components
* Container components
* Facade services
* State management
* API services
* Repository pattern
* Separation of concerns
* Dependency inversion
* Reusable UI libraries
* Design systems
* Monorepos
* Nx
* Workspace libraries
* Public APIs
* Circular dependencies
* Architecture boundaries
* Code organization
* Scalable Angular applications

### Suggested Folder Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── auth/
│   │   ├── interceptors/
│   │   ├── guards/
│   │   └── services/
│   │
│   ├── shared/
│   │   ├── components/
│   │   ├── directives/
│   │   ├── pipes/
│   │   └── ui/
│   │
│   ├── features/
│   │   ├── users/
│   │   ├── dashboard/
│   │   └── settings/
│   │
│   ├── app.config.ts
│   ├── app.routes.ts
│   └── app.component.ts
│
├── assets/
└── styles.scss
```

### Interview Questions

* How would you structure a large Angular application?
* What belongs in `core` and `shared`?
* What is the difference between feature-based and layer-based architecture?
* How do you avoid circular dependencies?
* How do you create a reusable component library?
* How would you organize a multi-team Angular application?

---

## Level 17: State Management

* Local component state
* Shared service state
* Signals-based state
* RxJS-based state
* `BehaviorSubject`
* Facade pattern
* Redux concepts
* NgRx
* Store
* Actions
* Reducers
* Selectors
* Effects
* Entity adapters
* Feature stores
* Signal Store concepts
* State normalization
* Derived state
* Immutable updates
* Server state
* Client state
* Cache state
* Loading state
* Error state
* Optimistic updates
* Undo and redo
* State persistence
* State hydration
* State debugging
* DevTools

### Interview Questions

* When should you use a service instead of NgRx?
* What are actions, reducers, selectors, and effects?
* What is the difference between client state and server state?
* How do you normalize state?
* How do you handle optimistic updates?
* How would you implement undo and redo?
* How do signals compare with NgRx?

---

## Level 18: Angular Material and UI Development

* Angular Material
* Material components
* Theming
* Custom themes
* Typography
* Responsive layouts
* CDK
* Overlay
* Portal
* Drag and drop
* Clipboard
* Accessibility
* Virtual scrolling
* Stepper
* Dialog
* Snackbar
* Menu
* Table
* Paginator
* Sort
* Autocomplete
* Select
* Datepicker
* Tooltip
* Expansion panel
* Component customization
* Design systems
* Reusable UI components

---

## Level 19: Angular CDK

* Component Dev Kit
* Accessibility utilities
* Overlay
* Portal
* Drag and drop
* Scrolling
* Virtual scrolling
* Clipboard
* Layout utilities
* Bidirectionality
* Stepper primitives
* Table primitives
* Tree primitives
* Dialog primitives
* Focus management
* Keyboard navigation
* Overlay positioning

### Interview Questions

* What is Angular CDK?
* What is the difference between Angular Material and Angular CDK?
* How does virtual scrolling work?
* How would you implement drag and drop?
* What is an overlay?
* What is a portal?

---

## Level 20: Performance Optimization

* Lazy loading
* Route-level code splitting
* Component-level lazy loading
* `OnPush`
* Signals
* Pure pipes
* `track` expressions
* Avoiding unnecessary computations
* Memoization
* Virtual scrolling
* Image optimization
* Bundle analysis
* Tree shaking
* Production builds
* Deferrable views
* `@defer`
* Prefetching
* Preloading
* Resource hints
* Caching
* HTTP optimization
* API batching
* Request deduplication
* Web workers
* Change detection optimization
* Large-list optimization
* Memory-leak prevention
* Browser DevTools
* Angular DevTools
* Lighthouse
* Core Web Vitals

### Deferrable Views

* `@defer`
* `@placeholder`
* `@loading`
* `@error`
* View triggers
* Idle trigger
* Viewport trigger
* Interaction trigger
* Hover trigger
* Immediate trigger
* Timer trigger
* Prefetching
* Lazy-loading heavy components

### Interview Questions

* How do you optimize a slow Angular application?
* What is `OnPush`?
* What is the purpose of `track`?
* What is `@defer`?
* How do you optimize a large table?
* How do you detect memory leaks?
* How do you reduce bundle size?
* How do you improve initial page load time?

---

## Level 21: SSR, SSG, and Hydration

* Angular SSR
* Angular Universal concepts
* Server-side rendering
* Static site generation
* Client-side rendering
* Hybrid rendering
* Hydration
* Incremental hydration
* Event replay
* Server and browser execution
* Browser-only APIs
* `isPlatformBrowser`
* `isPlatformServer`
* Transfer state
* SEO
* Initial page load
* Server rendering errors
* Hydration mismatch
* Rendering performance
* Caching rendered pages
* Deployment of SSR applications

### Interview Questions

* What is Angular SSR?
* What are the benefits of SSR?
* What is hydration?
* What causes hydration errors?
* How do you use browser APIs safely in SSR?
* Compare CSR and SSR.
* How does SSR improve SEO?
* What is incremental hydration?

---

## Level 22: Testing Angular Applications

### Unit Testing

* Jasmine
* Karma
* Jest
* TestBed
* Component tests
* Service tests
* Pipe tests
* Directive tests
* Guard tests
* Resolver tests
* Interceptor tests
* Signal tests
* Observable tests
* Mocking dependencies
* Spies
* Fixtures
* Test isolation

### Integration Testing

* Component integration
* HTTP integration
* Router integration
* Form integration
* Dependency injection testing
* State-management testing
* Interceptor testing

### End-to-End Testing

* Playwright
* Cypress
* User flows
* Authentication flows
* Form submission
* Navigation
* API mocking
* Visual testing
* Accessibility testing

### Interview Questions

* What is `TestBed`?
* How do you test an Angular service?
* How do you mock `HttpClient`?
* How do you test an interceptor?
* How do you test a component with inputs and outputs?
* How do you test observables?
* How do you test route guards?
* What is the difference between unit, integration, and end-to-end testing?

---

## Level 23: Security

* Authentication
* Authorization
* Route protection
* Role-based access control
* Permission-based access control
* XSS
* CSRF
* CORS
* Content Security Policy
* Secure cookies
* HTTP-only cookies
* Token storage
* JWT
* OAuth
* Input validation
* Output encoding
* Safe HTML rendering
* `DomSanitizer`
* Avoiding unsafe bypass methods
* Dependency security
* Secrets management
* Security headers
* Clickjacking
* Open redirects
* File-upload security
* Dependency auditing

### Interview Questions

* How does Angular protect against XSS?
* What is the purpose of `DomSanitizer`?
* Why should `bypassSecurityTrust...` methods be used carefully?
* How do you protect Angular routes?
* Where should authentication checks happen?
* What is the difference between authentication and authorization?

---

## Level 24: Internationalization and Accessibility

### Internationalization

* Angular localization
* Translation files
* Locale configuration
* Date formatting
* Number formatting
* Currency formatting
* Pluralization
* Right-to-left layouts
* Language switching
* Lazy-loaded translations
* Time-zone handling

### Accessibility

* Semantic HTML
* ARIA
* Keyboard navigation
* Focus management
* Screen readers
* Accessible forms
* Accessible dialogs
* Accessible tables
* Accessible navigation
* Color contrast
* Error announcements
* Angular CDK accessibility utilities
* Focus traps
* Live regions

---

## Level 25: Build, Deployment, and DevOps

* Angular CLI
* Development builds
* Production builds
* Build budgets
* Environment configuration
* File replacements
* Source maps
* Build optimization
* AOT compilation
* JIT compilation
* Tree shaking
* Bundling
* Minification
* Code splitting
* Static hosting
* Nginx
* Docker
* CI/CD
* GitHub Actions
* Vercel
* Netlify
* Cloud hosting
* Environment variables
* Runtime configuration
* Reverse proxies
* CDN
* Caching
* Monitoring
* Error tracking
* Rollbacks

### Interview Questions

* What is the difference between JIT and AOT?
* What happens during an Angular production build?
* What are build budgets?
* How do you deploy an Angular application?
* How do you manage environment-specific configuration?
* How do you reduce Angular bundle size?
* How would you deploy Angular using Docker?

---

## Level 26: Debugging and Troubleshooting

* Angular DevTools
* Browser DevTools
* Source maps
* Breakpoints
* Console debugging
* Network debugging
* RxJS debugging
* Change detection debugging
* Dependency injection errors
* Template errors
* Routing errors
* Build errors
* Lazy-loading errors
* Hydration errors
* Memory leaks
* Subscription leaks
* Infinite loops
* Expression-changed errors
* Slow rendering
* API failures
* CORS errors
* Production debugging
* Error monitoring
* Logging strategies

### Common Errors to Understand

* `NullInjectorError`
* `ExpressionChangedAfterItHasBeenCheckedError`
* `NG0100`
* `NG0200`
* `NG0303`
* `NG8001`
* `NG8002`
* `NG0900`
* Hydration errors
* Circular dependency errors
* Invalid provider errors

---

# 🧪 Angular Machine-Coding Projects

## Beginner Projects

1. Counter application
2. Todo application
3. Notes application
4. User listing
5. Product listing
6. Simple dashboard
7. Login form
8. Registration form
9. Search filter
10. Theme switcher

## Intermediate Projects

11. Debounced search
12. Autocomplete component
13. Pagination component
14. Sortable table
15. Filterable data table
16. Multi-step form
17. Dynamic form builder
18. File-upload component
19. Image carousel
20. Modal and dialog system
21. Tabs and accordion
22. Role-based dashboard
23. Shopping cart
24. Expense tracker
25. Admin panel

## Advanced Projects

26. E-commerce platform
27. Travel-booking application
28. Real-time chat application
29. Kanban board
30. Drag-and-drop page builder
31. Analytics dashboard
32. Multi-tenant SaaS dashboard
33. Notification center
34. Permission-management system
35. Reusable Angular component library
36. Workflow-management application
37. Document-management system
38. Real-time monitoring dashboard
39. AI-powered search interface
40. Enterprise admin portal

For each project, prepare:

* Requirements
* User roles
* Component architecture
* Routing structure
* State-management strategy
* API design
* Form strategy
* Error handling
* Loading states
* Security
* Testing
* Performance
* Accessibility
* Deployment
* Scaling strategy

---

# 🎤 Common Angular Interview Questions

## Beginner

* What is Angular?
* What is a component?
* What is a directive?
* What is a pipe?
* What is a service?
* What is dependency injection?
* What is data binding?
* What is interpolation?
* What is event binding?
* What is two-way binding?
* What are standalone components?
* What is the Angular CLI?
* What is a template?
* What is the difference between Angular and React?

## Intermediate

* Explain the Angular lifecycle.
* Explain `@Input()` and `@Output()`.
* What is `OnPush`?
* What are observables?
* Explain RxJS operators.
* What is the difference between `switchMap` and `mergeMap`?
* What is the difference between reactive and template-driven forms?
* What are route guards?
* What are HTTP interceptors?
* How does lazy loading work?
* How do you handle API errors?
* How do you prevent memory leaks?
* What is the difference between `Subject` and `BehaviorSubject`?
* What are Angular signals?

## Advanced

* Explain Angular’s change-detection mechanism.
* Explain the injector hierarchy.
* Explain signals and their relationship with change detection.
* Explain `OnPush` in detail.
* How would you optimize a large Angular application?
* How would you design a scalable Angular architecture?
* How would you implement undo and redo?
* How would you build a reusable form-control component?
* How would you implement a custom structural directive?
* How would you design a state-management solution?
* Explain Angular SSR and hydration.
* Explain `@defer`.
* How would you prevent hydration errors?
* How would you debug a memory leak?
* How would you implement token refresh safely?
* How would you build a reusable component library?
* How would you design a multi-tenant Angular application?
* How would you handle real-time updates?
* How would you test a large Angular application?

---

# 📅 Eight-Week Angular Study Plan

## Week 1: Fundamentals

* TypeScript revision
* Angular CLI
* Components
* Templates
* Data binding
* Directives
* Pipes
* Component communication

## Week 2: Services and Lifecycle

* Services
* Dependency injection
* Providers
* Injector hierarchy
* Lifecycle hooks
* Content projection
* Reusable components

## Week 3: Forms and Routing

* Template-driven forms
* Reactive forms
* Custom validators
* Dynamic forms
* Angular Router
* Route parameters
* Guards
* Resolvers
* Lazy loading

## Week 4: RxJS and HTTP

* Observables
* Subjects
* RxJS operators
* Higher-order mapping
* `HttpClient`
* Interceptors
* Error handling
* Request cancellation

## Week 5: Signals and State

* Signals
* Computed values
* Effects
* Signal inputs
* Signal outputs
* NgRx concepts
* Facade pattern
* State architecture

## Week 6: Performance and Architecture

* Change detection
* `OnPush`
* `@defer`
* Lazy loading
* Virtual scrolling
* Angular DevTools
* Scalable folder structure
* Reusable component libraries

## Week 7: Advanced Angular

* SSR
* Hydration
* Angular CDK
* Angular Material
* Accessibility
* Internationalization
* Security
* Testing

## Week 8: Interview Practice

* Angular theory questions
* RxJS coding questions
* Component-building tasks
* Debugging exercises
* Architecture discussions
* Project explanation
* Performance scenarios
* Mock interviews

---

# ✅ Angular Interview Readiness Checklist

## Fundamentals

* [ ] I understand Angular architecture.
* [ ] I can create an Angular application.
* [ ] I understand standalone components.
* [ ] I can explain data binding.
* [ ] I understand directives and pipes.
* [ ] I can communicate between components.

## Services and State

* [ ] I understand dependency injection.
* [ ] I understand injector hierarchy.
* [ ] I can create reusable services.
* [ ] I understand signals.
* [ ] I understand RxJS.
* [ ] I can choose between signals, services, and NgRx.

## Forms and Routing

* [ ] I can build reactive forms.
* [ ] I can create custom validators.
* [ ] I understand `ControlValueAccessor`.
* [ ] I can configure routing.
* [ ] I can implement route guards.
* [ ] I can lazy-load features.

## HTTP and RxJS

* [ ] I can integrate REST APIs.
* [ ] I can write HTTP interceptors.
* [ ] I understand RxJS mapping operators.
* [ ] I can handle API errors.
* [ ] I can cancel subscriptions.
* [ ] I can prevent memory leaks.

## Performance

* [ ] I understand change detection.
* [ ] I understand `OnPush`.
* [ ] I can optimize large lists.
* [ ] I understand `@defer`.
* [ ] I can analyze bundle size.
* [ ] I can debug performance problems.

## Advanced Angular

* [ ] I understand SSR.
* [ ] I understand hydration.
* [ ] I can explain Angular architecture.
* [ ] I understand Angular CDK.
* [ ] I can design reusable components.
* [ ] I understand Angular security.
* [ ] I can write Angular tests.

## Coding Round

* [ ] I can build a data table.
* [ ] I can build autocomplete.
* [ ] I can implement debounced search.
* [ ] I can build a dynamic form.
* [ ] I can create a custom directive.
* [ ] I can create a custom pipe.
* [ ] I can implement a route guard.
* [ ] I can write an HTTP interceptor.
* [ ] I can build a reusable modal.
* [ ] I can debug a broken Angular application.

---

# 📚 Recommended Resources

* [Angular Documentation](https://angular.dev/)
* [Angular Learn](https://angular.dev/tutorials)
* [Angular API Reference](https://angular.dev/api)
* [Angular CLI Documentation](https://angular.dev/tools/cli)
* [RxJS Documentation](https://rxjs.dev/)
* [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
* [Angular Material](https://material.angular.dev/)
* [Angular CDK](https://material.angular.dev/cdk/categories)
* [NgRx Documentation](https://ngrx.io/)
* [Playwright Documentation](https://playwright.dev/docs/intro)
* [Jest Documentation](https://jestjs.io/docs/getting-started)
* [MDN Web Docs](https://developer.mozilla.org/)
* [Web.dev](https://web.dev/)

---

# 🚀 Final Goal

After completing this roadmap, you should be able to:

* Build production-ready Angular applications.
* Explain Angular fundamentals clearly.
* Use standalone components and modern Angular features.
* Work confidently with TypeScript.
* Understand signals and RxJS.
* Build reactive and dynamic forms.
* Implement routing, guards, and lazy loading.
* Integrate and secure APIs.
* Use interceptors effectively.
* Optimize change detection and application performance.
* Design scalable Angular architectures.
* Build reusable component libraries.
* Test Angular applications.
* Debug complex frontend problems.
* Explain SSR, hydration, and modern Angular rendering.
* Handle Angular machine-coding and project-based interviews.

> Learn the concept → implement it → build a feature → debug it → optimize it → explain the trade-offs → practice interview questions.
