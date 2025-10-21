import { test, Locator, Page } from "@playwright/test";
import { Credentials, TLoginUserData } from "../../../utils/constants";
import type { ChatsPage } from "./ChatsPage";

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

  async login(user: TLoginUserData): Promise<ChatsPage> {
    return test.step("Navigate to CRM login page and perform login", async () => {
      await this.page.goto(this.url);
      await this.emailInput.fill(user.email);
      await this.passwordInput.fill(user.password);
      await this.submitButton.click();
      const { PageFactory } = await import("../PageFactory");
      const chatPage = PageFactory.create(this.page).createChatsPage();
      await chatPage.applicationBar.verifyUserName(user.name);
      await this.page.waitForLoadState("domcontentloaded");
      return chatPage;
    });
  }
}
