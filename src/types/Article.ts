type source = {
  id: string | null,
  name: string,
};

export interface Article {
  source: source
  author: string,
  title: string,
  description: string,
  url: string,
  urlToImage: string,
  publishedAt: Date,
  content: string,
};

export type NormalizedArticle = Pick<Article, "title" | "urlToImage" | "description" |"author">;
