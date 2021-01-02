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
	h4.date {
		padding: 0 10px;
	}
</style>

<svelte:head>
	<title>{post.title} - mazrean-portfolio/blog</title>
</svelte:head>

<SubTitle title={post.title} />
<h4 class="date">date: {post.date}</h4>

<div class='content'>
	{@html post.html}
</div>