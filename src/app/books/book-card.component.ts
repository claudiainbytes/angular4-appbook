import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../models/book';

@Component({
  selector: 'ng-book-card',
  templateUrl: './book-card.component.html',
  styles: []
})
export class BookCardComponent implements OnInit {

  @Input() book:Book;

  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
