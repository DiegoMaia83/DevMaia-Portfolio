import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  public skillsBackEnd = [
    ['C#', 4.0],
    ['ASP Clássico', 3.0],
    ['.NET Framework', 4.0],
    ['.NET Core', 4.0],
    ['.NET Maui', 3.0],
    ['Xamarim', 3.0],
    ['XML', 3.5],
    ['JSON', 4.0],
  ]

  public skillsFrontEnd = [
    ['HTML', 4.0],
    ['CSS', 3.5],
    ['Bootstrap', 4.0],
    ['Javascript', 4.0],
    ['Jquery', 4.0],
    ['Typescript', 3.0],
    ['Angular', 3.0],
    ['XAML', 3.0]
  ]

  public skillsBancoDeDados = [
    ['MySql', 4.0],
    ['Sql Server', 3.5]
  ]

  public skillsServicos = [
    ['AWS', 3.0],
    ['Hospegadem de sites', 3.5]
  ]

  public skillsDesign = [
    ['Photoshop', 4.0],
    ['Illustrator', 3.5],
    ['InDesign', 3.0],
    ['After Effects', 3.5],
    ['Premiere', 3.5],
    ['Figma', 2.0],
    ['3D Studio Max', 2.0],
  ]

  buildStarsSkills(rating: any) {

    var html = ''
    var value = parseFloat(rating)

    for (var i = 1; i <= 5; i++) {

      if (i <= value) {
        html += '<i class="fas fa-star dm-star"></i>';
      } else if (i === Math.ceil(value) && value % 1 !== 0) {
        html += '<i class="fas fa-star-half-alt dm-star"></i>';
      } else {
        html += '<i class="far fa-star dm-star"></i>';
      }

    }

    return html
  }

}
