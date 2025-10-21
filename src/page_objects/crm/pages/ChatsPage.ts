import { Page } from "@playwright/test";
import { ACrmBasePage } from "../base/ACrmBasePage";
import { ChatsList } from "../components/ChatsList";
import { Chat } from "../components/Chat";

export class ChatsPage extends ACrmBasePage {
  public readonly chatsList: ChatsList;
  public readonly chat: Chat;

  constructor(page: Page) {
    super(page);
    this.chatsList = new ChatsList(page);
    this.chat = new Chat(page);
  }

  async openLatestChat(): Promise<void> {
    await this.chatsList.openLatestChat();
    await this.chat.verifyChatIsOpened();
  }
}
