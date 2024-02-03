import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/user/login/login.component';
import { LogoutComponent } from './components/user/logout/logout.component';
import { MusicListComponent  } from './components/music/music-list/music-list.component';
import { CreateCompositionComponent } from './components/music/create-composition/create-composition.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch:"full"},
  { path: 'login', component: LoginComponent },
  { path: 'compositions/list', component: MusicListComponent , canActivate: [AuthGuard] },
  { path: 'compositions/create', component: CreateCompositionComponent, canActivate: [AuthGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuard] },
  //{ path: '**', redirectTo: '/login' },
];

/*
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
*/

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export default routes;
