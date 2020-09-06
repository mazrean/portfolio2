<script lang="ts" context="module">
  export async function preload(this: any) {
    const res: any = await this.fetch(`blog.json`);
    const posts: Post[] = await res.json();
    return { posts };
  }
</script>

<script lang="ts">
  // @ts-check
  import { Post } from "parser/classes";
  import { goto } from "@sapper/app";
  import SubTitle from "../components/SubTitle.svelte";
  export let posts: Post[];

  class Article extends Post {
    Hover: boolean = false;
    goto = async () => {
      this.Hover = false;
      await goto(`blog/${this.slug}`, {});
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

<SubTitle title="Blog" />
{#if articles.length !== 0}
  <ul>
    {#each articles as article (article.slug)}
      <li
        class="page_list {article.Hover ? 'mouseover' : ''}"
        on:click={article.goto}
        on:mouseover={() => {
          article.Hover = true;
        }}
        on:mouseout={() => {
          article.Hover = false;
        }}>
        {article.date} - {article.title}
      </li>
    {/each}
  </ul>
{:else}
  <p>まだ記事がありません</p>
{/if}
