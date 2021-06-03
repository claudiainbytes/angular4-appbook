import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Book } from '../models/book';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BooksService {

  private messageSource = new BehaviorSubject<any>({"display_name":"Paperback Nonfiction", "list_name_encoded":"paperback-nonfiction"});
  currentMessage = this.messageSource.asObservable();

  jsonURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=q6w6B8GO0IoxGvcXvX86bmMTndwr3En8";

  constructor( private http:Http ){}

  getBooks(categoryName: string): Observable < Book[] > {
      return this.http.get(this.jsonURL).map(
        (response:Response)=>response.json().results.lists.filter(el => el.list_name_encoded == categoryName)[0].books
      );
  }

  changeMessage(message: Category) {
    this.messageSource.next(message)
  }





}
