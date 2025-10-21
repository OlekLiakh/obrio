import { test as base, expect } from "@playwright/test";
import { LoginPage } from "../page_objects/crm/pages/LoginPage";
import { ChatsPage } from "../page_objects/crm/pages/ChatsPage";

type TUserLoginData = {
  email: string;
  password: string;
  name: string;
};

export const test = base.extend<{
  loginToCrmAs(user: TUserLoginData): Promise<ChatsPage>;
}>({
  loginToCrmAs: async ({ page }, use) => {
    const login = async (user: TUserLoginData) => {
      const loginPage = new LoginPage(page);
      return await loginPage.login(user);
    };

    await use(login);
  },
});

export { expect };
