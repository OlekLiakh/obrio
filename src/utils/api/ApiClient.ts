import { APIRequestContext, expect, test } from "@playwright/test";
import { Credentials } from "../constants";

export class ApiClient {
  private baseUrl: string;

  constructor(
    private apiContext: APIRequestContext,
    private token: string
  ) {
    this.baseUrl = Credentials.getBaseUrl();
  }

  private getHeaders() {
    return {
      Authorization: `Bearer ${this.token}`,
      "Content-Type": "application/json",
    };
  }

  /**
   * Delete quick message block by ID
   * Used for cleanup after tests
   * @param groupId - Quick message group ID
   * @returns Response from the API
   */
  async deleteQuickMessageBlock(groupId: string) {
    await test.step(`Delete quick message block with ID: ${groupId}`, async () => {
      if (!groupId) {
        return;
      }
      const response = await this.apiContext.delete(
        `${this.baseUrl}api/v3/quick-message-blocks/${groupId}`,
        {
          headers: this.getHeaders(),
        }
      );
      expect(response.status()).toBe(204);
    });
  }
}
