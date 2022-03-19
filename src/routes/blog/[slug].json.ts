import { posts } from 'src/parser/articles'
import type { RequestHandler } from "@sveltejs/kit";

const postMap = posts.then(posts => {
  let postMap = new Map<string,string>()
  for (const post of posts) {
    postMap.set(post.slug, JSON.stringify(post))
  }
  return postMap
})

export const get: RequestHandler = async ({ params }) => {
  const { slug } = params;
  const posts = await postMap;

	if (posts.has(slug)) {
		return {
			status: 200,
			body: posts.get(slug)
		}
	}

	return {
		status: 404,
		body: {
			message: `Not found`
		}
	}
}