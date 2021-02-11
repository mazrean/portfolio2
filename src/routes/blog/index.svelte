<script lang="ts" context="module">
  export function preload(this: any) {
    const posts: Promise<Post[]> = (async () => {
      const res: any = await this.fetch(`/blog.json`);
      return res.json();
    })();
    return {
      posts,
      Shadow: (async () => (await import("svelte-loading-spinners")).Shadow)(),
    };
  }
</script>

<script lang="ts">
  // @ts-check
  import { Post } from "parser/classes";
  import { goto } from "@sapper/app";
  import SubTitleUnderline from "../../components/SubTitleUnderline.svelte";
  import List from "../../components/List.svelte";
  import BlogItem from "../../components/BlogItem.svelte";
  export let posts: Promise<Post[]>;
  export let Shadow: Promise<any>;

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

  {#await Shadow then Shadow}
    {#await posts}
      <div class="loading">
        <svelte:component
          this={Shadow}
          class="Shadow"
          size="60"
          color="#022b77"
          unit="px"
        />
      </div>
    {:then postList}
      <List
        items={article(postList)}
        height={45}
        lineWidth={98}
        let:item={article}
      >
        <BlogItem {article} />
      </List>
    {/await}
  {/await}
</div>

<style>
  div.loading {
    width: 60px;
    height: 60px;
    margin: 90px auto;
  }
  div.wrapper {
    padding: 0 10px;
  }
</style>
