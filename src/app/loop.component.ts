import { Component } from '@angular/core';

@Component({
  selector: 'app-loop',
  standalone: true ,
  imports: [], 
  template: `
    <h1>Listar nomes de usuarios do banco buscando entre o Id {{ num }} ao Id {{ num1 }}. </h1>

    @for(user of linqbusca(); track user.id) 
    {
        <p> Id: {{ user.id }} - {{ user.name }} </p>
    }
  `
})
export class LoopComponent {
    Users = [{id: 0, name: 'Sarah'},    //possivel instancia do BANCO DE DADOS
        {id: 1, name: 'Amy'}, 
        {id: 2, name: 'Rachel'}, 
        {id: 3, name: 'Jessica'}, 
        {id: 4, name: 'Poornima'}
    ]
    num:number = 2 ;
    num1:number = 3 ;


    linqbusca(){
        return this.Users.filter( u => u.id >= this.num && this.num1);
    }

}
