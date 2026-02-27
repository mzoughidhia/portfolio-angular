import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent implements OnInit, OnDestroy {
  typingText = '';
  showCursor = true;

  private typingTexts = [
    'E-business Graduate',
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Problem Solver',
    'IoT Developer'
  ];
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimer: any;
  private particles: HTMLElement[] = [];

  ngOnInit(): void {
    setTimeout(() => this.typeText(), 1000);
    this.createParticles();
  }

  ngOnDestroy(): void {
    if (this.typingTimer) clearTimeout(this.typingTimer);
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const targetPos = element.offsetTop - offset;
      window.scrollTo({ top: targetPos, behavior: 'smooth' });
    }
  }

  private typeText(): void {
    const currentText = this.typingTexts[this.textIndex];

    if (this.isDeleting) {
      this.typingText = currentText.substring(0, this.charIndex - 1);
      this.charIndex--;
    } else {
      this.typingText = currentText.substring(0, this.charIndex + 1);
      this.charIndex++;
    }

    let typeSpeed = this.isDeleting ? 60 : 100;

    if (!this.isDeleting && this.charIndex === currentText.length) {
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.textIndex = (this.textIndex + 1) % this.typingTexts.length;
      typeSpeed = 400;
    }

    this.typingTimer = setTimeout(() => this.typeText(), typeSpeed);
  }

  private createParticles(): void {
    setTimeout(() => {
      const container = document.getElementById('particles');
      if (!container) return;

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const duration = Math.random() * 15 + 10;
        const delay = Math.random() * 10;
        const colors = ['#6c63ff', '#ff6584', '#43e97b', '#38f9d7'];

        particle.style.cssText = `
          width: ${size}px;
          height: ${size}px;
          left: ${left}%;
          animation-duration: ${duration}s;
          animation-delay: ${delay}s;
          background: ${colors[Math.floor(Math.random() * colors.length)]};
        `;

        container.appendChild(particle);
        this.particles.push(particle);
      }
    }, 100);
  }
}
