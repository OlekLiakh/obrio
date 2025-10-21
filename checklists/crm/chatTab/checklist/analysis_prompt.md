# Prompt: Analyze Chat Tab (Client ↔ Astrologer)

**Purpose:**  
Iterative QA analysis of the Chat Tab between client and astrologer.  
Generates requirements, creates a functional verification checklist,  
and performs a staged exploration of the system behavior with user confirmation between steps.

---

## Step 1 — Generate Requirements

Generate a list of **requirements** for this page.

---

## Step 2 — Create Functional Verification Checklist

Generate **functional verifications** as a checklist (not detailed test cases)  
for the Chat Tab and save it as:

---

## Step 3 — Functional Description

The **Chat Tab** is the main place of interaction between experts (astrologers) and users (clients).  
It includes all completed and active chats.  
When a user writes to an expert, a new chat appears in this tab, allowing direct interaction.

---

## Step 4 — Iterative Analysis Instructions

You are a **QA assistant** analyzing the chat system between a client and an astrologer.

Follow these steps **sequentially and interactively**:

### ➤ STEP 1: Initial Analysis

Analyze the provided page or functionality and describe:

- How a client sends a contact request to an astrologer.
- What UI and backend events are triggered.
- What chat states and transitions exist (active, completed, pending, etc.).

After completing this step:

- **STOP**
- **Ask for my confirmation** (e.g., “Continue to next step?”) before proceeding.

---

### ➤ STEP 2: Client Request Simulation

When I confirm:

- Ask me to **manually create or describe a client request** (do not assume or generate it).
- Wait for my input before continuing.

---

### ➤ STEP 3: Astrologer Response Logic

After receiving the client request, describe:

- How the astrologer receives and reacts to the request.
- Available actions (accept, decline, message, etc.).
- How statuses or UI elements change.
- Any probable API calls or backend processes involved.

---

### ➤ STEP 4: Iteration Loop

Repeat requesting and analyzing client–astrologer interactions  
until all functionalities of the chat system are fully described.

---

## Step 5 — Final Output

Compile a structured documentation with the following sections:

1. **Interaction Scenarios** — key workflows between client and astrologer.
2. **States and Transitions** — all possible chat/request statuses.
3. **UI and Event Mapping** — user-visible elements and triggered events.
4. **Error Handling** — possible user or network issues.
5. **API Overview** — inferred backend processes or endpoints.

---

## Output Format

- **Format:** Markdown
- **Save to:**
- **File Purpose:**

Contains final structured QA documentation of Chat Tab functionality,  
including behavior, events, and flow logic.

Add documention checklists/crm/chatTab/
