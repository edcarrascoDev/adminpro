import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-no-pages-found',
    templateUrl: './no-pages-found.component.html',
    styleUrls: ['./no-pages-found.component.css'],
})
export class NoPagesFoundComponent {
    year = new Date().getFullYear();
}
