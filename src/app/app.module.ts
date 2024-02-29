import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/materials/materials.module';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ServicesComponent } from './components/shared/services/services.component';
import { ProjectComponent } from './components/shared/project/project.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ViewsComponent } from './components/shared/views/views.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';
import { NgChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    ToolBarComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ProjectComponent,
    ContactComponent,
    ViewsComponent,
    PageNotFoundComponent,
    MainComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgChartsModule,
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      // innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      // innerStrokeColor: "#C7E596",
      animationDuration: 300,
      

      
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
