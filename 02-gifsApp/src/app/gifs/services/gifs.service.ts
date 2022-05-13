import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGIFResponse, Gif } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey: string = 'Lk0ON4ztC0OWFGu93oNUENRM58Qro0k0';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultado: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor ( private http: HttpClient) {

    if(localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }
    if(localStorage.getItem('resultados')){
      this.resultado = JSON.parse(localStorage.getItem('resultados')!);
    }

  }

  buscarGifs(query: string) {
    query =  query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params: HttpParams = new HttpParams()
          .set('api_key', this.apiKey)
          .set('q', query)
          .set('limit', '10');


    const url = `${this.servicioUrl}/search`

    this.http.get<SearchGIFResponse>(url,{params: params})
    .subscribe( (resp) => {
      this.resultado = resp.data;
      localStorage.setItem('resultados', JSON.stringify(this.resultado));
    });

    }
}
