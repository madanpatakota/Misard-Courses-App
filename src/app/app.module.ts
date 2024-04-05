import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular/angular.component';
import { HtmlComponent } from './html/html.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { CsharpComponent } from './csharp/csharp.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { ArticlesComponent } from './articles/articles.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { CourseupdatesComponent } from './courseupdates/courseupdates.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { HomealertComponent } from './homealert/homealert.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Routes , RouterModule, RouteReuseStrategy } from '@angular/router';
import { TemplatesComponent } from './bootstrap/templates/templates.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angular-training',  component: AngularComponent },
  { path: 'javascript-training', component: JavascriptComponent },
  { path: 'typescript-training', component: TypescriptComponent },
  { path: 'csharp-training', component: CsharpComponent },
  { path: 'aspnetcore-training', component: AspnetcoreComponent },
  { path: 'bootstrap-training', component: BootstrapComponent },
  { path: 'html-training', component: HtmlComponent },
  { path: 'aws-training', component: AwsComponent },
  { path: 'azure-training', component: AzureComponent },
  { path: 'html-training', component: HtmlComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  declarations: [
    AppComponent,
    AngularComponent,
    HtmlComponent,
    JavascriptComponent,
    TypescriptComponent,
    BootstrapComponent,
    CsharpComponent,
    AspnetcoreComponent,
    AwsComponent,
    AzureComponent,
    ArticlesComponent,
    InterviewsComponent,
    CourseupdatesComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    HomealertComponent,
    TemplatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
