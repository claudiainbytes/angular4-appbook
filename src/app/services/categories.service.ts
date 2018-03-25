import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriesService {

  jsonURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=9a666afbb9ad44389631e426a50ab906";

  constructor(private http:Http) { }

  getCategories(): Observable <Category[]> {
      return this.http.get(this.jsonURL)
        .map(
          ( categories: Response ) => categories.json().results.lists
        );
  }

}
