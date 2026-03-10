# AI Operations Assistant

AI Operations Assistant is a learning project focused on building a **production-style AI automation platform**. The goal of this project is to explore how modern AI systems combine **LLMs, agents, queues, integrations, and knowledge retrieval** to automate real-world workflows.

This repository is structured like a real AI SaaS platform and is being developed step-by-step to gain hands-on experience with **AI engineering concepts such as agent workflows, background processing, and RAG systems**.

## Project Goals

* Build a practical understanding of **AI system architecture**
* Implement **AI agents that interact with real APIs**
* Learn **queue-based AI processing for scalable workflows**
* Create **knowledge-aware AI using document retrieval (RAG)**
* Integrate external services such as **email, messaging, and task systems**

## Planned Features

* AI chat assistant
* AI email summarization and reply drafting
* Slack AI assistant
* Task generation from messages
* Document knowledge base with AI search
* Background AI job processing
* Automation workflows

## Architecture Overview

The system follows a modular monorepo architecture:

* **API Server** – Handles REST endpoints and orchestration
* **Worker Service** – Processes background AI tasks using queues
* **Web Dashboard** – Interface for interacting with AI tools
* **Shared Packages** – AI logic, integrations, database, and queue utilities

## Tech Stack

* **Backend:** Node.js + TypeScript
* **Frontend:** Next.js
* **Database:** PostgreSQL + Prisma
* **Queue System:** Redis + BullMQ
* **AI Models:** Claude API / LLM integration
* **Automation:** n8n workflows
* **Knowledge Retrieval:** Vector database (RAG)

## Learning Focus

This project is designed to explore and implement:

* AI agents and tool calling
* Retrieval Augmented Generation (RAG)
* AI workflow automation
* Background job processing
* API integrations with external services

## Project Status

🚧 Work in progress — built as a hands-on learning journey toward becoming proficient in **AI system development and automation platforms**.
