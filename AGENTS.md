# AI Agents Instructions

## Overview
This document serves as the entry point for AI-assisted development of the UKNF Communication System with Entities. It references detailed instructions for different aspects of the system.

---

## 📋 Documentation Structure

### 1. [ARCHITECTURE.md](./ARCHITECTURE.md)
**System Architecture Instructions**

Defines the overall system architecture including:
- Four-layer architecture (Frontend, Backend, Database, Message Queue)
- Communication patterns between layers
- Architecture diagram
- AI development guidelines for system design
- Deployment architecture with Docker

**When to use**: 
- Understanding the big picture of the system
- Planning how components interact
- Making architectural decisions
- Setting up the overall system structure

---

### 2. [BACKEND_INSTRUCTIONS.md](./BACKEND_INSTRUCTIONS.md)
**Backend Development Instructions**

Provides detailed specifications for Java/Spring Boot backend:
- OpenJDK 21 platform
- Spring Boot 3.5+ framework
- Hibernate 6.x ORM
- CQRS architecture pattern
- Security implementation (OAuth 2.0, JWT)
- Database and message queue integration
- Containerization requirements

**When to use**:
- Implementing backend API endpoints
- Setting up Spring Boot application
- Configuring database connections
- Implementing authentication/authorization
- Creating Docker containers for backend

---

## 🤖 AI Agent Workflow

### For New Feature Development

1. **Start with [ARCHITECTURE.md](./ARCHITECTURE.md)**
   - Understand which layer(s) the feature affects
   - Review communication patterns
   - Plan data flow

2. **Backend Implementation: [BACKEND_INSTRUCTIONS.md](./BACKEND_INSTRUCTIONS.md)**
   - Follow Java/Spring Boot specifications
   - Implement CQRS pattern
   - Add proper validation
   - Secure with JWT

3. **Frontend Implementation: [README.md](./README.md)**
   - React component structure
   - API integration
   - UI/UX based on templates

---

## 🎯 Quick Reference

| Task | Primary Document | Secondary Document |
|------|-----------------|-------------------|
| System Design | ARCHITECTURE.md | - |
| REST API Development | BACKEND_INSTRUCTIONS.md | ARCHITECTURE.md |
| Frontend Development | README.md | ARCHITECTURE.md |
| Database Schema | BACKEND_INSTRUCTIONS.md | ARCHITECTURE.md |
| Docker Setup | BACKEND_INSTRUCTIONS.md | ARCHITECTURE.md |
| Security Implementation | BACKEND_INSTRUCTIONS.md | ARCHITECTURE.md |

---

## 📝 Development History

See [DEVELOPMENT.md](./DEVELOPMENT.md) for:
- Project generation history
- Prompt log with numbered iterations
- Files modified in each iteration
- Quick reference for regeneration

---

## 🚀 Getting Started

### For AI Agents:
1. Read this file first
2. Review [ARCHITECTURE.md](./ARCHITECTURE.md) for system overview
3. Refer to [BACKEND_INSTRUCTIONS.md](./BACKEND_INSTRUCTIONS.md) for backend tasks
4. Check [DEVELOPMENT.md](./DEVELOPMENT.md) for project history

### For Developers:
1. Review all documentation files
2. Set up local development environment (see README.md)
3. Follow architecture guidelines strictly
4. Implement features according to layer responsibilities

---

## 📂 Project Structure

```
uknf-bootstrap/
├── AGENTS.md                    # ← You are here (Entry point)
├── ARCHITECTURE.md              # System architecture
├── BACKEND_INSTRUCTIONS.md      # Backend specifications
├── DEVELOPMENT.md               # Development history
├── README.md                    # Frontend setup & usage
├── src/                         # Frontend source code
├── docker-compose.yml           # Production deployment
├── docker-compose.dev.yml       # Development deployment
└── templates/                   # UI design templates
```

---

## 🔗 Related Documentation

- **Frontend Setup**: See [README.md](./README.md)
- **Development Log**: See [DEVELOPMENT.md](./DEVELOPMENT.md)
- **Docker Compose**: See `docker-compose.yml` and `docker-compose.dev.yml`

---

## ⚠️ Important Notes

- Always consult ARCHITECTURE.md before making structural changes
- Follow BACKEND_INSTRUCTIONS.md specifications strictly for backend code
- Maintain separation of concerns between layers
- Use CQRS pattern for all backend operations
- Implement security at every layer
- Container all services using Docker
