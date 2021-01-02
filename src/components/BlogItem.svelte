<script lang="ts">
  import type { Post } from "parser/classes";
  export let article: Post;
</script>

<style>
  span.title {
    font-weight: bolder;
    font-size: 1.4em;
    position: absolute;
  }
  span.date {
    margin: 0 0 0 auto;
    font-size: 1em;
  }
</style>

<span class="title">{article.title}</span>
<span class="date">date:{article.date}</span>
