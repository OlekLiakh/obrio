import { Locator, Page, test } from "@playwright/test";
import { PAGE_LIST } from "../../../utils/constants";

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
