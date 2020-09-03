<script lang="ts">
  // @ts-check
  import { onDestroy } from "svelte";
  import { goto } from "@sapper/app";
  import { cubicOut } from "svelte/easing";
  import { openMenu } from "../store";
  export let segment: string;

  let menu: boolean;
  const unsbscribe = openMenu.subscribe((value) => {
    menu = value;
  });

  class Page {
    Name: string;
    Link: string;
    Segment: string;
    Hover: boolean;
    goto = async () => {
      openMenu.set(!menu);
      this.Hover = false;
      await goto(this.Link, {});
    };
    constructor(name: string, link: string, segment: string) {
      this.Name = name;
      this.Link = link;
      this.Segment = segment;
      this.Hover = false;
    }
  }
  const pages: Page[] = [
    new Page("Introduction", ".", undefined),
    new Page("Works", "works", "works"),
  ];

  onDestroy(unsbscribe);
</script>

<style>
  hr {
    border: #022b77;
    background-color: #022b77;
    height: 3px;
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
    width: 120px;
  }

  li {
    height: 0px;
    display: flex;
    align-items: center;
    margin: 2.5px auto;
    margin-left: 5px;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
  li.selected {
    border-left: #022b77 solid 5px;
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
  }
  span.menu {
    visibility: visible;
  }

	.m {
		position: fixed;
		right: 0;
		z-index: 100;
		display: flex;
		justify-items: right;
		width: 0px;
    transition: all 0.3s;
	}
  .m.menu {
    width: 120px;
  }
</style>

<div class="m" class:menu>
  <ul class:menu>
    {#each pages as page, i (page.Name)}
      <li
        class="page_list {segment === page.Segment ? 'selected' : ''}
          {page.Hover ? 'mouseover' : ''}"
        class:menu
        on:click={segment !== page.Segment ? page.goto : () => {}}
        on:mouseover={() => {
          page.Hover = true;
        }}
        on:mouseout={() => {
          page.Hover = false;
        }}>
        <span class:menu>{page.Name}</span>
      </li>
      {#if i < pages.length - 1}
        <hr class:menu />
      {/if}
    {/each}
  </ul>
</div>
