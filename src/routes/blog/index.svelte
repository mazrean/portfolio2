<script lang="ts" context="module">
  export async function preload(this: any) {
    const res: any = await this.fetch(`/blog.json`);
    const posts: Post[] = await res.json();
    return { posts };
  }
</script>

<script lang="ts">
  // @ts-check
  import { Post } from "parser/classes";
  import { goto } from "@sapper/app";
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

  const articles = posts.map((post: Post) => new Article(post));
</script>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<SubTitleUnderline title="Blog" />

<List items={articles} height={45} lineWidth={98} let:item={article}>
  <BlogItem {article} />
</List>
