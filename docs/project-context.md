# AI Operations Assistant — Project Context

## Project Goal

Build a **production-style AI automation platform** to learn modern AI system architecture including:

- AI agents
- background workers
- queue systems
- API integrations
- structured AI outputs
- automation workflows
- RAG (knowledge retrieval)

The project is designed as a **hands-on learning system** that mirrors real-world AI SaaS architecture.

---

# System Architecture

The platform follows a **distributed asynchronous architecture**.

Client
↓
API Server
↓
Queue Producer
↓
Redis Queue (BullMQ)
↓
Worker
↓
Job Router
↓
Job Handler
↓
AI Service

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
- AI automation jobs
- structured AI outputs

Planned:

- Claude API integration
- prompt management
- tool calling
- agent workflows

---

# Repository Structure

ai-operations-assistant

apps
│
├── api
│   ├── routes
│   │   ├── ai.ts
│   │   ├── jobs.ts
│   │   ├── jobs-result.ts
│   │   └── support-ticket.ts
│   │
│   ├── bullboard.ts
│   ├── job-store.ts
│   └── server.ts
│
├── web
│   └── Next.js dashboard
│
└── worker
    └── src
        │
        ├── handlers
        │   ├── ai-chat.handler.ts
        │   ├── support-ticket.handler.ts
        │   └── test.handler.ts
        │
        ├── router.ts
        └── index.ts


packages
│
├── ai
│   └── src
│       │
│       ├── ai-service.ts
│       ├── schemas
│       │   └── support-ticket.schema.ts
│       └── index.ts
│
├── queue
│   └── src
│       │
│       ├── redis.ts
│       ├── producer.ts
│       ├── job-types.ts
│       └── job-schemas.ts
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
- expose queue dashboard
- return job status
- expose automation endpoints

Endpoints:

GET /health

POST /jobs/test

POST /ai/chat

POST /support-ticket

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
- async processing

Configuration:

attempts: 3

backoff: exponential

delay: 2000ms

---

# Worker Service

Worker responsibilities:

- listen to queue
- route jobs
- validate payload
- execute job handlers
- retry failed jobs
- log processing

Worker architecture:

Worker
↓
Router
↓
Handler

---

# Worker Handler System

Job handlers are separated into modules.

handlers
│
├── ai-chat.handler.ts
├── support-ticket.handler.ts
└── test.handler.ts

This architecture allows the system to scale to many job types.

Future handlers may include:

document-embed.handler.ts

email-processor.handler.ts

workflow-agent.handler.ts

---

# Job Type System

Job types are defined centrally.

JobType

Current job types:

TEST

AI_CHAT

SUPPORT_TICKET_ANALYSIS

Future job types:

DOCUMENT_EMBED

RAG_QUERY

EMAIL_AUTOMATION

WORKFLOW_STEP

SLACK_ASSISTANT

---

# Job Schema Validation

Payload validation uses:

Zod

Purpose:

- validate job payloads
- prevent worker crashes
- enforce job contracts

Example schemas:

testJobSchema

supportTicketSchema

---

# AI Processing Layer

Location:

packages/ai

Purpose:

Central interface for AI providers.

Current AI capabilities:

generateAIResponse()

analyzeSupportTicket()

Currently uses **mock AI responses**.

Future providers:

Claude API

OpenAI

local models

---

# Structured AI Output System

AI responses are validated using schemas.

Example AI output:

{
  "category": "integration_issue",
  "priority": "medium",
  "responseDraft": "Please verify your Shopify API credentials."
}

Benefits:

- machine-readable AI responses
- automation triggers
- workflow decision making

---

# AI Automation Job

Support Ticket Analysis

Example flow:

Client
↓
POST /support-ticket
↓
API queues job
↓
Worker receives job
↓
AI analyzes message
↓
Structured result returned

Example request:

{
  "ticketId": "T-1001",
  "message": "I can't connect my Shopify store",
  "customerEmail": "user@example.com"
}

Example AI output:

{
  "category": "integration_issue",
  "priority": "medium",
  "responseDraft": "Please check your Shopify API credentials."
}

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

# Current System Status

Infrastructure completed:

- monorepo architecture
- API server
- worker service
- queue system
- job routing
- job handlers
- schema validation
- retry system
- queue monitoring
- AI job processing
- structured AI outputs

---

# Next Features

## Claude API Integration

Replace mock AI service with real LLM.

Worker
↓
AI Service
↓
Claude API
↓
Structured JSON response

---

## Prompt System

Location:

packages/ai/prompts

Purpose:

centralized prompt templates

---

## Tool Calling

Allow AI to trigger actions.

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