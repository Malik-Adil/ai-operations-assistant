# AI Operations Assistant — Project Context

## Project Goal

Build a **production-style AI automation platform** to learn modern AI system architecture including:

* AI agents
* background workers
* queue systems
* API integrations
* RAG (knowledge retrieval)
* automation workflows

The project is designed as a **hands-on learning system** that mirrors real-world AI SaaS architecture.

---

# Current Architecture

The system is a **monorepo using Turborepo + pnpm workspaces**.

Architecture flow:

Client → API → Queue → Worker → AI Processing

---

# Tech Stack

## Monorepo

* Turborepo
* pnpm workspaces

## Backend

* Node.js
* TypeScript
* Express

## Frontend

* Next.js
* React
* TailwindCSS

## Infrastructure

* Redis
* BullMQ (job queues)

## AI Layer (planned)

* Claude API
* LangChain
* Vector database (RAG)

---

# Repository Structure

```
ai-operations-assistant
│
├── apps
│   ├── api        # Backend REST API
│   ├── web        # Next.js frontend dashboard
│   └── worker     # Background job processor
│
├── packages
│   ├── ai             # AI services and agents (future)
│   ├── database       # Database layer (future)
│   ├── queue          # BullMQ queues and Redis connection
│   └── integrations   # External API integrations (future)
│
├── docs
│   ├── project-context.md
│   └── learning-log.md
│
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

# Completed So Far

Infrastructure setup:

* Turborepo monorepo configured
* pnpm workspace configured
* Next.js frontend created
* Express API server created
* Worker service created
* Redis queue infrastructure configured
* BullMQ worker processing jobs
* Shared queue package created

Development environment:

```
pnpm dev
```

Runs:

* API server
* Worker
* Next.js frontend

---

# Current Features

### API

Basic health endpoint:

```
GET /health
```

Returns:

```
{ "status": "ok" }
```

---

### Worker

Worker listens to BullMQ queue:

```
ai-jobs
```

Worker processes jobs asynchronously.

---

# Current Learning Focus

Understanding how **distributed AI systems process tasks asynchronously**.

Core concept:

API should not perform heavy tasks directly.

Instead:

API → Queue → Worker → Processing

---

# Next Feature To Build

Queue Producer.

API will send jobs to the worker.

Example flow:

```
POST /jobs/test
```

Payload:

```
{
  "message": "Hello Worker"
}
```

Flow:

Client → API → Redis Queue → Worker → Process Job

---

# Future Features

## AI Layer

* AI chat endpoint
* Claude API integration
* prompt system
* AI service module

---

## Automation

* email processing
* Slack AI assistant
* task generation
* workflow automation

---

## Knowledge System (RAG)

* document upload
* embeddings
* vector search
* AI question answering

---

# Development Rules

Whenever creating files follow this rule:

FILE
WHY IT EXISTS
WHERE IT IS USED
FUTURE FEATURES
CODE

---

# Current Project Status

Infrastructure setup completed.

Next step:

Implement **API → Queue → Worker communication**.

---

# How to Run the Project

Start development:

```
pnpm dev
```

Services started:

* API → http://localhost:4000
* Web → http://localhost:3000
* Worker → background processing
