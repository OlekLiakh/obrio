# NebulaX CRM - Chat Tab Complete Analysis

**Document Version:** 1.0  
**Analysis Date:** October 21, 2025  
**System:** NebulaX Expert CRM - Chat Tab Module  
**Environment:** Stage (https://stage.nebula-expert.com/)

---

## Executive Summary

The **Chat Tab** is the primary communication interface in the NebulaX CRM system, enabling real-time interactions between astrology experts (astrologers) and clients. This module handles the complete lifecycle of client-expert consultations, from initial request acceptance through active sessions to completion.

### Key Capabilities:

- Real-time bidirectional messaging between experts and clients
- Time-based billing system ($0.30/minute)
- Automatic request routing and assignment
- Session management with timer tracking
- Client profile and history access
- Quick response templates and categorization
- Translation support
- Expert availability management

### Critical Business Rules:

- Experts must be in "Working" status to receive requests
- Chat requests have ~30-second acceptance window
- Rejections negatively impact expert statistics
- System auto-sends apology messages on rejection
- Sessions can be stopped with mandatory reason selection
- 15-minute post-session window for follow-up messages

---

## 1. Interaction Scenarios

### 1.1 Primary Workflow: Accept and Complete Chat Session

**Prerequisites:**

- Expert is logged into CRM
- Expert has set status to "Working"
- Client initiates contact request

**Flow:**

```
┌─────────────┐
│   Client    │
│  Initiates  │
│   Request   │
└──────┬──────┘
       │
       ▼
┌─────────────────────────────────────┐
│  Expert Receives Notification       │
│  - Countdown timer (~30 sec)        │
│  - Client info displayed            │
│  - Accept/Cancel options            │
└──────┬──────────────────────────────┘
       │
       ├──[Accept]──────────────────┐
       │                            │
       ▼                            ▼
┌──────────────────────┐    ┌──────────────────────┐
│  Active Session      │    │  [Cancel Selected]   │
│  - Timer starts      │    │  Confirmation Dialog │
│  - Billing begins    │    └──────┬───────────────┘
│  - Chat opens        │           │
│  - Messaging enabled │           ▼
└──────┬───────────────┘    ┌──────────────────────┐
       │                    │  Chat Rejected       │
       │                    │  - Auto-apology sent │
       │                    │  - Stats affected    │
       │                    │  - No billing        │
       ▼                    └──────────────────────┘
┌──────────────────────┐
│  Messages Exchanged  │
│  - Real-time sync    │
│  - Balance depleting │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Expert Stops Chat   │
│  - Select reason     │
│  - Session ends      │
│  - Final billing     │
└──────┬───────────────┘
       │
       ▼
┌──────────────────────┐
│  Post-Session State  │
│  - 15-min follow-up  │
│  - Chat archived     │
└──────────────────────┘
```

### 1.2 Expert Onboarding to Active Status

**Steps:**

1. Expert logs into CRM system
2. Navigates to Chat Tab
3. Clicks "Start work" button
4. Confirms action in dialog
5. Status changes to "Online/Working"
6. System enables:
   - Chat request notifications
   - Message sending capabilities
   - "Busy" status option
   - "Stop work" button

**Expected Results:**

- Expert can receive incoming requests
- Interface transitions from disabled to active state
- Balance display updates
- Status indicator shows "Working"

### 1.3 Handling Incoming Chat Request - Accept Path

**Trigger:** Client sends message while expert is online

**Steps:**

1. Popup notification appears at bottom of screen
2. Notification displays:
   - Countdown timer (starts ~30 seconds)
   - Client tier badge (Low/Promising/Casual Client)
   - Client name
   - Assigned expert name
   - Progress bar (visual timer)
3. Expert reviews client information
4. Expert clicks "Accept" button
5. System actions:
   - Opens chat in split view mode (`?mode=split`)
   - Loads full conversation history
   - Displays comprehensive client profile
   - Starts session timer (00:00:00)
   - Activates billing tracker ($0.30/min)
   - Enables messaging interface
   - Records session start timestamp
   - Updates chat status to "ready"
6. Expert can now:
   - Send text messages
   - Use quick response templates
   - Add emojis
   - View/copy client details
   - Toggle translation
   - Mark chat as favourite
   - Apply category tags
   - Stop session at any time

**Expected Results:**

- Chat opens immediately
- Timer begins counting
- All messaging features enabled
- Client balance starts depleting
- Expert and client can exchange messages in real-time

### 1.4 Handling Incoming Chat Request - Reject Path

**Trigger:** Client sends message while expert is online

**Steps:**

1. Popup notification appears (same as accept path)
2. Expert clicks "Cancel" button
3. Confirmation dialog appears:
   - **Heading:** "Confirm cancellation"
   - **Message:** "Are you sure you want to cancel this request?"
   - **Warning:** "The client won't be able to start the session with you."
   - **Options:** "Go Back" or "Confirm"
4. Expert clicks "Confirm"
5. System actions:
   - Records rejection with status "rejected"
   - Tracks pending duration (e.g., "0m 30s")
   - Auto-generates and sends apology message to client:
     - _"Hey gorgeous! Apologies for the reject slip. If you're still keen on chatting, send me a message, and let's make up for lost time!"_
   - Adds rejection marker to chat timeline
   - Updates expert statistics (negative impact)
   - Shows warning notification to expert
6. Chat remains viewable but disabled:
   - Message input disabled
   - Quick templates disabled
   - Only "Report" button active

**Expected Results:**

- Request dismissed from queue
- Client receives automated apology
- Expert sees warning about statistics impact
- No session created
- No billing occurs
- Rejection recorded in chat history

### 1.5 Active Session Management

**During Active Session:**

**Messaging:**

- Expert types in text input field
- Can add emojis via emoji picker
- Clicks "Send" button or presses Enter
- Message appears instantly with:
  - Expert name
  - Timestamp
  - Delivery status (checkmark)
- Client sees message in real-time

**Monitoring:**

- Session timer updates every second
- Billing displays rate ($0.30/min)
- Client balance visible ($XX.XX / XXm remaining)
- Translation can be toggled on/off
- Client details accessible for reference

**Quick Actions:**

- Apply quick response templates (pre-written messages)
- Tag conversation (Support, Tech issues, Fraud, etc.)
- Mark client as favourite
- Hide chat from main view
- Copy client details (DOB, time, location, ID)

### 1.6 Ending a Session

**Steps:**

1. Expert clicks "Stop chat" button (stop icon)
2. Dialog appears: "Stop chat"
3. Expert must select reason:
   - ☐ The client is repeatedly rude or uses obscene language
   - ☐ The client does not trust my work results or he is dissatisfied with the work result
   - ☐ Expert has some technical issues
   - ☐ Client has technical issues
4. "Stop" button becomes enabled after selection
5. Expert clicks "Stop" button
6. System actions:
   - Ends active session immediately
   - Records end timestamp
   - Calculates total duration (e.g., "1m 14s")
   - Adds session end marker to timeline:
     - _"Ended: October 21st, 05:33:55 (1m 14s)"_
   - Finalizes billing calculation
   - Updates expert and client balances
   - Changes chat status to "finished"
   - Shows success notification
   - Displays warning: "The work will not be paid after this!"
   - Enables 15-minute follow-up window
7. Post-session state:
   - Timer freezes at final time
   - Message input remains available (with countdown)
   - Chat moves to completed state
   - Expert can send one follow-up message within 15 minutes

**Expected Results:**

- Session ends cleanly
- Final charges applied
- Chat archived but accessible
- Follow-up period begins

---

## 2. States and Transitions

### 2.1 Expert Status States

```
┌──────────────┐
│   Offline    │ (Not logged in / Not working)
└──────┬───────┘
       │ [Login + Start Work]
       ▼
┌──────────────┐
│    Online    │ (Available for requests)
│   Working    │ - Can receive notifications
└──────┬───────┘ - Messaging enabled
       │         - "Busy" option available
       ├─[Set Busy]────────┐
       │                   ▼
       │            ┌──────────────┐
       │            │     Busy     │ (No new requests)
       │            └──────┬───────┘
       │                   │ [Unset Busy]
       │                   ▼
       └─[Stop Work]───────┐
                           ▼
                    ┌──────────────┐
                    │   Offline    │
                    └──────────────┘
```

**State Details:**

| State              | Description                         | Capabilities                                   | Limitations                                   |
| ------------------ | ----------------------------------- | ---------------------------------------------- | --------------------------------------------- |
| **Offline**        | Expert not logged in or not working | View past chats, settings                      | Cannot receive requests, cannot send messages |
| **Online/Working** | Expert actively available           | Receive requests, send messages, full features | Must respond to requests within timeout       |
| **Busy**           | Expert occupied but working         | Continue active sessions                       | No new request assignments                    |

### 2.2 Chat Request States

```
┌─────────────────┐
│  Client Sends   │
│    Message      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Pending      │ (Waiting for expert response)
│  (~30 sec TTL)  │ - Countdown timer active
└────────┬────────┘ - Notification displayed
         │
         ├─[Accept]────────────┐
         │                     │
         ▼                     ▼
┌─────────────────┐    ┌─────────────────┐
│     Active      │    │ [Cancel/Reject] │
│    Session      │    │   + Confirm     │
└────────┬────────┘    └────────┬────────┘
         │                      │
         │                      ▼
         │              ┌─────────────────┐
         │              │    Rejected     │
         │              │ - Auto-apology  │
         │              │ - Stats penalty │
         │              └─────────────────┘
         │
         ├─[Stop Chat]──────┐
         │                  │
         ▼                  ▼
┌─────────────────┐  ┌─────────────────┐
│    Finished     │  │  Stopped        │
│ (Natural end)   │  │ (Expert ended)  │
└────────┬────────┘  └────────┬────────┘
         │                    │
         └────────┬───────────┘
                  ▼
         ┌─────────────────┐
         │   Archived      │ (15-min follow-up)
         └─────────────────┘
```

**State Transition Table:**

| From State           | Trigger                        | To State        | System Actions                                       |
| -------------------- | ------------------------------ | --------------- | ---------------------------------------------------- |
| **Pending**          | Expert clicks Accept           | **Active**      | Open chat, start timer, enable billing, load profile |
| **Pending**          | Expert clicks Cancel → Confirm | **Rejected**    | Send auto-apology, record rejection, update stats    |
| **Pending**          | Timer expires (~30s)           | **Expired**     | Return to queue or notify client                     |
| **Active**           | Expert clicks Stop → Confirm   | **Stopped**     | End timer, finalize billing, show warning            |
| **Active**           | Client balance depleted        | **Finished**    | Auto-end session, finalize billing                   |
| **Active**           | Client disconnects             | **Interrupted** | Pause timer, wait for reconnection                   |
| **Stopped/Finished** | 15 minutes elapse              | **Archived**    | Lock chat, disable follow-up                         |

### 2.3 Chat Status Indicators

**Visual Indicators in Chat List:**

| Indicator          | Meaning                     | Visual Cue                |
| ------------------ | --------------------------- | ------------------------- |
| **Unread count**   | Number badge (e.g., "1")    | Red badge with number     |
| **Active session** | Currently in progress       | Chat highlighted/selected |
| **Unanswered**     | Client waiting for response | Special icon/filter       |
| **Favourite**      | Marked by expert            | Star icon                 |
| **Hidden**         | Removed from main view      | Moved to "Hidden Chats"   |

### 2.4 Message States

```
┌──────────────┐
│   Composed   │ (Expert typing)
└──────┬───────┘
       │ [Send clicked]
       ▼
┌──────────────┐
│     Sent     │ (Transmitted to server)
└──────┬───────┘
       │
       ▼
┌──────────────┐
│  Delivered   │ (Client received) - Checkmark shown
└──────┬───────┘
       │
       ▼
┌──────────────┐
│     Read     │ (Client viewed) - May show read indicator
└──────────────┘
```

---

## 3. UI and Event Mapping

### 3.1 Page Layout Structure

```
┌─────────────────────────────────────────────────────────────┐
│  HEADER BAR (banner)                                        │
│  ┌──────────────────────────────────────────────────────┐   │
│  │ [Menu] [Chats] [In Progress]  │  [Status Controls]  │   │
│  │                                │  [Balance] [Profile] │   │
│  └──────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────┤
│  MAIN CONTENT AREA                                          │
│  ┌─────────────────────┬───────────────────────────────┐   │
│  │  CHAT LIST PANEL    │  CHAT DETAIL PANEL            │   │
│  │  (Left Side)        │  (Right Side)                 │   │
│  │                     │                               │   │
│  │  [Search Bar]       │  [Client Header]              │   │
│  │  [Filter Button]    │  [Session Timer/Controls]     │   │
│  │                     │  [Translation Toggle]         │   │
│  │  ┌───────────────┐  │                               │   │
│  │  │ Chat Item 1   │  │  [Client Details Panel]       │   │
│  │  ├───────────────┤  │  ┌─────────────────────────┐  │   │
│  │  │ Chat Item 2   │  │  │ • Registration          │  │   │
│  │  ├───────────────┤  │  │ • Birth date/time       │  │   │
│  │  │ Chat Item 3   │  │  │ • Location              │  │   │
│  │  └───────────────┘  │  │ • Zodiac sign           │  │   │
│  │                     │  │ • Pricing info          │  │   │
│  │  [Loading...]       │  └─────────────────────────┘  │   │
│  │                     │                               │   │
│  │                     │  [Hide Chat Button]           │   │
│  │                     │                               │   │
│  │                     │  [Message History]            │   │
│  │                     │  ┌─────────────────────────┐  │   │
│  │                     │  │ Oct 20th                │  │   │
│  │                     │  │ ─────────────────────   │  │   │
│  │                     │  │ [Message 1]             │  │   │
│  │                     │  │ [Message 2]             │  │   │
│  │                     │  │                         │  │   │
│  │                     │  │ Oct 21st                │  │   │
│  │                     │  │ ─────────────────────   │  │   │
│  │                     │  │ [Started session]       │  │   │
│  │                     │  │ [Message 3]             │  │   │
│  │                     │  └─────────────────────────┘  │   │
│  │                     │                               │   │
│  │                     │  [Message Input Area]         │   │
│  │                     │  [Quick Response Templates]   │   │
│  │                     │  [Category Tags]              │   │
│  └─────────────────────┴───────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
│  NOTIFICATION AREA (Bottom)                                 │
│  [New chat request popup] [Timer] [Accept] [Cancel]         │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Component Breakdown

#### **Header Bar Components**

| Component               | Type                            | Function                    | Events                          |
| ----------------------- | ------------------------------- | --------------------------- | ------------------------------- |
| **Menu Button**         | Button                          | Opens navigation drawer     | `onClick` → Drawer opens        |
| **Chats Tab**           | Tab Button                      | Shows all conversations     | `onClick` → Filter: All chats   |
| **In Progress Tab**     | Tab Button                      | Shows active sessions       | `onClick` → Filter: Active only |
| **Hidden Chats**        | Tab Button (disabled initially) | Shows hidden conversations  | `onClick` → Filter: Hidden      |
| **Report Issue Button** | Button                          | Opens issue reporting form  | `onClick` → Modal opens         |
| **Busy Button**         | Toggle Button                   | Sets expert as busy         | `onClick` → Status: Busy        |
| **Start/Stop Work**     | Toggle Button                   | Changes expert availability | `onClick` → Confirmation dialog |
| **Notifications Icon**  | Button                          | Shows notifications panel   | `onClick` → Notifications open  |
| **Profile Area**        | Display + Button                | Shows balance and name      | `onClick` → Profile menu        |
| **Settings Icon**       | Button                          | Opens settings              | `onClick` → Settings modal      |

#### **Chat List Panel Components**

| Component               | Type        | Function                | Events                                                |
| ----------------------- | ----------- | ----------------------- | ----------------------------------------------------- |
| **Search Input**        | Textbox     | Filters chats by name   | `onInput` → Filter list, `onClear` → Reset            |
| **Filter Button**       | Button      | Opens filter menu       | `onClick` → Show menu (Unanswered, Unread, Favourite) |
| **Chat Item**           | Link/Button | Displays chat preview   | `onClick` → Open chat in detail panel                 |
| **Client Tier Badge**   | Badge       | Shows client tier       | Display only (Low/Promising/Casual)                   |
| **Timestamp**           | Text        | Shows last message time | Display only (relative time)                          |
| **Unread Badge**        | Badge       | Shows unread count      | Display only (number)                                 |
| **Favourite Indicator** | Icon        | Shows if favourited     | Display only (star icon)                              |
| **Loading Indicator**   | Progress    | Shows loading state     | Display only (spinner)                                |

**Chat Item Structure:**

```
[Client Tier Badge] [Client Name]
[Message Preview Text...]              [Timestamp]
[Expert Icon] [Expert Name]            [Unread: 1]
```

#### **Chat Detail Panel Components**

| Component              | Type              | Function                         | Events                                |
| ---------------------- | ----------------- | -------------------------------- | ------------------------------------- |
| **Client Tier Badge**  | Badge             | Shows client tier                | Display only                          |
| **Client Name**        | Text              | Shows client name                | Display only                          |
| **Favourite Button**   | Toggle Button     | Mark/unmark favourite            | `onClick` → Toggle favourite status   |
| **Balance Display**    | Text              | Shows client balance and minutes | Display only ($XX.XX / XXm)           |
| **Session Timer**      | Display           | Shows elapsed time               | Updates every second (00:00:00)       |
| **Rate Display**       | Text              | Shows per-minute rate            | Display only ($0.30) with tooltip     |
| **Stop Chat Button**   | Button            | Ends active session              | `onClick` → Stop reason dialog        |
| **Translation Toggle** | Checkbox          | Enables/disables translation     | `onChange` → Toggle translation       |
| **Copy Buttons**       | Buttons           | Copy client details              | `onClick` → Copy to clipboard         |
| **Show All Details**   | Expandable Button | Expands client details           | `onClick` → Expand/collapse           |
| **Hide Chat Button**   | Button            | Hides chat from list             | `onClick` → Move to Hidden Chats      |
| **Message Bubble**     | Display           | Shows message content            | Display only (with timestamp, sender) |
| **Message Input**      | Textbox           | Compose new message              | `onInput`, `onEnter` → Send message   |
| **Emoji Picker**       | Button            | Opens emoji selector             | `onClick` → Show emoji panel          |
| **Send Button**        | Button            | Sends typed message              | `onClick` → Send message              |
| **Report Button**      | Button            | Report client issue              | `onClick` → Report modal              |
| **Template Buttons**   | Buttons           | Insert quick response            | `onClick` → Insert template text      |
| **Category Tags**      | Buttons           | Tag conversation                 | `onClick` → Apply tag                 |

### 3.3 Event Flow Diagrams

#### **Event: Expert Starts Work**

```
User Action                  Frontend Event                  Backend API                    UI Update
─────────────────────────────────────────────────────────────────────────────────────────────────────
[Click "Start work"]    →   onClick handler          →   POST /expert/status        →   Show confirmation dialog
                                                          { status: "online" }
                                                                  │
[Click "Yes"]           →   onClick handler          →   ─────────┘                 →   Button changes to "Stop work"
                            (confirm)                                                    "Busy" button enabled
                                                                                         Status indicator: Online
                                                          WebSocket connection
                                                          established for requests
```

#### **Event: New Chat Request Arrives**

```
Backend Push                 Frontend Handler                 UI Rendering                   User sees
─────────────────────────────────────────────────────────────────────────────────────────────────────
WebSocket message       →   onNewRequest()            →   Create notification popup   →   Popup slides up from bottom
{ type: "new_request",      - Parse request data          - Start countdown timer          - Client info displayed
  chatId: "...",            - Extract client info         - Show Accept/Cancel buttons     - Timer: 30...29...28...
  clientId: "...",                                        - Render progress bar             - Progress bar animates
  timeout: 30 }                                           - Apply styling                   - Alert sound plays (maybe)
```

#### **Event: Expert Accepts Request**

```
User Action                  Frontend Event                  Backend API                    UI Update
─────────────────────────────────────────────────────────────────────────────────────────────────────
[Click "Accept"]        →   onClick handler          →   POST /session/accept       →   Notification dismisses
                            - Extract chatId              { chatId: "..." }               URL changes: ?mode=split
                            - Disable buttons                     │                        Chat panel loads
                            - Show loading                        │
                                                          ←───────┴────────
                                                          Response:
                                                          { status: "ready",
                                                            sessionId: "...",
                                                            startTime: "..." }
                                                                  │
                                                          GET /chat/{id}/messages
                                                          GET /client/{id}/profile
                                                                  │
                                                          ←───────┴────────
                                                          Message history
                                                          Client details
                                                                                         →   Display full chat interface
                                                                                             Start session timer
                                                                                             Enable message input
                                                                                             Load message history
                                                                                             Show client profile
```

#### **Event: Expert Sends Message**

```
User Action                  Frontend Event                  Backend API                    UI Update
─────────────────────────────────────────────────────────────────────────────────────────────────────
[Type message]          →   onInput handler          →   (No API call)              →   Update character count (if any)
[Click "Send"]          →   onClick handler          →   POST /message              →   Optimistic UI: Show message
                            - Get message text            { chatId: "...",                immediately with "sending" state
                            - Validate not empty            text: "...",
                            - Clear input                   timestamp: "..." }
                                                                  │
                                                          ←───────┴────────
                                                          Response:
                                                          { messageId: "...",
                                                            status: "sent",
                                                            timestamp: "..." }
                                                                  │                    →   Update message: "sent" state
                                                                  │                        Show checkmark
                                                          WebSocket push to client         Scroll to bottom
                                                          (Client receives message)
```

#### **Event: Expert Stops Chat**

```
User Action                  Frontend Event                  Backend API                    UI Update
─────────────────────────────────────────────────────────────────────────────────────────────────────
[Click "Stop chat"]     →   onClick handler          →   (No API call yet)          →   Show "Stop chat" dialog
                                                                                             with reason options
                                                                                             "Stop" button disabled

[Select reason]         →   onChange handler         →   (No API call yet)          →   "Stop" button enabled
                            - Store selected reason

[Click "Stop"]          →   onClick handler          →   POST /session/stop         →   Dialog shows loading
                            - Get selected reason         { chatId: "...",
                            - Confirm action                sessionId: "...",
                                                            reason: "...",
                                                            duration: "..." }
                                                                  │
                                                          ←───────┴────────
                                                          Response:
                                                          { status: "finished",
                                                            endTime: "...",
                                                            totalCharge: "..." }
                                                                  │                    →   Dialog closes
                                                                  │                        Success notification shows
                                                          PUT /chat/{id}/status             Warning banner appears
                                                          { status: "finished" }            Timer freezes
                                                                                             Add "Ended" marker
                                                                                             Message input: disabled
                                                                                             Start 15-min countdown
```

### 3.4 Real-Time Event Subscriptions

**WebSocket Events:**

| Event Type            | Triggered When           | Payload                                                 | UI Action                                |
| --------------------- | ------------------------ | ------------------------------------------------------- | ---------------------------------------- |
| `new_request`         | Client initiates contact | `{ chatId, clientId, clientName, clientTier, timeout }` | Show notification popup, start countdown |
| `request_expired`     | Request timeout elapsed  | `{ chatId, reason: "timeout" }`                         | Dismiss notification                     |
| `message_received`    | Client sends message     | `{ chatId, messageId, text, senderId, timestamp }`      | Add message to chat, update unread count |
| `client_typing`       | Client is typing         | `{ chatId, isTyping }`                                  | Show "typing..." indicator               |
| `client_disconnected` | Client loses connection  | `{ chatId, reason }`                                    | Show warning banner                      |
| `balance_update`      | Client balance changes   | `{ chatId, clientId, newBalance, remainingMinutes }`    | Update balance display                   |
| `session_warning`     | Low balance or time      | `{ chatId, warningType, remainingTime }`                | Show warning notification                |

---

## 4. Error Handling

### 4.1 Network Errors

| Error Scenario             | Detection            | System Response                                         | User Experience                                                |
| -------------------------- | -------------------- | ------------------------------------------------------- | -------------------------------------------------------------- |
| **Connection Lost**        | WebSocket disconnect | Attempt auto-reconnect (3 retries), show warning banner | Banner: "Connection lost. Reconnecting..."                     |
| **API Timeout**            | Request > 30 seconds | Retry once, then show error                             | Error toast: "Request timed out. Please try again."            |
| **Server Error (500)**     | HTTP 500 response    | Log error, show generic message                         | Modal: "Something went wrong. Please refresh and try again."   |
| **Authentication Expired** | HTTP 401 response    | Redirect to login, preserve state                       | Redirect with message: "Session expired. Please log in again." |
| **Rate Limit Exceeded**    | HTTP 429 response    | Show cooldown message                                   | Toast: "Too many requests. Please wait X seconds."             |

### 4.2 User Input Errors

| Error Scenario             | Validation              | Prevention                  | User Feedback                                   |
| -------------------------- | ----------------------- | --------------------------- | ----------------------------------------------- |
| **Empty Message**          | Check text length > 0   | Disable Send button         | Button remains disabled                         |
| **Message Too Long**       | Check text length < max | Character counter, truncate | Warning: "Message too long (max X chars)"       |
| **Invalid Characters**     | Sanitize input          | Auto-remove or escape       | Silent cleanup or warning tooltip               |
| **Send During Offline**    | Check connection status | Disable input, show warning | Banner: "Cannot send messages while offline"    |
| **Send After Session End** | Check session status    | Disable input               | Message: "Session ended. Cannot send messages." |

### 4.3 Business Logic Errors

| Error Scenario                  | Detection                       | System Response                       | User Experience                                                        |
| ------------------------------- | ------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| **Request Already Accepted**    | Server rejects duplicate accept | Dismiss notification, show info       | Toast: "This request has already been accepted by another expert."     |
| **Client Offline**              | Client disconnect before accept | Update notification status            | Notification grayed out: "Client is no longer available"               |
| **Insufficient Client Balance** | Balance check during session    | Auto-end session, notify both parties | Warning: "Client balance depleted. Session ended."                     |
| **Expert Not Online**           | Status check on request arrival | Queue request or reassign             | (Expert doesn't see notification)                                      |
| **Session Already Active**      | Check for existing session      | Prevent new session, show error       | Modal: "You already have an active session. Please complete it first." |
| **Invalid Stop Reason**         | No reason selected              | Disable Stop button                   | Tooltip: "Please select a reason before stopping"                      |

### 4.4 Edge Cases

| Edge Case                                   | Handling                           | Expected Behavior                                    |
| ------------------------------------------- | ---------------------------------- | ---------------------------------------------------- |
| **Request timeout during expert decision**  | Auto-dismiss notification          | Notification fades out, no penalty if not interacted |
| **Client sends message during loading**     | Queue message, show after load     | Message appears once chat opens                      |
| **Expert refreshes page during session**    | Restore session state from server  | Session continues, timer syncs with server           |
| **Multiple experts accept same request**    | First accept wins, reject others   | Losing expert sees: "Already accepted"               |
| **Network fluctuation during message send** | Queue message locally, retry       | Message shows "sending..." until success             |
| **Expert closes tab with active session**   | Session remains active on server   | Other tabs or login shows active session             |
| **Client balance depletes mid-message**     | Complete current message, then end | Last message delivers, then auto-stop                |

### 4.5 Error Recovery Procedures

**For Connection Loss:**

1. Detect WebSocket disconnect
2. Show non-intrusive banner: "Connection lost"
3. Attempt reconnection every 5 seconds (max 3 attempts)
4. If reconnection successful:
   - Sync messages (fetch any missed)
   - Update UI state
   - Show success: "Reconnected"
5. If all attempts fail:
   - Show error modal with "Refresh" button
   - Preserve draft messages in local storage

**For Session Interruption:**

1. Detect interruption (client disconnect, server error)
2. Pause timer
3. Show warning banner with reason
4. Wait for resolution (timeout: 2 minutes)
5. If resolved: Resume session, sync state
6. If timeout: Offer options:
   - End session (pro-rated billing)
   - Wait longer (extend timeout)
   - Report issue

**For Data Sync Issues:**

1. Detect mismatch (timer, balance, messages)
2. Fetch authoritative state from server
3. Show brief loading indicator
4. Update UI to match server state
5. If conflict (e.g., duplicate messages):
   - Deduplicate by messageId
   - Keep server version as source of truth

---

## 5. API Overview

### 5.1 Inferred API Endpoints

#### **Authentication & Session Management**

**POST `/auth/login`**

- **Purpose:** Authenticate expert
- **Request:**
  ```json
  {
    "email": "expert@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here",
    "expertId": "expert_123",
    "name": "Test astrologer",
    "balance": 35.4
  }
  ```

**PUT `/expert/status`**

- **Purpose:** Update expert availability status
- **Request:**
  ```json
  {
    "status": "online" | "busy" | "offline",
    "expertId": "expert_123"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "newStatus": "online",
    "timestamp": "2025-10-21T05:32:00Z"
  }
  ```

#### **Chat Management**

**GET `/chats`**

- **Purpose:** Fetch list of all chats for expert
- **Query Parameters:**
  - `filter`: "all" | "unanswered" | "unread" | "favourite"
  - `mode`: "split" | "full"
  - `page`: pagination (optional)
  - `limit`: results per page (optional)
- **Response:**
  ```json
  {
    "chats": [
      {
        "chatId": "chat_123",
        "clientId": "client_456",
        "clientName": "Test user",
        "clientTier": "low" | "promising" | "casual",
        "lastMessage": "I need advice",
        "lastMessageTime": "2025-10-21T05:32:42Z",
        "unreadCount": 1,
        "status": "active" | "finished" | "pending",
        "isFavourite": false,
        "assignedExpert": {
          "expertId": "expert_123",
          "name": "Test astrologer"
        }
      }
    ],
    "totalCount": 5,
    "hasMore": false
  }
  ```

**GET `/chat/{chatId}`**

- **Purpose:** Fetch specific chat details
- **Response:**
  ```json
  {
    "chatId": "chat_123",
    "clientId": "client_456",
    "status": "active",
    "createdAt": "2025-10-20T19:40:00Z",
    "sessionId": "session_789" // if active
  }
  ```

**GET `/chat/{chatId}/messages`**

- **Purpose:** Fetch message history
- **Query Parameters:**
  - `before`: timestamp (for pagination)
  - `limit`: messages to fetch
- **Response:**
  ```json
  {
    "messages": [
      {
        "messageId": "msg_001",
        "chatId": "chat_123",
        "senderId": "client_456",
        "senderType": "client" | "expert",
        "text": "I need advice",
        "timestamp": "2025-10-21T05:32:42Z",
        "status": "read" | "delivered" | "sent"
      }
    ],
    "hasMore": false
  }
  ```

**PUT `/chat/{chatId}/status`**

- **Purpose:** Update chat status
- **Request:**
  ```json
  {
    "status": "favourite" | "hidden" | "archived",
    "action": "add" | "remove"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "chatId": "chat_123",
    "newStatus": "favourite"
  }
  ```

#### **Session Management**

**POST `/session/accept`**

- **Purpose:** Accept incoming chat request
- **Request:**
  ```json
  {
    "chatId": "chat_123",
    "expertId": "expert_123"
  }
  ```
- **Response:**
  ```json
  {
    "sessionId": "session_789",
    "chatId": "chat_123",
    "status": "ready",
    "startTime": "2025-10-21T05:32:45Z",
    "rate": 0.3,
    "clientBalance": 36.0,
    "estimatedMinutes": 36
  }
  ```

**POST `/session/reject`** or **POST `/session/cancel`**

- **Purpose:** Reject/cancel incoming chat request
- **Request:**
  ```json
  {
    "chatId": "chat_123",
    "expertId": "expert_123",
    "reason": "expert_declined" | "timeout" | "client_unavailable",
    "pendingDuration": 30 // seconds
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "chatId": "chat_123",
    "status": "rejected",
    "rejectedAt": "2025-10-21T05:35:45Z",
    "apologyMessageSent": true
  }
  ```

**POST `/session/stop`**

- **Purpose:** End active session
- **Request:**
  ```json
  {
    "sessionId": "session_789",
    "chatId": "chat_123",
    "reason": "client_tech_issues" | "expert_tech_issues" | "client_rude" | "client_distrust",
    "duration": 74 // seconds
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "sessionId": "session_789",
    "status": "finished",
    "endTime": "2025-10-21T05:33:55Z",
    "totalDuration": "1m 14s",
    "totalCharge": 0.37,
    "expertEarning": 0.3,
    "remainingBalance": 35.63
  }
  ```

**GET `/session/{sessionId}/status`**

- **Purpose:** Check current session status
- **Response:**
  ```json
  {
    "sessionId": "session_789",
    "chatId": "chat_123",
    "status": "active",
    "elapsedTime": 45, // seconds
    "currentCharge": 0.23,
    "clientBalance": 35.77
  }
  ```

#### **Messaging**

**POST `/message`** or **POST `/chat/{chatId}/message`**

- **Purpose:** Send message in chat
- **Request:**
  ```json
  {
    "chatId": "chat_123",
    "sessionId": "session_789", // if active session
    "senderId": "expert_123",
    "text": "Hello! I'm here to help you.",
    "timestamp": "2025-10-21T05:33:31Z"
  }
  ```
- **Response:**
  ```json
  {
    "messageId": "msg_002",
    "chatId": "chat_123",
    "status": "sent",
    "timestamp": "2025-10-21T05:33:31Z",
    "deliveredAt": "2025-10-21T05:33:31Z"
  }
  ```

**POST `/message/template`**

- **Purpose:** Send quick response template
- **Request:**
  ```json
  {
    "chatId": "chat_123",
    "templateId": "template_support_001",
    "variables": {
      "clientName": "Test user"
    }
  }
  ```
- **Response:**
  ```json
  {
    "messageId": "msg_003",
    "text": "Hello Test user! How can I help you today?",
    "status": "sent"
  }
  ```

**POST `/message/system`**

- **Purpose:** Send system-generated message (e.g., auto-apology)
- **Request:**
  ```json
  {
    "chatId": "chat_123",
    "templateType": "rejection_apology",
    "senderId": "expert_123",
    "autoSend": true
  }
  ```
- **Response:**
  ```json
  {
    "messageId": "msg_004",
    "text": "Hey gorgeous! Apologies for the reject slip...",
    "status": "sent",
    "isSystemMessage": true
  }
  ```

#### **Client Information**

**GET `/client/{clientId}`** or **GET `/client/{clientId}/profile`**

- **Purpose:** Fetch detailed client profile
- **Response:**
  ```json
  {
    "clientId": "client_456",
    "userId": "5272179",
    "name": "Test user",
    "tier": "low",
    "registeredAt": "2025-10-20T00:00:00Z",
    "profile": {
      "birthDate": "1990-01-01",
      "birthTime": "00:00:00",
      "birthPlace": "Greenwich, Greater London, United Kingdom",
      "zodiacSign": "capricorn",
      "gender": "male"
    },
    "balance": 36.0,
    "estimatedMinutes": 36,
    "pricing": {
      "chatRate": 0.3,
      "audioCallRate": 0.3
    },
    "acquisitionChannel": "sign_up",
    "assignedExpert": {
      "expertId": "expert_123",
      "name": "Test astrologer"
    }
  }
  ```

#### **Statistics & Reporting**

**PUT `/expert/{expertId}/statistics`**

- **Purpose:** Update expert performance statistics
- **Request:**
  ```json
  {
    "eventType": "rejection" | "acceptance" | "session_complete",
    "metadata": {
      "chatId": "chat_123",
      "duration": 74
    }
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "updatedStats": {
      "totalChats": 150,
      "acceptanceRate": 0.92,
      "rejectionCount": 12,
      "averageSessionTime": "5m 30s"
    }
  }
  ```

#### **Translation**

**PUT `/chat/{chatId}/translation`**

- **Purpose:** Toggle translation for chat
- **Request:**
  ```json
  {
    "enabled": true,
    "sourceLanguage": "en",
    "targetLanguage": "es"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "translationEnabled": true
  }
  ```

### 5.2 WebSocket Events

**Connection:** `wss://stage.nebula-expert.com/ws/expert/{expertId}`

**Event: `new_request`**

```json
{
  "type": "new_request",
  "chatId": "chat_123",
  "clientId": "client_456",
  "clientName": "Test user",
  "clientTier": "low",
  "timeout": 30,
  "assignedExpertId": "expert_123",
  "assignedExpertName": "Test astrologer",
  "timestamp": "2025-10-21T05:32:42Z"
}
```

**Event: `message_received`**

```json
{
  "type": "message_received",
  "chatId": "chat_123",
  "messageId": "msg_001",
  "senderId": "client_456",
  "senderType": "client",
  "text": "I need advice",
  "timestamp": "2025-10-21T05:32:42Z"
}
```

**Event: `session_started`**

```json
{
  "type": "session_started",
  "sessionId": "session_789",
  "chatId": "chat_123",
  "startTime": "2025-10-21T05:32:45Z",
  "rate": 0.3
}
```

**Event: `balance_update`**

```json
{
  "type": "balance_update",
  "chatId": "chat_123",
  "clientId": "client_456",
  "newBalance": 35.7,
  "remainingMinutes": 35,
  "timestamp": "2025-10-21T05:33:45Z"
}
```

**Event: `session_ended`**

```json
{
  "type": "session_ended",
  "sessionId": "session_789",
  "chatId": "chat_123",
  "reason": "expert_stopped" | "balance_depleted" | "client_disconnected",
  "endTime": "2025-10-21T05:33:55Z",
  "duration": 74,
  "totalCharge": 0.37
}
```

**Event: `client_typing`**

```json
{
  "type": "client_typing",
  "chatId": "chat_123",
  "clientId": "client_456",
  "isTyping": true
}
```

**Event: `request_expired`**

```json
{
  "type": "request_expired",
  "chatId": "chat_123",
  "reason": "timeout",
  "timestamp": "2025-10-21T05:33:15Z"
}
```

### 5.3 Data Flow Summary

```
┌─────────────┐
│   Client    │
│   Mobile    │
│    App      │
└──────┬──────┘
       │
       │ HTTP/WebSocket
       │
       ▼
┌─────────────────────────────────────┐
│      API Gateway / Load Balancer    │
└──────┬──────────────────────────────┘
       │
       ├─[REST]────────────┐
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   Session   │     │   Chat      │
│   Service   │     │   Service   │
└──────┬──────┘     └──────┬──────┘
       │                   │
       ├───────────────────┤
       │                   │
       ▼                   ▼
┌─────────────────────────────────────┐
│         Message Queue (Redis)       │
│      - Real-time event routing      │
└──────┬──────────────────────────────┘
       │
       │ WebSocket
       │
       ▼
┌─────────────┐
│   Expert    │
│ CRM Client  │
│  (Browser)  │
└─────────────┘
```

**Key Data Flows:**

1. **Request Flow:**
   - Client → API → Session Service → Message Queue → WebSocket → Expert

2. **Message Flow:**
   - Expert → API → Chat Service → Message Queue → WebSocket → Client

3. **Status Updates:**
   - Session Service → Message Queue → WebSocket → Both Expert & Client

4. **Billing Updates:**
   - Session Service (timer) → Billing Service → Balance Update → WebSocket → Expert

---

## 6. Additional Findings

### 6.1 Business Rules

**Chat Request Assignment:**

- Requests appear to be assigned to specific experts (not round-robin)
- Assignment shown as "Expert outline [Expert Name]"
- Same client may be consistently assigned to same expert

**Billing Model:**

- **Rate:** $0.30 per minute
- **Billing granularity:** Per minute (updated every 60 seconds)
- **Balance display:** Shows both dollar amount and equivalent minutes
- **Balance depletion:** Session auto-ends when client balance reaches $0
- **Pro-rated billing:** If expert stops early, client only charged for actual time

**Client Tiers:**

- **Low Client:** Lower-value client segment
- **Promising Client:** Mid-value client segment
- **Casual Client:** Regular engagement client
- Tier affects prioritization and potential earnings

**Statistics & Performance Metrics:**

- Acceptance rate tracked
- Rejection count recorded
- Rejections negatively impact expert statistics
- May affect future request assignments
- Likely tied to expert rating/ranking system

**Post-Session Rules:**

- 15-minute follow-up window after session ends
- Expert can send ONE additional message within this window
- After 15 minutes, chat becomes read-only
- Follow-up message appears as regular message (not system message)

### 6.2 User Experience Observations

**Positive UX Patterns:**

- Clear visual countdown timer for requests (no ambiguity)
- Double confirmation on rejections (prevents accidents)
- Auto-apology maintains client satisfaction despite rejection
- Quick response templates speed up common interactions
- Copy buttons on client details reduce manual work
- Real-time balance display keeps expert informed
- Session timer highly visible (no surprises on billing)

**Potential UX Issues:**

- Request timeout (~30 seconds) may be too short if expert is multitasking
- No "snooze" or "defer" option for requests
- Rejection reason dialog forces expert to pick from limited options
- Warning "This reject will affect your statistics!" creates pressure
- Message input still visible after rejection (disabled) - may be confusing
- Follow-up timer (12:57 left) not prominently displayed
- Quick response templates have unclear names ("Test Group_1759597628072")

**Missing Features (Observed Limitations):**

- No bulk actions (mark multiple chats as read, archive multiple)
- No search within chat history
- No message edit/delete functionality
- No typing indicator for expert (client can't see expert typing)
- No read receipts shown for expert's messages
- No emoji reaction feature on messages
- No file/image sharing capability
- No voice message option
- No chat transcript export/download
- No analytics dashboard for expert performance

### 6.3 Technical Observations

**Frontend Framework:**

- Likely React-based (inferred from console errors and component structure)
- Uses accessibility snapshot structure (ARIA attributes)
- Client-side routing (URL changes without page reload)
- Optimistic UI updates (messages appear instantly)

**Third-Party Integrations:**

- **Amplitude:** Analytics tracking (warned about default tracking config)
- **Intercom:** Customer support widget (App ID not set in test environment)
- Potential translation service (toggle present but mechanism unclear)

**Performance Considerations:**

- Chat list loads incrementally (progress indicator visible)
- Message history paginated (scroll to load more)
- WebSocket for real-time updates (reduces polling overhead)
- Local state management for draft messages

**Console Errors:**

- 404 errors for some resources (non-critical)
- Intercom App ID warnings (expected in test environment)
- Amplitude configuration warnings (default settings)
- Some styling errors (custom CSS issues)

### 6.4 Security Considerations

**Observed Security Measures:**

- Session-based authentication (expert must log in)
- JWT tokens likely used (inferred from typical architecture)
- Expert can only see chats assigned to them
- Client details protected (not visible until chat accepted)
- Copy functionality for sensitive data (DOB, location) - clipboard access

**Potential Security Concerns:**

- Client ID visible in UI ("5272179") - may enable ID enumeration
- Chat IDs visible in URLs - may be predictable if sequential
- No visible indication of message encryption
- No password/PIN for accessing sensitive client data
- Session timeout not observed (may persist indefinitely)

### 6.5 Accessibility

**Positive Accessibility Features:**

- ARIA labels on interactive elements
- Keyboard navigation supported
- Button labels descriptive
- Focus management in dialogs

**Potential Accessibility Issues:**

- Color-only differentiation for client tiers
- Timer relies on visual countdown (no audio cue)
- Progress bar may not announce updates to screen readers
- Some buttons have icon-only labels

### 6.6 Localization

**Observed:**

- All UI text in English
- Translation toggle suggests multi-language support
- Client location includes full geographic names
- Date/time in localized format (relative: "1d ago", "yesterday")

**Not Observed:**

- Right-to-left (RTL) language support
- Currency localization (always USD $)
- Timezone handling (times shown in expert's local time?)

### 6.7 Recommendations

**For Improved UX:**

1. Extend request timeout to 45-60 seconds
2. Add "Defer 5 minutes" option for requests
3. Make follow-up timer more prominent
4. Simplify quick response template names
5. Add confirmation on accidental tab close during active session
6. Show typing indicator for expert
7. Add message search functionality
8. Provide session analytics/insights

**For Better Performance:**

1. Implement request pagination in chat list
2. Add virtual scrolling for long message histories
3. Optimize WebSocket reconnection logic
4. Cache client profiles locally

**For Enhanced Security:**

1. Obfuscate client IDs in UI
2. Use UUIDs for chat IDs (not sequential)
3. Add session timeout (auto-logout after inactivity)
4. Implement end-to-end encryption for messages
5. Add PIN/2FA for accessing sensitive client data

**For Accessibility:**

1. Add audio cues for incoming requests
2. Announce timer updates to screen readers
3. Improve color contrast for tier badges
4. Add keyboard shortcuts for common actions

---

## 7. Conclusion

The **NebulaX CRM Chat Tab** is a well-structured, real-time communication platform designed for expert-client consultations. The system handles the complete interaction lifecycle from request acceptance through active sessions to completion, with built-in billing, client management, and performance tracking.

### Strengths:

- ✅ Clear request/accept/reject flow with confirmations
- ✅ Real-time messaging with WebSocket architecture
- ✅ Comprehensive client profile access
- ✅ Time-based billing with transparent rate display
- ✅ Quick response templates for efficiency
- ✅ Statistics tracking for expert performance
- ✅ Auto-apology system maintains client satisfaction

### Areas for Improvement:

- ⚠️ Short request timeout may cause missed opportunities
- ⚠️ Rejection penalty creates pressure (may affect quality)
- ⚠️ Limited message features (no edit, delete, file sharing)
- ⚠️ Quick response templates poorly named
- ⚠️ Follow-up window timer not prominent enough

### Critical Observations:

- **Rejection Impact:** System penalizes experts for rejections, which may incentivize accepting unsuitable chats rather than declining
- **Billing Transparency:** Clear rate display and timer reduce billing disputes
- **Client Retention:** Auto-apology and follow-up window show focus on client satisfaction
- **Expert Control:** Experts have significant control (stop chat, hide, categorize) which empowers them

### Next Steps for Full Production Readiness:

1. Conduct load testing for concurrent sessions
2. Implement comprehensive error logging and monitoring
3. Add session analytics dashboard for experts
4. Enhance security measures (encryption, authentication)
5. Improve accessibility compliance (WCAG 2.1 AA)
6. Implement A/B testing for UX improvements
7. Add customer support integration for escalations

---

## Appendix A: Glossary

| Term                        | Definition                                                           |
| --------------------------- | -------------------------------------------------------------------- |
| **Chat Tab**                | Main interface for expert-client communication in CRM                |
| **Expert**                  | Astrologer providing consultations to clients                        |
| **Client**                  | User seeking astrological consultation                               |
| **Session**                 | Active consultation period with time-based billing                   |
| **Request**                 | Client-initiated contact attempt requiring expert acceptance         |
| **Client Tier**             | Categorization of clients (Low, Promising, Casual)                   |
| **Quick Response Template** | Pre-written message for common scenarios                             |
| **Split View Mode**         | Interface layout with chat list and detail panels side-by-side       |
| **Follow-up Window**        | 15-minute period after session for expert to send additional message |
| **Auto-apology**            | System-generated message sent when expert rejects request            |
| **Stop Chat**               | Expert-initiated session termination                                 |
| **Hidden Chats**            | Chats removed from main view but still accessible                    |

---

## Appendix B: Test Data

**Test Environment:** Stage (https://stage.nebula-expert.com/)  
**Test Expert:** Test astrologer (Test task user)  
**Test Client:** Test user (Low Client)  
**Pricing:** $0.30/minute  
**Test Chat ID:** f6db901e-3674-4f07-9bec-87081c0a7464  
**Test User ID:** 5272179

**Sample Client Profile:**

- **Name:** Test user
- **Tier:** Low Client
- **Balance:** $36.00 (36 minutes)
- **Birth Date:** 01.01.1990 (35 years old)
- **Birth Time:** 00:00:00
- **Birth Place:** Greenwich, Greater London, United Kingdom
- **Zodiac:** Capricorn
- **Gender:** Male
- **Acquisition:** sign_up
- **Registered:** 1 day ago

---

**Document Prepared By:** QA Analysis System  
**Review Status:** Complete  
**Last Updated:** October 21, 2025
