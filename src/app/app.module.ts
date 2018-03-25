import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { BooksService } from './services/books.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesComponent } from './nav-bar/categories/categories.component';
import { BooksComponent } from './books/books.component';
import { BookCardComponent } from './books/book-card.component';
import { CategoriesService } from './services/categories.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoriesComponent,
    BooksComponent,
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [BooksService, CategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
