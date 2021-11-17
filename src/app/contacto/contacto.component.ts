import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  counter: number;
  constructor(private httpClient: HttpClient, private toastrService: ToastrService, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  public sendEmail() {
    this.spinner.show();

    const serviceId = 'service_9io6the';
    const templateId = 'template_zaj4nqf';
    const formValues = this.form.value;
    const userId = 'user_tZkZEpFMlsov34Soz5jED';

    emailjs.send(serviceId, templateId, formValues, userId)
      .then((result: EmailJSResponseStatus) => {
        this.toastrService.success('Se envió el mensaje con éxito');
        this.spinner.hide();
        console.log(result.text);
      }, (error) => {
        this.toastrService.error('Ocurrió un error al enviar el mensaje. Por favor intente nuevamente');
        this.spinner.hide();
        console.log(error.text);
      });
  }

}
