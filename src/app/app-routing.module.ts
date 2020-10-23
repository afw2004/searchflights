import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchFlightsComponent } from './components/searchflights/searchflights.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: SearchFlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
