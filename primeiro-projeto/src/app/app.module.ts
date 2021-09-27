import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';


import { MatToolbarModule } from '@angular/material/toolbar';
import { NavecacaoComponent } from './components/navecacao/navecacao.component';
import { RodapeComponent } from './components/rodape/rodape.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { MusicComponent } from './views/music/music.component';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavecacaoComponent,
    RodapeComponent,
    HomeComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,   
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
