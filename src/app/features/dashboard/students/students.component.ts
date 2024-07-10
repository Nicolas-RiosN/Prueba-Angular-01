import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  educacion: string[] = [
    'Matematicas',
    'Lenguaje',
    'Historia',
    'Hice lo que pude con el codigo'
  ];
  newStudent = {
    nombre: '',
    apellido: '',
    correo: '',
    fechaNacimiento: '',
    genero: '',
    curso: '',
    nombreApellido: ''
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
    // Combina nombre y apellido antes de guardar
    this.newStudent.nombreApellido = `${this.newStudent.nombre} ${this.newStudent.apellido}`;
  
    // Agrega el nuevo estudiante a la lista
    this.data.estudiantes.push({ ...this.newStudent });
  
    // Cierra el diálogo y envía una copia actualizada de this.data.estudiantes
    this.dialogRef.close(this.data.estudiantes.slice());
  }

  closeDialog() {
    this.dialogRef.close();
  }
}