/** Modules */
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card'; 
import { SharedModule } from 'src/app/shared/shared.module';

/** Components */
import { HomeComponent } from './home.component';

/** Services */
import { MarvelService } from 'src/app/core/services/marvel.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    MatCardModule,
    SharedModule
  ],
  providers: [MarvelService]
})
export class HomeModule { }
