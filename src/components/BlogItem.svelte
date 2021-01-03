<script lang="ts">
  import type { Post } from "parser/classes";
  export let article: Post;
  let date: string = article.date.split(" ")[0];
  let cssWidth: string = String(("date:" + date).length / 2) + "em";
</script>

<style>
  a {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    text-decoration: none;
  }
  span.title {
    font-weight: bolder;
    font-size: 1.4em;
  }
  span.date {
    margin: 0 0 0 auto;
    font-size: 1em;
    min-width: var(--width);
    padding: 0 5px;
  }
</style>

<a rel="prefetch" href={article.link}>
  <span class="title">{article.title}</span>
  <span class="date" style="--width: {cssWidth}">date:{date}</span>
</a>
