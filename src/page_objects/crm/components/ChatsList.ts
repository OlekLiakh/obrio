import { test, Page, Locator } from "@playwright/test";

export class ChatsList {
  private chatListContainer: Locator;
  private chatList: Locator;

  private chatListItem: Locator;

  constructor(private page: Page) {
    this.page = page;
    this.chatListContainer = this.page.locator(
      'div[data-sentry-element="ChatClientListContainer"]'
    );
    this.chatList = this.chatListContainer.locator(
      'div[data-sentry-element="Virtuoso"]'
    );
    this.chatListItem = this.chatList.locator(
      'a[data-testid="chat-list-item"]'
    );
  }

  async openLatestChat(): Promise<void> {
    await test.step(`Open the latest chat`, async () => {
      const chatItem = this.chatListItem.first();
      await chatItem.click();
    });
  }
}
