<script lang="ts">
  // @ts-check
  export let title: string;
</script>

<style>
  h2 {
    max-height: 40px;
    font-size: 24px;
    font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));
    font-weight: bolder;
    border-bottom: 3.5px #022b77 solid;
    padding: 0 10px;
    margin-bottom: 10px;
  }
  div.title {
    display: inline-flex;
    justify-content: left;
    width: 100%;
    margin: 0 auto;
  }
</style>

<div class="title">
  <h2>{title}</h2>
</div>
