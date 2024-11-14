import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'articles/:id', component: ArticlePageComponent },
  { path: 'contactform', component: ContactFormComponent },
  { path: 'signupform', component: SignupFormComponent },
  //chemin page 404 Not found
  { path: '**', component: NotFoundComponent },
];
