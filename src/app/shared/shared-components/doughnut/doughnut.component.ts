import { Component, Input } from '@angular/core';
import { Color, Label, MultiDataSet } from 'ng2-charts';

@Component({
    selector: 'app-doughnut',
    templateUrl: './doughnut.component.html',
    styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent {
    @Input() title: string;

    @Input() labels: Label[] = ['Info 1', 'Info 2', 'Info 3'];
    @Input() data: MultiDataSet;
    public color: Color[] = [{ backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }];
}
