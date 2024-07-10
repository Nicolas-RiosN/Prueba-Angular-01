import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  educacion: string[] = [
    'Programacion 1',
    'Introduccion a la salchipapa 2',
    'Introduccion a la milanesa 1',
    'Hice lo que pude con el codigo'
  ];
  newStudent = {
    nombre: '',
    apellido: '',
    correo: '',
    fechaNacimiento: '',
    genero: '',
    curso: ''
  };

  constructor(
    public dialogRef: MatDialogRef<StudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (!this.data.estudiantes) {
      this.data.estudiantes = []; // Inicializar this.data.estudiantes si es undefined
    }
  }

  guardarEstudiante() {
    this.data.estudiantes.push({ ...this.newStudent });
    this.dialogRef.close(this.data.estudiantes.slice()); // Enviar una copia actualizada de this.data.estudiantes
  }

  closeDialog() {
    this.dialogRef.close();
  }
}