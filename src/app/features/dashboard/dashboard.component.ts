import { Component } from '@angular/core';
import { StudentsComponent } from './students/students.component';
import { MatDialog } from '@angular/material/dialog';
import { DataSource } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = ['nombre', 'apellido', 'correo', 'fechaNacimiento', 'genero', 'curso'];

  constructor(public dialog: MatDialog) {}

  openStudentsComponent() {
    const dialogRef = this.dialog.open(StudentsComponent, {
      width: '400px',
      data: { estudiantes: this.dataSource.data } // Pasar this.dataSource.data como estudiantes
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = result;
      }
    });
  }
}