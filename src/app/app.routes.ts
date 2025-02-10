import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './features/blog/blog.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page'
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog Page'
  }
]

export default routeConfig;
