import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  // tslint:disable-next-line: no-inferrable-types
  titulo: string = 'Lista de cursos';
  cursos: any[] = [
    {
      id: '1',
      name: 'angular',
      description: 'Angular desde 0',
      startDate: 'septiembre , 20 2019',
      price: '20.99',
      rating: '4.99',
      imgUrl: 'assets/images/angular.png',
    },
    {
      id: '2',
      name: 'typescript',
      description: 'Typescript desde 0',
      startDate: 'agosto , 20 2019',
      price: '20.99',
      rating: '4.99',
      imgUrl: 'assets/images/typescript.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
  editarCurso(curso: any) {
    console.log('Editar ', curso);
  }
  eliminarCurso(curso: any) {
    console.log('Eliminar ', curso);
  }
  onMouseover($event) {
    console.log('Mouse over ', $event);
  }
  onDobleClick($event) {
    console.log('doble click ', $event);
  }
}
