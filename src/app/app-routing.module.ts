import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { LoginComponent } from './modules/auth/pages/login/login.component';
import { AuthGuard } from './services/core/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/tasks/tasks.module').then(
            (m) => m.TasksModule
          ),
          canActivate: [AuthGuard]
      },
      {
        path: 'project',
        loadChildren: () =>
          import('./modules/projects/projects.module').then(
            (m) => m.ProjectsModule
          ),
          canActivate: [AuthGuard]
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./modules/users/users.module').then(
            (m) => m.UsersModule
          ),
          canActivate: [AuthGuard]
      },

    ],
  },
  {
    path: 'auth',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
