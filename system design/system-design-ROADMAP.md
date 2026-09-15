# 🧠 System Design Interview Preparation: Beginner to Advanced

This roadmap is designed to help you prepare for **system design interviews from the fundamentals to senior-level distributed-system design**.

It covers architecture, scalability, databases, caching, APIs, messaging, reliability, security, observability, and real-world system design problems.

---

# 🗺️ System Design Learning Path

## 🟢 Level 1: Understand What System Design Means

### What Is System Design?

System design is the process of defining:

* System components
* Responsibilities of each component
* Communication between components
* Data storage
* Data flow
* Scalability strategy
* Reliability strategy
* Security controls
* Performance requirements
* Operational requirements
* Architectural trade-offs

### Functional Requirements

Functional requirements describe **what the system should do**.

Examples:

* Users can register
* Users can log in
* Users can upload files
* Users can send messages
* Users can search products
* Users can book tickets

### Non-Functional Requirements

Non-functional requirements describe **how the system should behave**.

Examples:

* Low latency
* High availability
* Scalability
* Durability
* Security
* Reliability
* Maintainability
* Observability
* Fault tolerance
* Cost efficiency

### Important System Qualities

Understand:

* Availability
* Reliability
* Scalability
* Performance
* Consistency
* Durability
* Fault tolerance
* Maintainability
* Extensibility
* Operability

---

# 🟢 Level 2: Basic Computer and Web Concepts

Before designing large systems, understand how basic web applications work.

## Client-Server Architecture

Learn:

* Client
* Server
* Browser
* Mobile application
* Backend service
* Database
* Network
* Request-response lifecycle

## HTTP and HTTPS

Study:

* HTTP methods
* HTTP status codes
* Headers
* Cookies
* Sessions
* Authentication
* TLS
* Persistent connections
* Keep-alive
* HTTP/1.1
* HTTP/2
* HTTP/3

## DNS

Understand:

* Domain names
* DNS resolution
* DNS records
* A records
* AAAA records
* CNAME records
* DNS caching
* Recursive resolvers
* Authoritative name servers
* DNS failover
* DNS-based load balancing

## Networking Fundamentals

Learn:

* IP addresses
* Ports
* TCP
* UDP
* TLS
* Firewalls
* NAT
* Proxies
* Reverse proxies
* Network latency
* Bandwidth
* Packet loss
* Timeouts

## Basic Architecture

Understand:

```text
Client
   |
   v
Backend Server
   |
   v
Database
```

Then progress to:

```text
Client
   |
   v
Load Balancer
   |
   +--------> Backend Server 1
   |
   +--------> Backend Server 2
   |
   +--------> Backend Server 3
                    |
                    v
                 Database
```

---

# 🟢 Level 3: APIs and Interface Design

## REST API Design

Study:

* Resource-oriented URLs
* HTTP methods
* Request and response formats
* API versioning
* Pagination
* Filtering
* Sorting
* Searching
* Validation
* Error handling
* Idempotency
* Rate limiting

## API Design Questions

For every API, define:

* Endpoint
* HTTP method
* Request parameters
* Request body
* Response body
* Status codes
* Authentication
* Authorization
* Error cases
* Rate limits

Example:

```http
POST /api/v1/users
```

Request:

```json
{
  "name": "John",
  "email": "john@example.com"
}
```

Response:

```json
{
  "id": "user_123",
  "name": "John",
  "email": "john@example.com"
}
```

## Other API Styles

Learn the basics of:

* GraphQL
* gRPC
* WebSockets
* Server-Sent Events
* Webhooks
* Long polling

---

# 🟢 Level 4: Capacity Estimation

Capacity estimation is an essential system design skill.

## Important Metrics

Understand:

* Requests per second
* Queries per second
* Concurrent users
* Daily active users
* Monthly active users
* Storage requirements
* Read-to-write ratio
* Network bandwidth
* Average response size
* Peak traffic
* Data retention

## Basic Estimation Formulas

### Requests Per Second

