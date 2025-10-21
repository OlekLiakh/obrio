import { Page } from "@playwright/test";
import { LoginPage } from "./pages/LoginPage";
import { ChatsPage } from "./pages/ChatsPage";
import { SettingsPage } from "./pages/SettingsPage";

/**
 * Factory class for creating page objects.
 * Centralizes page instantiation to avoid circular dependencies and manage imports.
 */
export class PageFactory {
  constructor(private page: Page) {}

  createLoginPage(): LoginPage {
    return new LoginPage(this.page);
  }

  createChatsPage(): ChatsPage {
    return new ChatsPage(this.page);
  }

  createSettingsPage(): SettingsPage {
    return new SettingsPage(this.page);
  }

  static create(page: Page): PageFactory {
    return new PageFactory(page);
  }
}
