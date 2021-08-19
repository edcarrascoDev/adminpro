import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { IncreaseComponent } from './increase/increase.component';
import { FormsModule } from '@angular/forms';
import { DoughnutComponent } from './doughnut/doughnut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
    declarations: [
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
        IncreaseComponent,
        DoughnutComponent,
    ],
    imports: [CommonModule, FormsModule, ChartsModule],
    exports: [
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
        IncreaseComponent,
        DoughnutComponent,
    ],
})
export class SharedComponentsModule {}
