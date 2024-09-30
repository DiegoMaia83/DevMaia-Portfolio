import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'
import { MailService } from '../../services/mail.service';
import { MailContact } from '../../models/mailcontact.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  providers: [MailService]
})
export class ContactComponent {

  public mailService: MailService
  public contactForm: FormGroup;

  public isLoading: boolean = false

  constructor(mailService: MailService) {
    this.mailService = mailService

    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required]), // Campo nome
      address: new FormControl('', [Validators.required, Validators.email]), // Campo e-mail
      subject: new FormControl('', [Validators.required]), // Campo assunto
      message: new FormControl('', [Validators.required]) // Campo mensagem
    });
  }

  public enviarContato(): any {

    if (this.contactForm.valid) {

      this.isLoading = true;

      let mailContact: MailContact = {
        name: this.contactForm.value.name,
        address: this.contactForm.value.address,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message
      };

      console.log(mailContact)

      this.mailService.enviarContato(mailContact)
        .subscribe(
          (response: any) => {
            alert(response.message)
            this.contactForm.reset()
            this.isLoading = false;
          },
          (error: any) => {
            alert(error.error.message)
            console.error("Houve um erro ao processar a rotina. " + error.statusText)
            this.isLoading = false;
          }
        )

    } 
    else {      
      this.contactForm.markAllAsTouched();
      alert('Por favor, preencha o formulário corretamente.');
    }

  }
}