import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';

@NgModule({
    declarations: [AppComponent, NoPagesFoundComponent],
    imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
