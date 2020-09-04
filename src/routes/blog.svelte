<script lang="ts" context="module">
  export function preload() {
    return this.fetch(`blog.json`)
      .then((r: any) => r.json())
      .then((posts: Post[]) => {
        return { posts };
      });
  }
</script>

<script lang="ts">
  // @ts-check
  import { goto } from "@sapper/app";
  import SubTitle from '../components/SubTitle.svelte'
  import { Post } from 'parser/articles'
  export let posts: Post[]

  class Article extends Post {
    Hover: boolean = false
    goto = async () => {
      this.Hover = false
      await goto(`blog/${this.slug}`, {})
    }
    constructor(post: Post){
      super({slug: post.slug,title: post.title, date: post.date}, post.html)
    }
  }

  const articles = posts.map((post: Post) => new Article(post))
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<SubTitle title="Blog"></SubTitle>
{#if articles.length !== 0}
<ul>
  {#each articles as article}
    <li
      class="page_list {article.Hover ? 'mouseover' : ''}"
      on:click={article.goto}
      on:mouseover={() => {
        article.Hover = true
      }}
      on:mouseout={() => {
        article.Hover = false
      }}>{article.date} - {article.title}</li>
  {/each}
</ul>
{:else}
<p>まだ記事がありません</p>
{/if}