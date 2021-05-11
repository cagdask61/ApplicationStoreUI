import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ApplicationAddComponent } from './components/applicationComponents/application-add/application-add.component';
import { ApplicationDetailComponent } from './components/applicationComponents/application-detail/application-detail.component';
import { ApplicationsComponent } from './components/applicationComponents/applications/applications.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/userComponents/login/login.component';
import { ProfileComponent } from './components/userComponents/profile/profile.component';
import { RegisterComponent } from './components/userComponents/register/register.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'applications',component:ApplicationsComponent},
 {path:'category/:categoryid',component:HomeComponent},
 {path:'applicationDetail/:applicationid',component:ApplicationDetailComponent},
 {path:'about',component:AboutComponent},
 {path:'applicationadd',component:ApplicationAddComponent,canActivate:[LoginGuard]},
 {path:'profile',component:ProfileComponent},
 {path:'login',component:LoginComponent},
 {path:'register',component:RegisterComponent},
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
