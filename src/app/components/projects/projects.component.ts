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
      title: 'SIGV',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pharetra tempor imperdiet.',
      links: [
        ['GitHub', 'https://github.com/DiegoMaia83/Sigv'],
        ['Site', 'http://sigv.devmaia.com.br']
      ],
      categories: [
        [ '.NET Framework', this.getColor('.NET Framework') ],
        [ 'C#', this.getColor('C#') ],
        [ 'MySql', this.getColor('MySql') ],
        [ 'Bootstrap', this.getColor('Bootstrap') ],
        [ 'CSS', this.getColor('CSS') ],
        [ 'Javascript', this.getColor('Javascript') ],
        [ 'Jquery', this.getColor('WEB') ]
      ]
    },
    {
      title: 'Sistema de condomínio',
      description: 'Sistema de condomínio',
      links: [
        ['GitHub', 'https://github.com/DiegoMaia83/Sigv'],
        ['Site', 'http://sigv.devmaia.com.br']
      ],
      categories: [
        [ '.NET Framework', this.getColor('.NET Framework') ],
        [ 'C#', this.getColor('C#') ]
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
      default:
        return 'fas fa-link'; 
    }
    
  }

  // Função para filtrar os projetos com base na categoria selecionada
  filterProjects(category: string) {
    this.filteredProjects = this.projects.filter(project => 
      project.categories.some(cat => cat[0] === category)
    );
  }

  abrirLink(link:string) {
    window.open(link, '_blank');
  }

}
