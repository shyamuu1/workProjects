import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataFormComponent } from './data-form/data-form.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'userForm', component:DataFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
