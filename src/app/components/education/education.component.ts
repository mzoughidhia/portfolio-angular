import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioService, Education } from '../../services/portfolio.service';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.educationList = this.portfolioService.getEducation();
  }
}
