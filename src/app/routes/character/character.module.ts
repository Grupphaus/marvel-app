/** Modules */
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

/** Material Modules */
import { MatChipsModule } from '@angular/material/chips'; 

/** Components */
import { CharacterComponent } from './character.component';


@NgModule({
  declarations: [
    CharacterComponent,
  ],
  imports: [
    SharedModule,
    MatChipsModule,
  ]
})
export class CharacterModule { }
