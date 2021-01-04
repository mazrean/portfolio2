<script lang="ts" context="module">
	export function preload(this: any, { params }: { params: any }) {
		const post: Promise<Post> = (async () => {
			const res = await this.fetch(`/blog/${params.slug}.json`);
			return res.json();
		})();
		return {
			post,
			Shadow: (async () => (await import("svelte-loading-spinners")).Shadow)(),
		};
	}
</script>

<script lang="ts">
	import SubTitle from "../../components/SubTitle.svelte";
	import type { Post } from "parser/classes";
	import { onMount } from "svelte";
	export let post: Promise<Post>;
	export let Shadow: Promise<any>;

	onMount(() => {
		document.querySelectorAll("a").forEach((a) => {
			if (!a.hash || !document.querySelectorAll(a.hash).length) return;

			a.href = window.location + a.hash;
		});
	});
	function title(post: Post): string {
		document.title = post.title + " - mazrean-portfolio/blog";
		return post.title;
	}
</script>

<style lang="scss">
	$link-color: #022b77 !default;
	$hr-color: #e1e4e8 !default;
	$h6-color: #6a737d !default;
	$quote-text-color: #6a737d !default;
	$quote-bar-color: #022b77 !default;
	$code-file-name-background-color: rgba(0, 0, 0, 0.1) !default;
	$table-td-border-color: #dfe2e5 !default;
	$table-tr-border-color: #c6cbd1 !default;
	$table-tr-background-color: #fff !default;
	$table-tr-background-color2: #f6f8fa !default;
	$img-background-color: #fff !default;
	$mark-color: black !default;
	$mark-background-color: yellow !default;

	.shadow {
		width: 60px;
		height: 60px;
		margin: 90px auto;
	}

	@import url("https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css");
	@import url("https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/monokai-sublime.min.css");
	:global(.content) {
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		line-height: 1.2;
		word-wrap: break-word;

		> :global(:first-child) {
			margin-top: 0 !important;
		}
		> :global(:last-child) {
			margin-bottom: 0 !important;
		}

		:global(a) {
			color: $link-color;
			background-color: initial;
			&:active,
			&:hover {
				text-decoration: underline;
				outline-width: 0;
			}
			&:not([href]) {
				color: inherit;
				text-decoration: none;
			}
			&:not(.footnote-ref) {
				&:not(.footnote-backref) {
					&::after {
						font-family: "Font Awesome 5 Free";
						content: "\f0c1";
						font-size: 0.7em;
						font-weight: 900;
						padding: 0 0 0 0.3em;
						display: inline-block;
						font-style: normal;
						font-variant: normal;
						text-rendering: auto;
						line-height: 1;
					}
				}
			}
		}

		:global(strong) {
			font-weight: bold;
		}

		:global(hr) {
			height: 0.25em;
			padding: 0;
			margin: 12px 0;
			border: 0;
			background-color: $hr-color;
			overflow: hidden;
		}

		:global(h1, h2, h3, h4, h5, h6) {
			margin-top: 12px;
			margin-bottom: 8px;
			font-weight: bold;
			line-height: 1.25;
		}
		:global(h1, h2) {
			padding-bottom: 0.3em;
		}
		:global(h1) {
			font-size: 2em;
		}
		:global(h2) {
			font-size: 1.5em;
		}
		:global(h3) {
			font-size: 1.25em;
		}
		:global(h4) {
			font-size: 1em;
		}
		:global(h5) {
			font-size: 0.875em;
			transform: rotate(0.03deg);
		}
		:global(h6) {
			font-size: 0.85em;
			transform: rotate(0.03deg);
			color: $h6-color;
		}

		:global(p) {
			margin-top: 0;
			margin-bottom: 8px;
		}

		:global(blockquote) {
			position: relative;
			margin-top: 0;
			margin-bottom: 8px;
			margin-left: 20px;
			padding: 0 12px;
			color: $quote-text-color;
			> :global(:first-child) {
				margin-top: 0;
			}
			> :global(:last-child) {
				margin-bottom: 0;
			}

			&::before {
				content: "";
				position: absolute;
				display: block;
				top: 0;
				left: 0;
				width: 0.25em;
				height: 100%;
				background: $quote-bar-color;
			}
		}
		> :global(blockquote),
		:global(:not(blockquote)) > :global(blockquote) {
			$bottom-padding: 4px;
			padding-bottom: $bottom-padding;
			overflow: auto;
			&::before {
				height: calc(100% - #{$bottom-padding});
			}
		}

		:global(ol) {
			list-style: decimal;
		}
		:global(ul) {
			list-style: disc;
		}
		:global(ol, ul) {
			padding-left: 2em;
			margin-top: 0;
			margin-bottom: 8px;
			word-break: break-all;
			:global(ol) {
				list-style-type: lower-roman;
			}
			:global(ol),
			:global(ul) {
				margin-top: 0;
				margin-bottom: 0;
				:global(ol) {
					list-style-type: lower-alpha;
				}
			}
		}
		:global(li) {
			> :global(p) {
				margin-top: 8px;
			}
			+ :global(li) {
				margin-top: 4px;
			}
		}
		> :global(ul),
		> :global(ol),
		:global(:not(li)) > :global(ul),
		:global(:not(li)) > :global(ol) {
			padding-bottom: 4px;
			overflow: auto;
		}

		:global(code),
		:global(pre) {
			font-size: 0.85em;
			border-radius: 4px;
		}
		:global(code) {
			display: inline-block;
			padding: 2px 6px;
			margin: 2px 0;
		}
		:global(s) > :global(code) {
			text-decoration: line-through;
		}
		:global(pre) {
			position: relative;
			margin-top: 0;
			margin-bottom: 16px;
			overflow-wrap: normal;
			line-height: 1.45;
			:global(cite) {
				position: absolute;
				top: 0;
				right: 0;
				padding: 0 4px;
				border-bottom-left-radius: 4px;
				background-color: $code-file-name-background-color;
			}
			:global(code) {
				display: block;
				padding: 16px;
				margin: 0;
				border: 0;
				font-size: 1em;
				overflow: auto;
				word-break: normal;
				overflow-wrap: normal;
				white-space: pre;
				line-height: inherit;
			}
		}

		:global(table) {
			display: block;
			width: 100%;
			margin-top: 0;
			margin-bottom: 16px;
			padding-bottom: 4px;
			overflow: auto;
			border-spacing: 0;
			border-collapse: collapse;
		}
		:global(td),
		:global(th) {
			padding: 4px 12px;
			border: 1px solid $table-td-border-color;
		}
		:global(th) {
			font-weight: bold;
		}
		:global(tr) {
			border-top: 1px solid $table-tr-border-color;
			background-color: $table-tr-background-color;
			&:nth-child(2n) {
				background-color: $table-tr-background-color2;
			}
		}

		:global(mark) {
			color: $mark-color;
			background-color: $mark-background-color;
		}

		:global(img) {
			max-width: 100%;
			border-style: none;
			box-sizing: initial;
		}

		:global(.katex-block) {
			overflow: auto;
			margin-bottom: 4px;
		}
	}
</style>

<svelte:head>
	<title>mazrean-portfolio/blog</title>
	<link
		href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
		rel="stylesheet"
		type="text/css"
		crossorigin />
	<link
		href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.10/styles/monokai-sublime.min.css"
		rel="stylesheet"
		type="text/css"
		crossorigin />
</svelte:head>

{#await Shadow then Shadow}
	{#await post}
		<div class="shadow">
			<svelte:component
				this={Shadow}
				class="Shadow"
				size="60"
				color="#022b77"
				unit="px" />
		</div>
	{:then post}
		<SubTitle title={title(post)} />
		<h4>date: {post.date}</h4>

		<div class="content">
			{@html post.html}
		</div>
	{/await}
{/await}
