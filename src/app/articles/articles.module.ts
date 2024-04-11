import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { HtmlArticlesComponent } from './html-articles/html-articles.component';

@NgModule({
  declarations: [
    HtmlArticlesComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})


export class ArticlesModule {


 }
