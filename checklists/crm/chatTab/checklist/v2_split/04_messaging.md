# 4. Messaging Functionality

**Priority:** P0 (Critical)

---

## 4.1 Sending Messages

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

## 4.2 Receiving Messages

- [ ] Client messages appear in real-time
- [ ] Client name is shown with received messages
- [ ] Timestamp is displayed for received messages
- [ ] Messages are visually distinguished (expert vs. client)
- [ ] Chat scrolls to bottom when new message arrives
- [ ] Unread count updates when new message is received
- [ ] Notification badge appears on chat list item

## 4.3 Message History

- [ ] Previous messages load when chat is opened
- [ ] Messages are grouped by date (date separators visible)
- [ ] Scrolling up loads older messages (pagination)
- [ ] Session markers are displayed (Started, Ended)
- [ ] System messages are visually distinct
- [ ] Message order is chronologically correct
- [ ] Timestamps are in correct timezone

## 4.4 Emoji Support

- [ ] Emoji picker button is visible
- [ ] Clicking emoji button opens emoji selector
- [ ] Selected emoji is inserted at cursor position
- [ ] Emojis display correctly in sent messages
- [ ] Emojis display correctly in received messages
- [ ] Emoji picker closes after selection

## 4.5 Quick Response Templates

- [ ] Quick response template buttons are visible
- [ ] Templates are organized by category or type
- [ ] Clicking template button inserts text into input field
- [ ] Template text can be edited before sending
- [ ] Templates work during active sessions
- [ ] Templates are disabled when session is not active
