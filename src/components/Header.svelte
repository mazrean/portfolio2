<script lang="ts">
  // @ts-check
  import Hamburger from "./Hamburger.svelte";
</script>

<div class="header">
  <span />
  <h1>Mazrean's<wbr /> Portfolio</h1>
  <Hamburger />
</div>

<style>
  div.header {
    width: 100%;
    min-height: 60px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: #022b77 solid 2px;
  }

  span {
    width: 60px;
    height: 60px;
    margin-left: 5px;
    display: block;
  }

  h1 {
    font-size: 36px;
    font-size: calc(2.4rem + ((1vw - 0.64rem) * 2.1429));
    font-weight: bold;
    overflow: hidden;
    letter-spacing: 0.15em;
    margin: 0 auto;
    text-align: center;
  }
</style>
