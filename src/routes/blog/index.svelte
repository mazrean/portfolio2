<script lang="ts" context="module">
  import type { Load } from "@sveltejs/kit";
  export const load: Load = async ({ fetch }) => {
    const posts: Post[] = await fetch(`blog.json`).then((r: Response) =>
      r.json()
    );
    return {
      props: {
        posts,
      },
    };
  };
</script>

<script lang="ts">
  import { Post } from "src/parser/classes";
  import { goto } from "$app/navigation";
  import SubTitleUnderline from "../../components/SubTitleUnderline.svelte";
  import List from "../../components/List.svelte";
  import BlogItem from "../../components/BlogItem.svelte";
  export let posts: Post[];

  class Article extends Post {
    hover: boolean = false;
    mouseDown: boolean = false;
    goto = () => {
      this.hover = false;
      goto(this.link, {});
    };
    constructor(post: Post) {
      super(post.slug, post.title, post.date, post.html);
    }
  }

  function article(postList: Post[]) {
    return postList.map((post: Post) => new Article(post));
  }
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="wrapper">
  <SubTitleUnderline title="Blog" />
  <List items={article(posts)} height={45} lineWidth={98} let:item={article}>
    <BlogItem {article} />
  </List>
</div>

<style>
  div.wrapper {
    padding: 0 10px;
  }
</style>
