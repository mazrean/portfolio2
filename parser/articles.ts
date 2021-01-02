import { Post, Attr } from './classes';
import {readdirSync, readFileSync, statSync, Stats} from 'fs';
import path from 'path';
import mdparser from './md-parser';
import fm from 'front-matter';

const rootDir = process.cwd()
const postDir = path.join(rootDir, "posts")
const fileNames = readdirSync(postDir)

const postPromises: Promise<Post>[] = []

for (const fileName of fileNames) {
  if (process.env.NODE_ENV !== 'development' && fileName.endsWith("_test")) {
    continue
  }
  // fileの拡張子チェック
  const fileExt = path.extname(fileName)
  if (fileExt !== ".md") {
    console.warn(`postDir(${postDir}) contains a not markdown file(${fileName}).`)
    continue
  }

  const filePath = path.join(postDir, fileName)

  // fileかどうか確認
  let stat: Stats;
  try {
    stat = statSync(filePath)
  } catch (err) {
    console.warn(`check existence error :${err}`)
    continue
  }
  if (!stat.isFile) {
    console.warn(`postDir(${postDir}) contains a directory(${fileName}).`)
    continue
  }

  const file = readFileSync(filePath).toString()
  const content = fm<Attr>(file)
  const attr = content.attributes;
  const body = content.body
  const postPromise = (async () => {
    const html = await mdparser(body)
    return new Post(fileName.slice(0, -3), attr.title, attr.publishDate, html, attr.updateDate)
  })()
  postPromises.push(postPromise)
}

export const posts = Promise.all(postPromises).then(posts => {
  posts.sort((a,b)=>{
    return a.date === b.date ? 0 : (a.date < b.date ? 1 : -1)
  })
  return posts
})