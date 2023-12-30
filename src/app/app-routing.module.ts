import { RouterModule, Routes } from '@angular/router';

import { ArticoliComponent } from './pages/articoli/articoli.component';
import { ErrorComponent } from './pages/error/error.component';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { RouteGuardService } from '../services/route-guard.service';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { GetstartComponent } from './pages/getstart/getstart.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component : RegistrazioneComponent},
  {path:'welcome/:userid', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path:'articoli', component : ArticoliComponent, canActivate:[RouteGuardService]},
  {path:'articoli/grid', component : GridArticoliComponent, canActivate:[RouteGuardService]},
  {path:'logout', component : LogoutComponent},
  {path:'getstart/:codart', component : GetstartComponent},
  {path:'**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
