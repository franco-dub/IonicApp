import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ToolbarPage} from "../pages/toolbar/toolbar";
import { GetProvider } from '../providers/get/get';
import {StudentHomePage} from "../pages/student-home/student-home";
import {ProfessorHomePage} from "../pages/professor-home/professor-home";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ToolbarPage,
    StudentHomePage,
    ProfessorHomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ToolbarPage,
    StudentHomePage,
    ProfessorHomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetProvider
  ]
})
export class AppModule {}
