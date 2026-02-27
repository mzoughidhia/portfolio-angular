import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSending = false;
  showSuccess = false;

  contactInfo = [
    {
      icon: 'fas fa-envelope',
      label: 'Email',
      value: 'meddhiamzoughi48@gmail.com',
      href: 'mailto:meddhiamzoughi48@gmail.com'
    },
    {
      icon: 'fas fa-phone',
      label: 'Phone',
      value: '(+216) 92 83 62 36',
      href: 'tel:+21692836236'
    },
    {
      icon: 'fas fa-map-marker-alt',
      label: 'Location',
      value: 'El Mourouj, Ben Arous, Tunisia',
      href: null
    }
  ];

  socialLinks = [
    { icon: 'fab fa-github', href: '#', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' },
    { icon: 'fab fa-twitter', href: '#', label: 'Twitter' }
  ];

  onSubmit(): void {
    this.isSending = true;

    setTimeout(() => {
      this.isSending = false;
      this.showSuccess = true;
      this.formData = { name: '', email: '', subject: '', message: '' };

      setTimeout(() => {
        this.showSuccess = false;
      }, 4000);
    }, 1500);
  }
}
