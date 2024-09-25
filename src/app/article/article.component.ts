import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  title: string = "🧦 L'odyssée des chaussettes 🧦";
  introduction: string =
    " Les chaussettes, ces fidèles compagnons de nos pieds, sont souvent victimes d'un phénomène inexplicable : la disparition. Que se passe-t-il donc dans le tambour de la machine à laver ? Voici quelques théories amusantes :";
  theories: { title: string; content: string }[] = [
    {
      title: 'Le vortex des chaussettes',
      content:
        "Certains croient qu'il existe un vortex mystérieux qui aspire les chaussettes dans une autre dimension. Peut-être qu'elles vivent des aventures palpitantes dans un monde parallèle !",
    },
    {
      title: 'La rébellion des chaussettes',
      content:
        "D'autres soutiennent que les chaussettes se rebellent contre leur sort. Elles choisissent de s'échapper pour vivre une vie de liberté, loin des pieds qui les emprisonnent.",
    },
    {
      title: 'Le complot des lave-linge',
      content:
        "Une théorie plus sombre suggère que les machines à laver sont en fait des agents secrets qui collectent des chaussettes pour leur propre usage. Qui sait ce qu'elles font avec toutes ces chaussettes perdues ?",
    },
  ];
  addTheory(title: string, content: string): void {
    this.theories.push({ title, content });
  }
}
