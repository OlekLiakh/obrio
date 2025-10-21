import { test as base, expect } from "@playwright/test";
import { PageFactory } from "../page_objects/crm/PageFactory";
import type { ChatsPage } from "../page_objects/crm/pages/ChatsPage";
import { TLoginUserData } from "../utils/constants";

export const test = base.extend<{
  loginToCrmAs(user: TLoginUserData): Promise<ChatsPage>;
}>({
  loginToCrmAs: async ({ page }, use) => {
    const login = async (user: TLoginUserData) => {
      const loginPage = PageFactory.create(page).createLoginPage();
      return await loginPage.login(user);
    };

    await use(login);
  },
});

export { expect };
