import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Experience } from '../../services/portfolio.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.experiences = this.portfolioService.getExperience();
  }
}
