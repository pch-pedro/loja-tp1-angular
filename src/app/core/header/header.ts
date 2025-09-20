import { Component, input, output } from '@angular/core';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  titulo = input.required<string>();

  textoSobre = output<string>();

  enviarSobre(){
    this.textoSobre.emit('Técnicas de Programação 1 desenvolvido por Pedro Pacheco');
  }

  /*exibirSobre(nome: string): void{
    alert(`Olá, ${nome}`);
  }*/
}