```text
Average RPS = Daily Requests / 86,400
```

### Peak RPS

```text
Peak RPS = Average RPS × Peak Traffic Factor
```

### Storage

```text
Storage = Number of Records × Average Record Size
```

### Bandwidth

```text
Bandwidth = Requests Per Second × Average Response Size
```

## Example

Suppose an application has:

* 10 million daily requests
* Average request size of 2 KB
* Average response size of 10 KB

Then:

```text
Average RPS ≈ 10,000,000 / 86,400
Average RPS ≈ 116
```

If peak traffic is 5 times the average:

```text
Peak RPS ≈ 580
```

Always estimate:

* Average traffic
* Peak traffic
* Storage
* Bandwidth
* Read/write volume
* Growth over time

---

# 🟢 Level 5: Fundamental Building Blocks

Learn what each component does and when to use it.

## Load Balancer

Understand:

* Why load balancers are needed
* Horizontal scaling
* Health checks
* Layer 4 load balancing
* Layer 7 load balancing
* Round-robin routing
* Least-connections routing
* Weighted routing
* Sticky sessions
* Failover
* TLS termination

## Reverse Proxy

Study:

* Request forwarding
* SSL termination
* Compression
* Caching
* Routing
* Security filtering
* Rate limiting

Popular tools:

* NGINX
* HAProxy
* Envoy
* Cloud load balancers

## Application Servers

Understand:

* Stateless services
* Stateful services
* Horizontal scaling
* Vertical scaling
* Process management
* Graceful shutdown
* Health checks
* Configuration management

## Database

Learn:

* Data persistence
* Query processing
* Transactions
* Indexes
* Replication
* Backups
* Recovery
* Scaling

## Cache

Understand:

* Frequently accessed data
* Reduced database load
* Lower latency
* TTL
* Cache invalidation
* Cache eviction
* Cache consistency

## Message Queue

Study:

* Asynchronous processing
* Decoupling services
* Retry mechanisms
* Background jobs
* Load smoothing
* Event processing

## Object Storage

Learn:

* File storage
* Large media files
* Images
* Videos
* Documents
* Pre-signed URLs
* Storage durability
* CDN integration

---

# 🟡 Level 6: Database Design

## Relational Databases

Study:

* Tables
* Relationships
* Primary keys
* Foreign keys
* Indexes
* Joins
* Transactions
* ACID
* Constraints
* Normalization
* Denormalization
* Isolation levels
* Deadlocks
* Query optimization

## NoSQL Databases

Learn:

* Key-value databases
* Document databases
* Wide-column databases
* Graph databases
* Data modeling
* Partition keys
* Sort keys
* Replication
* Eventual consistency
* Query limitations

## Database Selection

Understand when to choose:

* PostgreSQL
* MySQL
* MongoDB
* DynamoDB
* Cassandra
* Redis
* Elasticsearch
* Neo4j

## Indexing

Study:

* Why indexes improve reads
* Index lookup
* Composite indexes
* Covering indexes
* Index selectivity
* Write overhead
* Index storage cost
* Query execution plans

## Database Scaling

Learn:

* Read replicas
* Write replicas
* Vertical scaling
* Horizontal scaling
* Sharding
* Partitioning
* Replication
* Data archival
* Database routing
* Hot partitions

---

# 🟡 Level 7: Caching

Caching is one of the most frequently discussed system design topics.

## Why Use Caching?

Caching can:

* Reduce latency
* Reduce database load
* Improve throughput
* Reduce infrastructure cost
* Handle traffic spikes

## Caching Strategies

Study:

* Cache-aside
* Read-through
* Write-through
* Write-behind
* Refresh-ahead
* Local caching
* Distributed caching
* CDN caching

## Cache Eviction Policies

Learn:

* LRU
* LFU
* FIFO
* TTL-based eviction
* Random eviction

## Cache Problems

Understand:

* Cache invalidation
* Cache stampede
* Cache avalanche
* Cache penetration
* Hot keys
* Stale data
* Cache warming
* Inconsistent cache data

