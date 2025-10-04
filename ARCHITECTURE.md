# System Architecture Instructions

## Overview
This document defines the overall system architecture for the UKNF Communication System with Entities. The system follows a modern multi-tier architecture pattern.

---

## 2. System Architecture

### 2.1 General Architecture

The system consists of the following layers:

#### **Frontend: SPA Application**
- **Responsibility**: User interface
- **Technology**: React-based Single Page Application (SPA)
- **Key Features**:
  - Responsive design
  - Dynamic content rendering
  - Client-side routing
  - State management

#### **Backend: REST API**
- **Responsibility**: Business logic and data access
- **Technology**: Java Spring Boot
- **Key Features**:
  - RESTful endpoints
  - CQRS pattern implementation
  - Dependency injection
  - Input validation
  - Authentication/Authorization

#### **Database: Relational Database**
- **Responsibility**: System data storage
- **Technology**: MS SQL Server (or other relational database)
- **Key Features**:
  - Structured data storage
  - ACID compliance
  - Data integrity constraints
  - Migration support

#### **Message Queue System: Asynchronous Operations**
- **Responsibility**: Processing asynchronous operations
- **Technology**: Apache Kafka or RabbitMQ
- **Key Features**:
  - Event-driven architecture
  - Asynchronous task processing
  - System decoupling
  - Message persistence and reliability

---

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    Frontend (SPA)                       │
│              React + Tailwind CSS + Router              │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/HTTPS (REST)
                     │ JSON
                     ↓
┌─────────────────────────────────────────────────────────┐
│                  Backend (REST API)                     │
│           Spring Boot + Hibernate + CQRS                │
└─────────┬──────────────────────────────────┬───────────┘
          │                                  │
          │ JDBC                             │ Message Protocol
          ↓                                  ↓
┌──────────────────────┐         ┌──────────────────────┐
│   Database Layer     │         │  Message Queue       │
│   MS SQL Server      │         │  Kafka/RabbitMQ      │
└──────────────────────┘         └──────────────────────┘
```

---

## AI Development Guidelines

When implementing the system architecture:

1. **Layer Separation**
   - Maintain clear boundaries between layers
   - Use interfaces for communication between layers
   - Avoid tight coupling between components

2. **Communication Patterns**
   - Frontend ↔ Backend: Synchronous REST API calls
   - Backend ↔ Database: ORM-based data access
   - Backend ↔ Message Queue: Asynchronous event publishing/consuming

3. **Data Flow**
   - User actions trigger API requests from Frontend
   - Backend processes requests and queries/updates Database
   - Long-running operations are delegated to Message Queue
   - Frontend receives responses and updates UI

4. **Scalability Considerations**
   - Frontend can be served from CDN
   - Backend can be horizontally scaled
   - Database supports read replicas
   - Message queue handles load distribution

5. **Error Handling**
   - Frontend displays user-friendly error messages
   - Backend returns standardized error responses
   - Failed async operations are retried via message queue
   - All errors are logged for monitoring

6. **Security**
   - HTTPS for all Frontend-Backend communication
   - JWT tokens for authentication
   - Database connections are encrypted
   - Message queue access is authenticated

---

## Deployment Architecture

All components should be containerized using Docker:

```yaml
services:
  frontend:
    - React SPA served via Nginx
    - Port: 80/443
  
  backend:
    - Spring Boot application
    - Port: 8080
  
  database:
    - MS SQL Server
    - Port: 1433
  
  message-queue:
    - Kafka or RabbitMQ
    - Port: 9092 (Kafka) or 5672 (RabbitMQ)
```

Use `docker-compose.yml` for orchestration and local development.
