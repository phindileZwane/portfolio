import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/shared/about/about.component';
import { ContactComponent } from './components/shared/contact/contact.component';
import { ProjectComponent } from './components/shared/project/project.component';
import { ServicesComponent } from './components/shared/services/services.component';
import { ViewsComponent } from './components/shared/views/views.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { SignInComponent } from './components/authentication/sign-in/sign-in.component';
import { SignUpComponent } from './components/authentication/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' }, // redirect to `first-component`
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'main', component: MainComponent,  children: [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'project', component: ProjectComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'views', component: ViewsComponent }
]},
  { path: 'tool-bar', component: ToolBarComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
