import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'projects', label: 'Projects' },
    { href: 'skills', label: 'Skills' },
    { href: 'contact', label: 'Contact' }
  ];

  socialLinks = [
    { icon: 'fas fa-envelope', href: 'mailto:meddhiamzoughi48@gmail.com', label: 'Email' },
    { icon: 'fab fa-github', href: '#', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: '#', label: 'LinkedIn' }
  ];

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const targetPos = element.offsetTop - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  }
}
