# AI Operations Assistant — Project Context (Updated)

## End Goal of the Project

The goal of this project is to build a **production-style AI automation platform** similar to systems used by:

* Intercom Fin AI
* Zapier AI
* Slack automation
* Salesforce Einstein
* OpenAI / Claude agent systems

The final platform will be capable of:

```
Event
↓
AI Analysis
↓
Automation Decision
↓
Tool Execution
↓
Workflow Orchestration
↓
Knowledge Retrieval (RAG)
↓
Agent Reasoning
↓
Automation Dashboard
```

This project is designed as a **learning system that mirrors real AI SaaS architecture**.

---

# Current System Architecture

The system now implements a **complete AI automation pipeline**.

```
Client Request
      │
      ▼
API Server (Express)
      │
      ▼
Queue Producer
      │
      ▼
Redis Queue (BullMQ)
      │
      ▼
Worker
      │
      ▼
Job Router
      │
      ▼
Job Handler
      │
      ▼
AI Service
      │
      ▼
Claude API
      │
      ▼
Structured AI Result
      │
      ▼
Rules Engine
      │
      ▼
Tool Executor
      │
      ▼
Automation Tool
      │
      ▼
Execution Context
      │
      ▼
Redis Job Store
      │
      ▼
API Result Retrieval
```

---

# Tech Stack

## Monorepo

* Turborepo
* pnpm workspaces

## Backend

* Node.js
* TypeScript
* Express

## Queue System

* BullMQ
* Redis

## AI Layer

* Claude API (Anthropic)
* Structured outputs
* Zod validation

## Frontend

* Next.js
* React
* TailwindCSS

---

# Repository Structure

```
ai-operations-assistant

apps
│
├── api
│   ├── routes
│   │   ├── ai.ts
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
        │   ├── support-ticket.handler.ts
        │   ├── ai-chat.handler.ts
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
│       ├── automation
│       │   ├── rule.ts
│       │   ├── rules-engine.ts
│       │   └── rules
│       │       ├── support-ticket.rules.ts
│       │       └── rules-registry.ts
│       │
│       ├── execution
│       │   └── execution-context.ts
│       │
│       └── tools
│           ├── tool.ts
│           ├── tool-registry.ts
│           ├── tool-executor.ts
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

Queue technology:

```
BullMQ + Redis
```

Queue name:

```
ai-jobs
```

Worker lifecycle:

```
createJob
startJob
completeJob
failJob
```

Worker events handled:

```
active
completed
failed
stalled
```

---

# AI Processing Pipeline

Support ticket flow:

```
POST /support-ticket
      │
      ▼
API creates queue job
      │
      ▼
Worker processes job
      │
      ▼
AI analyzes ticket
      │
      ▼
Claude returns structured JSON
      │
      ▼
Zod schema validation
```

Example AI output:

```
{
  category: "integration_issue",
  priority: "high",
  responseDraft: "Please verify your Shopify API credentials."
}
```

---

# Automation System

The platform now supports **AI-driven automation decisions**.

Workflow:

```
AI Result
   │
   ▼
Rules Engine
   │
   ▼
Automation Rule Triggered
   │
   ▼
Tool Executor
   │
   ▼
Tool Execution
```

Example rule:

```
IF priority === "high"
THEN create_task
```

---

# Tool System

Tools run through the **Tool Executor**.

Example tool:

```
create_task
```

Example execution:

```
Executing tool: create_task
Creating task: Handle high priority support ticket
Tool success: create_task
```

---

# Execution Context

Each job now tracks automation actions using an **execution context**.

Example:

```
actions: [
  {
    tool: "create_task",
    status: "success"
  }
]
```

Purpose:

* audit automation
* debug workflows
* visualize automation actions

---

# Distributed Job Storage

Job results are now stored in **Redis**, allowing API and Worker processes to share state.

Redis key format:

```
job:<jobId>
```

Example Redis record:

```
status = completed
result = { ticketId, aiResult, actions }
```

Example stored job:

```
{
  jobId: "38",
  status: "completed",
  result: {
    ticketId: "T-1001",
    aiResult: { category: "integration_issue", priority: "high" },
    actions: [{ tool: "create_task", status: "success" }]
  }
}
```

---

# Current API Endpoints

### Submit Ticket

```
POST /support-ticket
```

Response:

```
{
  status: "queued",
  jobId: "38"
}
```

---

### Get Job Result

```
GET /jobs/:id
```

Returns job result from Redis.

---

# Current System Capabilities

The platform now supports:

* AI ticket classification
* background job processing
* automation rule evaluation
* tool execution
* execution tracking
* Redis-based job storage
* API result retrieval

The system is now a **working AI automation backend**.

---

# Next Development Step

## Build Automation Dashboard (Next.js)

Create a dashboard that visualizes automation jobs.

Example UI:

```
Automation Jobs

Job ID | Ticket | Priority | Tool | Status
------------------------------------------------
38     | T-1001 | high     | create_task | success
```

The dashboard will call:

```
GET /jobs/:id
```

and later:

```
GET /jobs
```

This will make the system **observable and interactive**.

---

# Future Features

## Workflow Automation

Multi-step workflows.

Example:

```
Ticket Received
↓
Create Task
↓
Send Email
↓
Slack Notification
```

---

## AI Agents

Agent reasoning loop:

```
AI
↓
tool
↓
AI
↓
tool
```

---

## RAG Knowledge System

Components:

* document ingestion
* embeddings
* vector database
* context retrieval

---

## Memory System

Allow AI to remember previous events and conversations.

---

# Current Development Status

The platform now successfully executes:

```
Event
↓
AI analysis
↓
Automation rule
↓
Tool execution
↓
Action tracking
↓
Distributed result storage
↓
API retrieval
```

The next milestone is building the **Automation Dashboard** to visualize AI operations.
