import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {BlogComponent } from './blog/blog.component';
import { ErrorComponent } from './error/error.component';
import { MypostComponent } from './mypost/mypost.component';

const appRoutes: Routes = [
     {
        path:'',
        redirectTo:'index',
       pathMatch: 'full'
},
    {
        path: 'index',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'blog',
        component: BlogComponent,
       
    },
      {
        path: 'post/:id',
        component: MypostComponent,
       
    },
    {
        path: '**',
        component: ErrorComponent
    }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);