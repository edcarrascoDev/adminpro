import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

@NgModule({
    imports: [CommonModule, SharedModule, PagesRoutingModule, FormsModule],
    declarations: [
        DashboardComponent,
        Graphic1Component,
        PagesComponent,
        ProgressComponent,
        AccountSettingsComponent,
    ],
    exports: [
        DashboardComponent,
        Graphic1Component,
        PagesComponent,
        ProgressComponent,
        AccountSettingsComponent,
    ],
})
export class PagesModule {}
