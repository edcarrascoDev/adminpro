import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { SharedComponentsModule } from './shared-components/shared-components.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, SharedComponentsModule, ChartsModule],
    exports: [SharedComponentsModule, ChartsModule],
})
export class SharedModule {}
