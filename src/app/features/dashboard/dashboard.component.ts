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
  displayedColumns: string[] = ['nombreApellido', 'correo', 'fechaNacimiento', 'genero', 'curso', 'actions'];

  constructor(public dialog: MatDialog) {}

  editarEstudiante(estudiante?: any) {
    const dialogRef = this.dialog.open(StudentsComponent, {
      width: '600px',
      data: { estudiantes: this.dataSource.data, estudiante: estudiante, editar: !!estudiante }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dataSource.data = result;
      }
    });
  }

  eliminarEstudiante(estudiante: any) {
    const index = this.dataSource.data.indexOf(estudiante);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.dataSource.data = [...this.dataSource.data];
    }
  }
}