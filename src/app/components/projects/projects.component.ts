import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = [
    {
      title: 'E-mail - Api',
      description: 'API de e-mail desenvolvida em .NET Core.',
      thumb: 'sigv.jpg',
      links: [
        ['GitHub', 'https://github.com/DiegoMaia83/ApiMail'],
        ['Api', 'http://api-mail.devmaia.com.br/swagger/index.html']
      ],
      categories: [
        [ '.NET Core', this.getColor('.NET Core') ],
        [ 'C#', this.getColor('C#') ],
        [ 'Swagger', this.getColor('Swagger') ]
      ],
      filters: [
         'API' 
      ]
    },
    {
      title: 'SIGV',
      description: 'Sistema WEB de cadastro e controle de veículos, desenvolvido em .NET Framework com MVC.',
      thumb: 'sigv.jpg',
      links: [
        ['GitHub', 'https://github.com/DiegoMaia83/Sigv'],
        ['Site', 'http://sigv.devmaia.com.br']
      ],
      categories: [
        [ '.NET Framework', this.getColor('.NET Framework') ],
        [ 'C#', this.getColor('C#') ],
        [ 'Bootstrap', this.getColor('Bootstrap') ],
        [ 'HTML', this.getColor('HTML') ],
        [ 'CSS', this.getColor('CSS') ],
        [ 'Javascript', this.getColor('Javascript') ],
        [ 'Jquery', this.getColor('WEB') ]
      ],
      filters: [
         'Web'
      ]
    },
    {
      title: 'SIGV - Api',
      description: 'API desenvolvida em .NET Framework com MySQL, projetada para atender a versão web a versão mobile do sistema.',
      thumb: 'sigv-api.jpg',
      links: [
        ['GitHub', 'https://github.com/DiegoMaia83/Sigv'],
        ['Api', 'http://api-sigv.devmaia.com.br/swagger']
      ],
      categories: [
        [ '.NET Framework', this.getColor('.NET Framework') ],
        [ 'C#', this.getColor('C#') ],
        [ 'MySql', this.getColor('MySql') ],
        [ 'Swagger', this.getColor('Swagger') ]
      ],
      filters: [
         'API' 
      ]
    }
      
  ];

  // Lista de projetos filtrados
  filteredProjects = this.projects;

  getColor(category: string) {

    let color;

    switch (category) {
      case 'Desenvolvimento':
        color = '#ec0000'
        break;
      default:
        color = '#ccc'
    }

    return color
  }

  getIcon(linkTitle: string): string {

    switch (linkTitle.toLowerCase()) {
      case 'github':
        return 'fab fa-github';
      case 'site':
        return 'fas fa-globe';
      case 'api':
        return 'fas fa-sitemap'
      default:
        return 'fas fa-link'; 
    }
    
  }

  // Função para filtrar os projetos com base na categoria selecionada
  filterProjects(filter: string) {
    this.filteredProjects = this.projects.filter(project => 
      project.filters.some(f => f.toLowerCase() === filter.toLowerCase()) // Comparação insensível a maiúsculas/minúsculas
    );
  }

  abrirLink(link:string) {
    window.open(link, '_blank');
  }

}
