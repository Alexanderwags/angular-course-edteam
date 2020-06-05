import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Curso } from '../course-action/curso';
import { Router } from '@angular/router';
import { CoursesListService } from '../courses-list.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit, AfterViewInit {
  // tslint:disable-next-line: no-inferrable-types
  titulo: string = 'Lista de cursos';
  @ViewChild('filtro', { static: false })
  filtro: ElementRef;
  // tslint:disable-next-line: no-inferrable-types
  // tslint:disable-next-line: variable-name
  private _textofiltro = '';
  cursos: Curso[] = [];

  constructor(private router: Router, private cursosService: CoursesListService) {
    this.cursos = cursosService.getCourses();
  }
  ngAfterViewInit() {
    this.filtro.nativeElement.value = '';
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCourses();
    setTimeout(() => {
      this._textofiltro = '';
    }, 1000);
  }
  set textofiltro(t: string) {
    console.log('textoFiltro ', t);
    this._textofiltro = t;
    this.cursos = t ? this.filtrarCursos(t) : this.cursosService.getCourses();
  }
  get textofiltro() {
    return this._textofiltro;
  }
  filtrarCursos(texto: string) {
    this.cursos = this.cursos.filter(
      (curso: Curso) => curso.name.toLowerCase().indexOf(texto.toLowerCase()) >= 0
    );
    return this.cursos;
  }
  onEditCurso(curso: Curso) {
    console.log('[curso] edit : ', curso);
    // tslint:disable-next-line: comment-format
    //redireccion
    this.router.navigate([`courses/${curso.id}`]);
  }
  onDeleteCurso(curso: Curso) {
    console.log('[curso] deleted : ', curso);

    this.cursos = this.cursos.filter((c: Curso) => {
      return c.id !== curso.id;
    });
  }
}
