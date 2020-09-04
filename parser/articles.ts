import {readdirSync, readFileSync, statSync, fstat, Stats} from 'fs';
import path from 'path';
import mdparser from './md-parser';
import fm from 'front-matter';

const rootDir = process.cwd()
const postDir = path.join(rootDir, "posts")
const fileNames = readdirSync(postDir)

class Attr {
  slug: string
  title: string
  date: string
  constructor({ slug, title, date }: { slug: string; title: string; date: string; }){
    this.slug = slug
    this.title = title
    this.date = date
  }
}
export class Post extends Attr {
  html: string
  constructor(attr: Attr, html: string){
    super(attr)
    this.html = html
  }
}

const postPromises: Promise<Post>[] = []

for (const fileName in fileNames) {
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
  const attr = fm<Attr>(file).attributes;
  const postPromise = (async () => {
    const html = await mdparser(file)
    return new Post(attr, html)
  })()
  postPromises.push(postPromise)
}

export const posts = Promise.all(postPromises).then(posts => {
  posts.sort((a,b)=>{
    return a.date === b.date ? 0 : (a.date < b.date ? 1 : -1)
  })
  return posts
})