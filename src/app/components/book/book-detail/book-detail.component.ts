import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap, tap } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book$?: Observable<Book>
  currentIndex?: number
  authors?: string[]

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('index')
    this.book$ = this.route.paramMap
    .pipe(
      tap((params: ParamMap) => this.currentIndex = +params.get('index')!),
      switchMap((params: ParamMap) => this.bookService.get(+params.get('index')!)),
      tap((b) => this.authors = (b) ? b.authors : [])
    )
    // .subscribe(
    //   (params: ParamMap) => {
    //     console.log(`Index: ${params.get('index')}`)
    //   }
    // )
  }

  remove(): void {
    this.bookService.remove(this.currentIndex!)
    this.router.navigate(['/books'])
  }

  goAuthors(): void {
    const url = `/books/${this.currentIndex}/authors`
    this.router.navigate([url, { authors: this.authors }])
  }
}