## Redis Use Cases

* Session storage
* API response caching
* Rate limiting
* Distributed locks
* Leaderboards
* Counters
* Pub/Sub
* Job queues
* Temporary tokens

---

# 🟡 Level 8: Scalability

## Vertical Scaling

Increasing the capacity of one machine:

* More CPU
* More RAM
* Faster storage
* Better network capacity

## Horizontal Scaling

Adding more machines or service instances.

Advantages:

* Better fault tolerance
* Higher capacity
* Independent scaling
* Better availability

## Stateless Services

Understand why stateless application servers are easier to scale.

Store state in:

* Databases
* Redis
* Object storage
* External session stores

## Scaling Techniques

Study:

* Load balancing
* Caching
* Database replication
* Sharding
* Asynchronous processing
* Read/write separation
* CDN
* Autoscaling
* Queue-based load leveling
* Request batching
* Connection pooling

## Bottleneck Identification

Learn to identify bottlenecks in:

* CPU
* Memory
* Database
* Network
* Disk
* External APIs
* Locks
* Queues
* Thread pools
* Event loops

---

# 🟡 Level 9: Consistency and Availability

## CAP Theorem

Understand that in the presence of a network partition, a distributed system must make a trade-off between:

* Consistency
* Availability

Partition tolerance is generally required in distributed systems.

## Consistency Models

Study:

* Strong consistency
* Eventual consistency
* Read-after-write consistency
* Monotonic reads
* Causal consistency
* Session consistency
* Linearizability

## Availability

Understand:

* Uptime
* Downtime
* Service-level objectives
* Failover
* Redundancy
* Health checks
* Disaster recovery

## Durability

Learn:

* Data persistence
* Replication
* Backups
* Write-ahead logs
* Snapshots
* Recovery procedures
* Disaster recovery

---

# 🟡 Level 10: Distributed Systems Fundamentals

Study:

* Distributed system characteristics
* Network failures
* Partial failures
* Timeouts
* Retries
* Duplicate requests
* Message delays
* Clock synchronization
* Leader election
* Consensus basics
* Replication
* Partitioning
* Quorum
* Failover

## Important Distributed-System Problems

* A server crashes during a request
* A database becomes unavailable
* A message is delivered twice
* A request times out but succeeds remotely
* Two services update the same record
* A network partition occurs
* A cache contains stale data
* A consumer processes a message slowly
* A leader becomes unavailable

---

# 🟡 Level 11: Messaging and Event-Driven Architecture

## Message Queues

Learn:

* Producers
* Consumers
* Queues
* Topics
* Partitions
* Consumer groups
* Message acknowledgement
* Retry queues
* Dead-letter queues
* Message ordering
* Delivery guarantees

## Delivery Guarantees

Understand:

* At-most-once delivery
* At-least-once delivery
* Exactly-once processing concepts
* Idempotent consumers
* Duplicate message handling

## Message Brokers

Study:

* RabbitMQ
* Apache Kafka
* Amazon SQS
* Redis Streams
* NATS
* Google Pub/Sub

## Event-Driven Architecture

Learn:

* Domain events
* Event producers
* Event consumers
* Event schemas
* Event versioning
* Event replay
* Event sourcing
* Asynchronous communication
* Eventual consistency

---

# 🟡 Level 12: Reliability and Fault Tolerance

## Failure Handling

Study:

* Timeouts
* Retries
* Exponential backoff
* Jitter
* Circuit breakers
* Bulkheads
* Fallbacks
* Load shedding
* Backpressure
* Graceful degradation

## Retry Problems

Understand:

* Retry storms
* Duplicate operations
* Non-idempotent requests
* Cascading failures
* Increasing system load

## High Availability

Learn:

* Redundancy
* Replication
* Failover
* Active-active architecture
* Active-passive architecture
* Multi-zone deployment
* Multi-region deployment
* Health checks
* Disaster recovery

## Disaster Recovery

Study:

