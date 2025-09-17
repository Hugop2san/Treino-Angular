import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component'; // importa o componente

@NgModule({
  declarations: [
    AppComponent,
    UserComponent   // declara aqui
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent] // inicia o AppComponent
})
export class AppModule { }
