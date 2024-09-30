import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, throwError } from "rxjs";
import { MailContact } from "../models/mailcontact.model";
import { ApiResponse } from "../models/api-response.model";

@Injectable()
export class MailService {

    private apiUrl = 'http://api-mail.devmaia.com.br/api/mail/portfolio/contact';

    constructor(private http: HttpClient) {}
  
    public enviarContato(mailContact: MailContact): Observable<ApiResponse> {
        return this.http.post("http://api-mail.devmaia.com.br/api/mail/portfolio/contact", mailContact)
        .pipe(
            map((response: ApiResponse) => {
                return response
            })
        )
    }
}