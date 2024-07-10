import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentsComponent } from './students/students.component';
import { FontSizeDirective } from '../../shared/font-size.directive';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FullNamePipe } from '../../shared/pipes/full-name.pipe';




@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    FontSizeDirective,
    StudentsComponent,
    FullNamePipe
  ],
  exports: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    FormsModule,
    MatDialogModule,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }, // Establece el locale como español (España)
  ],
})
export class DashboardModule { }
