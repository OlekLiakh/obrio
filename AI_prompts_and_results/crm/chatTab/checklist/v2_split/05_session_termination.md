# 5. Session Termination

**Priority:** P0 (Critical)

---

## 5.1 Expert-Initiated Stop

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

## 5.2 Post-Session State

- [ ] Message input remains available after session ends
- [ ] 15-minute countdown timer is displayed
- [ ] Expert can send one follow-up message within 15 minutes
- [ ] Follow-up timer counts down in real-time
- [ ] Message input disables after 15-minute window expires
- [ ] Chat moves to completed/archived state
- [ ] Session details are preserved and viewable

## 5.3 Automatic Session End

- [ ] Session ends automatically when client balance depletes
- [ ] Notification appears when auto-end occurs
- [ ] Final billing is calculated correctly
- [ ] Session end marker shows appropriate reason
- [ ] Expert is notified of auto-end reason
