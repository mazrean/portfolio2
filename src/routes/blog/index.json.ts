import {posts} from 'parser/articles'
import type express from 'express'

const contents = JSON.stringify((await posts).map(post => {
	return {
		title: post.title,
		slug: post.slug,
		date: post.date
	}
}))

export function get(_req: express.Request, res: express.Response) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}