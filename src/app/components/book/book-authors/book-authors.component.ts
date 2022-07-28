import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-authors',
  templateUrl: './book-authors.component.html',
  styleUrls: ['./book-authors.component.scss']
})
export class BookAuthorsComponent implements OnInit {
  authors$?: Observable<string[]>

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.authors$ = this.route.paramMap
    .pipe(
      map(
        (params: ParamMap) => params.get('authors')!.split(',')
      )
    )
  }

}
