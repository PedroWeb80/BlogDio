import { Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ContentComponent } from './Pages/content/content.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'content',
        component: ContentComponent
    }
];
