import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/models/electronic';
import { ElectronicService } from 'src/app/services/electronic.service';

@Component({
  selector: 'app-electronic-detail',
  templateUrl: './electronic-detail.component.html',
  styleUrls: ['./electronic-detail.component.scss']
})
export class ElectronicDetailComponent implements OnInit {
  electronic$?: Observable<Electronic>

  constructor(
    private electronicService: ElectronicService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let i: number = +this.route.snapshot.paramMap.get('index')!
    this.electronic$ = this.electronicService.get(i)
  }

  back(): void {
    this.router.navigate(['..'], { relativeTo: this.route})
  }
}
