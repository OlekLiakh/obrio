import { test, Locator, Page } from "@playwright/test";
import { ChatsPage } from "./ChatsPage";
import { Credentials, TTestUser } from "../../../utils/constants";

export class LoginPage {
  private url = `${Credentials.getBaseUrl()}login-old`;
  private emailInput: Locator;
  private passwordInput: Locator;
  private submitButton: Locator;

  constructor(private page: Page) {
    this.emailInput = this.page.locator('input[name="email"]');
    this.passwordInput = this.page.locator('input[name="password"]');
    this.submitButton = this.page.locator(
      'button[data-testid="login-submit-button"]'
    );
  }

  async login(user: TTestUser): Promise<ChatsPage> {
    return test.step("Navigate to CRM login page and perform login", async () => {
      await this.page.goto(this.url);
      await this.emailInput.fill(user.email);
      await this.passwordInput.fill(user.password);
      await this.submitButton.click();
      const chatPage = new ChatsPage(this.page);
      await chatPage.applicationBar.verifyUserName(user.name);
      await this.page.waitForLoadState("domcontentloaded");
      return chatPage;
    });
  }
}
