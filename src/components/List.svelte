<script lang="ts">
  export let items: any[];
  export let height: Number;
  export let lineWidth: Number;
  let cssHeight: String = String(height) + "px";
  let cssLineWidth: String = String(lineWidth) + "%";
</script>

{#if items.length !== 0}
  <ul>
    {#each items as item, i}
      <li
        class="item {item.mouseDown ? 'mousedown' : ''} {item.hover
          ? 'hover'
          : ''}"
        on:mousedown={() => (item.mouseDown = true)}
        on:mouseover={() => {
          item.hover = true;
        }}
        on:focus={() => {
          item.hover = true;
        }}
        on:mouseout={() => {
          item.hover = false;
          item.mouseDown = false;
        }}
        on:blur={() => {
          item.hover = false;
          item.mouseDown = false;
        }}
        style="--height: {cssHeight}"
      >
        <slot {item} />
      </li>
      {#if i < items.length - 1}
        <hr style="--line-width: {cssLineWidth}" />
      {/if}
    {/each}
  </ul>
{:else}No Items{/if}

<style>
  hr {
    border: #022b77;
    background-color: #022b77;
    height: 2px;
    width: var(--line-width);
    margin: 0 auto;
    transition: all 0.3s;
  }

  ul {
    width: 100%;
    background-color: transparent;
    list-style: none;
    padding-left: 0;
    margin: 0;
    transition: all 0.3s;
  }

  li {
    min-height: var(--height);
    display: flex;
    align-items: center;
    margin: 2.5px auto;
    padding: 0 10px;
    cursor: pointer;
    transition: all 0.3s;
  }
  li.hover {
    background-color: #022b77;
    color: #ffffff;
  }
  li.mousedown {
    background-color: #022b77;
    color: #ffffff;
  }
</style>
