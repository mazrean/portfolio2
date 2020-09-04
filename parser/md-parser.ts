import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import html from 'rehype-stringify'

const processor = unified()
  .use(markdown)
  .use(remark2rehype)
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