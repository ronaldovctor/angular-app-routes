import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-detail',
  templateUrl: './dvd-detail.component.html',
  styleUrls: ['./dvd-detail.component.scss']
})
export class DvdDetailComponent implements OnInit {
  dvd$?: Observable<Dvd>
  title?: string

  constructor(
    private route: ActivatedRoute,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let index: number = +this.route.snapshot.paramMap.get('index')!
    this.dvd$ = this.dvdService.get(index)
    this.route.paramMap.subscribe(
      (params: ParamMap) => {
        if(params.has('title'))
          this.title = params.get('title')!
      }
    )
  }

  goBack(): void {
    this.router.navigate(['/dvds'])
  }
}
