import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ApplicationDetailComponent } from './components/applicationComponents/application-detail/application-detail.component';
import { ApplicationsComponent } from './components/applicationComponents/applications/applications.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'applications',component:ApplicationsComponent},
 {path:'category/:categoryid',component:HomeComponent},
 {path:'applicationDetail/:applicationid',component:ApplicationDetailComponent},
 {path:'about',component:AboutComponent},
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
