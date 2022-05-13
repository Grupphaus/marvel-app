/** Modules */
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

/** Components  */
import { HeaderComponent } from './components/header/header.component';

/** Material */
import { MatToolbarModule } from '@angular/material/toolbar';

/** Services */
import { StorageService } from './services/storage.service';


@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    HttpClientModule,
    MatToolbarModule,
    SharedModule,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [StorageService]
})
export class CoreModule { }
