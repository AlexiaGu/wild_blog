import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent],
  templateUrl: './app.component.html',
  //  template: '<h1>"hello you"</h1>',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'Alexia';
}
