import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WorksComponent } from './works/works.component';
import { ContactComponent } from './contact.component';

import { routing } from './app.routing';
import { Session01Component } from './works/session01.component';
import { Session02Component } from './works/session02.component';
import { Session03Component } from './works/session03.component';
import { WorkshomeComponent } from './works/workshome.component';
import { AbouthomeComponent } from './about/abouthome.component';
import { About01Component } from './about/about01.component';
import { About02Component } from './about/about02.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    WorksComponent,
    ContactComponent,
    Session01Component,
    Session02Component,
    Session03Component,
    WorkshomeComponent,
    AbouthomeComponent,
    About01Component,
    About02Component,
    UserComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
