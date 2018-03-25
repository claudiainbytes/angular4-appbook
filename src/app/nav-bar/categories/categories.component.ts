import { Component, OnInit, Input, Output, EventEmitter, HostListener  } from '@angular/core';
import { Category } from '../../models/category';
import { BooksService } from '../../services/books.service';
import { CategoriesService } from '../../services/categories.service';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'ng-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Observable<Category[]>;

  selectedCategory: Category;

  selectedCategoryName: string;

  constructor(private categoriesService:CategoriesService, private booksService:BooksService) { }

  ngOnInit() {
      this.getCategories();
      this.booksService.currentMessage.subscribe(message => this.selectedCategoryName = message)
  }

  getCategories(){
    this.categories = this.categoriesService.getCategories();
  }

  selectCategory(event): void {
      //this.selectedCategoryName = this.selectedCategory.list_name_encoded;
      //this.booksService.changeMessage(this.selectedCategoryName);
      this.booksService.changeMessage(this.selectedCategory);
      
  }

}
