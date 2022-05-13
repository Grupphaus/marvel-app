import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterComponent } from './routes/character/character.component';
import { HomeComponent } from './routes/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'character/:id',
    component: CharacterComponent,
    loadChildren: () => import('./routes/character/character.module').then(m => m.CharacterModule),
  },
  {
    path: '**', component: HomeComponent,
    loadChildren: () => import('./routes/home/home.module').then(m => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
