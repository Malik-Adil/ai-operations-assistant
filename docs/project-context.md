# AI Operations Assistant — Project Context (Updated)

## Project Goal

The goal of this project is to build a **production-style AI automation platform** that can:

* receive events from external systems
* analyze events using AI
* make automation decisions
* execute tools
* orchestrate workflows
* provide an operations dashboard

The architecture is inspired by platforms such as:

* Intercom Fin AI
* Zapier
* Slack Automation
* Salesforce Einstein
* AI Agent systems

The system converts **events into automated actions**.

Example flow:

```
Event
↓
AI Analysis
↓
Automation Decision
↓
Tool Execution
↓
Workflow
↓
Dashboard Visibility
```

---

# Current Tech Stack

## Monorepo

Turborepo
pnpm workspaces

## Backend

Node.js
Express
TypeScript

## Queue System

BullMQ
Redis

## AI Layer

Claude API
Structured outputs
Zod validation

## Frontend

Next.js (App Router)
React
TailwindCSS
shadcn/ui

---

# Repository Structure

```
ai-operations-assistant

apps
│
├── api
│   ├── auth
│   ├── workspace
│   ├── account
│   ├── middleware
│   └── server.ts
│
├── web
│   └── Next.js dashboard
│
└── worker
    └── job processing

packages
│
├── ai
├── queue
└── job-store
```

---

# Completed System Features

## 1. Landing Page

A production-ready SaaS landing page was created.

Features include:

* hero section
* features
* integrations
* pricing
* call to action
* modern SaaS layout

Purpose:

```
User acquisition
```

---

# 2. OAuth Authentication

Users sign in using **Google OAuth**.

Flow:

```
User clicks login
↓
Redirect to Google OAuth
↓
User grants permission
↓
Backend receives profile
↓
User account created (if new)
↓
JWT session created
↓
Redirect to onboarding
```

Auth endpoint:

```
GET /auth/google
```

Callback:

```
GET /auth/google/callback
```

Session token:

```
auth_token cookie
```

---

# 3. Workspace Onboarding

After OAuth login:

New users must create a workspace.

Form collects:

* company name
* company website
* industry
* company size

Endpoint:

```
POST /workspace/create
```

Purpose:

```
Create SaaS workspace (tenant)
```

---

# 4. Workspace Creation UX

On workspace creation the frontend shows a **professional loader screen**.

Features:

* circular progress loader
* animated progress
* rotating status messages

Example messages:

```
Initializing workspace
Preparing automation environment
Configuring AI engine
Almost ready
```

Once complete:

```
Redirect → /dashboard
```

---

# 5. Dashboard Layout

The dashboard now uses a **professional SaaS layout**.

Layout:

```
Sidebar
Topbar
Main Content
```

Sidebar navigation:

```
Dashboard
Automations
Integrations
Jobs
Logs
Settings
```

Topbar shows:

```
Page title
User avatar
User name
```

---

# 6. Profile Page

Users can manage their account.

Route:

```
/dashboard/profile
```

Features:

* profile information
* OAuth provider
* avatar display

---

# 7. Delete Account

Users can delete their account.

Frontend confirmation dialog.

Endpoint:

```
DELETE /account/delete
```

Backend behavior:

```
Verify JWT
Delete user from platform
Remove OAuth association
Clear auth cookie
```

Important:

Deleting account **does not delete Google account**.

If the user logs in again:

```
Google OAuth
↓
User not found
↓
System treats as new user
↓
Onboarding
```

---

# 8. Logout

Users can logout from the dashboard.

Endpoint:

```
POST /auth/logout
```

Behavior:

```
Clear auth_token cookie
Redirect to login
```

---

# Current Authentication Flow

```
Landing Page
↓
Login
↓
Google OAuth
↓
User created if new
↓
JWT session
↓
Onboarding (if no workspace)
↓
Workspace created
↓
Dashboard
```

---

# Current System Status

The platform now includes:

```
Landing page
OAuth authentication
Workspace onboarding
Workspace loader UX
Dashboard layout
Profile page
Delete account
Logout
```

This forms the **SaaS foundation layer**.

---

# Next Development Goal

The next major milestone is:

```
Persist user and workspace data in a database
```

Currently the backend uses **in-memory storage**.

This causes a problem:

```
User logs in again
↓
System forgets previous data
↓
Onboarding repeats
```

We must store data permanently.

---

# Next System to Build

## Database Layer

Introduce a database such as:

```
PostgreSQL
```

Add tables:

```
users
organizations
memberships
```

Relationships:

```
User
  │
  │ belongs to
  ▼
Organization (Workspace)
```

Example schema:

```
users
id
email
name
avatar
provider
provider_id

organizations
id
name
website
industry
size

memberships
user_id
organization_id
role
```

---

# Desired Login Behavior

Once database persistence is added:

```
User logs in
↓
Check database
↓
User exists
↓
Load workspace
↓
Redirect dashboard
```

Only **new users** should see onboarding.

---

# Next Development Tasks

Next tasks in order:

1️⃣ Setup PostgreSQL database
2️⃣ Add database client (Prisma recommended)
3️⃣ Create user table
4️⃣ Store OAuth users in DB
5️⃣ Create organization table
6️⃣ Create membership table
7️⃣ Modify login flow to check DB

---

# Future Platform Features

After database persistence the next major systems will be:

## Integrations

Connect external systems:

```
Slack
Shopify
Zendesk
Stripe
```

---

## Event Ingestion

Receive events:

```
support ticket
webhook
email
message
```

---

## Automation Rules

Define rules:

```
IF priority = high
THEN create task
```

---

## Tool Execution

Example tools:

```
create_task
send_email
send_slack
update_crm
```

---

## Automation Dashboard

Monitor jobs:

```
Job ID
Event
AI Result
Tool
Status
```

---

# Long-Term Vision

Final platform architecture:

```
Event
↓
Queue
↓
AI Analysis
↓
Rules Engine
↓
Tool Execution
↓
Workflow
↓
Dashboard
```

This becomes a **complete AI operations automation platform**.
