import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto, ProdutoMapper } from '../../../model/produto';
import { catchError, delay, Observable, of, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);
  http = inject(HttpClient);

  /*private readonly listaMock: Produto[] = [
      {
        id: 1,
        nome: 'Produto 1',
        descricao: 'Desc Produto 1',
        preco: 179.90,
        imageURL: 'images/logoifsp.png',
        promo: true,
        estado: 'novo'
      },
  
      {
        id: 2,
        nome: 'Produto 2',
        descricao: 'Desc Produto 2',
        preco: 1790.90,
        estado: 'usado'
      },
  
      {
        id: 3,
        nome: 'Produto 3',
        descricao: 'Desc Produto 3',
        preco: 1799.09,
        estado: 'esgotado'
      }
    ];*/

    listar(): Observable<Produto[]>{
      this.logger.info("[ProdutoService] - Listando Produtos");
      return this.http.get<any[]>('https://fakestoreapi.com/products').pipe(
        map(lista => lista.map(json => ProdutoMapper.fromJson(json))),
        catchError(err => of([]))
      );
    }

    getById(id: number): Observable<Produto | undefined>{
      return of(); //EXERCICIO
      //return of(this.listaMock.find(p => p.id == id));//.pipe(delay(500));
    }
}
