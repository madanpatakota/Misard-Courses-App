import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AngularComponent } from '../angular/angular.component';
import { JavascriptComponent } from '../javascript/javascript.component';
import { TypescriptComponent } from '../typescript/typescript.component';
import { CsharpComponent } from '../csharp/csharp.component';
import { AspnetcoreComponent } from '../aspnetcore/aspnetcore.component';
import { ArticlesComponent } from './articles.component';
import { AngularArticlesComponent } from './angular-articles/angular-articles.component';
import { JavascriptArticlesComponent } from './javascript-articles/javascript-articles.component';
import { TypescriptArticlesComponent } from './typescript-articles/typescript-articles.component';
import { CsharpArticlesComponent } from './csharp-articles/csharp-articles.component';
import { NetcoreArticlesComponent } from './netcore-articles/netcore-articles.component';
import { HtmlArticlesComponent } from './html-articles/html-articles.component';

const appChildRoutes: Routes = [


  { path: '', component: ArticlesComponent },
  { path: 'angular-articles', component: AngularArticlesComponent },
  { path: 'javascript-articles', component: JavascriptArticlesComponent },
  { path: 'typescript-articles', component: TypescriptArticlesComponent },
  { path: 'csharp-articles', component: CsharpArticlesComponent },
  { path: 'aspnetcore-articles', component: NetcoreArticlesComponent },
  { path: 'html-articles', component: HtmlArticlesComponent }



];

@NgModule({
  imports: [RouterModule.forChild(appChildRoutes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule { }
