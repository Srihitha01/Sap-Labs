import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';
  successMessage: string = '';

  sendMessage() {
    if (this.name && this.email && this.message) {
      this.successMessage = 'Thank you! Your message has been sent ✅';
  
      this.name = '';
      this.email = '';
      this.message = '';

      setTimeout(() => this.successMessage = '', 2000);
    } else {
      this.successMessage = 'Please fill all fields ⚠️';
      setTimeout(() => this.successMessage = '', 2000);
    }
  }
}
