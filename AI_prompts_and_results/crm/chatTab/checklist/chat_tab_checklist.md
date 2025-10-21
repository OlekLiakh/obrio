# Chat Tab - Functional Verification Checklist

## Application Overview

The Chat Tab is the primary interaction hub between experts and clients in the NebulaX CRM system. It provides a comprehensive chat management interface where experts can view, manage, and respond to both active and completed conversations. The tab enables real-time messaging, chat history tracking, client information display, and various filtering and organizational features.

## Functional Verification Checklist

### UI Elements and Navigation

- [ ] Chat Tab displays in the main navigation header
- [ ] In Progress Tab displays in the main navigation header
- [ ] Chats Tab is the default active tab on page load
- [ ] Switching between Chats and In Progress tabs loads appropriate views
- [ ] Chat list sidebar displays on the left side of the interface
- [ ] Chat details panel displays on the right side when a chat is selected
- [ ] "You haven't opened any chat yet" placeholder message displays when no chat is selected
- [ ] Message input field appears at the bottom of chat details panel
- [ ] Message input field is disabled when chat cannot accept messages (shows "Can't send messages" state)

### Chat List and Display

- [ ] Chat list displays all available chats
- [ ] Each chat entry shows client profile picture/avatar
- [ ] Each chat entry shows client name (status category: "Casual Client", "Promising Client", "Low Client")
- [ ] Each chat entry shows client username
- [ ] Each chat entry displays timestamp of last message
- [ ] Timestamp shows relative time format (e.g., "15d", "22d")
- [ ] Each chat entry shows preview of last message text
- [ ] Each chat entry shows assigned expert name with "Expert outline" icon
- [ ] Chat entries are clickable and navigate to individual chat view
- [ ] Selected/active chat is visually highlighted in the chat list
- [ ] Chat list scrolls when content exceeds visible area

### Chat Selection and Details

- [ ] Clicking a chat entry opens the chat details panel
- [ ] Chat header displays client status category icon
- [ ] Chat header displays client username
- [ ] Chat header displays favorite button (star icon)
- [ ] Chat header displays total spent amount and session duration (e.g., "$194.00 (3h 14m)")
- [ ] Chat details section shows "Client details:" label
- [ ] Client details include date of birth with calculated age
- [ ] Client details include time zone information
- [ ] Client details include location/country information
- [ ] Client details include zodiac sign
- [ ] Client details include gender
- [ ] Client details include client ID with copy button
- [ ] Client details include expert service and pricing information
- [ ] "Show all client details" expandable button is present
- [ ] Translation toggle is available in chat settings

### Chat History and Messages

- [ ] Chat history loads when a chat is opened
- [ ] Messages display in chronological order (oldest to newest)
- [ ] Messages are grouped by date with date separators (e.g., "October 4th", "October 11th")
- [ ] Each message displays the sender information (expert name)
- [ ] Each message displays timestamp (e.g., "21:20:16")
- [ ] Message content displays with full text
- [ ] Emoji support is visible in messages (e.g., 🙌, ✨, 💖)
- [ ] Message text wraps appropriately for long messages
- [ ] Chat history scrolls to show all messages
- [ ] Most recent messages appear at the bottom

### Search and Filtering

- [ ] Search textbox is visible with placeholder "Search by name"
- [ ] Typing in search box filters chat list by client name
- [ ] Filter button is accessible in the chat list header
- [ ] Filter menu displays filter options: Unanswered, Unread, Favourite
- [ ] Filter options show radio buttons for selection
- [ ] Each filter option displays a descriptive icon
- [ ] Selecting "Unanswered" filter shows only unanswered chats
- [ ] Selecting "Unread" filter shows only chats with unread messages
- [ ] Selecting "Favourite" filter shows only favorite chats
- [ ] "Reset Filter" button appears and is enabled when a filter is active
- [ ] "Reset Filter" button is disabled when no filter is active
- [ ] Clicking "Reset Filter" clears all active filters
- [ ] Filter menu closes after selection

### Unread Messages and Notifications

- [ ] Unread message indicator displays as a badge on chat entries
- [ ] Unread badge displays the count of unread messages (e.g., "1")
- [ ] Unread indicator is visible on chats with new messages
- [ ] Unread indicator disappears after viewing the chat

### Favorite Chats

