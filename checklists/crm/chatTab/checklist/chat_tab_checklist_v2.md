# NebulaX CRM - Chat Tab Functional Verification Checklist (v2)

**Document Version:** 2.0  
**Created:** October 21, 2025  
**System:** NebulaX Expert CRM - Chat Tab Module  
**Environment:** Stage (https://stage.nebula-expert.com/)  
**Based on:** `chat_tab_analysis.md` comprehensive product analysis

---

## Overview

This checklist provides comprehensive functional verification points for the Chat Tab module in the NebulaX CRM system. Each item focuses on a single testable functionality and should be verified independently. This version includes complete coverage of all features identified in the product requirements analysis.

---

## 1. Expert Status Management

### 1.1 Starting Work

- [ ] "Start work" button is visible when expert is offline/not working
- [ ] Clicking "Start work" displays confirmation dialog
- [ ] Confirmation dialog contains "Yes" and "No" options
- [ ] Clicking "Yes" changes expert status to "Online/Working"
- [ ] Status indicator updates to show "Working" state
- [ ] "Start work" button changes to "Stop work" button
- [ ] "Busy" toggle button becomes enabled after starting work
- [ ] System enables chat request notifications
- [ ] Expert can receive incoming chat requests after starting work

### 1.2 Stopping Work

- [ ] "Stop work" button is visible when expert is working
- [ ] Clicking "Stop work" displays confirmation dialog
- [ ] Confirming stop work changes status to offline
- [ ] Active sessions are handled appropriately when stopping work
- [ ] Chat request notifications are disabled after stopping work
- [ ] "Busy" toggle button becomes disabled after stopping work

### 1.3 Busy Status

- [ ] "Busy" toggle button is visible when expert is working
- [ ] Clicking "Busy" changes expert status to busy
- [ ] Expert does not receive new chat requests when busy
- [ ] Active sessions can continue when expert is busy
- [ ] Expert can toggle busy status on/off

---

## 2. Chat Request Handling

### 2.1 Receiving Requests

- [ ] Notification popup appears when client initiates contact
- [ ] Popup displays countdown timer (starts at ~30 seconds)
- [ ] Client tier badge is visible (Low/Promising/Casual Client)
- [ ] Client name is displayed in notification
- [ ] Assigned expert name is shown in notification
- [ ] Progress bar animates to show remaining time
- [ ] "Accept" button is visible and enabled
- [ ] "Cancel" button is visible and enabled
- [ ] Notification dismisses automatically if timer expires
- [ ] Audio alert plays when notification appears (if implemented)

### 2.2 Accepting Requests

- [ ] Clicking "Accept" opens chat in split view mode
- [ ] URL changes to include `?mode=split` parameter
- [ ] Full conversation history loads after acceptance
- [ ] Client profile displays with complete details
- [ ] Session timer starts at 00:00:00
- [ ] Billing tracker displays rate ($0.30/min)
- [ ] Client balance and estimated minutes are shown
- [ ] Messaging interface is enabled
- [ ] Message input field is active and editable
- [ ] Notification popup dismisses after acceptance
- [ ] Chat status changes to "ready" or "active"
- [ ] Quick response templates become accessible
- [ ] Emoji picker becomes available
- [ ] "Stop chat" button is visible and enabled

### 2.3 Rejecting Requests

- [ ] Clicking "Cancel" displays confirmation dialog
- [ ] Confirmation dialog shows "Confirm cancellation" heading
- [ ] Warning message about client impact is displayed
- [ ] "Go Back" button returns to notification without rejecting
- [ ] "Confirm" button completes the rejection
- [ ] Auto-apology message is sent to client after rejection
- [ ] Rejection is recorded in chat history with timestamp
- [ ] Warning notification shows statistics impact to expert
- [ ] Chat becomes visible but disabled after rejection
- [ ] Message input is disabled in rejected chat
- [ ] Quick response templates are disabled in rejected chat
- [ ] Only "Report" button remains active in rejected chat
- [ ] Rejection marker appears in chat timeline

### 2.4 Request Timeout

- [ ] Notification dismisses automatically when timer reaches 0
- [ ] No penalty is applied if expert doesn't interact with notification
- [ ] Chat request returns to queue or reassigns to another expert

---

## 3. Active Session Management

### 3.1 Session Timer

- [ ] Timer starts at 00:00:00 when session begins
- [ ] Timer updates every second during active session
- [ ] Timer displays in HH:MM:SS format
- [ ] Timer is prominently visible in chat interface
- [ ] Timer pauses if session is interrupted
- [ ] Timer freezes at final time when session ends
- [ ] Timer syncs with server after page refresh

### 3.2 Billing Display

- [ ] Billing rate ($0.30/min) is clearly displayed
- [ ] Client balance updates in real-time during session
- [ ] Estimated remaining minutes are shown
- [ ] Balance format shows both dollar amount and minutes
- [ ] Warning appears when client balance is low
- [ ] Session auto-ends when client balance reaches $0

### 3.3 Client Profile Access

- [ ] Client name is displayed in chat header
- [ ] Client tier badge is visible
- [ ] Registration date is shown
- [ ] Birth date is displayed
- [ ] Birth time is shown
- [ ] Birth place is accessible
- [ ] Zodiac sign is displayed
- [ ] Gender is shown
- [ ] User ID is visible
- [ ] Acquisition channel is displayed
- [ ] Copy buttons work for each copyable field
- [ ] "Show All Details" expands full client information
- [ ] Client details can be collapsed after expansion

---

## 4. Messaging Functionality

### 4.1 Sending Messages

- [ ] Message input field accepts text input
- [ ] "Send" button is enabled when message is not empty
- [ ] "Send" button is disabled when message is empty
- [ ] Pressing Enter key sends message
- [ ] Message appears in chat immediately (optimistic UI)
- [ ] Sent messages show delivery status (checkmark)
- [ ] Expert name appears with sent message
- [ ] Timestamp is displayed for each message
- [ ] Message input clears after sending
- [ ] Long messages wrap properly in message bubble
- [ ] Character limit (if any) is enforced

### 4.2 Receiving Messages

- [ ] Client messages appear in real-time
- [ ] Client name is shown with received messages
- [ ] Timestamp is displayed for received messages
- [ ] Messages are visually distinguished (expert vs. client)
- [ ] Chat scrolls to bottom when new message arrives
- [ ] Unread count updates when new message is received
- [ ] Notification badge appears on chat list item

### 4.3 Message History

- [ ] Previous messages load when chat is opened
- [ ] Messages are grouped by date (date separators visible)
- [ ] Scrolling up loads older messages (pagination)
- [ ] Session markers are displayed (Started, Ended)
- [ ] System messages are visually distinct
- [ ] Message order is chronologically correct
- [ ] Timestamps are in correct timezone

### 4.4 Emoji Support

- [ ] Emoji picker button is visible
- [ ] Clicking emoji button opens emoji selector
- [ ] Selected emoji is inserted at cursor position
- [ ] Emojis display correctly in sent messages
- [ ] Emojis display correctly in received messages
- [ ] Emoji picker closes after selection

### 4.5 Quick Response Templates

- [ ] Quick response template buttons are visible
- [ ] Templates are organized by category or type
- [ ] Clicking template button inserts text into input field
- [ ] Template text can be edited before sending
- [ ] Templates work during active sessions
- [ ] Templates are disabled when session is not active

---

## 5. Session Termination

### 5.1 Expert-Initiated Stop

- [ ] "Stop chat" button is visible during active session
- [ ] Clicking "Stop chat" displays stop reason dialog
- [ ] Dialog shows "Stop chat" heading
- [ ] Four reason options are displayed
- [ ] Only one reason can be selected at a time
- [ ] "Stop" button is disabled until reason is selected
- [ ] "Stop" button is enabled after reason selection
- [ ] Clicking "Stop" ends session immediately
- [ ] Session end marker is added to timeline with timestamp
- [ ] Total duration is displayed in end marker
- [ ] Final billing calculation is shown
- [ ] Success notification appears
- [ ] Warning about unpaid work is displayed
- [ ] Chat status changes to "finished"
- [ ] Timer freezes at final duration

### 5.2 Post-Session State

- [ ] Message input remains available after session ends
- [ ] 15-minute countdown timer is displayed
- [ ] Expert can send one follow-up message within 15 minutes
- [ ] Follow-up timer counts down in real-time
- [ ] Message input disables after 15-minute window expires
- [ ] Chat moves to completed/archived state
- [ ] Session details are preserved and viewable

### 5.3 Automatic Session End

- [ ] Session ends automatically when client balance depletes
- [ ] Notification appears when auto-end occurs
- [ ] Final billing is calculated correctly
- [ ] Session end marker shows appropriate reason
- [ ] Expert is notified of auto-end reason

---

## 6. Chat List Management

### 6.1 Chat List Display

- [ ] Chat list displays all conversations
- [ ] Each chat item shows client name
- [ ] Client tier badge is visible on each item
- [ ] Last message preview is displayed
- [ ] Timestamp of last message is shown
- [ ] Assigned expert name is displayed
- [ ] Unread count badge appears when applicable
- [ ] Favourite indicator shows for favourited chats
- [ ] Active chat is highlighted/selected
- [ ] Chat list supports scrolling for many chats
- [ ] Loading indicator appears while chats are loading

### 6.2 Search and Filter

- [ ] Search input field is visible
- [ ] Search filters chats by client name in real-time
- [ ] Search can be cleared with clear button
- [ ] Filter button is visible and accessible
- [ ] Filter menu shows all filter options
- [ ] "Unanswered" filter displays only unanswered chats
- [ ] "Unread" filter displays only chats with unread messages
- [ ] "Favourite" filter displays only favourited chats
- [ ] Filters can be combined
- [ ] Active filters are visually indicated
- [ ] Filter results update immediately

### 6.3 Chat Tabs

- [ ] "Chats" tab shows all conversations
- [ ] "In Progress" tab shows only active sessions
- [ ] "Hidden Chats" tab shows hidden conversations
- [ ] Tab indicator shows active tab
- [ ] Clicking tab switches view immediately
- [ ] Chat count may be displayed on tabs

---

## 7. Chat Actions

### 7.1 Favourite Management

- [ ] Favourite button/icon is visible in chat detail
- [ ] Clicking favourite marks chat as favourite
- [ ] Favourite indicator appears in chat list
- [ ] Clicking favourite again removes favourite status
- [ ] Favourited chats can be filtered
- [ ] Favourite status persists across sessions

### 7.2 Hide Chat

- [ ] "Hide Chat" button is visible in chat detail
- [ ] Clicking "Hide Chat" removes chat from main list
- [ ] Hidden chat appears in "Hidden Chats" tab
- [ ] Hidden chats can be unhidden
- [ ] Hidden status does not affect chat functionality

### 7.3 Category Tagging

- [ ] Category tag buttons are visible
- [ ] Available categories include: Support, Tech issues, Fraud, etc.
- [ ] Clicking category applies tag to conversation
- [ ] Applied tags are visible in chat
- [ ] Multiple tags can be applied to one chat
- [ ] Tags can be removed after application
- [ ] Tagged chats may be filterable by category

### 7.4 Translation

- [ ] Translation toggle is visible
- [ ] Clicking toggle enables translation
- [ ] Translation status is visually indicated
- [ ] Messages are translated when toggle is on
- [ ] Source and target languages can be identified
- [ ] Translation can be disabled
- [ ] Translation status persists for the session

### 7.5 Report Functionality

- [ ] "Report" button is visible
- [ ] Clicking "Report" opens report dialog or form
- [ ] Report form contains appropriate fields
- [ ] Report can be submitted
- [ ] Confirmation appears after report submission

---

## 8. User Interface Elements

### 8.1 Header Bar

- [ ] Menu button opens navigation drawer
- [ ] Tab buttons are clearly labeled
- [ ] Status control buttons are accessible
- [ ] Balance display shows expert balance
- [ ] Balance updates in real-time
- [ ] Profile area displays expert name
- [ ] Profile menu is accessible from profile area
- [ ] Settings icon opens settings panel
- [ ] Notifications icon shows notification count
- [ ] Notifications panel can be opened

### 8.2 Layout and Responsiveness

- [ ] Split view mode displays chat list and detail side-by-side
- [ ] Chat list panel has appropriate width
- [ ] Chat detail panel has appropriate width
- [ ] Panels are scrollable independently
- [ ] Layout adapts to window resize
- [ ] All elements are accessible at minimum supported resolution
- [ ] No horizontal scrolling is required

### 8.3 Visual Indicators

- [ ] Active chat is visually distinct in list
- [ ] Unread badges use appropriate color (e.g., red)
- [ ] Client tier badges use distinct colors or icons
- [ ] Loading spinners appear during async operations
- [ ] Progress bars animate smoothly
- [ ] Timestamps use relative format (e.g., "1d ago", "yesterday")
- [ ] Success/error notifications are color-coded

---

## 9. Real-Time Updates

### 9.1 WebSocket Connection

- [ ] WebSocket connection establishes on page load
- [ ] Connection status is indicated (if implemented)
- [ ] Reconnection attempts occur on connection loss
- [ ] Banner appears when connection is lost
- [ ] Banner dismisses when connection is restored
- [ ] Missed messages are fetched after reconnection

### 9.2 Live Updates

- [ ] New messages appear without page refresh
- [ ] Timer updates in real-time (every second)
- [ ] Balance updates during active session
- [ ] Unread counts update when new messages arrive
- [ ] Client typing indicator appears (if implemented)
- [ ] Session status changes reflect immediately
- [ ] Chat list order updates with new activity

---

## 10. Error Handling and Edge Cases

### 10.1 Network Errors

- [ ] Connection loss is detected and indicated
- [ ] Auto-reconnect attempts occur (up to 3 times)
- [ ] Error message appears if reconnection fails
- [ ] "Refresh" option is provided on persistent errors
- [ ] Draft messages are preserved in local storage
- [ ] Queued messages send after reconnection

### 10.2 Input Validation

- [ ] Empty messages cannot be sent
- [ ] Overly long messages are rejected or truncated
- [ ] Character count indicator appears (if limit exists)
- [ ] Invalid characters are sanitized
- [ ] Message input is disabled when not allowed

### 10.3 Session Conflicts

- [ ] Duplicate accept attempts are handled gracefully
- [ ] Request already accepted by another expert shows error
- [ ] Multiple active sessions are prevented
- [ ] Active session warning appears if trying to start new session

### 10.4 Timeout Scenarios

- [ ] API request timeouts show error message
- [ ] Retry option is provided for failed requests
- [ ] Rate limit errors display cooldown message
- [ ] Authentication expiration redirects to login

### 10.5 Edge Cases

- [ ] Client disconnects during session: session pauses
- [ ] Expert refreshes page during session: session restores
- [ ] Client balance depletes mid-message: message completes, then session ends
- [ ] Expert closes tab with active session: session continues on server
- [ ] Multiple browser tabs with same expert: state syncs
- [ ] Request timeout during expert decision: notification dismisses gracefully
- [ ] Client sends message during chat loading: message queues and appears

---

## 11. Data Integrity

### 11.1 Message Delivery

- [ ] All sent messages reach the server
- [ ] Delivery status is confirmed with checkmark
- [ ] Failed messages show error indicator
- [ ] Retry option is available for failed messages
- [ ] Duplicate messages are prevented

### 11.2 Session Data

- [ ] Session start time is recorded accurately
- [ ] Session duration is calculated correctly
- [ ] Billing charges match duration and rate
- [ ] Expert earnings are calculated correctly
- [ ] Client balance deduction is accurate

### 11.3 State Persistence

- [ ] Chat state persists across page refreshes
- [ ] Active session state is restored after refresh
- [ ] Timer syncs with server after refresh
- [ ] Draft messages are preserved (if implemented)
- [ ] Filter and search state may persist (implementation-dependent)

---

## 12. Performance

### 12.1 Load Times

- [ ] Chat list loads within acceptable time
- [ ] Individual chat opens within acceptable time
- [ ] Message history loads incrementally
- [ ] Search results appear quickly
- [ ] Filter application is instantaneous

### 12.2 Scalability

- [ ] Chat list handles many conversations without lag
- [ ] Long message history scrolls smoothly
- [ ] Real-time updates don't cause performance issues
- [ ] Multiple simultaneous chats are supported
- [ ] Pagination prevents loading too much data at once

---

## 13. Accessibility

### 13.1 Keyboard Navigation

- [ ] All interactive elements are keyboard accessible
- [ ] Tab order is logical
- [ ] Focus indicators are visible
- [ ] Dialogs trap focus appropriately
- [ ] Escape key closes dialogs
- [ ] Enter key submits forms/messages

### 13.2 Screen Reader Support

- [ ] ARIA labels are present on interactive elements
- [ ] Button labels are descriptive
- [ ] Form fields have associated labels
- [ ] Status messages are announced
- [ ] Timer updates are announced (or silent with label)
- [ ] Dynamic content updates are announced

### 13.3 Visual Accessibility

- [ ] Color contrast meets WCAG standards
- [ ] Text is readable at minimum supported size
- [ ] Color is not the only means of conveying information
- [ ] Focus indicators are clearly visible
- [ ] Icons have text alternatives

---

## 14. Security and Privacy

### 14.1 Authentication

- [ ] Expert must be logged in to access chat tab
- [ ] Session expires after appropriate timeout (if implemented)
- [ ] Expired session redirects to login
- [ ] Sensitive actions require authentication

### 14.2 Data Protection

- [ ] Expert can only see assigned chats
- [ ] Client details are protected until chat is accepted
- [ ] Copy operations work for authorized data
- [ ] Client IDs are not easily enumerable
- [ ] Chat URLs are not predictable

### 14.3 Input Sanitization

- [ ] HTML/script injection is prevented in messages
- [ ] Special characters are escaped properly
- [ ] XSS attacks are prevented
- [ ] SQL injection is prevented (backend validation)

---

## 15. Business Logic

### 15.1 Status Transitions

- [ ] Expert must be "Working" to receive requests
- [ ] Status changes are reflected immediately
- [ ] Invalid status transitions are prevented
- [ ] Status changes are logged

### 15.2 Request Assignment

- [ ] Requests are assigned to appropriate experts
- [ ] Assignment respects expert status (not assigned when offline)
- [ ] Assignment respects busy status (not assigned when busy)
- [ ] Assigned expert name is displayed correctly

### 15.3 Statistics Tracking

- [ ] Acceptances are recorded
- [ ] Rejections are recorded and affect statistics
- [ ] Session completions are tracked
- [ ] Statistics update in real-time or near-real-time

### 15.4 Client Tier Handling

- [ ] Client tier badge displays correctly
- [ ] Tier affects prioritization (if implemented)
- [ ] Tier information is visible in all relevant places

---

## 16. Notifications and Alerts

### 16.1 System Notifications

- [ ] Success notifications appear for successful actions
- [ ] Error notifications appear for failed actions
- [ ] Warning notifications appear for important issues
- [ ] Notifications are dismissible
- [ ] Notifications auto-dismiss after timeout
- [ ] Notification position is consistent

### 16.2 Chat Notifications

- [ ] Browser notifications for new requests (if implemented)
- [ ] Browser notifications for new messages (if implemented)
- [ ] Notification permissions are requested appropriately
- [ ] Notifications respect user preferences

---

## 17. Integration Points

### 17.1 Third-Party Services

- [ ] Amplitude analytics tracks events (if enabled)
- [ ] Intercom support widget loads (if configured)
- [ ] Translation service integrates properly (if enabled)
- [ ] Third-party failures don't break core functionality

### 17.2 Internal Services

- [ ] Client profile service provides accurate data
- [ ] Session service tracks time accurately
- [ ] Billing service calculates charges correctly
- [ ] Statistics service updates expert metrics

---

## Testing Notes

### Priority Levels

- **P0 (Critical):** Request handling, messaging, session management, billing
- **P1 (High):** Status management, chat list, search/filter, error handling
- **P2 (Medium):** Quick responses, categories, translation, favorites
- **P3 (Low):** UI polish, accessibility enhancements, performance optimizations

### Test Data Requirements

- Test expert account with "Working" capability
- Test client accounts with various tier levels
- Test chats in various states (pending, active, finished, rejected)
- Accounts with sufficient balance for testing
- Accounts with low balance for testing auto-end scenarios

### Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Environment Considerations

- Test in Stage environment before Production
- Verify WebSocket connectivity in test environment
- Check third-party service configurations
- Validate rate limits and timeouts

---

## Revision History

| Version | Date             | Changes                                 | Author       |
| ------- | ---------------- | --------------------------------------- | ------------ |
| 1.0     | October 21, 2025 | Initial checklist creation              | Previous     |
| 2.0     | October 21, 2025 | Complete rewrite based on full analysis | AI Assistant |

---

**Document Status:** Complete  
**Total Checklist Items:** 350+  
**Estimated Testing Time:** 15-20 hours for full verification  
**Based On:** `chat_tab_analysis.md` - Complete product requirements analysis
