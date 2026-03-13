# AI Operations Assistant — Project Context (Updated)

## Project Goal

Build a **production-style AI automation platform** to learn modern AI architecture used in real systems.

The project focuses on understanding:

- AI agents
- background workers
- asynchronous processing
- queue systems
- tool execution
- structured AI outputs
- automation workflows
- RAG (future)

The system is designed as a **learning project that mirrors real AI SaaS infrastructure**.

---

# System Architecture

The system follows an **asynchronous worker architecture**.

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
↓  
AI Provider  
↓  
LLM API (Claude)

Important design rule:

Heavy processing **never runs inside the API**.  
All AI processing happens in **background workers**.

---

# Tech Stack

## Monorepo

- Turborepo
- pnpm workspaces

---

## Backend

- Node.js
- TypeScript
- Express

---

## Frontend

- Next.js
- React
- TailwindCSS

---

## Infrastructure

- Redis
- BullMQ
- Bull Board (Queue Monitoring)

---

## AI Layer

- Claude API (Anthropic)
- AI Service abstraction
- Prompt management
- Structured outputs
- Provider factory

---

# Repository Structure

```
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
        └── worker.ts


packages
│
├── ai
│   └── src
│       │
│       ├── ai-service.ts
│       │
│       ├── providers
│       │   ├── ai-provider.ts
│       │   ├── mock-provider.ts
│       │   ├── claude-provider.ts
│       │   └── provider-factory.ts
│       │
│       ├── prompts
│       │   └── support-ticket.prompt.ts
│       │
│       ├── schemas
│       │   └── support-ticket.schema.ts
│       │
│       └── tools
│           ├── tool.ts
│           ├── tool-registry.ts
│           └── create-task.tool.ts
│
├── queue
│   └── src
│       │
│       ├── redis.ts
│       ├── producer.ts
│       ├── job-types.ts
│       └── job-schemas.ts
│
├── job-store
│   └── src
│       │
│       ├── job-store.ts
│       └── index.ts
```

---

# Queue System

Technology:

BullMQ + Redis

Queue name:

```
ai-jobs
```

Capabilities:

- job retries
- exponential backoff
- failure handling
- queue monitoring
- async processing

Queue dashboard:

```
http://localhost:4000/admin/queues
```

---

# Worker System

Worker responsibilities:

- listen to queue
- route jobs
- execute handlers
- log results

Handlers implemented:

```
support-ticket.handler.ts
test.handler.ts
ai-chat.handler.ts
```

---

# AI Provider System

Architecture:

AI Service  
↓  
Provider Factory  
↓  
AI Provider Interface  
↓  
Claude Provider / Mock Provider

Environment configuration:

```
AI_PROVIDER=claude
ANTHROPIC_API_KEY=sk-ant-xxxx
```

---

# Prompt System

Location:

```
packages/ai/prompts/support-ticket.prompt.ts
```

Purpose:

Centralized prompt templates for AI operations.

Example prompt behavior:

- classify support ticket
- determine priority
- generate response draft
- return JSON

---

# Structured Output System

AI responses return **machine-readable JSON**.

Example output:

```json
{
  "category": "integration_issue",
  "priority": "high",
  "responseDraft": "Please verify your Shopify API credentials."
}
```

Validation:

```
Zod schema validation
```

Location:

```
packages/ai/schemas/support-ticket.schema.ts
```

---

# Claude API Integration

Provider location:

```
packages/ai/providers/claude-provider.ts
```

Model:

```
claude-3-haiku-latest
```

Typical configuration:

```
max_tokens: 300
```

Optimization:

- short prompts
- short responses
- avoid unnecessary tools

---

# Issues Solved During Development

### Markdown JSON Responses

Claude sometimes returns:

```json
{ ... }
```

Solution:

Strip markdown fences before `JSON.parse`.

---

### Token Limit Truncation

Long responses caused incomplete JSON.

Solution:

- increase `max_tokens`
- limit response length in prompt

---

### Retry Multiplying Token Usage

BullMQ retries caused multiple AI calls.

Example:

```
attempts: 3
```

Temporary development fix:

```
attempts: 1
```

---

# Current Working Pipeline

Support ticket pipeline:

POST /support-ticket  
↓  
API  
↓  
Queue  
↓  
Worker  
↓  
support-ticket.handler  
↓  
AI Service  
↓  
Claude API  
↓  
JSON parsing  
↓  
Zod validation  
↓  
Structured result

Example worker output:

```
AI structured result:
{
  category: "integration_issue",
  priority: "high",
  responseDraft: "We'd like to help you connect your Shopify store..."
}
```

---

# Tool System (Foundation Built)

Components created:

- Tool interface
- Tool registry
- Tool executor
- create_task tool

Example future tools:

- create_task
- send_email
- query_database
- post_to_slack

Tools are currently **disabled for classification tasks** to reduce token usage.

---

# System Status

Infrastructure completed:

- monorepo
- API server
- worker service
- queue system
- job routing
- job handlers
- schema validation
- AI provider abstraction
- Claude integration
- prompt management
- structured outputs
- tool architecture
- job result storage
- queue monitoring

---

# Current Capability

The system supports:

- AI classification
- structured analysis
- background AI jobs
- async processing
- worker execution

The platform is now a **working AI analysis system**.

---

# Next Feature

## Automation Rules Engine

Goal:

Convert AI results into actions.

Example workflow:

Support ticket  
↓  
AI classification  
↓  
priority = high  
↓  
create_task  
↓  
assign engineer

Architecture:

AI Result  
↓  
Rules Engine  
↓  
Tool Execution  
↓  
Automation Action

---

# Future Features

### AI Agents

Multi-step reasoning:

AI  
↓  
tool  
↓  
AI  
↓  
tool  

---

### Workflow Automation

Example:

email received  
↓  
AI classification  
↓  
create ticket  
↓  
send reply  

---

### RAG System

Components:

- document ingestion
- embeddings
- vector database
- context retrieval

---

### Memory System

Allow AI to remember previous interactions.

---

# Current Next Task

Implement the **Automation Rules Engine**.

Example rule:

```
if priority === "high"
   create_task()
```

This will transform the system from:

```
AI analysis platform
```

into:

```
AI automation platform
```