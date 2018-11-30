import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { LifeAtMdComponent } from './life-at-md/life-at-md.component';
import { RecruitmentProcessComponent } from './recruitment-process/recruitment-process.component';
import { CurrentOpeningComponent } from './current-opening/current-opening.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})


export class AppRoutingModule {
  
 }

 const appRoutes: Routes = [
    
  //Site routes goes here 
  { 
      path: '', 
      component: SiteLayoutComponent,
      children: [
        { path: '', component: HomeComponent, pathMatch: 'full'},
        { path: 'about', component: LifeAtMdComponent },
        { path: 'recuritment', component:RecruitmentProcessComponent},
        { path: 'current-opening', component:CurrentOpeningComponent},
        { path: 'blog', component:BlogComponent}
     
      ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];
 export const routing = RouterModule.forRoot(appRoutes);


