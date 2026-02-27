import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, SkillCategory, TechIcon } from '../../services/portfolio.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit, AfterViewInit {
  skillCategories: SkillCategory[] = [];
  techIcons: TechIcon[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.skillCategories = this.portfolioService.getSkillCategories();
    this.techIcons = this.portfolioService.getTechIcons();
  }

  ngAfterViewInit(): void {
    this.animateSkillBars();
  }

  private animateSkillBars(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const bar = entry.target as HTMLElement;
          const width = bar.getAttribute('data-width');
          setTimeout(() => {
            bar.style.width = width + '%';
          }, 200);
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    setTimeout(() => {
      const skillBars = document.querySelectorAll('.skill-progress');
      skillBars.forEach(bar => observer.observe(bar));
    }, 500);
  }
}
