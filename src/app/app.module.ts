import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BookComponent } from './components/book/book.component';
import { DvdComponent } from './components/dvd/dvd.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './components/dvd/dvd-detail/dvd-detail.component';
import { DvdFormComponent } from './components/dvd/dvd-form/dvd-form.component';
import { BookDetailComponent } from './components/book/book-detail/book-detail.component';
import { BookAuthorsComponent } from './components/book/book-authors/book-authors.component';
import { ElectronicsModule } from './electronics/electronics.module';

// const appRoutes: Routes = [
//   {
//     path: 'dvds', component: DvdComponent
//   },
//   {
//     path: 'books', component: BookComponent
//   },
//   {
//     path: '', pathMatch: 'full', redirectTo: 'dvds'
//   },
//   {
//     path: '**', component: PageNotFoundComponent
//   }
// ]

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    DvdComponent,
    PageNotFoundComponent,
    DvdDetailComponent,
    DvdFormComponent,
    BookDetailComponent,
    BookAuthorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    //RouterModule.forRoot(appRoutes),
    //ElectronicsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
