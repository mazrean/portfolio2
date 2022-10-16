import { unified } from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import katex from 'rehype-katex'
import math from 'remark-math'
import html from 'rehype-stringify'
import gfm from 'remark-gfm'
import footnotes from 'remark-footnotes'
import highlight from 'rehype-highlight'

const processor = unified()
  .use(markdown)
  .use(gfm)
  .use(footnotes, {inlineNotes: true})
  .use(math)
  .use(remark2rehype)
  .use(highlight)
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