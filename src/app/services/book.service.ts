import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, timer } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private bookSubj$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([])
  public books$ = this.bookSubj$.asObservable()

  constructor() {
    timer(2000)
    .subscribe(() => {
      this.bookSubj$.next(
        [
          { title: 'Book 1', pages: 200, authors: ['John', 'Nicole']},
          { title: 'Book 2', pages: 100, authors: ['Miley']},
          { title: 'Book 3', pages: 300, authors: ['Fred']},
          { title: 'Book 4', pages: 250, authors: ['Ane', 'Peter', 'Samuel']},
          { title: 'Book 5', pages: 180, authors: ['John', 'Paul']},
        ]
      )
    })
  }

  add(b: Book): void {
    let books = this.bookSubj$.getValue()
    books.push(b)
  }

  remove(i: number): void {
    let books = this.bookSubj$.getValue()
    if(i >= 0 && i < books.length)
      books.splice(i, 1)
  }

  get(i: number): Observable<Book>{
    return this.books$.pipe(
      map((books) => (i >= 0 && i < books.length) ? books[i] : { title: '', pages: 0, authors: []}),
      delay(1000)
    )
  }
}
