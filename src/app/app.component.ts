import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], 
  template: 
  `
    <h1>Bem-vindo ao Angular 🚀</h1>
    
    <nav>
      <button (click)="navigate('/login')">Login</button>
      <button (click)="navigate('/form')">Formulário</button>
      <button (click)="navigate('/user')">Usuários</button>
      <button (click)="navigate('/loop')">Listando Funcionarios</button>

    </nav>

    <hr>

    <router-outlet></router-outlet>
  `
})

export class AppComponent 
{
  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
