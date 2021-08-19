import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    },
    { path: '**', component: NoPagesFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
