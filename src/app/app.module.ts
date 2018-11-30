import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { OwlModule } from 'ng2-owl-carousel';
import { SiteHeaderComponent } from './layout/site-header/site-header.component';
import { SiteFooterComponent } from './layout/site-footer/site-footer.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { LifeAtMdComponent } from './life-at-md/life-at-md.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule, routing } from './/app-routing.module';
import { BannerContentComponent } from './banner-content/banner-content.component';
import { SafehtmlPipe } from './safehtml.pipe';
import { IgnitingSliderComponent } from './igniting-slider/igniting-slider.component';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import { RecruitmentProcessComponent } from './recruitment-process/recruitment-process.component';
import { CurrentOpeningComponent } from './current-opening/current-opening.component';
import * as $ from "jquery";
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    LifeAtMdComponent,
    HomeComponent,
    BannerContentComponent,
    SafehtmlPipe,
    IgnitingSliderComponent,
    ModalBasicComponent,
    RecruitmentProcessComponent,
    CurrentOpeningComponent,
    BlogComponent,
   
    

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing, 
    OwlModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ParticlesModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalBasicComponent
]
})
export class AppModule { }
