import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-user',
  imports:[CommonModule],
  template: `
  <h1> Ola esse e o template Angular!  </h1>
  <p>Ao clicar na frase voce mudara o nome :</p>

    {{ getUserInfo() }}

  <br>

    <button (click)="mudarNome()" >CLICAR </button>
  `
})
export class UserComponent {
  username = 'Santos';
  idade = 28;
  

  getUserInfo(){
    return `Meu nome é ${this.username} e tenho ${this.idade} anos.  `;
  }
  mudarNome(){
    var newusername='Hugo Pereira dos Santos';
    return this.username=newusername  ;       //atribuindo novo valor 
  }

}
