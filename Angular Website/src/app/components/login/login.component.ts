import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login() {

    if (this.email && this.password) {
      alert(`Login successful as ${this.email}`);
      this.router.navigate(['/home']); 
    } else {
      alert('Please enter email and password!');
    }
  }

  resetForm() {
    this.email = '';
    this.password = '';
  }
}
