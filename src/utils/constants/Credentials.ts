import { TLoginUserData } from "./types";

export class Credentials {
  /**
   * Get test user credentials from environment variables
   * @throws Error if required environment variables are not set
   */
  static getCrmTestUser(): TLoginUserData {
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;
    const name = process.env.TEST_USER_NAME;

    if (!email || !password || !name) {
      throw new Error(
        "Missing required environment variables. " +
          "Please ensure .env file has: TEST_USER_EMAIL, TEST_USER_PASSWORD, TEST_USER_NAME"
      );
    }

    return {
      email,
      password,
      name,
    };
  }

  /**
   * Get CRM application base URL from environment variables
   * @throws Error if CRM_URL is not set
   */
  static getBaseUrl(): string {
    const baseUrl = process.env.CRM_URL;

    if (!baseUrl) {
      throw new Error("Missing required environment variable: CRM_URL");
    }

    return baseUrl;
  }
}
