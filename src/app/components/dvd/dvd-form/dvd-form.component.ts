import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Dvd } from 'src/app/models/dvd';
import { DvdService } from 'src/app/services/dvd.service';

@Component({
  selector: 'app-dvd-form',
  templateUrl: './dvd-form.component.html',
  styleUrls: ['./dvd-form.component.scss']
})
export class DvdFormComponent implements OnInit {
  formDvd = this.fb.nonNullable.group({
    title: [''],
    year: [0],
    genre: ['']
  })

  // formDvd = new FormGroup({
  //   email: new FormControl('', { nonNullable: true}),
  //   year: new FormControl(0, { nonNullable: true}),
  //   genre: new FormControl('', { nonNullable: true}),
  // })

  constructor(
    private fb: FormBuilder,
    private dvdService: DvdService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.dvdService.add(this.formDvd.value as Dvd)
    this.router.navigate(['/dvds'])
  }

  goBack(): void {
    this.router.navigate(['/dvds'])
  }
}