* Backup strategy
* Restore testing
* Recovery Point Objective
* Recovery Time Objective
* Disaster recovery plans
* Data replication
* Regional failover

---

# 🟠 Level 13: Security in System Design

Study:

* Authentication
* Authorization
* Identity management
* OAuth 2.0
* OpenID Connect
* JWT
* API keys
* Service-to-service authentication
* Role-based access control
* Permission-based access control
* Multi-tenant security

## Network Security

Learn:

* HTTPS
* TLS termination
* Firewalls
* Private networks
* Network segmentation
* VPNs
* Security groups
* Web application firewalls
* DDoS protection
* Zero-trust concepts

## Data Security

Study:

* Encryption in transit
* Encryption at rest
* Key management
* Secret management
* Data masking
* Audit logs
* PII protection
* Data retention
* Access controls

---

# 🟠 Level 14: Observability

A production system must be observable.

## The Three Pillars

### Logs

Study:

* Structured logs
* Error logs
* Request logs
* Audit logs
* Correlation IDs
* Sensitive-data masking

### Metrics

Learn:

* Request rate
* Error rate
* Latency
* Saturation
* CPU usage
* Memory usage
* Queue depth
* Database connections
* Cache hit rate

### Traces

Understand:

* Distributed tracing
* Trace IDs
* Span IDs
* Service dependencies
* Request propagation
* Slow service identification

## Important Monitoring Concepts

* SLIs
* SLOs
* SLAs
* Alerting
* Dashboards
* Health checks
* Synthetic monitoring
* Incident response
* On-call practices

---

# 🟠 Level 15: Microservices

## What Are Microservices?

Microservices divide an application into independently deployable services.

Examples:

* User service
* Authentication service
* Product service
* Order service
* Payment service
* Notification service
* Search service

## Microservices Concepts

Study:

* Service boundaries
* Service ownership
* API communication
* Event-driven communication
* Service discovery
* API gateways
* Configuration management
* Distributed tracing
* Centralized logging
* Independent deployment
* Database-per-service

## Microservices Challenges

Understand:

* Network failures
* Distributed transactions
* Data consistency
* Debugging complexity
* Deployment complexity
* Operational overhead
* Service versioning
* Duplicate messages
* Cascading failures

## Monolith versus Microservices

Be able to explain:

* When a monolith is better
* When microservices are useful
* Why microservices should not be adopted prematurely
* How to split a monolith
* How to identify service boundaries

---

# 🟠 Level 16: Advanced Data and Architecture Patterns

Study:

## CQRS

Command Query Responsibility Segregation separates:

* Write operations
* Read operations

## Event Sourcing

Store changes as a sequence of events instead of only storing the current state.

## Saga Pattern

Manage distributed business transactions using:

* Choreography
* Orchestration
* Compensating actions

## Outbox Pattern

Store an event and database update together in one local transaction, then publish the event asynchronously.

## Two-Phase Commit

Understand:

* Coordinator
* Participants
* Prepare phase
* Commit phase
* Failure scenarios
* Operational limitations

## Other Patterns

* Strangler Fig pattern
* Bulkhead pattern
* Circuit breaker
* Sidecar pattern
* Ambassador pattern
* Adapter pattern
* Anti-corruption layer
* Backend-for-Frontend
* Service mesh

---

# 🟠 Level 17: Search and Data-Processing Systems

## Search Systems

Learn:

* Inverted indexes
* Full-text search
* Tokenization
* Ranking
* Relevance
* Autocomplete
* Fuzzy search
* Filtering
* Faceted search
* Search indexing
* Index updates

Tools:

* Elasticsearch
* OpenSearch
* Solr

## Data Processing

Study:

* Batch processing
* Stream processing
* ETL
* ELT
* Data pipelines
* Data lakes
* Data warehouses
* Event aggregation
* Windowing
* Data partitioning
* Backfilling
* Data retention

---

# 🔴 Level 18: Advanced Infrastructure

Study:

