import { test } from "../../src/fixtures/fixtures";
import { request, expect } from "@playwright/test";
import { PAGE_LIST } from "../../src/utils/constants";
import { Credentials } from "../../src/utils/constants/Credentials";
import { ApiClient } from "../../src/utils/api/ApiClient";

let groupId: string = "";

test.describe("NebulaX. Chats", () => {
  test.afterEach(async ({ page }) => {
    await test.step("Cleanup: Delete created Quick Message Group via API", async () => {
      const token = await page.evaluate(() =>
        localStorage.getItem("access_token")
      );

      const apiContext = await request.newContext();

      const apiClient = new ApiClient(apiContext, token!);

      await apiClient.deleteQuickMessageBlock(groupId);
    });
  });

  test(" Verify Script Group Functionality in NebulaX", async ({
    loginToCrmAs,
  }) => {
    // For this test, I assume that a chat between the expert and the user is already created and is displayed on the Chats page.
    const expertUser = Credentials.getCrmTestUser();
    const groupData: { name: string; scripts: string[] } = {
      name: "Test Group",
      scripts: ["test script"],
    };

    const chatsPage = await loginToCrmAs(expertUser);
    await chatsPage.openLatestChat();
    const initialGroups = await chatsPage.chat.getQuickMessageTitles();

    const settingsPage = await chatsPage.navigateToSettings();

    groupId = await settingsPage.addGroup(groupData.name, groupData.scripts);

    await settingsPage.navigateTo(PAGE_LIST.CHATS);

    await chatsPage.openLatestChat();

    const newGroups = await chatsPage.chat.getQuickMessageTitles();

    await test.step("Verify that new group is present in Quick Message Groups list", async () => {
      await test.step("Verify that total number of groups is increased by 1", async () => {
        expect(newGroups.length).toEqual(initialGroups.length + 1);
      });
      await test.step("Verify that new group with correct name is added", async () => {
        const initialNumberOfGroupsWithSameName = initialGroups.filter(
          (group) => group === groupData.name
        ).length;
        const newNumberOfGroupsWithSameName = newGroups.filter(
          (group) => group === groupData.name
        ).length;
        expect(newNumberOfGroupsWithSameName).toEqual(
          initialNumberOfGroupsWithSameName + 1
        );
      });
    });
  });
});
