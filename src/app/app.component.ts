import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = "Bienvenue sur le Wild Blog d'Alexia !";
  private role!: string | null;
  private authService = inject(AuthService);
  private router = inject(Router);

  public isAdmin: boolean = false;
  public isLogged: boolean = false;

  ngOnInit() {
    console.log('hello');
    this.role = this.authService.getUserRole();
    if (this.role == 'admin') {
      this.isAdmin = true;
    } else this.isAdmin = false;
    console.log(this.authService.isLoggedIn());
    this.isLogged = this.authService.isLoggedIn();
  }

  public logout() {
    this.authService.clearToken();
    this.isLogged = false;
    this.isAdmin = false;
    this.router.navigate(['']);
  }
}
