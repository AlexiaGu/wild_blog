import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ArticlePageComponent } from './pages/article-page/article-page.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { authGuard } from './guards/auth.guard';
import { ProfilePageComponent } from './components/profile-page/profile-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { roleGuard } from './guards/role.guard';
import { visitorOnlyGuard } from './guards/visitor-only.guard';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contactform', component: ContactFormComponent },
  {
    path: 'signupform',
    component: SignupFormComponent,
    canActivate: [visitorOnlyGuard],
  },
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [visitorOnlyGuard],
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    canActivate: [authGuard],
  },

  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [roleGuard('ROLE_ADMIN')],
  },

  //chemin page 404 Not found
  { path: '**', component: NotFoundComponent },
];
