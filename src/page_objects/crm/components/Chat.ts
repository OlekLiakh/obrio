import { Locator, Page, test, expect } from "@playwright/test";

export class Chat {
  private chatsContainer: Locator;

  private chatHeader: Locator;
  private chatHeaderClientName: Locator;

  private quickMessagesSection: Locator;
  private quickMessageButton: Locator;
  private quickMessageTitle: Locator;

  constructor(private page: Page) {
    this.chatsContainer = this.page.locator(
      'div[data-testid="chats-container"]'
    );

    this.chatHeader = this.chatsContainer.locator(
      '[data-sentry-element="ChatHeaderContainerStyled"]'
    );
    this.chatHeaderClientName = this.chatHeader.locator(
      '[data-testid="chat-header-container-client-name"]'
    );

    this.quickMessagesSection = this.chatsContainer.locator(
      'div[data-testid="chat-quick-message-container"]'
    );
    this.quickMessageButton = this.quickMessagesSection.locator("button");
    this.quickMessageTitle = this.quickMessageButton.locator("p");
  }

  async getQuickMessageTitles(): Promise<string[]> {
    return test.step("Get list of quick message titles", async () => {
      return this.quickMessageTitle.allTextContents();
    });
  }

  async verifyChatIsOpened() {
    await test.step(`Verify chat is opened`, async () => {
      await expect(this.chatHeaderClientName).toBeVisible();
      await expect(this.quickMessagesSection).toBeVisible();
      await this.page.waitForLoadState("domcontentloaded");
    });
  }
}
