/** Modules */
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/** Components  */
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/** Material */
import { MatToolbarModule } from '@angular/material/toolbar';

/** Services */
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
  ],
  providers: []
})
export class CoreModule { }
