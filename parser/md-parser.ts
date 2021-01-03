import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import math from 'remark-math'
import html from 'rehype-stringify'
import gfm from 'remark-gfm'
import footnotes from 'remark-footnotes'
const highlight = require('remark-highlight.js')

const processor = unified()
  .use(markdown)
  .use(gfm)
  .use(footnotes, {inlineNotes: true})
  .use(math)
  .use(highlight)
  .use(remark2rehype)
  .use(katex)
  .use(html, {
    quoteSmart: true,
    closeSelfClosing: true,
    omitOptionalTags: true,
    entities: {useShortestReferences: true}
  });

const parser = async (md: string) => {
  const html = await processor.process(md).catch((err) => {
    throw err
  })
  return html.toString()
}
export default parser