- [ ] Star icon button displays in chat entry hover state
- [ ] "Mark favourite" tooltip appears on star button hover
- [ ] Clicking star button marks chat as favorite
- [ ] Marked chats can be filtered using "Favourite" filter
- [ ] Starred chats display visual indication in the list

### Message Input and Sending

- [ ] Message input field displays with "Type a message" placeholder
- [ ] Text can be typed into the message input field
- [ ] Emoji button is present for adding emoji reactions
- [ ] Report button is available for reporting chat issues
- [ ] Send button is disabled when input field is empty
- [ ] Send button displays "Enter a message to send" tooltip when disabled
- [ ] Message input field clears after successful message send
- [ ] Send button becomes enabled when text is entered

### Error States and Messages

- [ ] "Can't send messages" state displays when chat cannot accept new messages
- [ ] Message input field is disabled in "Can't send messages" state
- [ ] Emoji button is disabled in "Can't send messages" state
- [ ] Send button is disabled in "Can't send messages" state
- [ ] Error notification displays when message sending fails

### Chat Organization

- [ ] Chat groups are displayed as selectable buttons below the message input
- [ ] Multiple pre-defined chat groups are available (e.g., "Test Group\_...", "Support", "Rude customers")
- [ ] Chat groups include both test groups and category groups (e.g., "Fraud", "Tech issues", "User under 18")
- [ ] Chat group buttons are disabled when no chat is selected
- [ ] "New group" option is available for creating custom groups
- [ ] Chat can be assigned to multiple groups

### Tab Modes and Views

- [ ] Chats tab displays all conversations (completed and active)
- [ ] In Progress tab displays only active conversations
- [ ] In Progress tab has URL parameter mode=split
- [ ] Hidden Chats option appears in In Progress tab (disabled if no hidden chats)
- [ ] Tab switching preserves filter and search state when applicable

### Real-time Updates

- [ ] New incoming messages appear in the chat history
- [ ] Chat list updates when new messages arrive
- [ ] Message timestamps update in real-time
- [ ] Unread indicators update when messages are received
- [ ] Chat order in list may update based on most recent activity

### UI State and Transitions

- [ ] Loading spinner displays while chat content loads
- [ ] Loading spinner displays while fetching chat history
- [ ] Loading spinner displays while fetching chat list
- [ ] Page remains responsive during loading states
- [ ] Empty state displays when no chats exist
- [ ] Empty state displays appropriate icon and message

### Navigation and Back Navigation

- [ ] Navigating away from a chat and returning preserves chat history
- [ ] Browser back button works to return to previous chat selection
- [ ] Direct URL navigation to a specific chat works correctly

### Accessibility and Usability

- [ ] Chat list is keyboard navigable
- [ ] Search field is keyboard accessible
- [ ] Message input field is keyboard accessible
- [ ] Send button is keyboard accessible (Enter key submits message)
- [ ] Buttons display appropriate tooltips on hover
- [ ] All interactive elements have visible focus states
- [ ] Filter menu items are keyboard navigable
- [ ] Tab navigation works through all interactive elements

### Edge Cases

- [ ] Chat with no previous messages displays empty message history
- [ ] Chat with very long messages displays correctly without text overflow issues
- [ ] Chat with many messages (100+) loads and scrolls smoothly
- [ ] Emoji characters display correctly across different message types
- [ ] Special characters in client names display correctly
- [ ] Very long client names truncate appropriately with ellipsis
- [ ] Numeric IDs display correctly and can be copied
- [ ] Chat with no expert assigned displays appropriate information
- [ ] Chat list remains populated during filter operations
- [ ] Search returns no results when no chats match search term

### Performance and Optimization

- [ ] Chat list loads within acceptable time
- [ ] Chat details panel loads quickly when chat is selected
- [ ] Switching between chats is responsive
- [ ] Search filter responds quickly to user input
- [ ] Scrolling through chat history is smooth
- [ ] Page handles large message volumes without lag

### Integration Points

- [ ] Chat expert information links to expert profile/details
- [ ] Client information integrates with client profile data
- [ ] Pricing information displays correctly per expert
- [ ] Session duration tracking displays correctly
- [ ] Budget/spending information updates accurately

---

**Notes for Testers:**

- Always start with a fresh login state when beginning test scenarios
- Verify all UI elements match design specifications
- Test both successful and failure paths for each functionality
- Document any inconsistencies in timestamps or data display
- Verify keyboard navigation accessibility for all interactive elements