* Containerization
* Docker
* Kubernetes
* Service discovery
* Ingress
* Autoscaling
* Rolling deployments
* Blue-green deployments
* Canary releases
* Infrastructure as code
* CI/CD
* Secrets management
* Configuration management
* Service mesh
* Cloud networking

## Deployment Strategies

### Rolling Deployment

Gradually replace old instances with new ones.

### Blue-Green Deployment

Maintain two environments and switch traffic between them.

### Canary Deployment

Release the new version to a small percentage of users first.

## Kubernetes Concepts

Learn:

* Pods
* Deployments
* Services
* Ingress
* ConfigMaps
* Secrets
* StatefulSets
* Jobs
* CronJobs
* Horizontal Pod Autoscaler
* Readiness probes
* Liveness probes

---

# 🔴 Level 19: Advanced System Design Topics

Study:

* Multi-region systems
* Global traffic routing
* Active-active architecture
* Active-passive architecture
* Global databases
* Data replication
* Conflict resolution
* Geo-partitioning
* Disaster recovery
* Multi-tenant systems
* Data isolation
* Tenant-level rate limits
* Quotas
* Noisy-neighbor problems
* Large-scale migrations
* Backward-compatible schema changes
* Zero-downtime deployments
* Cost optimization

---

# 🧩 Beginner System Design Problems

Start with systems that have simple requirements.

## 1. Design a URL Shortener

Learn:

* URL generation
* Short-code uniqueness
* Redirects
* Database schema
* Read-heavy traffic
* Caching
* Analytics
* Expiration

## 2. Design a Todo Application

Focus on:

* CRUD APIs
* User ownership
* Database schema
* Authentication
* Pagination
* Basic scaling

## 3. Design a Pastebin

Study:

* Text storage
* Unique identifiers
* Expiration
* Read-heavy workloads
* Object storage
* Caching

## 4. Design a File Upload Service

Learn:

* File metadata
* Object storage
* Upload validation
* Large files
* Pre-signed URLs
* Download permissions
* Virus scanning

## 5. Design a Simple Blog Platform

Focus on:

* Posts
* Comments
* Users
* Search
* Pagination
* Caching
* Moderation

---

# 🧩 Intermediate System Design Problems

## 1. Design a Rate Limiter

Study:

* Fixed window
* Sliding window
* Token bucket
* Leaky bucket
* Redis
* Distributed counters
* API gateway integration

## 2. Design a Notification System

Handle:

* Email
* SMS
* Push notifications
* User preferences
* Retries
* Templates
* Scheduling
* Delivery status
* Dead-letter queues

## 3. Design a Chat Application

Study:

* WebSockets
* Message persistence
* Online presence
* Delivery status
* Read receipts
* Group chats
* Message ordering
* Offline users
* Push notifications

## 4. Design a News Feed

Learn:

* Fan-out on write
* Fan-out on read
* Feed ranking
* Caching
* Pagination
* Celebrity users
* Data freshness

## 5. Design a Ticket Booking System

Focus on:

* Inventory
* Seat locking
* Expiration
* Transactions
* Concurrency
* Overselling prevention
* Payment failures

## 6. Design an E-Commerce System

Components may include:

* User service
* Product catalog
* Search
* Cart
* Inventory
* Order service
* Payment service
* Shipping
* Notifications

## 7. Design a Job Queue

Study:

* Job submission
* Workers
* Retries
* Scheduling
* Priorities
* Dead-letter queues
* Job status
* Idempotency

---

# 🧩 Advanced System Design Problems

## 1. Design a Distributed Payment System

Consider:

* Payment authorization
* Idempotency
* Duplicate requests
* Payment status
* Webhooks
* Reconciliation
* Refunds
* Fraud detection
* Ledger design
* Auditability
* Eventual consistency

## 2. Design a Ride-Sharing Platform

Study:

* Driver location updates
* Geospatial indexing
* Matching
* Surge pricing
* Trip lifecycle
* Real-time communication
* Payment
* Driver availability
* Regional scaling

## 3. Design a Video Streaming Platform

Consider:

