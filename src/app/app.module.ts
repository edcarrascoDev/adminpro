import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NoPagesFoundComponent } from './pages/no-pages-found/no-pages-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphic1Component } from './pages/graphic1/graphic1.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesComponent } from './pages/pages.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        NoPagesFoundComponent,
        DashboardComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
        ProgressComponent,
        Graphic1Component,
        PagesComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
