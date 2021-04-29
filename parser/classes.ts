export class Attr {
  slug: string
  title: string
  isPublish: boolean
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
  link: string
  constructor(slug: string, title: string, publishDate: string, html: string, updateDate?: string){
    super(slug, title, publishDate, updateDate)
    if (updateDate) {
      this.date = new Date(updateDate).toLocaleString('ja', {timeZone: 'Asia/Tokyo'})
    } else {
      this.date = new Date(publishDate).toLocaleString('ja', {timeZone: 'Asia/Tokyo'})
    }
    this.html = html
    this.link = `blog/${slug}`;
  }
}