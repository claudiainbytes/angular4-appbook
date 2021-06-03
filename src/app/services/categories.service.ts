import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Subject } from "rxjs/Subject";
import { map } from 'rxjs/operators';

@Injectable()
export class CategoriesService {

  jsonURL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=q6w6B8GO0IoxGvcXvX86bmMTndwr3En8";

  constructor(private http:Http) { }

  getCategories(): Observable <Category[]> {
      return this.http.get(this.jsonURL)
        .map(
          ( categories: Response ) => categories.json().results.lists
        );
  }

}
