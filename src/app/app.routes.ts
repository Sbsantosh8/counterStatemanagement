import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { CounterOutputComponent } from './store/counter-output/counter-output.component';

export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'user',component:UserComponent},
    {path:'counter-output',component:CounterOutputComponent}
];
