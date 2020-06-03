import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EscuelaDigitalComponent } from './escuela-digital/escuela-digital.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseActionComponent } from './course-action/course-action.component';

@NgModule({
  declarations: [
    AppComponent,
    EscuelaDigitalComponent,
    NavbarComponent,
    SidenavComponent,
    DashboardComponent,
    CoursesListComponent,
    CourseActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
