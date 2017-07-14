import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AbouthomeComponent } from './about/abouthome.component';
import { About01Component } from './about/about01.component';
import { About02Component } from './about/about02.component';
import { WorksComponent } from './works/works.component';
import { WorkshomeComponent } from './works/workshome.component';
import { Session01Component } from './works/session01.component';
import { Session02Component } from './works/session02.component';
import { Session03Component } from './works/session03.component';
import { ContactComponent } from './contact.component';
import { LoginComponent } from "app/login/login.component";

const appRoutes:Routes=[
     { path:'',component:HomeComponent },
    { path:'Angular_sessions',component:HomeComponent },
    { path:'login',component:LoginComponent },
    { path:'about',component:AboutComponent,
    children:[
      {path:'',component:AbouthomeComponent},
      {path:'about01',component:About01Component},
      {path:'about02',component:About02Component}
    ]},
    { path:'works',component:WorksComponent,
    children: [
      { path:'',component:WorkshomeComponent } ,
      { path: 'session01', component: Session01Component } ,
      { path: 'session02', component: Session02Component } ,
      { path: 'session03', component: Session03Component } 
    ]},
    { path:'contact',component:ContactComponent },
    { path:'',redirectTo:'Angular_sessions',pathMatch:'full'    },
]

export const routing:ModuleWithProviders= RouterModule.forRoot(appRoutes); 
