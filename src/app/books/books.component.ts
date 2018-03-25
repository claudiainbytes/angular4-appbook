import { Component, OnInit, Input, Output, EventEmitter }  from '@angular/core';
import { Book } from '../models/Book';
import { Category } from '../models/category';
import { BooksService } from '../services/books.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ng-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  index: number = 0;  
  books: Book[] = [];
  statusCode: number;

  selectedCategory: Category;

  constructor(private booksService:BooksService) { 
  }

  ngOnInit() {
      this.booksService.currentMessage.subscribe(
            message => {
              this.selectedCategory = message; 
              this.getBooks(this.selectedCategory.list_name_encoded);
             }                 
      )
  }

  getBooks(categoryName: string) {
    this.booksService.getBooks(categoryName).subscribe(
            data => { 
              this.books = data; 
            }
      );   
  }

}
