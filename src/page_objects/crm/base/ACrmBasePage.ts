import { Page, test } from "@playwright/test";
import { ApplicationBar } from "../components/ApplicationBar";
import { Drawer, PAGE_LIST } from "../components/Drawer";

export abstract class ACrmBasePage {
  readonly applicationBar: ApplicationBar;

  constructor(public page: Page) {
    this.applicationBar = new ApplicationBar(this.page);
  }

  async navigateTo(page: PAGE_LIST) {
    await test.step(`Navigate to ${page} page`, async () => {
      await this.applicationBar.openDrawer();
      const drawer = new Drawer(this.page);
      await drawer.navigateToPage(page);
      await this.page.waitForLoadState("domcontentloaded");
    });
  }

  async navigateToSettings() {
    return test.step("Navigate to Settings page via Application Bar", async () => {
      await this.applicationBar.navigateToSettings();
      const { SettingsPage } = await import("../pages/SettingsPage");
      const settingsPage = new SettingsPage(this.page);
      await settingsPage.waitForPageLoad();
      return settingsPage;
    });
  }
}
