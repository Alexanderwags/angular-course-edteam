import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.scss'],
})
export class CourseActionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  eliminarCurso(curso: any) {
    console.log('Eliminar ', curso);
  }
  onMouseover($event) {
    console.log('Mouse over ', $event);
  }
  onDobleClick($event) {
    console.log('doble click ', $event);
  }
  editarCurso(curso: any) {
    console.log('Editar ', curso);
  }
}
