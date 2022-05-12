/** Modules */
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';

/** Services */
import { MarvelService } from 'src/app/core/services/marvel.service';
import { CharacterCardComponent } from './components/character-card/character-card.component';


@NgModule({
  declarations: [
    HomeComponent,
    CharacterCardComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [MarvelService]
})
export class HomeModule { }
