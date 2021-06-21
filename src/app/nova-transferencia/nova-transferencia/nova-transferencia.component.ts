import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  // Criando exibicao
  @Output() aoTransferir = new EventEmitter<any>()

  valor: number | undefined
  destino: number | undefined

  transferir() {
    console.log("Nova transferência solicitada!")
    console.log("Valor: ", this.valor)
    console.log("Destino: ", this.destino)

    const valorEmitido = { valor: this.valor, destino: this.destino }
    this.aoTransferir.emit(valorEmitido);

    this.limparCampos()
  }

  limparCampos() {
    this.valor = undefined
    this.destino = undefined
  }

  // constructor() {
  // }

  // ngOnInit(): void {
  // }

}
