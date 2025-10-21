# 2. Chat Request Handling

**Priority:** P0 (Critical)

---

## 2.1 Receiving Requests

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

## 2.2 Accepting Requests

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

## 2.3 Rejecting Requests

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

## 2.4 Request Timeout

- [ ] Notification dismisses automatically when timer reaches 0
- [ ] No penalty is applied if expert doesn't interact with notification
- [ ] Chat request returns to queue or reassigns to another expert
