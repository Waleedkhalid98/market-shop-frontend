import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { ErrorComponent } from './pages/error/error.component';
import { FormsModule } from '@angular/forms';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NgModule } from '@angular/core';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { GetstartComponent } from './pages/getstart/getstart.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    ArticoliComponent,
    LogoutComponent,
    GridArticoliComponent,
    ArticoliCardComponent,
    RegistrazioneComponent,
    GetstartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
