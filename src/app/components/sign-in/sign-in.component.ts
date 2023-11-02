import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
    username: string = '';
    password: string = '';
    confirmPassword: string = '';

    constructor( private toastr: ToastrService) { }
  
    ngOnInit() {
    }

    addUser(){
      //Validamos que el usuario ingreso los datos
      if(this.username === '' || this.password === '' || this.confirmPassword === ''){
        this.toastr.error('Todos los campos son obligatorios', 'Error');
        return;
      }

      //Validamos que las contraseñas coincidan
      if(this.password !== this.confirmPassword){
        this.toastr.error('Las contraseñas no coinciden', 'Error');
        return;
      }

      //Creamos el objeto usuario

      const user: User = {
        username : this.username,
        password : this.password
      }

      console.log(user);
    }

}
