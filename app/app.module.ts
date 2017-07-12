import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';

import { routing } from './app.routing';
import { UserService } from './service/user.service';
import { DataService } from './service/data.service';
import { MenuComponent } from './menu/menu.component';
import { BlogComponent } from './blog/blog.component';
import { MypostComponent } from './mypost/mypost.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ErrorComponent,
    MenuComponent,
    BlogComponent,
    MypostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
