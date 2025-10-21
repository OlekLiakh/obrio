# Obrio QA Test Automation

Test automation project for the NebulaX CRM platform.

## 📋 Requirements

- Node.js 16+
- npm or yarn

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/OlekLiakh/obrio
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment:

```bash
cp .env.example .env
```

Edit the `.env` file with your credentials:

```env
TEST_USER_EMAIL=your_email@example.com
TEST_USER_PASSWORD=your_password
TEST_USER_NAME=Your Name
TEST_CLIENT_NAME=Test client
CRM_URL=https://domain.com
```

## 🔐 Credentials Management

All sensitive data (passwords, emails) is stored in the `.env` file and **SHOULD NEVER** be committed to git.

### Using Credentials

```typescript
import { Credentials } from "../utils/constants";

// Get test user data
const user = Credentials.getTestUser();

// Get base URL
const baseUrl = Credentials.getBaseUrl();
```

## 📝 Running Tests

### Run all tests:

```bash
npm test
```

### Run tests in debug mode:

```bash
npm test -- --debug
```

### Run a specific test:

```bash
npm test -- tests/tests.spec.ts
```

## 📊 Reports

After running tests, the HTML report is available at:

```
playwright-report/index.html
```

## 🤝 Contributing

1. Make sure `.env` contains up-to-date credentials
2. Run the linter before committing
3. Follow the project structure

## 👤 Author

Oleksandr Liakh (alyah124@gmail.com)
