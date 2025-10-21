import { test, expect, Locator, Page } from "@playwright/test";

export class ApplicationBar {
  private bar: Locator;

  private drawerButton: Locator;

  private userProfile: Locator;
  private userProfileName: Locator;

  private popoverButton: Locator;
  private settingsButton: Locator;

  constructor(private page: Page) {
    this.bar = this.page.locator('div[data-sentry-element="ToolbarStyled"]');
    this.drawerButton = this.bar.locator(
      'button[data-sentry-element="AppBarIconButton"]'
    );

    this.userProfile = this.bar.locator(
      'div[data-sentry-component="UserProfile"]'
    );
    this.userProfileName = this.userProfile.locator(
      'p[data-testid="user-profile-name"]'
    );

    this.popoverButton = this.bar.locator(
      'button[data-testid="app-bar-open-popover"]'
    );
    this.settingsButton = this.page.locator(
      'li[data-testid="app-bar-settings-button"]'
    );
  }

  async navigateToSettings() {
    await test.step("Navigate to CRM settings page", async () => {
      await this.popoverButton.click();
      await this.settingsButton.click();
    });
  }

  async verifyUserName(name: string) {
    await test.step(`Verify user name is ${name}`, async () => {
      await expect(this.userProfileName).toHaveText(name);
    });
  }

  async openDrawer() {
    await test.step("Open application drawer", async () => {
      await this.drawerButton.click();
    });
  }
}
