// // Fichier pour typer l'objet article de article.component.ts
export interface Article {
  id: number;
  title: string;
  author: string;
  content: string;
  image: string;
  isPublished: boolean;
  comment: string;
  likes: number;
}
