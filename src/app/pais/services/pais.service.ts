import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  apiURL : string = 'https://restcountries.com/v2'
  constructor( private httpC : HttpClient) { }


  get getHTTPParams(){
      return new HttpParams()
      .set('fields','name,capital,alpha2Code,population,flag');
  }

  buscarPais( termino: string): Observable<Country[]>{
      const url =`${ this.apiURL}/name/${ termino }`;
      return this.httpC.get<Country[]>( url, { params: this.getHTTPParams });
      
  }

  buscarCapital( termino: string): Observable<Country[]>{
    const url =`${ this.apiURL}/capital/${ termino }`;
    return this.httpC.get<Country[]>( url, { params: this.getHTTPParams });
  
  }

  getPaisPorAlpha( id: string): Observable<Country>{
    const url =`${ this.apiURL}/alpha/${ id }`;
    return this.httpC.get<Country>( url );
    
  }

  getRegion( region: string): Observable<Country[]>{

    const url =`${ this.apiURL}/regionalbloc/${ region }`;
    return this.httpC.get<Country[]>( url, { params: this.getHTTPParams } );
    
  }

}
