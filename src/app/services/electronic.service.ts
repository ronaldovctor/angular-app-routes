import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, Observable, timer } from 'rxjs';
import { Electronic } from '../models/electronic';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {
  private electronicSubj$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([])
  public electronics$ = this.electronicSubj$.asObservable()

  constructor() {
    timer(1000)
    .subscribe(()=> {
      this.electronicSubj$.next([
        { name: 'Headphone', brand: 'Bose', price: 200, description: 'Noise cancelling' },
        { name: 'Portable HD', brand: 'Samsung', price: 100, description: '2TB Hard disk' },
        { name: 'Monitor 23\"', brand: 'Aoc', price: 200, description: 'HDMI/VGA' },
        { name: 'Processor i7-8700K', brand: 'Intel', price: 400, description: '12 MB Cache' },
        { name: 'Mouse Wireless', brand: 'Logitech', price: 50, description: 'For Gamers' },
      ])
    })
  }

  get(i: number): Observable<Electronic>{
    return this.electronics$.pipe(
      map((electronics) => (i >= 0 && i < electronics.length) ? electronics[i] : { name: '', brand: '', price: 0, description: '' }),
      delay(1000)
    )
  }
}
