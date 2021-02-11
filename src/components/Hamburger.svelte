<script lang="ts">
  // @ts-check
  import { onDestroy } from "svelte";
  import { openMenu } from "../store";
  let menu: boolean;
  const unsbscribe = openMenu.subscribe((value) => {
    menu = value;
  });
  const reverse = () => {
    openMenu.set(!menu);
  };
  onDestroy(unsbscribe);
</script>

<div class="ham" on:click={reverse}>
  <span class="ham_line ham_line1 {menu ? 'clicked' : ''}" />
  <span class="ham_line ham_line2 {menu ? 'clicked' : ''}" />
  <span class="ham_line ham_line3 {menu ? 'clicked' : ''}" />
</div>

<style>
  .ham {
    right: 5px;
    width: 60px;
    height: 60px;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 5px;
    float: right;
  }

  .ham_line {
    width: 40px;
    height: 3px;
    background-color: #022b77;
    transition: all 0.3s;
    margin: 7.5% auto;
  }

  .clicked.ham_line {
    margin: -1.5px auto;
  }

  .clicked.ham_line1 {
    transform: rotate(45deg);
  }
  .clicked.ham_line2 {
    width: 0;
  }
  .clicked.ham_line3 {
    transform: rotate(-45deg);
  }

  span {
    background-color: transparent;
  }
</style>
