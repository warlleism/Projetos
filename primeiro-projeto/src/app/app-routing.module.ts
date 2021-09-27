import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { MusicComponent } from './views/music/music.component';

const routes: Routes = [{
  path:"",
  component: HomeComponent
},
{
  path:"Music",
  component: MusicComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
