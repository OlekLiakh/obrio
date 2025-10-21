import { Page, Locator, expect, test } from "@playwright/test";
import { ACrmBasePage } from "../base/ACrmBasePage";

export class SettingsPage extends ACrmBasePage {
  private settingsPanel: Locator;
  private addGroupButton: Locator;
  private groupsContainer: Locator;
  private groupDetailsContainer: Locator;
  private groupScriptHeader: Locator;
  private addScriptButton: Locator;
  private groupTitleInput: Locator;

  private buttonsPanel: Locator;
  private saveButton: Locator;

  private scriptTextarea(scriptNumber = 1): Locator {
    return this.groupDetailsContainer
      .nth(0)
      .locator(`div[data-sentry-component="FormControl"]`)
      .nth(scriptNumber)
      .locator("textarea")
      .nth(0);
  }

  constructor(page: Page) {
    super(page);
    this.settingsPanel = this.page.locator(
      'div[data-sentry-element="SettingsPageContainer"]'
    );
    this.addGroupButton = this.settingsPanel
      .locator('button[data-sentry-element="Button"]')
      .filter({ hasText: "Add Group" });

    this.groupsContainer = this.settingsPanel.locator(
      'div[data-sentry-element="QuickMessageBlockListContainerStyled"]'
    );
    this.groupScriptHeader = this.groupsContainer.locator(
      'div[data-sentry-element="QuickMessageFormHeaderContainerStyled"]'
    );
    this.groupDetailsContainer = this.groupsContainer.locator(
      'div[data-sentry-element="Collapse"]'
    );
    this.groupTitleInput = this.groupDetailsContainer.locator(
      'input[name="title"]'
    );
    this.buttonsPanel = this.groupDetailsContainer.locator(
      'div[data-sentry-element="QuickMessageFormActionContainerStyled"]'
    );
    this.saveButton = this.buttonsPanel
      .locator("button")
      .filter({ hasText: "Save" });
    this.addScriptButton = this.settingsPanel
      .locator('button[data-sentry-element="Button"]')
      .filter({ hasText: "Add Script" });
  }

  async waitForPageLoad(): Promise<void> {
    await test.step("Wait for Settings page to load", async () => {
      await expect(this.groupsContainer).toBeVisible();
      await expect(this.groupScriptHeader.first()).toBeVisible();
    });
  }

  /**
   * Adds a new quick message group with the specified title and scripts.
   *
   * This method performs the following actions:
   * 1. Clicks the add group button
   * 2. Fills in the group title
   * 3. Adds and fills each script content (adding new script fields as needed)
   * 4. Saves the group and waits for the API response
   *
   * @param groupTitle - The title/name for the new quick message group
   * @param scripts - An array of script content strings to be added to the group
   * @returns A promise that resolves to the ID of the newly created group
   */
  async addGroup(groupTitle: string, scripts: string[]): Promise<string> {
    return test.step(`Add new quick message group: ${groupTitle}`, async () => {
      await this.addGroupButton.click();
      await this.groupTitleInput.first().fill(groupTitle);
      for (const [index, scriptContent] of scripts.entries()) {
        if (index > 0) {
          await this.addScriptButton.click();
        }
        await this.scriptTextarea(index + 1).fill(scriptContent);
      }
      const responsePromise = this.page.waitForResponse(
        (response) =>
          response.url().includes("/api/v3/quick-message-blocks") &&
          response.status() === 201
      );
      await this.saveButton.click();
      const responseBody = await responsePromise.then(async (response) =>
        response.json()
      );
      return responseBody?.data?.id;
    });
  }
}
