<script lang="ts">
  // @ts-check
  import Header from "../components/Header.svelte";
  import Menu from "../components/Menu.svelte";
  export let segment: string;
</script>

<Header />
<div class="container">
  <Menu {segment} />

  <main>
    <slot />
  </main>
</div>

<style>
  main {
    position: relative;
    padding: 2em;
    margin: 0;
    box-sizing: border-box;
    display: flex;
    justify-content: left;
    flex-direction: column;
    min-width: 50%;
    max-width: 100%;
    width: 750px;
  }
  .container {
    display: flex;
    justify-content: center;
  }
</style>
