import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../../../services/login.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [HttpClient, LoginService]
})
export class LoginComponent {

  constructor(private service: LoginService) { }

  #fb = inject(FormBuilder)
  public profileForm = this.#fb.group({
    email: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20), Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]]
  })

  public submit(){
    const dados = { email: this.profileForm.value.email, password: this.profileForm.value.password };
    this.service.enviarDados(dados).subscribe(response => {
      let retorno = response
      console.log(retorno)
    }, error => {
      console.error('Erro ao enviar dados:', error);
    });
  }
}