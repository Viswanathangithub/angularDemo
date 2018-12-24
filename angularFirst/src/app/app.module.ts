import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { UserService } from './user.service';
import { ErrorComponent } from './error/error.component';

const appRoutes:Routes = [
{
	path: '',
	component: LoginComponent
},
{
	path: 'dashboard',
	component: DashboardComponent
},
{
	path: 'error',
	component: ErrorComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent
  ],
  imports: [
	RouterModule.forRoot(appRoutes),
    BrowserModule,
	HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
