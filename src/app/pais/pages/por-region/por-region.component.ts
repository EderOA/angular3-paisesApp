import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px;
      
    }
    `
  ]
})
export class PorRegionComponent {

  regiones    : string[]  = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC']

  paises      : Country[] = [];
  regionActiva: string = '';
  hayError    : boolean = false;


  constructor(private paisService: PaisService) { }

  getClassCS5 ( region: string){
      return (region === this.regionActiva) ?  'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion ( region: string) {
    if (region === this.regionActiva){
      return;
    }
    else{
      this.regionActiva = region;
      this.buscarRegion ( region );  
    }

  }

  buscarRegion( region: string){
    this.hayError = false;
    this.paises = [];
    console.log( region );
    

    this.paisService.getRegion( region )
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
