import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseEditComponent } from './course-edit/course-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'courses',
    pathMatch: 'full',
  },
  {
    path: 'dasboard',
    component: DashboardComponent,
  },
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'sidenav',
    component: SidenavComponent,
  },
  {
    path: 'courses',
    component: CoursesListComponent,
  },
  {
    path: 'courses/:id',
    component: CourseEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
