import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isScrolled = false;
  isMenuOpen = false;
  activeSection = 'home';

  navLinks = [
    { href: 'home', label: 'Home' },
    { href: 'about', label: 'About' },
    { href: 'education', label: 'Education' },
    { href: 'projects', label: 'Projects' },
    { href: 'experience', label: 'Experience' },
    { href: 'skills', label: 'Skills' },
    { href: 'contact', label: 'Contact' }
  ];

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 50;
    this.updateActiveSection();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  scrollToSection(sectionId: string): void {
    this.closeMenu();
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const targetPos = element.offsetTop - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  }

  private updateActiveSection(): void {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const el = section as HTMLElement;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;
      const sectionId = el.getAttribute('id') || '';

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        this.activeSection = sectionId;
      }
    });
  }
}
