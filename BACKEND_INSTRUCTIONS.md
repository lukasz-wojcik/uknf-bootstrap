# Backend Development Instructions

## Overview
This document provides AI-assisted development guidelines for creating the backend API for the UKNF system using Java/Spring Boot.

---

## 3.2 Backend – Java Implementation

### 3.2.1 Platform
- **OpenJDK 21**

### 3.2.2 Framework
- **Spring Boot 3.5** or newer

### 3.2.3 ORM
- **Hibernate 6.x** or higher

### 3.2.4 Architecture
- REST API
- CQRS (Command Query Responsibility Segregation)
- Dependency Injection

### 3.2.5 Validation
- Bean Validation (JSR 380)
- Spring Validation

---

## 3.4 Database
- **MS SQL Server** or other relational database

---

## 3.5 Message Queue System
- **Apache Kafka** or **RabbitMQ** (if utilized)

---

## 3.6 Containerization
- **Docker** with `docker-compose.yml` / `compose.yml` file

---

## 3.7 Operating System (Production Environment)
- Linux
- Windows

---

## 4. Security

### 4.1 Authentication and Authorization
- **OAuth 2.0 / OpenID Connect**
- **JWT (JSON Web Token)**

---

## AI Development Guidelines

When generating backend code, ensure:

1. **Architecture Compliance**
   - Implement CQRS pattern separating commands and queries
   - Use dependency injection throughout
   - Follow REST API best practices

2. **Security First**
   - Implement OAuth 2.0/OpenID Connect for authentication
   - Use JWT tokens for stateless authentication
   - Validate all inputs using the specified validation frameworks

3. **Database Integration**
   - Use Hibernate ORM
   - Implement proper migrations
   - Follow database naming conventions

4. **Containerization**
   - Include Dockerfile for the backend service
   - Create docker-compose configuration
   - Ensure compatibility with both Linux and Windows

5. **Code Quality**
   - Follow Java conventions and best practices
   - Implement proper error handling
   - Add logging and monitoring capabilities
   - Write unit and integration tests

6. **API Design**
   - RESTful endpoints with proper HTTP methods
   - Consistent response formats
   - API versioning strategy
   - OpenAPI/Swagger documentation
