import { Locator, Page, test } from "@playwright/test";

export enum PAGE_LIST {
  CHATS = "Chats",
  PINGS = "Pings",
  INVOICES = "Invoices",
  TRANSACTIONS = "Transactions",
  REVIEWS = "Reviews",
}

export class Drawer {
  private pagesList: Locator;

  constructor(private page: Page) {
    this.pagesList = this.page.locator(
      'div[data-sentry-component="ListItemText"]'
    );
  }

  async navigateToPage(pageName: PAGE_LIST): Promise<void> {
    await test.step(`Navigate to ${pageName} page via Drawer`, async () => {
      await this.pagesList.filter({ hasText: pageName }).click();
    });
  }
}
