import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HtmlArticlesComponent } from './html-articles/html-articles.component';
//import { HtmlArticlesNewwindosComponent } from './html-articles/html-articles-newwindos/html-articles-newwindos.component';
import { HtmlArticlesNewwindowComponent } from './html-articles/html-articles-newwindow/html-articles-newwindow.component';

@NgModule({
  declarations: [
    HtmlArticlesComponent,
    HtmlArticlesNewwindowComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})


export class ArticlesModule {


 }
