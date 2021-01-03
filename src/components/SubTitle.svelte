<script lang="ts">
  // @ts-check
  export let title: string;
</script>

<style>
  h1 {
    font-size: 24px;
    font-size: calc(2rem + ((1vw - 0.64rem) * 0.7143));
    font-weight: bolder;
    margin-bottom: 10px;
  }
</style>

<h1>{title}</h1>
