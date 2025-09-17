import { Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { LoginComponent } from './login.component';
import { UserComponent } from './user.component';
import { LoopComponent } from './loop.component';

export const routes: Routes = [
    { path: 'form', component: FormComponent },
    { path: 'login', component: LoginComponent }, 
    { path: 'user', component: UserComponent },
    { path: 'loop', component: LoopComponent }


];
