import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd',
  templateUrl: './dvd.component.html',
  styleUrls: ['./dvd.component.scss']
})
export class DvdComponent implements OnInit {
  dvds$?: Observable<Dvd[]>

  constructor(private dvdService: DvdService, private router: Router) { }

  ngOnInit(): void {
    this.dvds$ = this.dvdService.dvds$
  }

  goDetails(i: number, dvd: Dvd): void {
    this.router.navigate([`/dvds/${i}`, {title: dvd.title}])
  }

  remove(i: number): void {
    this.dvdService.remove(i)
  }
}
