import { Component, OnInit, Input, Output } from '@angular/core';
import { Curso } from './curso';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-course-action',
  templateUrl: './course-action.component.html',
  styleUrls: ['./course-action.component.scss'],
})
export class CourseActionComponent implements OnInit {
  // tslint:disable-next-line: comment-format
  //el input es el prop de llegada
  @Input()
  curso: Curso;
  @Output()
  edit: EventEmitter<Curso> = new EventEmitter<Curso>();
  @Output()
  delete: EventEmitter<Curso> = new EventEmitter<Curso>();
  constructor() {}

  ngOnInit(): void {}
  eliminarCurso(curso: Curso) {
    console.log('Eliminar ', curso);
    this.delete.emit(curso);
  }
  onMouseover($event) {
    console.log('Mouse over ', $event);
  }
  onDobleClick($event) {
    console.log('doble click ', $event);
  }
  editarCurso(curso: Curso) {
    console.log('Editar ', curso);
    // tslint:disable-next-line: comment-format
    //con esto enviamos la variable a componente padre
    this.edit.emit(curso);
  }
}
