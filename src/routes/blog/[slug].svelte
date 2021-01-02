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

<svelte:head>
	<title>{post.title} - n-ari.tech/blog</title>
</svelte:head>

<SubTitle title={post.title} />
<h4>{post.date}</h4>

<div class='content'>
	{@html post.html}
</div>