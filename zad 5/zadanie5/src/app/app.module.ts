import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SerializeService } from './services/serialize.service';
import { FileService } from './services/file.service';
import { TransformComponent } from './transform/transform.component';
import {FormsModule} from "@angular/forms";
import { ContentComponent } from './content/content.component';
import { DepartmentContentComponent } from './elements-content/department-content/department-content.component';
import { CreatorContentComponent } from './elements-content/creator-content/creator-content.component';
import { BooksContentComponent } from './elements-content/books-content/books-content.component';
import { DepartmentAddComponent } from './elements-content/department-content/department-add/department-add.component';
import { CreatorAddComponent } from './elements-content/creator-content/creator-add/creator-add.component';
import { BooksAddComponent } from './elements-content/books-content/books-add/books-add.component';
import {LibraryService} from "./services/library.service";
import { ToggleComponent } from './elements-content/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    TransformComponent,
    ContentComponent,
    DepartmentContentComponent,
    CreatorContentComponent,
    BooksContentComponent,
    DepartmentAddComponent,
    CreatorAddComponent,
    BooksAddComponent,
    ToggleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [SerializeService, FileService, LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
