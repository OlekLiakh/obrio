import { defineConfig, devices } from '@playwright/test';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import path from 'path';

const ENV = process.env.ENV || 'stage';
const envFile = path.resolve(path.dirname(fileURLToPath(import.meta.url)), `../.env.${ENV}`);

dotenv.config({ path: envFile });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '../tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.CRM_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',

    // Retain video only for failed tests.
    video: 'retain-on-failure',

    // Capture screenshot after each test failure.
    screenshot: 'only-on-failure',

    actionTimeout: 10_000,
  },
  expect: {
    timeout: 10_000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
