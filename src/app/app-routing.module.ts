import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Include components for in which router service to be used
import { PeopleComponent } from './components/people/people.component';
import { PlanetComponent } from './components/planet/planet.component';

// Routes array define component along with the path name for url
const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'people', component: PeopleComponent },
  { path: 'planets/:id', component: PlanetComponent },
];

// Import RouterModule and inject routes array in it and dont forget to export the RouterModule
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
