import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-increase',
    templateUrl: './increase.component.html',
    styles: [],
})
export class IncreaseComponent {
    @Input() progress = 50;
    @Input() btnClass = 'btn-primary';

    @Output() changeValueEvent: EventEmitter<number> = new EventEmitter<number>();

    changeValue(value: number) {
        this.progress = this.progress + value;
        this.changeValueEvent.emit(this.progress);
    }

    onChange(value: number) {
        if (value <= 100 && value >= 0) {
            this.progress = value;
            this.changeValueEvent.emit(value);
        }
    }
}
