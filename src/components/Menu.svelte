<script lang="ts">
  // @ts-check
  import { onDestroy } from "svelte";
  import { openMenu } from "../store";
  import { ListItem } from "./types";
  export let segment: string;

  let menu: boolean;
  const unsbscribe = openMenu.subscribe((value) => {
    menu = value;
  });

  class Page extends ListItem {
    name: string;
    segment: string | undefined;
    go = async () => {
      openMenu.set(!menu);
      await this.goto();
    };
    constructor(name: string, link: string, segment: string | undefined) {
      super(link);
      this.name = name;
      this.segment = segment;
    }
  }

  const pages: Page[] = [
    new Page("Introduction", "/", undefined),
    new Page("Works", "/works", "works"),
    new Page("Blog", "/blog", "blog"),
  ];

  onDestroy(unsbscribe);
</script>

<div class="m" class:menu>
  <ul class:menu>
    {#each pages as page, i (page.name)}
      <li
        class="page_list {segment === page.segment
          ? 'selected'
          : ''}
          {page.hover ? 'mouseover' : ''}"
        class:menu
        on:click={page.go}
        on:mouseover={() => {
          page.hover = true;
        }}
        on:mouseout={() => {
          page.hover = false;
        }}
      >
        <span class:menu>{page.name}</span>
      </li>
      {#if i < pages.length - 1}
        <hr class:menu />
      {/if}
    {/each}
  </ul>
</div>

<style>
  hr {
    border: #022b77;
    background-color: #022b77;
    height: 2px;
    width: 0px;
    margin: 0 auto;
    transition: all 0.3s;
  }
  hr.menu {
    width: 100px;
  }

  ul {
    width: 0px;
    background-color: transparent;
    list-style: none;
    padding-left: 0;
    margin: 0;
    transition: all 0.3s;
  }
  ul.menu {
    width: 100%;
  }

  li {
    height: 0px;
    display: flex;
    align-items: center;
    margin: 2.5px 0;
    margin-left: 5px;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.3s;
    background: rgba(255, 255, 255, 0.5);
  }
  li.selected {
    border-left: #022b77 solid 5px;
    margin-left: 0;
  }
  li.mouseover {
    background-color: #022b77;
    color: #ffffff;
  }
  li.menu {
    height: 40px;
  }

  span {
    background-color: transparent;
    visibility: hidden;
    width: 0px;
  }
  span.menu {
    visibility: visible;
    width: 100%;
  }

  .m {
    position: absolute;
    right: 0;
    z-index: 100;
    display: flex;
    justify-items: right;
    width: 0px;
    transition: all 0.3s;
  }
  .m.menu {
    width: 115px;
  }
</style>
