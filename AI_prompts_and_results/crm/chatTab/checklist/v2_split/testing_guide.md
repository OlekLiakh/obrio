# Testing Notes and Guidelines

---

## Priority Levels

- **P0 (Critical):** Request handling, messaging, session management, billing
- **P1 (High):** Status management, chat list, search/filter, error handling
- **P2 (Medium):** Quick responses, categories, translation, favorites
- **P3 (Low):** UI polish, accessibility enhancements, performance optimizations

---

## Test Data Requirements

- Test expert account with "Working" capability
- Test client accounts with various tier levels
- Test chats in various states (pending, active, finished, rejected)
- Accounts with sufficient balance for testing
- Accounts with low balance for testing auto-end scenarios

---

## Browser Compatibility

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

---

## Environment Considerations

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
