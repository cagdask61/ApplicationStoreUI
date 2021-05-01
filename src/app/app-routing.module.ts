import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationDetailComponent } from './components/applicationComponents/application-detail/application-detail.component';
import { ApplicationsComponent } from './components/applicationComponents/applications/applications.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
 {path:'',component:ApplicationsComponent},
 {path:'applications',component:ApplicationsComponent},
 {path:'category/:categoryid',component:ApplicationsComponent},
 {path:'applicationDetail/:applicationId',component:ApplicationDetailComponent},
 {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
