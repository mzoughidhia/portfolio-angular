import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: string;
  featured: boolean;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  icon: string;
  tags: string[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  location: string;
  tasks: string[];
  technologies: string[];
  icon: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  icon: string;
  color: string;
}

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  getProjects(): Project[] {
    return [
      {
        id: 1,
        title: 'Energy Consumption Prediction & Optimization',
        description: 'Design and development of a web application for predicting and optimizing energy consumption of IoT devices. Implementation of AI models (LSTM, MLP), integration of a conversational agent-based recommendation module, and development of an interactive dashboard.',
        icon: 'fas fa-bolt',
        featured: true,
        technologies: ['Python', 'Keycloak', 'Angular', 'SQL', 'Llama 3', 'ChromaDB', 'LangChain'],
        githubUrl: '#',
        demoUrl: '#'
      },
      {
        id: 2,
        title: 'Blog sur la Palestine',
        description: 'Development of a blog dedicated to Palestine using the Laravel framework. The project integrates Composer for dependency management, HTML5 for an attractive interface, and object-oriented PHP for efficient feature management.',
        icon: 'fas fa-globe',
        featured: false,
        technologies: ['Laravel', 'PHP', 'HTML5', 'Composer'],
        githubUrl: '#'
      },
      {
        id: 3,
        title: 'CV Generator',
        description: 'Development of a dynamic CV generator using HTML5 and CSS for the interface, and object-oriented PHP for CV generation. This project aims to facilitate the creation of professional CVs.',
        icon: 'fas fa-file-alt',
        featured: false,
        technologies: ['HTML5', 'CSS', 'PHP'],
        githubUrl: '#'
      },
      {
        id: 4,
        title: 'Quiz Management Application',
        description: 'Development of an interactive quiz application using Java FX to create a dynamic and intuitive user interface. The project also integrates JDBC for interaction with a database allowing storage and retrieval of questions and answers.',
        icon: 'fas fa-question-circle',
        featured: false,
        technologies: ['Java', 'JavaFX', 'JDBC', 'SQL'],
        githubUrl: '#'
      }
    ];
  }

  getEducation(): Education[] {
    return [
      {
        id: 1,
        degree: 'Diplôme en E-business',
        institution: 'École Supérieure des Sciences Économiques et Commerciales',
        period: '2022 – 2025',
        description: 'Specialized in digital business, e-commerce, and information systems management.',
        icon: 'fas fa-graduation-cap',
        tags: ['E-business', 'Digital Marketing', 'Information Systems']
      },
      {
        id: 2,
        degree: 'Baccalauréat en Économie et Gestion',
        institution: 'Ministère de l\'Éducation – Tunisie',
        period: '2021',
        description: 'Completed secondary education with a focus on economics and management.',
        icon: 'fas fa-school',
        tags: ['Economics', 'Management']
      }
    ];
  }

  getExperience(): Experience[] {
    return [
      {
        id: 1,
        title: 'Stage PFE – Data Science & IoT',
        company: 'Be Wireless Solutions',
        period: 'March 2024 – May 2024',
        location: 'Tunis, Tunisia',
        icon: 'fas fa-wifi',
        tasks: [
          'Collection, preprocessing, and structuring of data from IoT energy measurement devices.',
          'Implementation of data cleaning, transformation, and integration processes to make them exploitable.',
          'Development and training of Machine Learning models (LSTM, MLP) for energy consumption prediction.',
          'Design and implementation of an interactive board allowing visualization of consumptions, predictions, and recommendations.',
          'Integration of a conversational agent based on AI to provide personalized energy optimization recommendations.',
          'Work carried out using Agile methodology (Scrum) with breakdown into iterative sprints and deliverables.'
        ],
        technologies: ['Python', 'LSTM', 'MLP', 'Angular', 'IoT', 'Scrum', 'LangChain']
      }
    ];
  }

  getSkillCategories(): SkillCategory[] {
    return [
      {
        id: 1,
        name: 'Programming Languages',
        icon: 'fas fa-code',
        skills: [
          { name: 'Python', percentage: 85 },
          { name: 'Java', percentage: 75 },
          { name: 'C', percentage: 65 }
        ]
      },
      {
        id: 2,
        name: 'Web Development',
        icon: 'fas fa-laptop-code',
        skills: [
          { name: 'HTML5 / CSS', percentage: 90 },
          { name: 'JavaScript', percentage: 80 },
          { name: 'Angular', percentage: 75 },
          { name: 'Laravel / PHP', percentage: 70 }
        ]
      },
      {
        id: 3,
        name: 'AI & Data Science',
        icon: 'fas fa-brain',
        skills: [
          { name: 'Machine Learning', percentage: 80 },
          { name: 'Deep Learning', percentage: 75 },
          { name: 'LangChain / RAG', percentage: 70 },
          { name: 'Data Analysis', percentage: 75 }
        ]
      },
      {
        id: 4,
        name: 'Databases & Tools',
        icon: 'fas fa-database',
        skills: [
          { name: 'SQL / MySQL', percentage: 80 },
          { name: 'Git / GitHub', percentage: 75 },
          { name: 'Docker', percentage: 60 },
          { name: 'Keycloak', percentage: 65 }
        ]
      }
    ];
  }

  getCertifications(): Certification[] {
    return [
      {
        id: 1,
        name: 'Python for Data Science',
        issuer: 'IBM / Coursera',
        icon: 'fab fa-python',
        color: '#3776ab'
      },
      {
        id: 2,
        name: 'Machine Learning Fundamentals',
        issuer: 'Google / Coursera',
        icon: 'fas fa-brain',
        color: '#4285f4'
      },
      {
        id: 3,
        name: 'Web Development Bootcamp',
        issuer: 'Udemy',
        icon: 'fas fa-globe',
        color: '#ec5252'
      }
    ];
  }

  getTechIcons(): TechIcon[] {
    return [
      { name: 'Python', icon: 'fab fa-python', color: '#3776ab' },
      { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#ff2d20' },
      { name: 'Java', icon: 'fab fa-java', color: '#007396' },
      { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
      { name: 'GitHub', icon: 'fab fa-github', color: '#ffffff' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
      { name: 'Linux', icon: 'fab fa-linux', color: '#fcc624' },
      { name: 'Database', icon: 'fas fa-database', color: '#6c63ff' },
      { name: 'AI/ML', icon: 'fas fa-brain', color: '#43e97b' }
    ];
  }
}
