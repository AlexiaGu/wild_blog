import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
})
export class LoginPageComponent {
  user = {
    email: '',
    password: '',
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: () => this.router.navigate(['/profile']), // ou autre redirection
        error: () => alert('Email ou mot de passe incorrect'),
      });
    }
  }
}
