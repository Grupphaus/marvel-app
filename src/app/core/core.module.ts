/** Modules */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/** Components  */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/** Material */
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    MatToolbarModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ] 
})
export class CoreModule { }
