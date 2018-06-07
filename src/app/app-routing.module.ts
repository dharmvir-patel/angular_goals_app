import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FullContactComponent } from './full-contact/full-contact.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
	{ path:'', component: HomeComponent },
	{ path:'about/:id', component: AboutComponent},
	{ path:'members', component: FullContactComponent},
	{ path:'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }