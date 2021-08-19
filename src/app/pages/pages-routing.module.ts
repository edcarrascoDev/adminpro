import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/**
 * COMPONENTS IMPORTS
 */
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: '', component: DashboardComponent },
            { path: 'account-settings', component: AccountSettingsComponent },
            { path: 'graphic1', component: Graphic1Component },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PagesRoutingModule {}
