import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AlertModule} from 'ng2-bootstrap/ng2-bootstrap';

import {ImageService} from './image/shared/image.service';
import { AppComponent } from './app.component';
import { NavbarComponent} from './navbar/navbar.component';
import { GalleryComponent} from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot()
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
