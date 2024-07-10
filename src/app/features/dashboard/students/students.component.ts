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

  editingStudent: any; // Variable para almacenar el estudiante que se está editando

  constructor(
    public dialogRef: MatDialogRef<StudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (!this.data.estudiantes) {
      this.data.estudiantes = [];
    }
    if (this.data.editar && this.data.estudiante) {
      this.editingStudent = this.data.estudiante;
      // Clonar el estudiante que se está editando para mantener una copia
      this.newStudent = { ...this.editingStudent };
    }
  }

  guardarEstudiante() {
    if (this.editingStudent) {
      const index = this.data.estudiantes.findIndex((e: any) => e === this.editingStudent);
      if (index !== -1) {
        // Actualizar los datos del estudiante editado en el arreglo original
        this.data.estudiantes[index] = { ...this.newStudent };
      }
    } else {
      // Agregar un nuevo estudiante
      this.data.estudiantes.push({ ...this.newStudent });
    }
    this.dialogRef.close(this.data.estudiantes.slice()); // Cerrar el diálogo y enviar los datos actualizados
  }

  closeDialog() {
    this.dialogRef.close(); // Cerrar el diálogo sin hacer cambios
  }
}