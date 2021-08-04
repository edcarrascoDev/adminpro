import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegisterComponent, NoPagesFoundComponent],
    imports: [BrowserModule, AppRoutingModule, PagesModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
