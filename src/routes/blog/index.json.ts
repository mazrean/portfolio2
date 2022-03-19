import {posts} from 'src/parser/articles'
import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = async () => {
	const postList = await posts
	const contents = JSON.stringify(postList.map(post => {
		return {
			title: post.title,
			slug: post.slug,
			date: post.date
		}
	}))

	return {
		status: 200,
		body: contents
	}
}