* Video uploads
* Transcoding
* Multiple resolutions
* Object storage
* CDN
* Adaptive bitrate streaming
* Metadata
* Recommendations
* Content delivery
* Access control

## 4. Design a Distributed Search Engine

Study:

* Crawling
* Indexing
* Inverted indexes
* Ranking
* Sharding
* Replication
* Query processing
* Autocomplete
* Result caching

## 5. Design a Multi-Tenant SaaS Platform

Focus on:

* Tenant isolation
* Tenant-aware authorization
* Shared versus separate databases
* Tenant-level quotas
* Billing
* Configuration
* Noisy-neighbor prevention
* Tenant migrations

## 6. Design a Distributed Workflow Engine

Learn:

* Workflow definitions
* Task scheduling
* State persistence
* Retries
* Timeouts
* Compensation
* Worker coordination
* Idempotency
* Workflow versioning

## 7. Design a Global Notification Platform

Handle:

* Multiple regions
* User preferences
* Rate limits
* Delivery providers
* Provider failover
* Retry policies
* Message ordering
* Delivery tracking
* Multi-channel notifications

---

# 🧮 System Design Interview Framework

Use the following process in every interview.

## Step 1: Clarify Requirements

Ask:

* Who are the users?
* What are the main use cases?
* What is out of scope?
* Is the system read-heavy or write-heavy?
* Is real-time behavior required?
* What level of consistency is needed?

## Step 2: Estimate Scale

Calculate:

* Daily active users
* Requests per second
* Peak traffic
* Storage
* Bandwidth
* Read/write ratio
* Data growth

## Step 3: Define APIs

Specify:

* Endpoints
* Request formats
* Response formats
* Authentication
* Pagination
* Error handling
* Idempotency

## Step 4: Design the Data Model

Define:

* Entities
* Relationships
* Primary keys
* Indexes
* Partition keys
* Read patterns
* Write patterns
* Retention policies

## Step 5: Draw the High-Level Architecture

Start simple:

```text
Client
   |
   v
Load Balancer
   |
   v
Application Servers
   |
   +--------> Cache
   |
   +--------> Database
   |
   +--------> Message Queue
                    |
                    v
                 Workers
```

## Step 6: Discuss Bottlenecks

Consider:

* Database overload
* Hot keys
* Slow queries
* Network latency
* Queue buildup
* Large files
* High CPU usage
* Memory pressure
* External API failures

## Step 7: Add Scaling and Reliability

Discuss:

* Replication
* Sharding
* Caching
* Queues
* Retries
* Circuit breakers
* Rate limiting
* Failover
* Autoscaling
* Backups

## Step 8: Explain Trade-offs

Always explain:

* Why you selected a database
* Why you used a cache
* Why communication is synchronous or asynchronous
* Why you selected a monolith or microservices
* Why you chose strong or eventual consistency
* What limitations remain

---

# 📅 Ten-Week Study Plan

## Week 1: Fundamentals

* System design basics
* Functional and non-functional requirements
* HTTP
* DNS
* TCP
* Load balancers
* Reverse proxies

## Week 2: APIs and Capacity Estimation

* REST API design
* API versioning
* Pagination
* Idempotency
* RPS calculations
* Storage calculations
* Bandwidth calculations

## Week 3: Databases

* SQL
* NoSQL
* Indexes
* Transactions
* Replication
* Sharding
* Partitioning

## Week 4: Caching and Scalability

* Redis
* Cache strategies
* Cache invalidation
* Horizontal scaling
* Stateless services
* CDN
* Database scaling

## Week 5: Distributed Systems

* CAP theorem
* Consistency
* Availability
* Replication
* Quorum
* Leader election
* Distributed failures

## Week 6: Messaging and Reliability

* Queues
* Kafka
* RabbitMQ
* Retries
* Circuit breakers
* Backpressure
* Dead-letter queues
* Disaster recovery

## Week 7: Security and Observability

* Authentication
* Authorization
* Encryption
* Network security
* Logs
* Metrics
* Traces
* SLOs and SLAs

