export class Attr {
  slug: string
  title: string
  publishDate: string
  updateDate?: string
  constructor(slug: string, title: string, publishDate: string, updateDate?: string){
    this.slug = slug
    this.title = title
    this.publishDate = publishDate
    this.updateDate = updateDate
  }
}

export class Post extends Attr {
  date: string
  html: string
  constructor(slug: string, title: string, publishDate: string, html: string, updateDate?: string){
    super(slug, title, publishDate, updateDate)
    if (updateDate) {
      this.date = updateDate
    } else {
      this.date = publishDate
    }
    this.html = html
  }
}