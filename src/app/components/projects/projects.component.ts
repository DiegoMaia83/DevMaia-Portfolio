import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Project, ProjectLink } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  selectedProject = new Project();

  projects = this.listProjects()

  /*
  projects2 = [
    {
      id: 'email-api',
      title: 'E-mail - Api',
      description: 'API de e-mail desenvolvida em .NET Core.',
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
      ],
      images: 2
    },
    {
      id: 'sigv-web',
      title: 'SIGV',
      description: 'Sistema WEB de cadastro e controle de veículos, desenvolvido em .NET Framework com MVC.',
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
      ],
      images: 6
    },
    {
      id: 'sigv-api',
      title: 'SIGV - Api',
      description: 'API desenvolvida em .NET Framework com MySQL, projetada para atender a versão web a versão mobile do sistema.',
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
      ],
      images: 4
    }      
  ];
  */

  // Lista de projetos filtrados
  filteredProjects = this.projects;  

  listProjects() {

    let projects = new Array<Project>

    let pr1: Project = {
      id: 'email-api',
      title: 'E-mail - Api',
      description: 'API de e-mail desenvolvida em .NET Core.',
      links: [
          new ProjectLink('GitHub', 'https://github.com/DiegoMaia83/ApiMail'),
          new ProjectLink('Api', 'http://api-mail.devmaia.com.br/swagger/index.html')
      ],
      categories: ['.NET Core', 'C#', 'Swagger'],
      filters: ['Api'],
      images: 2
    };

    let pr2: Project = {
      id: 'sigv-web',
      title: 'SIGV',
      description: 'Sistema WEB de cadastro e controle de veículos, desenvolvido em .NET Framework com MVC.',
      links: [
          new ProjectLink('GitHub', 'https://github.com/DiegoMaia83/Sigv'),
          new ProjectLink('Site', 'http://sigv.devmaia.com.br')
      ],
      categories: [ '.NET Framework', 'C#', 'Bootstrap', 'HTML', 'CSS', 'Javascript', 'Jquery' ],
      filters: ['Web'],
      images: 6
    };

    let pr3: Project = {
      id: 'sigv-api',
      title: 'SIGV - Api',
      description: 'API desenvolvida em .NET Framework com MySQL, projetada para atender a versão web a versão mobile do sistema.',
      links: [
          new ProjectLink('GitHub', 'https://github.com/DiegoMaia83/Sigv'),
          new ProjectLink('Api', 'http://api-sigv.devmaia.com.br/swagger')
      ],
      categories: [ '.NET Framework', 'C#', 'MySql', 'Swagger' ],
      filters: ['Api'],
      images: 4
    };

    let pr4: Project = {
      id: 'sigv-mobile',
      title: 'SIGV - Mobile',
      description: 'Aplicativo mobile desenvolvido para efetuar a coleta de fotos e apontamentos de opcionais e avarias dos veículos',
      links: [
          new ProjectLink('GitHub', 'https://github.com/DiegoMaia83/Sigv')
      ],
      categories: [ 'Xamarin', 'C#' ],
      filters: ['Mobile'],
      images: 5
    };

    projects.push(pr1)
    projects.push(pr2)
    projects.push(pr3)
    projects.push(pr4)

    return projects
    
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

  filterProjects(filter: string) {
    this.filteredProjects = this.projects.filter(project => 
      project.filters.some(f => f.toLowerCase() === filter.toLowerCase()) // Comparação insensível a maiúsculas/minúsculas
    );
  }

  abrirLink(link:string) {
    window.open(link, '_blank');
  }

  getImageArray() {
    return Array.from({ length: this.selectedProject.images }, (_, index) => ({ index }));
  }

  buildSliderImages(id: string) {

    if (id == undefined) return ''

    this.selectedProject = this.projects.find(p => p.id === id);
    
    let images = this.selectedProject.images
    let imagesSlider = ''

    for (var i = 1; i <= images; i++) {
      imagesSlider += `<div class="carousel-item ${i == 1 ? "active" : ""}">`
      imagesSlider += `<img class="d-block w-100" src="/assets/images/${id}/${String(i).padStart(2, '0')}.jpg">`
      imagesSlider += `</div>`
    }

    return imagesSlider;  

  }

  openProjectModal(id: string) {
    this.selectedProject = this.projects.find(p => p.id === id);

    
    if (this.selectedProject) {
      /*
      let images = this.selectedProject.images
      let imagesSlider = ''

      for (var i = 1; i <= images; i++) {
        imagesSlider += `<div class="carousel-item ${i == 1 ? "active" : ""}">`
        imagesSlider += `<img class="d-block w-100" src="/assets/images/${id}/${String(i).padStart(2, '0')}.jpg">`
        imagesSlider += `</div>`
      }

      document.querySelector('.carousel-inner').innerHTML = imagesSlider;  
      
      document.getElementById('skillTitle').textContent = this.selectedProject.title;
      document.getElementById('skillDescription').textContent = this.selectedProject.description;

      let links = this.selectedProject.links
      let linksIcons = ''

      linksIcons += '<div class="dm-project-links">'
      linksIcons += '<div class="dm-project-link">'

      links.forEach(link => {
        console.log(link)
        linksIcons += `<a href="">`
        linksIcons += `<i class="${this.getIcon(link[0])}"> ${link[0]}`
        linksIcons += `</a>`
      })

      linksIcons += '</div>'
      linksIcons += '</div>'

      console.log(linksIcons)


      document.getElementById('skillLinks').innerHTML = linksIcons;
*/
      const modal = new (window as any).bootstrap.Modal(document.getElementById('skillModal'));
      modal.show();
    }
  }

}
