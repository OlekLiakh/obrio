import dotenv from "dotenv";
import path from "path";

const ENV = process.env.ENV || "stage";
const envFile = path.resolve(process.cwd(), `.env.${ENV}`);
dotenv.config({ path: envFile });

import { test } from "../../../../src/fixtures/fixtures";

test.describe("Test group", () => {
  test("seed", async ({ loginToCrmAs }) => {
    const userData = {
      email: process.env.TEST_USER_EMAIL!,
      password: process.env.TEST_USER_PASSWORD!,
      name: process.env.TEST_USER_NAME!,
    };
    await loginToCrmAs(userData);
  });
});
