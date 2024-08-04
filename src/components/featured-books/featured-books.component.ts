import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-featured-books',
  standalone: true,
  imports: [],
  templateUrl: './featured-books.component.html',
  styleUrls: [
    './featured-books.component.scss',
    '../books/books.component.scss',
  ],
  encapsulation: ViewEncapsulation.None,
})
export class FeaturedBooksComponent {}
