import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { GeomapComponent } from './geomap/geomap.component';


const routes: Routes = [
  // {path:'',component:WelcomePageComponent},
  {path:'geoMap',component:GeomapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
