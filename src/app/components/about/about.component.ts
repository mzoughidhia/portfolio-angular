import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  stats = [
    { number: '4+', label: 'Projects' },
    { number: '2+', label: 'Years Study' },
    { number: '6+', label: 'Technologies' },
    { number: '3+', label: 'Certifications' }
  ];

  info = [
    { icon: 'fas fa-envelope', text: 'meddhiamzoughi48@gmail.com' },
    { icon: 'fas fa-phone', text: '(+216) 92 83 62 36' },
    { icon: 'fas fa-map-marker-alt', text: 'El Mourouj, Ben Arous, Tunisia' }
  ];
}
