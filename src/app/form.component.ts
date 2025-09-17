import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <- Import obrigatório para *ngIf

@Component({
  selector: 'app-form',
  standalone: true ,
  imports: [ FormsModule, CommonModule], 
  template: `
    <h1> Preenchimento de campo com  ação do botao</h1>

    <p>Digitar informação no campo e permitir ação com o botao</p>
    
    <input [(ngModel)]="username" placeholder="Digite seu Nome" /><br>
    <input [(ngModel)]="email" placeholder="Digite seu Email" /><br>
    <button (click)="showParagraph()" > Submit </button>

    <div *ngIf="!booleanfield">
      <p>Olá {{ username }}! <br>Seu email é {{ email }}!</p>
      <h3> Seja Benvindo!</h3>
      <button (click)="hide()" > hide </button>
      
    </div>
  `
})
export class FormComponent {
  username : any= '';
  email : any= '';
  booleanfield : boolean= true;

  hide(): boolean
  {
    return this.booleanfield = true;
  }
  showParagraph(): boolean
  {
    return this.booleanfield = false;
  }
}
