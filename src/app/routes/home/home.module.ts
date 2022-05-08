/** Modules */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';

/** Material Components */
import { MatCardModule } from '@angular/material/card';

/** Services */
import { MarvelService } from 'src/app/core/services/marvel.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterCardComponent
  ],
  imports: [
    MatCardModule,
    SharedModule
  ],
  providers: [MarvelService]
})
export class HomeModule { }
