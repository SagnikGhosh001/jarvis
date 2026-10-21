# JARVIS — Local-First Personal AI Assistant
> **Project Type:** Personal AI Assistant / Multi-Agent System

> **Primary Language:** JavaScript

> **Runtime:** Deno

> **LLM Runtime:** Ollama

> **Frontend:** React + Vite

> **Backend:** Hono

> **Database:** SQLite

> **Development Approach:** Local-first, modular, tool-driven AI architecture

> **Primary Goal:** Build a personal AI assistant that can understand requests, remember useful information, plan tasks, use tools, and execute approved actions.
---

# Table of Contents
1. [Project Overview](#1-project-overview)
2. [Project Vision](#2-project-vision)
3. [Project Objectives](#3-project-objectives)
4. [Core Design Principles](#4-core-design-principles)
5. [Target Users and Use Cases](#5-target-users-and-use-cases)
6. [Complete Feature Scope](#6-complete-feature-scope)
7. [Multi-Agent Architecture](#7-multi-agent-architecture)
8. [Agent Responsibilities](#8-agent-responsibilities)
9. [Agent and Tool Interaction](#9-agent-and-tool-interaction)
10. [System Architecture](#10-system-architecture)
11. [Technology Stack](#11-technology-stack)
12. [Local LLM Integration](#12-local-llm-integration)
13. [Memory Architecture](#13-memory-architecture)
14. [Database Design](#14-database-design)
15. [Voice Assistant](#15-voice-assistant)
16. [Task and Reminder Management](#16-task-and-reminder-management)
17. [Research and Web Intelligence](#17-research-and-web-intelligence)
18. [Personal Finance Management](#18-personal-finance-management)
19. [Learning Assistant](#19-learning-assistant)
20. [Browser and Computer Automation](#20-browser-and-computer-automation)
21. [Proactive Assistant](#21-proactive-assistant)
22. [User Interface](#22-user-interface)
23. [Project Folder Structure](#23-project-folder-structure)
24. [Functional Requirements](#24-functional-requirements)
25. [Non-Functional Requirements](#25-non-functional-requirements)
26. [Security and Privacy](#26-security-and-privacy)
27. [Error Handling and Reliability](#27-error-handling-and-reliability)
28. [Testing and Evaluation](#28-testing-and-evaluation)
29. [Development Roadmap](#29-development-roadmap)
30. [MVP Scope](#30-mvp-scope)
31. [Future Enhancements](#31-future-enhancements)
32. [Out-of-Scope Features](#32-out-of-scope-features)
33. [Success Criteria](#33-success-criteria)
34. [Project Risks and Limitations](#34-project-risks-and-limitations)
35. [Definition of Done](#35-definition-of-done)
36. [Official Documentation](#36-official-documentation)
---

# 1. Project Overview
JARVIS is a local-first, AI-powered personal assistant designed to help users manage everyday activities through natural-language and voice interactions.

The system uses a locally hosted language model, a central orchestrator, specialized agents, persistent memory, and registered tools to interpret requests and execute useful actions.

JARVIS will help users:

- Manage daily tasks and reminders.
- Organize personal projects and goals.
- Search for information and summarize research.
- Remember useful information across sessions.
- Track personal expenses.
- Create learning plans and practice exercises.
- Interact with supported websites and browser applications.
- Automate approved workflows.
- Receive personalized daily briefings.
- Interact through text and voice.

The application will be developed primarily using JavaScript and free software components, with Ollama providing local LLM inference.

The system should not require a paid LLM API for its core functionality.

External services, where necessary, will be optional and clearly identified.
---

# 2. Project Vision
The vision is to build a personal AI assistant that acts as a practical digital companion rather than a conventional chatbot.

JARVIS should understand the user's intentions, retrieve relevant context, select appropriate tools, execute actions, verify results, and communicate the outcome.

## Example Interaction
**User:**

"JARVIS, help me organize tomorrow. I need to work on my AI project, study JavaScript, and remember to pay my internet bill."

**JARVIS workflow:**

1. Retrieve the user's existing tasks.
2. Check upcoming deadlines.
3. Retrieve relevant preferences and goals.
4. Propose a realistic daily schedule.
5. Identify an appropriate time for the internet bill reminder.
6. Ask for clarification if the requested schedule is ambiguous.
7. Request approval before making consequential changes.
8. Save approved tasks and reminders.
9. Verify that the operations succeeded.
10. Present the final schedule.

## Long-Term Vision
JARVIS should become an extensible personal AI platform that can combine conversation, memory, planning, information retrieval, and controlled automation through a unified interface.
---

# 3. Project Objectives
The primary objectives are:

1. Build a functional AI assistant using JavaScript and Deno.
2. Integrate a local language model through Ollama.
3. Implement an orchestrator that coordinates tools and specialized agents.
4. Support natural-language task execution.
5. Implement persistent memory.
6. Build task and reminder management.
7. Support research and information retrieval.
8. Add personal finance tracking.
9. Support learning and productivity workflows.
10. Provide text and voice interaction.
11. Enable controlled browser automation.
12. Maintain user control over sensitive operations.
13. Minimize recurring costs.
14. Keep personal data local whenever practical.
15. Design the system so additional agents and tools can be added independently.
---

# 4. Core Design Principles## 4.1 Local-First Architecture
The language model and personal database should run locally whenever practical.

Personal information should not be sent to external services unless the feature requires it and the user has authorized the operation.

## 4.2 Action-Oriented Behavior
JARVIS should be able to perform useful operations instead of merely generating suggestions.

Examples include creating a task, recording an expense, saving a note, or scheduling a reminder.

## 4.3 Persistent Memory
Important information should remain available across conversations and application restarts.

The user must retain control over what is remembered.

## 4.4 Modular Agents
Each specialized agent should have a clearly defined responsibility.

Agents should share common infrastructure without unnecessarily duplicating databases, prompts, or tool implementations.

## 4.5 Tool-Driven Execution
Actual operations should be performed by registered JavaScript functions.

The LLM should interpret requests and select tools rather than pretending that an operation occurred.

## 4.6 Human Approval
Sensitive or consequential actions should require explicit approval.

Examples include sending messages, submitting forms, deleting files, and making purchases.

## 4.7 Verifiable Results
JARVIS should verify tool outcomes before reporting success.

If an operation fails, it must communicate the failure honestly.

## 4.8 Incremental Development
The system should be developed in phases.

The MVP should focus on a small set of reliable capabilities before introducing complex automation or additional agents.
---

# 5. Target Users and Use Cases## Primary User
The initial target user is an individual who wants a personal AI assistant for everyday productivity and digital tasks.

## Primary Use Cases### Personal Productivity
- Plan the day.
- Track tasks.
- Manage reminders.
- Review goals.
- Organize projects.

### Learning
- Create study plans.
- Find learning resources.
- Explain concepts.
- Generate practice questions.
- Track learning progress.

### Research
- Search for information.
- Summarize articles.
- Compare sources.
- Generate reports.
- Save research findings.

### Personal Organization
- Store useful notes.
- Retrieve previous decisions.
- Maintain project context.
- Organize information by topic.

### Finance
- Record expenses.
- Track budgets.
- Calculate spending totals.
- Review spending trends.

### Digital Assistance
- Navigate permitted websites.
- Summarize web pages.
- Fill out draft forms.
- Perform approved browser workflows.
---

# 6. Complete Feature Scope
The complete product vision consists of the following modules.

| ID | Module | Priority |
|---|---|---|
| MOD-01 | Personal AI Assistant | P0 |
| MOD-02 | Agent Orchestrator | P0 |
| MOD-03 | Task Management | P0 |
| MOD-04 | Persistent Memory | P0 |
| MOD-05 | Reminder System | P0 |
| MOD-06 | Conversation History | P0 |
| MOD-07 | Research Agent | P1 |
| MOD-08 | Voice Interaction | P1 |
| MOD-09 | Daily Planning | P1 |
| MOD-10 | Personal Finance | P1 |
| MOD-11 | Learning Assistant | P1 |
| MOD-12 | Browser Automation | P2 |
| MOD-13 | Proactive Notifications | P2 |
| MOD-14 | Semantic Memory | P2 |
| MOD-15 | Advanced Workflow Automation | P2 |

Priority definitions:

- **P0:** Required for the initial MVP.
- **P1:** Planned after the core MVP works.
- **P2:** Advanced functionality for later releases.
---

# 7. Multi-Agent Architecture
JARVIS will use a central orchestrator to coordinate specialized agents.

The orchestrator receives user requests, determines the required actions, invokes appropriate agents or tools, tracks execution state, and combines the results.

Not every request requires multiple agents.

Simple operations should use direct tool calls whenever possible.

## Proposed Agent Diagram
```text
                       USER
                        |
                  Voice / Text
                        |
                        v
                 JARVIS INTERFACE
                        |
                        v
                  ORCHESTRATOR
                        |
                   Local LLM
                        |
                Request Planning
                        |
         +--------------+--------------+
         |              |              |
         v              v              v
     Task Agent    Research Agent   Memory Agent
         |              |              |
         v              v              v
     Task Tools      Search Tools    Memory Tools
         |              |              |
         +--------------+--------------+
                        |
         +--------------+--------------+
         |              |              |
         v              v              v
    Finance Agent  Learning Agent  Computer Agent
         |              |              |
         v              v              v
     Finance DB     Study Tools    Browser Tools
                        |
                        v
                 ACTION VALIDATION
                        |
                        v
                 PERMISSION CHECK
                        |
                        v
                   EXECUTION
                        |
                        v
                 RESULT VERIFICATION
                        |
                        v
                 FINAL RESPONSE
```

## Architectural Rule
Agents are logical components and do not need separate model instances.

The same Ollama model may serve multiple agents using different instructions, tool permissions, and output schemas.

This approach reduces resource consumption on computers with limited RAM.
---

# 8. Agent Responsibilities## 8.1 Orchestrator Agent
**Purpose:** Coordinate the entire system.

Responsibilities:

- Understand the user's request.
- Identify the user's intended outcome.
- Determine whether tools are required.
- Select appropriate agents.
- Create an execution plan.
- Track intermediate results.
- Handle clarification requests.
- Enforce workflow limits.
- Combine results.
- Report failures and partial completion.

The orchestrator should not directly implement every operation.

It should delegate execution to registered tools or specialized agents.

## 8.2 Task Agent
Responsibilities:

- Create tasks.
- List pending tasks.
- Update task descriptions.
- Set priorities.
- Assign due dates.
- Mark tasks complete.
- Identify overdue tasks.
- Schedule reminders.
- Retrieve task history.

Example:

"Add finishing the JARVIS project documentation to my tasks for Friday."

## 8.3 Research Agent
Responsibilities:

- Interpret research objectives.
- Generate search queries.
- Retrieve permitted sources.
- Extract useful information.
- Compare evidence.
- Summarize findings.
- Produce source-supported reports.
- Identify uncertainty and missing evidence.

Example:

"Research the best free JavaScript libraries for building AI agents."

## 8.4 Memory Agent
Responsibilities:

- Save user-approved memories.
- Retrieve relevant memories.
- Search conversation history.
- Update outdated information.
- Identify duplicate facts.
- Respect memory preferences.
- Support memory inspection and deletion.

Example:

"Remember that my JARVIS project uses JavaScript and Ollama."

## 8.5 Productivity Agent
Responsibilities:

- Generate daily plans.
- Prioritize tasks.
- Estimate task durations.
- Identify schedule conflicts.
- Suggest realistic work sessions.
- Track progress toward goals.
- Generate daily and weekly summaries.

Example:

"Plan my day around my pending tasks and my 7 PM study session."

## 8.6 Finance Agent
Responsibilities:

- Record income and expenses.
- Categorize transactions.
- Calculate spending totals.
- Retrieve transaction history.
- Track budgets.
- Identify spending patterns.
- Generate monthly reports.
- Export transaction data.

All financial calculations must be performed using deterministic application code or database queries.

## 8.7 Learning Agent
Responsibilities:

- Create learning roadmaps.
- Organize learning resources.
- Generate quizzes.
- Produce coding exercises.
- Track learning progress.
- Identify knowledge gaps.
- Schedule revision sessions.

Example:

"Create a two-week roadmap for learning LangGraph.js."

## 8.8 Computer Agent
Responsibilities:

- Open permitted web pages.
- Navigate supported websites.
- Read and summarize pages.
- Fill out draft forms.
- Download authorized files.
- Execute approved browser workflows.
- Verify whether browser actions succeeded.

The Computer Agent must operate under restricted permissions.

## 8.9 System Agent
Responsibilities:

- Check JARVIS service status.
- Report model availability.
- Display registered tools.
- Identify application errors.
- Provide permitted diagnostic information.
- Help the user understand system resource usage.

The System Agent must not have unrestricted shell access.
---

# 9. Agent and Tool Interaction
Agents and tools must be implemented separately.

An agent determines how to handle a request.

A tool performs a defined operation.

## Example Tool Registry
```javascript
const toolRegistry = {
 addTask,
 listTasks,
 updateTask,
 completeTask,
 createReminder,
 cancelReminder,
 saveMemory,
 searchMemory,
 logExpense,
 getExpenseSummary,
 searchWeb,
 readWebPage
};
```

This registry is illustrative. Each tool must have a defined schema, validation rules, and permission policy.

## Tool Execution Workflow
```text
User Request
    |
    v
Orchestrator
    |
    v
LLM Selects Tool
    |
    v
Validate Tool Arguments
    |
    v
Check Permissions
    |
    v
Request Approval if Needed
    |
    v
Execute JavaScript Function
    |
    v
Verify Operation
    |
    v
Return Structured Result
    |
    v
Generate User Response
```

## Tool Requirements
Every tool should define:

- A unique name.
- A clear description.
- A structured input schema.
- Input validation.
- Required permissions.
- Expected output.
- Error behavior.
- Logging requirements.

The LLM must never be allowed to execute arbitrary model-generated JavaScript.
---

# 10. System Architecture
JARVIS will use a modular monolithic architecture for the initial implementation.

The frontend, backend, agents, and database access will be logically separated, but the agents do not need to run as independent network services.
```text
React Frontend
     |
     v
Hono API server
     |
     v
Request Validation
     |
     v
JARVIS Orchestrator
     |
     v
Ollama Client
     |
     v
Agent and Tool Registry
     |
     +-------------------+
     |                   |
     v                   v
Application Services   Permission System
     |                   |
     v                   v
Repositories          Approval Workflow
     |
     v
SQLite Database
```

## Core Architectural Components### Frontend
Responsible for:

- Chat interface.
- Voice controls.
- Task dashboard.
- Reminder management.
- Memory management.
- Finance dashboard.
- Workflow status.
- Approval prompts.

### Backend API
Responsible for:

- Validating requests.
- Managing conversations.
- Calling the orchestrator.
- Exposing application services.
- Returning structured results.
- Enforcing server-side permissions.

### Orchestrator
Responsible for:

- Intent interpretation.
- Workflow planning.
- Agent selection.
- Tool selection.
- Execution state.
- Result aggregation.

### Application Services
Responsible for deterministic operations such as task creation, expense calculation, and reminder persistence.

### Database
Responsible for persistent application data.
---

# 11. Technology Stack
| Component | Technology | Purpose |
|---|---|---|
| Programming language | JavaScript | Application development |
| Runtime | Deno | JavaScript/TypeScript runtime and backend execution |
| Local LLM runtime | Ollama | Local inference |
| LLM | Suitable locally available model | Reasoning and tool selection |
| Backend | Hono | Lightweight HTTP API framework |
| Frontend | React | User interface |
| Frontend tooling | Vite | Development and build tooling |
| Database | SQLite | Persistent structured data |
| Agent orchestration | LangGraph.js or custom orchestrator | Workflow management |
| Browser automation | Playwright | Controlled browser interactions |
| Voice input | Local speech-recognition engine | Speech-to-text |
| Voice output | Local text-to-speech engine | Spoken responses |
| Scheduling | Deno-compatible scheduler plus persisted jobs in SQLite | Timed jobs and recovery after restart |
| Testing | Deno test runner | Unit and integration tests |
| Version control | Git | Source management |

All core components should be selected to avoid mandatory paid subscriptions.

External services may still have their own access restrictions or costs.
---

# 12. Local LLM Integration
Ollama will provide the language-model runtime.

The Deno backend will communicate with Ollama through its local HTTP API using `fetch` or a verified Deno-compatible JavaScript client. Prefer the HTTP API initially to minimize runtime-specific dependency issues.

## Requirements
- Configure the model name.
- Configure the local Ollama endpoint.
- Check model availability.
- Handle connection failures.
- Support model response streaming where useful.
- Support structured outputs where available.
- Support tool calling when the selected model supports it.
- Limit request duration.
- Avoid unnecessary repeated model calls.

## Model Selection
Choose a model based on:

- Available RAM.
- GPU memory, if applicable.
- Response latency.
- Instruction-following quality.
- Tool-calling reliability.
- Structured-output quality.
- Model license.

A single model may be used for the entire application.

Different agents can use separate system instructions without requiring separate models.

## Fallback Behavior
If Ollama is unavailable:

1. Detect the connection failure.
2. Preserve saved user data.
3. Avoid attempting unavailable LLM operations indefinitely.
4. Inform the user.
5. Allow deterministic features to continue when possible.

For example, listing saved tasks should not require an LLM if the user opens the task dashboard directly.
---

# 13. Memory Architecture
Memory will be divided into several categories.

## 13.1 Short-Term Memory
Contains information relevant to an active interaction.

Examples:

- Current conversation.
- Active workflow.
- Intermediate tool results.
- Pending approval requests.

## 13.2 Long-Term Memory
Contains user-approved information that should persist.

Examples:

- Preferences.
- Personal goals.
- Ongoing project context.
- Frequently used settings.

## 13.3 Episodic Memory
Contains summaries of relevant past interactions or activities.

Examples:

- Previous project decisions.
- Completed workflows.
- Important results.
- Recent planning sessions.

## 13.4 Semantic Retrieval
Semantic retrieval may be added to search unstructured notes and memories.

It is not required for the initial MVP.

## Memory Rules
- Do not save every conversation automatically as a permanent memory.
- Prefer explicit user requests or clearly defined memory policies.
- Store structured information in regular database fields when possible.
- Allow users to inspect and delete saved information.
- Avoid retaining sensitive information unnecessarily.
- Track when a memory was created or updated.
---

# 14. Database Design
Use a single SQLite database for the initial application.

## Proposed Tables### `conversations`
Stores conversation metadata.

Suggested fields:

- `id`
- `title`
- `created_at`
- `updated_at`

### `messages`
Stores conversation messages.

Suggested fields:

- `id`
- `conversation_id`
- `role`
- `content`
- `created_at`

### `tasks`
Stores tasks.

Suggested fields:

- `id`
- `title`
- `description`
- `priority`
- `status`
- `due_at`
- `created_at`
- `updated_at`

### `reminders`
Stores scheduled reminders.

Suggested fields:

- `id`
- `task_id`
- `message`
- `scheduled_at`
- `status`
- `delivered_at`
- `created_at`

### `memories`
Stores persistent user-approved memories.

Suggested fields:

- `id`
- `content`
- `category`
- `source`
- `created_at`
- `updated_at`

### `projects`
Stores personal projects.

Suggested fields:

- `id`
- `name`
- `description`
- `status`
- `created_at`
- `updated_at`

### `expenses`
Stores financial transactions.

Suggested fields:

- `id`
- `amount_minor_units`
- `currency`
- `category`
- `description`
- `transaction_date`
- `created_at`

Use integer minor units for currencies with standard minor units, or a suitable exact-decimal representation, rather than binary floating-point arithmetic for financial calculations.

### `budgets`
Stores spending limits.

Suggested fields:

- `id`
- `category`
- `amount_minor_units`
- `currency`
- `period`
- `created_at`

### `learning_plans`
Stores learning plans.

Suggested fields:

- `id`
- `title`
- `description`
- `start_date`
- `target_date`
- `status`

### `learning_sessions`
Stores learning progress.

Suggested fields:

- `id`
- `learning_plan_id`
- `topic`
- `scheduled_at`
- `completed_at`
- `status`

### `research_reports`
Stores generated research reports.

Suggested fields:

- `id`
- `title`
- `query`
- `report_content`
- `created_at`

### `research_sources`
Stores source metadata for reports.

Suggested fields:

- `id`
- `report_id`
- `url`
- `title`
- `retrieved_at`

### `scheduled_jobs`
Stores recurring or scheduled operations.

Suggested fields:

- `id`
- `job_type`
- `payload`
- `scheduled_at`
- `recurrence_rule`
- `status`
- `created_at`

### `action_logs`
Stores important tool execution events.

Suggested fields:

- `id`
- `action_type`
- `tool_name`
- `status`
- `summary`
- `created_at`

Do not log secrets, passwords, or unnecessary sensitive content.

### `user_settings`
Stores preferences.

Suggested fields:

- `id`
- `setting_key`
- `setting_value`
- `updated_at`

## Database Rules
- Use migrations to evolve the schema.
- Add appropriate indexes.
- Use parameterized queries.
- Enforce foreign-key constraints.
- Validate inputs before database operations.
- Back up important data.
- Use transactions when multiple related operations must succeed together.
---

# 15. Voice Assistant
Voice interaction will allow the user to talk to JARVIS.

## Features
- Microphone input.
- Speech-to-text.
- Natural-language interpretation.
- Spoken responses.
- Push-to-talk controls.
- Interruptible speech output.
- Configurable voice settings.
- Optional wake-word detection.

## Workflow
```text
Microphone
   |
   v
Speech Recognition
   |
   v
Transcribed Text
   |
   v
JARVIS Orchestrator
   |
   v
Tool Execution
   |
   v
Response Text
   |
   v
Text-to-Speech
   |
   v
Speaker
```

## Implementation Requirements
- Start with push-to-talk.
- Handle microphone permission errors.
- Display recognized text before or during processing.
- Provide a text fallback.
- Allow users to stop spoken output.
- Handle unavailable speech engines gracefully.

For offline voice interaction, use local speech-to-text and text-to-speech components.

Browser speech APIs may rely on external services depending on the browser and implementation.
---

# 16. Task and Reminder Management## Task Features
- Create tasks.
- View pending tasks.
- View completed tasks.
- Update descriptions.
- Set priorities.
- Set due dates.
- Complete tasks.
- Delete tasks with appropriate confirmation.
- Identify overdue tasks.
- Search tasks.
- Generate task summaries.

## Reminder Features
- Create one-time reminders.
- Create recurring reminders.
- Cancel reminders.
- Reschedule reminders.
- Track delivery status.
- Restore scheduled jobs after restart.
- Handle time zones.
- Prevent duplicate scheduling where possible.

## Example Commands
- "Remind me to study at 7 PM."
- "Show tomorrow's tasks."
- "Mark the assignment complete."
- "What should I focus on today?"
- "Move my project task to Friday."

## Scheduling Requirements
- Persist reminder definitions.
- Store dates in a consistent format.
- Display times in the user's configured time zone.
- Validate ambiguous dates and times.
- Reconstruct pending jobs after restart.
- Avoid claiming delivery when only scheduling succeeded.
---

# 17. Research and Web Intelligence## Features
- Search for information.
- Retrieve permitted web pages.
- Extract useful passages.
- Summarize articles.
- Compare sources.
- Generate research reports.
- Save report history.
- Provide source links.
- Identify unsupported claims.
- Indicate uncertainty.

## Research Workflow
```text
Research Request
      |
      v
Question Planning
      |
      v
Search Query Generation
      |
      v
Source Retrieval
      |
      v
Evidence Extraction
      |
      v
Claim and Source Review
      |
      v
Report Generation
      |
      v
Citation Validation
      |
      v
Final Report
```

## Requirements
- Keep source URLs with retrieved content.
- Avoid inventing citations.
- Distinguish source statements from the agent's interpretation.
- Treat web content as untrusted input.
- Do not follow instructions embedded in retrieved pages as if they were trusted system instructions.
- Respect applicable website access policies.

Automated search may require a third-party service. The system should allow alternative sources and should not depend on a paid search API for core task management.
---

# 18. Personal Finance Management## Features
- Add expenses.
- Add income.
- Categorize transactions.
- Edit transactions.
- Remove transactions with confirmation.
- View transaction history.
- Calculate daily spending.
- Calculate weekly spending.
- Calculate monthly spending.
- Configure budgets.
- Compare spending periods.
- Export data.

## Example Commands
- "I spent ₹250 on lunch."
- "How much did I spend this week?"
- "Show my largest expense category."
- "Compare this month with last month."
- "How much of my monthly budget remains?"

## Calculation Requirements
- Use deterministic calculations.
- Use exact monetary representations.
- Respect transaction dates and time zones.
- Define the reporting period clearly.
- Test aggregation queries.
- Ask for clarification if the currency or transaction details are ambiguous.

The first version should support manual entry.

Bank integrations and automated transactions are outside the MVP.
---

# 19. Learning Assistant## Features
- Create learning roadmaps.
- Set learning goals.
- Break goals into tasks.
- Recommend resources.
- Generate explanations.
- Create quizzes.
- Generate coding exercises.
- Track progress.
- Schedule revision sessions.
- Review previous learning sessions.

## Example
"Create a 14-day plan to learn JavaScript-based AI agent development."

The Learning Agent should:

1. Determine the target skill.
2. Create a structured plan.
3. Break the plan into sessions.
4. Suggest resources.
5. Generate exercises.
6. Save the plan.
7. Track completion.
8. Suggest revisions when needed.

Learning tasks and reminders should reuse the existing task-management system.
---

# 20. Browser and Computer Automation
This module will allow JARVIS to interact with approved websites and browser applications.

## Features
- Open configured websites.
- Navigate web pages.
- Read page content.
- Summarize pages.
- Fill out draft forms.
- Download permitted files.
- Execute approved browser workflows.
- Capture workflow results.
- Report failures.

## Example
"Open my project dashboard and summarize my outstanding tasks."

The Computer Agent retrieves information from the permitted dashboard, summarizes it, and reports its sources.

## Security Requirements
- Use a dedicated browser profile when practical.
- Restrict browser access to approved workflows.
- Validate destinations and URLs.
- Require approval before submitting forms.
- Require approval before purchases.
- Require approval before deleting or modifying important data.
- Never expose browser credentials to the LLM.
- Do not allow arbitrary shell execution through browser tools.
- Verify the result of every consequential action.

Browser automation is a later-phase feature, not a requirement for the initial MVP.
---

# 21. Proactive Assistant## Features
- Morning briefing.
- Evening summary.
- Upcoming deadline notifications.
- Overdue task notifications.
- Scheduled learning reminders.
- Weekly expense summary.
- Project progress summary.
- Goal-progress updates.

## Example Morning Briefing
"Good morning. You have three pending tasks, one approaching deadline, and a learning session planned for this evening."

## Implementation Requirements
- Use a persistent scheduler.
- Allow the user to configure notification times.
- Allow notifications to be disabled.
- Avoid sending duplicate notifications.
- Track whether a notification was delivered.
- Do not run unbounded background agent loops.

Scheduled tasks require the application or an appropriate background process to be running.
---

# 22. User Interface
The interface should feel like a personal assistant dashboard rather than a generic chat application.

## Main Screens### 22.1 Home Dashboard
Displays:

- Greeting.
- Assistant status.
- Today's priorities.
- Upcoming reminders.
- Quick actions.
- Recent activity.
- Daily summary.

### 22.2 Chat Interface
Includes:

- Conversation history.
- Text input.
- Voice input.
- Spoken-response controls.
- Tool execution status.
- Approval prompts.
- Error messages.
- Source links.

### 22.3 Tasks
Includes:

- Pending tasks.
- Completed tasks.
- Priority filters.
- Due dates.
- Task creation.
- Reminder configuration.

### 22.4 Memory
Includes:

- Saved memories.
- Search.
- Memory categories.
- Edit and delete controls.

### 22.5 Finance
Includes:

- Expense entry.
- Spending summaries.
- Budget status.
- Transaction history.
- Export controls.

### 22.6 Research
Includes:

- Research history.
- Saved reports.
- Source links.
- Report generation.

### 22.7 Settings
Includes:

- Model configuration.
- Voice preferences.
- Time zone.
- Notification settings.
- Memory controls.
- Tool permissions.
- Data-management controls.

## UI Design Principles
- Responsive layout.
- Dark theme with optional light theme.
- Clear status indicators.
- Visible action confirmations.
- Accessible controls.
- No unnecessary animation.
- No hidden or ambiguous permissions.
---

# 23. Project Folder Structure
Recommended initial structure:
```text
jarvis/
├── apps/
│   ├── api/
│   │   └── src/
│   │       ├── app.js
│   │       ├── server.js
│   │       └── routes/
│   │           ├── chat.routes.js
│   │           ├── tasks.routes.js
│   │           ├── memory.routes.js
│   │           └── finance.routes.js
│   │
│   └── web/
│       └── src/
│           ├── components/
│           ├── pages/
│           ├── hooks/
│           └── services/
│
├── src/
│   ├── core/
│   │   ├── orchestrator.js
│   │   ├── planner.js
│   │   ├── agentRegistry.js
│   │   ├── toolRegistry.js
│   │   └── workflowState.js
│   │
│   ├── agents/
│   │   ├── task.agent.js
│   │   ├── research.agent.js
│   │   ├── memory.agent.js
│   │   ├── productivity.agent.js
│   │   ├── finance.agent.js
│   │   ├── learning.agent.js
│   │   ├── computer.agent.js
│   │   └── system.agent.js
│   │
│   ├── tools/
│   │   ├── tasks/
│   │   ├── reminders/
│   │   ├── research/
│   │   ├── memory/
│   │   ├── finance/
│   │   ├── browser/
│   │   └── files/
│   │
│   ├── llm/
│   │   ├── ollama.client.js
│   │   ├── prompts.js
│   │   └── schemas.js
│   │
│   ├── voice/
│   │   ├── speechInput.js
│   │   ├── speechOutput.js
│   │   └── wakeWord.js
│   │
│   ├── memory/
│   │   ├── shortTermMemory.js
│   │   ├── longTermMemory.js
│   │   └── retrieval.js
│   │
│   ├── database/
│   │   ├── connection.js
│   │   ├── migrations/
│   │   └── repositories/
│   │
│   ├── scheduler/
│   │   └── scheduler.js
│   │
│   └── security/
│       ├── permissions.js
│       ├── validation.js
│       └── auditLog.js
│
├── data/
├── tests/
├── docs/
│   ├── architecture.md
│   ├── scope.md
│   └── security.md
│
├── .env.example
├── .gitignore
├── deno.json
└── README.md
```

This is the target structure, not a requirement to create every file on day one.

Start with the smallest working subset and add modules incrementally.
---

# 24. Functional Requirements
| ID | Requirement | Priority |
|---|---|---|
| FR-001 | Accept text-based user requests | P0 |
| FR-002 | Connect to a local Ollama model | P0 |
| FR-003 | Maintain conversation context | P0 |
| FR-004 | Invoke registered JavaScript tools | P0 |
| FR-005 | Validate tool arguments | P0 |
| FR-006 | Create, list, update, and complete tasks | P0 |
| FR-007 | Persist tasks across restarts | P0 |
| FR-008 | Create and cancel reminders | P0 |
| FR-009 | Save and retrieve persistent memories | P0 |
| FR-010 | Store conversation history | P0 |
| FR-011 | Record important action outcomes | P0 |
| FR-012 | Handle model and tool failures | P0 |
| FR-013 | Generate research summaries with sources | P1 |
| FR-014 | Support voice input and output | P1 |
| FR-015 | Generate daily plans | P1 |
| FR-016 | Record and summarize expenses | P1 |
| FR-017 | Generate learning plans | P1 |
| FR-018 | Execute multi-step workflows | P1 |
| FR-019 | Support controlled browser automation | P2 |
| FR-020 | Generate scheduled briefings | P2 |
| FR-021 | Support semantic memory retrieval | P2 |
| FR-022 | Support advanced proactive workflows | P2 |
---

# 25. Non-Functional Requirements## Performance
- Avoid unnecessary model calls.
- Support workflow cancellation.
- Limit repeated agent iterations.
- Keep database operations responsive.
- Display progress for long-running tasks.

## Reliability
- Persist important state.
- Validate all tool inputs.
- Handle unavailable dependencies.
- Prevent duplicate operations where possible.
- Verify action outcomes.
- Recover scheduled jobs after restart.

## Privacy
- Prefer local inference.
- Keep personal data local when practical.
- Provide memory-management controls.
- Avoid unnecessary collection of personal information.
- Make external data transfers explicit.

## Maintainability
- Separate agent logic from tool implementations.
- Use modular application services.
- Centralize permission policies.
- Document tool schemas.
- Use automated tests.
- Manage database changes with migrations.

## Usability
- Provide clear feedback.
- Explain failed operations.
- Support text interaction even when voice is unavailable.
- Make approval requests understandable.
- Allow users to cancel workflows.
---

# 26. Security and Privacy
Security is a core system requirement.

## Tool Permissions
Each tool must declare which operations it can perform and whether approval is required.

Suggested categories:

| Risk level | Example | Policy |
|---|---|---|
| Low | Read saved tasks | Usually automatic |
| Low | Search local notes | Usually automatic |
| Medium | Create or modify tasks | Configurable |
| Medium | Save persistent memories | Follow explicit memory policy |
| Medium | Read approved project files | Restricted access |
| High | Send a message | Require approval |
| High | Submit a form | Require approval |
| High | Delete files | Require approval |
| High | Make a purchase | Require approval |

## Security Controls
- Validate inputs.
- Use parameterized SQL queries.
- Restrict filesystem access.
- Keep secrets outside source control.
- Protect local API endpoints.
- Avoid unrestricted shell execution.
- Use Deno permission flags to grant only the required network, filesystem, and environment access.
- Treat external web content as untrusted.
- Log important operations.
- Require approval for consequential actions.
- Provide memory deletion and data-export controls.

## Privacy Controls
- Prefer local storage.
- Avoid unnecessary external APIs.
- Do not expose private data in logs.
- Do not automatically save every conversation as permanent memory.
- Clearly identify external integrations.
- Allow users to remove saved data.
---

# 27. Error Handling and Reliability
JARVIS must handle failures without losing data or misleading the user.

## Failure Scenarios
- Ollama is not running.
- The model is unavailable.
- The model returns invalid tool arguments.
- A database operation fails.
- A reminder cannot be scheduled.
- A browser page cannot be accessed.
- A research source is unavailable.
- A tool times out.
- A workflow exceeds its iteration limit.
- An action is rejected by the user.

## Required Behavior
1. Detect the failure.
2. Preserve previously committed data.
3. Stop unsafe operations.
4. Retry only when appropriate.
5. Avoid duplicate actions.
6. Record a safe diagnostic event.
7. Tell the user what failed.
8. Offer a recovery path where possible.

## Workflow Limits
Every agent workflow should have:

- A maximum iteration count.
- A timeout.
- A cancellation mechanism.
- A defined failure state.
- A structured result.
- A clear completion condition.
---

# 28. Testing and Evaluation
Testing must cover both deterministic application logic and LLM-driven behavior.

## Unit Tests
Test:

- Task creation.
- Task updates.
- Reminder scheduling logic.
- Database repositories.
- Expense calculations.
- Input validation.
- Permission checks.
- Memory operations.

## Integration Tests
Test:

- Deno-to-Ollama communication.
- Orchestrator-to-tool execution.
- Database persistence.
- Reminder recovery after restart.
- Research retrieval and citation handling.
- Approval workflows.

## Agent Evaluation
Create a fixed set of representative requests.

Examples:

- "Remind me to study at 7 PM."
- "Show my pending tasks."
- "Remember that my project uses Ollama."
- "I spent ₹200 on lunch."
- "How much did I spend this week?"
- "Find three tutorials and summarize them."
- "Plan my day using my existing tasks."

Evaluate:

- Correct tool selection.
- Correct argument extraction.
- Task completion rate.
- Incorrect action rate.
- Citation support.
- Average response time.
- Number of unnecessary LLM calls.
- Recovery from failures.

Use mocked tools and synthetic data when testing potentially consequential actions.
---

# 29. Development Roadmap
The full product should be built in phases.

## Phase 1: Foundation
**Estimated duration:** Days 1–2

Deliverables:

- Deno project.
- Ollama integration.
- Basic chat interface.
- Hono API server.
- SQLite connection.
- Environment configuration.
- Basic error handling.

Acceptance criteria:

- JARVIS can answer a text request using the local model.
- The application handles an unavailable model gracefully.

## Phase 2: Tools and Orchestrator
**Estimated duration:** Days 3–4

Deliverables:

- Orchestrator.
- Tool registry.
- Structured tool inputs.
- Task tools.
- Task database tables.
- Execution logs.

Acceptance criteria:

- JARVIS can identify a task-related request.
- It invokes the appropriate registered tool.
- Tool results are returned to the user.

## Phase 3: Memory and Reminders
**Estimated duration:** Days 5–7

Deliverables:

- Persistent memory.
- Conversation history.
- Reminder storage.
- Scheduler.
- Task dashboard.
- Permission checks.

Acceptance criteria:

- Saved tasks and memories survive application restarts.
- Reminders can be created and cancelled.
- Important actions are logged.

## Phase 4: Voice and Research
**Estimated duration:** Days 8–10

Deliverables:

- Voice input.
- Spoken responses.
- Research tool.
- Source-aware summaries.
- Workflow progress display.

Acceptance criteria:

- The user can speak a request and hear a response.
- Research reports include retrieved source links.
- Failed searches are reported honestly.

## Phase 5: Productivity and Finance
**Estimated duration:** Days 11–12

Deliverables:

- Daily planning.
- Expense tracking.
- Spending summaries.
- Learning plans.
- Improved multi-step workflows.

Acceptance criteria:

- JARVIS creates plans using actual saved tasks.
- Expense totals match database calculations.
- Learning plans can be saved and tracked.

## Phase 6: Stabilization
**Estimated duration:** Days 13–14

Deliverables:

- Test suite.
- Error handling.
- UI polish.
- Security review.
- Setup documentation.
- Demonstration workflow.

Acceptance criteria:

- Critical workflows pass automated tests.
- Sensitive actions respect permission policies.
- The application can be installed and run using the documented steps.

These estimates assume a focused prototype and may change based on hardware, model performance, and development experience.
---

# 30. MVP Scope
The first release should focus on making JARVIS useful in everyday life.

## Must-Have Features
- Local Ollama integration.
- Text-based assistant.
- Central orchestrator.
- Registered tool system.
- Task management.
- Persistent reminders.
- Basic long-term memory.
- Conversation history.
- SQLite database.
- Basic user interface.
- Tool validation.
- Action logging.
- Error handling.
- Permission checks.

## Should-Have Features
- Voice input and output.
- Research capabilities.
- Daily planning.
- Expense tracking.
- Multi-step workflows.

## Could-Have Features
- Browser automation.
- Wake-word detection.
- Semantic memory.
- Advanced proactive notifications.
- More complex agent coordination.

## MVP Success Definition
The MVP is successful when JARVIS can understand a practical request, select an appropriate tool, execute the operation, persist the result, and accurately report what happened.
---

# 31. Future Enhancements
Potential future capabilities include:

- Desktop application using Electron or Tauri.
- Background voice assistant.
- Wake-word detection.
- Local document search.
- Semantic memory.
- Project-specific assistants.
- Calendar integration.
- Local file organization.
- Additional browser workflows.
- Advanced research reports.
- Habit tracking.
- Smart-home integrations.
- Customizable agent registry.
- Workflow templates.
- Optional messaging-platform integrations.
- Multi-device synchronization.
- User-configurable automation policies.

Each feature should be evaluated for usefulness, privacy, complexity, and cost before implementation.
---

# 32. Out-of-Scope Features
The following features are excluded from the initial MVP:

- Fully autonomous control of the entire computer.
- Unrestricted shell-command execution.
- Automatic purchases.
- Automatic financial transactions.
- Sending messages without authorization.
- Unsupervised deletion of files.
- Training a foundation model from scratch.
- Mandatory paid LLM APIs.
- Complex distributed agent infrastructure.
- Guaranteed 24/7 operation when the computer is off.
- Automatic permanent retention of all conversations.

These may be reconsidered after the core assistant is reliable.
---

# 33. Success Criteria
JARVIS should meet the following measurable criteria.

| Test | Expected Result |
|---|---|
| Create a task | The task is persisted |
| List tasks | The correct records are returned |
| Create a reminder | The reminder is saved and scheduled |
| Restart the application | Saved data remains available |
| Save a memory | The memory can be retrieved later |
| Record an expense | The transaction is stored correctly |
| Calculate spending | The result matches the database |
| Perform research | Retrieved sources are identified |
| Run a multi-step workflow | Each step has a recorded outcome |
| Encounter a tool failure | The failure is reported honestly |
| Request a sensitive action | The appropriate approval is required |
| Cancel a workflow | Further operations stop where safely possible |
| Disable Ollama | The application handles the failure gracefully |

## Additional Metrics
- Task completion rate.
- Tool-call accuracy.
- Incorrect action rate.
- Average response latency.
- Model resource usage.
- Workflow failure rate.
- Citation support rate.
- Duplicate-action rate.
---

# 34. Project Risks and Limitations## Local Model Performance
Smaller models may struggle with complex reasoning, structured outputs, or tool selection.

**Mitigation:** Test candidate models against the actual JARVIS workflows before choosing one.

## Hardware Limitations
Local inference consumes memory and computing resources.

**Mitigation:** Begin with a model suited to the available hardware and avoid unnecessary simultaneous inference requests.

## Voice Recognition
Local speech recognition may introduce latency or transcription errors.

**Mitigation:** Start with push-to-talk and provide text input as a fallback.

## Autonomous Action Errors
The LLM may select the wrong tool or misunderstand a request.

**Mitigation:** Validate inputs, enforce permissions, verify results, and require approval for consequential actions.

## External Service Dependence
Automated web search and third-party integrations may require network access or paid services.

**Mitigation:** Make external integrations optional and preserve core local functionality.

## Scope Expansion
Trying to implement every module simultaneously can delay the first working release.

**Mitigation:** Complete the MVP first and add modules in prioritized phases.
---

# 35. Definition of Done
A feature is complete only when:

- Its requirements are documented.
- Its implementation is separated into appropriate modules.
- Inputs are validated.
- Expected outcomes are defined.
- Relevant automated tests pass.
- Failure cases are handled.
- Sensitive operations enforce permissions.
- Important actions are logged.
- Documentation is updated.
- The feature works with the configured local model and available dependencies.

For agent-driven features, completion also requires testing representative requests rather than relying on one successful demonstration.
---

# 36. Official Documentation
Use these resources when implementing the project.

## Core Runtime and AI
- [Deno Documentation](https://docs.deno.com/)
- [Ollama](https://ollama.com/)
- [Ollama Documentation](https://docs.ollama.com/)
- [Ollama JavaScript Library](https://github.com/ollama/ollama-js)

## Agent Orchestration
- [LangGraph.js Documentation](https://docs.langchain.com/oss/javascript/langgraph/overview)

A custom orchestrator is also a reasonable starting point for a small MVP. Verify library compatibility with Deno before adopting it.

## Backend and Frontend
- [Hono Documentation](https://hono.dev/)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)

## Database and Browser Automation
- [SQLite](https://www.sqlite.org/)
- [Playwright](https://playwright.dev/)

## Testing
- [Deno Testing Documentation](https://docs.deno.com/runtime/fundamentals/testing/)
---

# Final Project Summary
JARVIS is a local-first personal AI assistant built with JavaScript, Deno, Hono, Ollama, React, and SQLite.

Its central orchestrator coordinates specialized agents and registered tools to manage tasks, reminders, memory, research, learning, finance, and controlled browser automation.

The system prioritizes privacy, low operating costs, modularity, persistent data, verifiable execution, and user approval for sensitive operations.

The project will begin with a reliable text-based MVP and gradually expand into voice interaction, advanced multi-agent workflows, and computer automation.

**The guiding principle is simple: JARVIS should not merely tell you what to do. It should help you do it, verify the result, and keep you in control.**
