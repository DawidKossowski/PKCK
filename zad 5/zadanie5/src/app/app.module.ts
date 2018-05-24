import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerializeService } from './services/serialize.service';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SerializeService, FileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
