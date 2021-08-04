import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [DashboardComponent, Graphic1Component, PagesComponent, ProgressComponent],
    exports: [DashboardComponent, Graphic1Component, PagesComponent, ProgressComponent],
    imports: [CommonModule, SharedModule, AppRoutingModule],
})
// @ts-ignore
export class PagesModule {}
