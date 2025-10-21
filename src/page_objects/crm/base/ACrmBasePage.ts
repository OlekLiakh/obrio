import { Page, test } from "@playwright/test";
import { ApplicationBar } from "../components/ApplicationBar";
import { Drawer } from "../components/Drawer";
import { PAGE_LIST } from "../../../utils/constants";
import type { SettingsPage } from "../pages/SettingsPage";

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

  async navigateToSettings(): Promise<SettingsPage> {
    return test.step("Navigate to Settings page via Application Bar", async () => {
      await this.applicationBar.navigateToSettings();
      const { PageFactory } = await import("../PageFactory");
      const settingsPage = PageFactory.create(this.page).createSettingsPage();
      await settingsPage.waitForPageLoad();
      return settingsPage;
    });
  }
}
