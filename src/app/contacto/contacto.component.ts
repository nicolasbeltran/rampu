import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  form = new FormGroup({
    email : new FormControl('',[Validators.required, Validators.email]),
    mensaje: new FormControl('', Validators.required),
    name : new FormControl(''),
    phone : new FormControl(''),
    localidad : new FormControl(''),
  })
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  sendEmail(): void{
    const formValues = this.form.value;
    const emailRequest =  {
      name: `Nombre: ${formValues.name}. Email: ${formValues.email}. Teléfono: ${formValues.phone}. Localidad: ${formValues.localidad}`,
      email: formValues.email,
      message: `Nombre: ${formValues.mensaje}`,
      storeId: 2,
    };

    const apiUrl = 'https://us-central1-trenda-ecommerce.cloudfunctions.net/app/sendEmail';
    const headersSrv = {
      'Content-Type': 'application/json',
      // tslint:disable-next-line: object-literal-key-quotes
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoyLCJyb2xlIjoiQ09NIiwiaXNfcHJlbWl1bSI6ZmFsc2UsImRuaSI6IjEyMTExMTExMSIsIm5hbWUiOiJ0ZXN0eSIsInN1cm5hbWUiOiJ0ZXN0eSIsImVtYWlsIjoidGVzdHlAdGVzdHkuY29tIiwibW9iaWxlIjoiMTIxMjEyMTIiLCJnZW5kZXIiOiJGZW1lbmlubyIsImFkZHJlc3MiOiJ0ZXN0eXkiLCJwaWN0dXJlIjoiaHR0cHM6Ly9jYWxhbXVjaGl0YW9ubGluZS1kZXYtYXdzLXMzLWltYWdlcy5zMy5hbWF6b25hd3MuY29tL2ltZy91c2Vycy8yLnBuZyIsImp3dCI6IiJ9LCJpYXQiOjE1ODg1MjExMTB9.vn_Zq81s6IY-USP0eErSXBSO9F_Q4LARq9NS7JlCnHs'
    }

    this.spinner.show();

    this.httpClient.post(apiUrl, emailRequest, { headers: headersSrv }).subscribe(
      res => {
        this.toastrService.success('Se envió el mensaje con éxito');
        this.spinner.hide();

      },
      error => {
        this.toastrService.success('Ocurrió un error al enviar el mensaje. Por favor intente nuevamente');
        this.spinner.hide();
      }
    );

  }
}
