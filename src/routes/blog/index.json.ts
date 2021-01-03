import {posts} from 'parser/articles'
import type express from 'express'

export async function get(_req: express.Request, res: express.Response) {
	const postList = await posts
	const contents = JSON.stringify(postList.map(post => {
		return {
			title: post.title,
			slug: post.slug,
			date: post.date
		}
	}))

	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}