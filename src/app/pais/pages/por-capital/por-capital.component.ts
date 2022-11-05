import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {

  termino  : string = '';
  hayError : boolean = false;
  paises   : Country[] = [];

  constructor( private paisService: PaisService){}

  buscar( termino: string){
    this.hayError = false;
    console.log( this.termino );
    this.termino = termino;

    this.paisService.buscarCapital( this.termino )
      .subscribe( (paises) => {
        console.log( paises );
        this.paises = paises;
      }, (err) => {
        this.hayError = true;
        this.paises = [];
      })
    ;

  }

}
