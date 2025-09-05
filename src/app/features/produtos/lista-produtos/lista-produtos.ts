import { Component } from '@angular/core';
import { Produto } from '../../../model/produto';
import { CardProduto } from "../card-produto/card-produto";

@Component({
  selector: 'lista-produtos',
  imports: [CardProduto],
  templateUrl: './lista-produtos.html',
  styleUrl: './lista-produtos.css'
})
export class ListaProdutos {
  produtos: Produto[] = [
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
  ]

  onAddProduct(produto: {id: number, quantity: number}){
    alert(`Produto ${produto.id}, ${produto.quantity} unidades`);
  }

  onViewProduct(id: number){
    alert(`Id do produto: ${id}`);
  }
}
