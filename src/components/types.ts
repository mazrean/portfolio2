import { goto } from "@sapper/app";

export interface iListItem {
  hover: boolean
  mouseDown: boolean
  goto: () => Promise<void>
}

export class ListItem implements ListItem {
  private readonly link: string
  hover: boolean = false
  mouseDown: boolean = false
  goto = async () => {
    this.hover = false;
    await goto(this.link, {});
  }
  constructor(link: string) {
    this.link = link
  }
}
