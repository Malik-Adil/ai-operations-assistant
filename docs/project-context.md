# AI Operations Assistant — Project Context

## Project Goal

Build a production-style AI automation platform to learn modern AI system architecture including:

- AI agents
- background workers
- queue systems
- API integrations
- RAG (knowledge retrieval)
- automation workflows

The project is designed as a **hands-on learning system** that mirrors real-world AI SaaS architecture.

---

# Current Architecture

The platform follows a distributed asynchronous architecture.

Client → API → Queue → Worker → AI Processing

Heavy work **never runs inside the API**.

All long-running tasks are processed asynchronously by workers.

---

# Tech Stack

## Monorepo

- Turborepo
- pnpm workspaces

## Backend

- Node.js
- TypeScript
- Express

## Frontend

- Next.js
- React
- TailwindCSS

## Infrastructure

- Redis
- BullMQ
- Bull Board (Queue Monitoring)

## AI Layer

Current:

- AI service abstraction
- AI chat job processing

Planned:

- Claude API integration
- Prompt management
- Tool calling
- Agent workflows

---

# Repository Structure

ai-operations-assistant

apps
│
├── api
│   ├── routes
│   │   ├── ai.ts
│   │   ├── jobs.ts
│   │   └── jobs-result.ts
│   │
│   ├── bullboard.ts
│   ├── job-store.ts
│   └── server.ts
│
├── web
│   └── Next.js dashboard
│
└── worker
    └── background job processor


packages
│
├── ai
│   ├── src
│   │   ├── ai-service.ts
│   │   └── index.ts
│
├── queue
│   ├── src
│   │   ├── redis.ts
│   │   ├── producer.ts
│   │   ├── job-types.ts
│   │   └── job-schemas.ts
│
├── database (future)
│
└── integrations (future)


docs
│
├── project-context.md
└── learning-log.md


turbo.json
pnpm-workspace.yaml
package.json

---

# System Components

## API Service

Responsibilities:

- receive client requests
- create background jobs
- expose monitoring endpoints
- expose queue dashboard
- return job status

Endpoints:

GET /health
POST /jobs/test
POST /ai/chat
GET /jobs/:jobId
GET /admin/queues

---

# Queue System

Queue technology:

BullMQ + Redis

Queue name:

ai-jobs

Capabilities:

- job retries
- exponential backoff
- failure handling
- queue monitoring
- async background processing

---

# Worker Service

Worker responsibilities:

- listen to queue
- route jobs
- validate payload
- execute job handler
- retry failed jobs
- store result

Worker architecture:

Worker
  ↓
Job Router
  ↓
Job Handler
  ↓
AI Service

---

# Job Type System

Job types are defined centrally.

JobType

Current types:

TEST
AI_CHAT

Future job types:

DOCUMENT_EMBED
RAG_QUERY
EMAIL_AUTOMATION
SLACK_ASSISTANT
WORKFLOW_STEP

---

# Job Schema Validation

Uses:

Zod

Purpose:

- validate job payloads
- prevent worker crashes
- enforce job contracts

Example:

testJobSchema

---

# Retry System

Queue jobs automatically retry.

Configuration:

attempts: 3
backoff: exponential
delay: 2000ms

Protects against:

- API failures
- network errors
- temporary outages

---

# Queue Monitoring

Monitoring tool:

Bull Board

Dashboard URL:

http://localhost:4000/admin/queues

Allows monitoring of:

- waiting jobs
- active jobs
- completed jobs
- failed jobs
- retries

---

# AI Processing Layer

Location:

packages/ai

Purpose:

Central interface for AI providers.

Current implementation:

generateAIResponse()

Currently a mock AI service.

Future providers:

- Claude API
- OpenAI
- Local models

---

# AI Job Flow

Client
  ↓
POST /ai/chat
  ↓
API queues job
  ↓
Worker receives job
  ↓
AI Service generates response
  ↓
Result stored
  ↓
Client fetches result

---

# Job Result System

Current storage:

In-memory Map

Used by:

GET /jobs/:jobId

Future storage:

Redis
PostgreSQL
MongoDB

---

# Current Project Status

Completed:

- Turborepo monorepo setup
- pnpm workspaces
- API server
- worker service
- queue system
- job routing
- job schema validation
- retry system
- queue monitoring dashboard
- AI job pipeline

---

# Next Features

## Claude API Integration

Replace mock AI service with real LLM.

Worker
↓
AI Service
↓
Claude API

---

## Prompt System

Location:

packages/ai/prompts

Purpose:

centralized prompt templates

---

## Tool Calling

Allow AI to trigger system actions.

Examples:

send_email
create_task
query_database

---

## RAG System

Add knowledge retrieval capabilities.

Components:

document ingestion
embeddings
vector database
AI retrieval

---

# Long-Term Goal

Transform the platform into a **full AI automation engine** capable of:

- AI assistants
- workflow automation
- document processing
- knowledge retrieval
- agent-based systems

---