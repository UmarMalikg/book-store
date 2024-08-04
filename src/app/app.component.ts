import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { NavComponent } from '../components/nav/nav.component';
import { HomeComponent } from '../components/home/home.component';
import { AddBookComponent } from '../components/add-book/add-book.component';
import { FeaturedBooksComponent } from '../components/featured-books/featured-books.component';
import { BooksComponent } from '../components/books/books.component';
import { AboutComponent } from '../components/about/about.component';
import { BookDetailComponent } from '../components/book-detail/book-detail.component';
import { CustomerReviewsComponent } from '../components/customer-reviews/customer-reviews.component';
import { ContactComponent } from '../components/contact/contact.component';
import { FooterComponent } from '../components/footer/footer.component';
import { UpdateModalComponent } from '../components/update-modal/update-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    AddBookComponent,
    FeaturedBooksComponent,
    BooksComponent,
    AboutComponent,
    BookDetailComponent,
    CustomerReviewsComponent,
    ContactComponent,
    FooterComponent,
    UpdateModalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'book-store';
}
