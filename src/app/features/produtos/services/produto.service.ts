import { inject, Injectable } from '@angular/core';
import { LoggerService } from '../../../core/services/logger/logger.service';
import { Produto } from '../../../model/produto';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  logger = inject(LoggerService);

  private readonly listaMock: Produto[] = [
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
    ];

    listar(): Observable<Produto[]>{
      this.logger.info("[ProdutoService] - Listando Produtos");
      return of(this.listaMock).pipe(delay(1000));
    }
}
