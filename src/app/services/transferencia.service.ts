import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  // array inicializado para listar itens de transferencia
  private listaTransferencia: any[]

  constructor() {
    this.listaTransferencia = []
   }
  //  metodos
  get transferencias() {
    return this.listaTransferencia
  }

  adicionar(transferencia: any) {
    this.adicionarDados(transferencia)
    this.listaTransferencia.push(transferencia)
    console.log(transferencia)
  }

  adicionarDados(transferencia: any) {
    transferencia.date = new Date
  }
}
