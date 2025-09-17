import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <- Import obrigatório para *ngIf


@Component({
  selector: 'app-login',
  standalone: true ,
  imports: [ FormsModule, CommonModule ], 
  template: `

    <h1> Validação de credenciais frontend </h1>

    <p>validação de credencial 'HugoP2san' e 123, caso esteja errado <br> sera informado uma mensagem automatica.</p>

    <input [(ngModel)]="username" placeholder="Digite seu nome" />
    <input [(ngModel)]="senha" placeholder="Digite sua senha" />
    <button (click)="CompareTo()"> Submit </button>

    <div *ngIf="UserTag===true" >   
        <p>Olá, {{ username }}!</p>
    </div>
    <div *ngIf="UserTag === false">
      <p>Usuário e senha incorretos para {{ username }}!</p>
    </div>


  `
})
export class LoginComponent {
  username = '' ;
  senha = '';
  UserTag : boolean | null=null ;

    CompareTo(){
        var userinput = 'HugoP2san';
        var senhainput= '123';
        
        this.UserTag = this.username === userinput && this.senha === senhainput; 
    }

}
