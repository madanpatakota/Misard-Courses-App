import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
