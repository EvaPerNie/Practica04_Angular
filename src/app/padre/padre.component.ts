import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  public visibilidad = false;
  public iteraciones = new Array(100);

  constructor() { }

  ocultaHijos(){
    this.visibilidad = !this.visibilidad;
  }

  ngOnInit(): void {
  }

}
