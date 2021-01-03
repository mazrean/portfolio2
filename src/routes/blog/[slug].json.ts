import type { Post } from 'parser/classes'
import { posts } from 'parser/articles'
import type express from 'express'

const postMap = posts.then(posts => {
  let postMap = new Map<string,string>()
  for (const post of posts) {
    postMap.set(post.slug, JSON.stringify(post))
  }
  return postMap
})

export async function get(req: express.Request, res: express.Response, _next: express.NextFunction) {
  const { slug } = req.params;
  const posts = await postMap

	if (posts.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})

		res.end(posts.get(slug))
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		})

		res.end(JSON.stringify({
			message: `Not found`
		}))
	}
}