## Week 8: Architecture Patterns

* Monoliths
* Microservices
* CQRS
* Event sourcing
* Saga pattern
* Outbox pattern
* API gateways

## Week 9: Intermediate Design Problems

Practice:

* URL shortener
* Rate limiter
* Notification system
* Chat application
* News feed
* Ticket booking system

## Week 10: Advanced Design Problems

Practice:

* Payment system
* Ride-sharing system
* Video streaming platform
* Multi-tenant SaaS
* Distributed workflow engine
* Global notification platform

---

# ✅ System Design Interview Readiness Checklist

## Fundamentals

* [ ] Explain client-server architecture
* [ ] Explain HTTP and HTTPS
* [ ] Explain DNS
* [ ] Explain TCP basics
* [ ] Explain load balancers
* [ ] Explain reverse proxies
* [ ] Understand latency and bandwidth

## API Design

* [ ] Design REST APIs
* [ ] Explain idempotency
* [ ] Design pagination
* [ ] Handle API versioning
* [ ] Design error responses
* [ ] Explain authentication and authorization

## Databases

* [ ] Design relational schemas
* [ ] Choose between SQL and NoSQL
* [ ] Explain indexes
* [ ] Explain transactions
* [ ] Explain replication
* [ ] Explain sharding
* [ ] Identify database bottlenecks

## Scalability

* [ ] Explain horizontal scaling
* [ ] Explain vertical scaling
* [ ] Design caching
* [ ] Explain CDN usage
* [ ] Design asynchronous processing
* [ ] Estimate capacity
* [ ] Identify bottlenecks

## Distributed Systems

* [ ] Explain CAP theorem
* [ ] Explain consistency models
* [ ] Understand replication
* [ ] Understand message delivery guarantees
* [ ] Handle duplicate messages
* [ ] Design retries safely
* [ ] Explain circuit breakers
* [ ] Understand distributed transactions

## Reliability

* [ ] Design failover
* [ ] Explain backups
* [ ] Explain disaster recovery
* [ ] Define RTO and RPO
* [ ] Design graceful degradation
* [ ] Explain health checks
* [ ] Explain rate limiting

## Advanced Architecture

* [ ] Compare monoliths and microservices
* [ ] Explain CQRS
* [ ] Explain event sourcing
* [ ] Explain Saga pattern
* [ ] Explain outbox pattern
* [ ] Design multi-region systems
* [ ] Design multi-tenant systems

## Interview Communication

* [ ] Clarify requirements before designing
* [ ] Estimate traffic and storage
* [ ] Explain API contracts
* [ ] Explain database choices
* [ ] Draw a clear architecture
* [ ] Identify bottlenecks
* [ ] Discuss failure scenarios
* [ ] Explain trade-offs
* [ ] Prioritize simple solutions first

---

# 📚 Recommended Resources

* [System Design Primer](https://github.com/donnemartin/system-design-primer)
* [MDN Web Docs](https://developer.mozilla.org/)
* [AWS Architecture Center](https://aws.amazon.com/architecture/)
* [Google Cloud Architecture Center](https://cloud.google.com/architecture)
* [Microsoft Azure Architecture Center](https://learn.microsoft.com/azure/architecture/)
* [Redis Documentation](https://redis.io/docs/)
* [Apache Kafka Documentation](https://kafka.apache.org/documentation/)
* [RabbitMQ Documentation](https://www.rabbitmq.com/docs)
* [PostgreSQL Documentation](https://www.postgresql.org/docs/)
* [Docker Documentation](https://docs.docker.com/)
* [Kubernetes Documentation](https://kubernetes.io/docs/)
* [Google SRE Book](https://sre.google/sre-book/table-of-contents/)
* [Designing Data-Intensive Applications](https://dataintensive.net/)

---

## 🏁 Final Preparation Formula

For every system design problem:

> **Clarify requirements → Estimate scale → Design APIs → Model data → Draw architecture → Identify bottlenecks → Add scalability → Handle failures → Explain trade-offs.**
