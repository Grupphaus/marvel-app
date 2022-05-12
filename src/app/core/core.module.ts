/** Modules */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

/** Components  */
import { HeaderComponent } from './components/header/header.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

/** Material */
import { MatToolbarModule } from '@angular/material/toolbar';

/** Services */
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    NotFoundComponent,
  ],
  providers: [StorageService]
})
export class CoreModule { }
