import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { AngularComponent } from './angular/angular.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { CsharpComponent } from './csharp/csharp.component';
import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { HtmlComponent } from './html/html.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RouterModule, Routes } from '@angular/router';
import { TypescriptArticlesComponent } from './articles/typescript-articles/typescript-articles.component';
import { JavascriptArticlesComponent } from './articles/javascript-articles/javascript-articles.component';
import { AngularArticlesComponent } from './articles/angular-articles/angular-articles.component';
import { TemplatesComponent } from './bootstrap/templates/templates.component';
import { HomealertComponent } from './homealert/homealert.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CourseupdatesComponent } from './courseupdates/courseupdates.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { ArticlesComponent } from './articles/articles.component';
import { AppComponent } from './app.component';

// import { AppComponent } from './app.component';
// import { AngularComponent } from './angular/angular.component';
// import { HtmlComponent } from './html/html.component';
// import { JavascriptComponent } from './javascript/javascript.component';
// import { TypescriptComponent } from './typescript/typescript.component';
// import { BootstrapComponent } from './bootstrap/bootstrap.component';
// import { CsharpComponent } from './csharp/csharp.component';
// import { AspnetcoreComponent } from './aspnetcore/aspnetcore.component';
// import { AwsComponent } from './aws/aws.component';
// import { AzureComponent } from './azure/azure.component';
// import { ArticlesComponent } from './articles/articles.component';
// import { InterviewsComponent } from './interviews/interviews.component';
// import { CourseupdatesComponent } from './courseupdates/courseupdates.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
// import { CarouselComponent } from './carousel/carousel.component';
// import { HomeComponent } from './home/home.component';
// import { HomealertComponent } from './homealert/homealert.component';
// import { NotfoundComponent } from './notfound/notfound.component';
// import { Routes, RouterModule, RouteReuseStrategy } from '@angular/router';
// import { TemplatesComponent } from './bootstrap/templates/templates.component';
// // import { HtmlarticlesComponent } from './articles/htmlarticles/htmlarticles.component';
// import { HtmlArticlesComponent } from './articles/html-articles/html-articles.component';
// import { AngularArticlesComponent } from './articles/angular-articles/angular-articles.component';
// import { JavascriptArticlesComponent } from './articles/javascript-articles/javascript-articles.component';
// import { TypescriptArticlesComponent } from './articles/typescript-articles/typescript-articles.component';
// import { ArticlesModule } from './articles/articles.module';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'angular-training', component: AngularComponent },
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
  {
    path: 'articles',
    loadChildren: () => import('./articles/articles.module').then(m => m.ArticlesModule)
  },
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
    TemplatesComponent,
    TemplatesComponent,
    AngularArticlesComponent,
    JavascriptArticlesComponent,
    TypescriptArticlesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[ RouterModule]
})
export class AppRoutingModule { }
