import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, timer } from 'rxjs';
import { Dvd } from '../models/dvd';

@Injectable({
  providedIn: 'root'
})
export class DvdService {
  private dvdSubj$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([])
  public dvds$ = this.dvdSubj$.asObservable()

  constructor() {
    timer(2000).subscribe(
      () => {
        this.dvdSubj$.next([
          { title: 'DVD - Transformers', year: 2014, genre: 'Action'},
          { title: 'DVD - Oblivion', year: 2016, genre: 'Action'}
        ])
      }
    )
  }

  add(b: Dvd): void {
    let books = this.dvdSubj$.getValue()
    books.push(b)
  }

  remove(i: number): void {
    let books = this.dvdSubj$.getValue()
    if(i >= 0 && i < books.length)
      books.splice(i, 1)
  }

  get(i: number): Observable<Dvd>{
    return this.dvds$.pipe(
      map((dvds) => (i >= 0 && i < dvds.length) ? dvds[i] : { title: '', year: 0, genre: ''}),
      delay(1000)
    )
  }
}
