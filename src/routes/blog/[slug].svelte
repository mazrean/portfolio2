<script lang="ts" context="module">
	export async function preload(this: any, { params }: {params: any}) {
		const res = await this.fetch(`blog/${params.slug}.json`);
		const data = await res.json();
		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script lang="ts">
	import SubTitle from '../../components/SubTitle.svelte'
  import type { Post } from "parser/classes";
	export let post: Post;
</script>

<style>
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}
	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}
	.content :global(ul) {
		line-height: 1.5;
	}
	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
</style>

<svelte:head>
	<title>{post.title} - n-ari.tech/blog</title>
</svelte:head>

<SubTitle title={post.title} />
<h4>{post.date}</h4>

<div class='content'>
	{@html post.html}
</div>