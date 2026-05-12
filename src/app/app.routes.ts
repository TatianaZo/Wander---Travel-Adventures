import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationsComponent } from './pages/destinations/destinations.component';
import { ExperiencesComponent } from './pages/experiences/experiences.component';
import { StoriesComponent } from './pages/stories/stories.component';
import { RatesComponent } from './pages/rates/rates.component';
import { ContentPageComponent } from './pages/content-page/content-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'destinations', component: DestinationsComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'rates', component: RatesComponent },
  { path: 'about', component: ContentPageComponent, data: { contentId: 'about' } },
  { path: 'careers', component: ContentPageComponent, data: { contentId: 'careers' } },
  { path: 'press', component: ContentPageComponent, data: { contentId: 'press' } },
  { path: 'cookies', component: ContentPageComponent, data: { contentId: 'cookies' } },
  { path: 'privacy', component: ContentPageComponent, data: { contentId: 'privacy' } },
  { path: 'terms', component: ContentPageComponent, data: { contentId: 'terms' } },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
