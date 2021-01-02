<script lang="ts">
  import type { Post } from 'parser/classes'
  export let article: Post;
</script>

<style>
  span.title {
    font-weight: bolder;
    font-size: 1.4em;
  }
  span.date {
    margin-left: 65%;
    font-size: 1.0em;
    position: absolute;
  }
</style>

  <span class="title">{article.title}</span>
  <span class="date">date:{article.date}</span>
