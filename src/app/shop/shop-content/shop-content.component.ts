import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.css']
})
export class ShopContentComponent implements OnInit {

  qtdeProdutos: number = 200;
  produtos: {nome, preco}[];

  constructor() { }

  ngOnInit() {
    this.produtos = new Array<{ nome, preco }>();
    this.produtos.push({ nome: 'Bateria', preco: 100.70 });
    this.produtos.push({ nome: 'Rádio', preco: 99.70 });
    this.produtos.push({ nome: 'TV', preco: 50.25 });
    this.produtos.push({ nome: 'Outra coisa', preco: 100.00 });
  }

  getQtdeProdutos(): number {
    return this.qtdeProdutos;
  }

}
