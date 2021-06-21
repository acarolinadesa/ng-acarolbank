import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  // array inicializado para listar itens de transferencia
  private listaTransferencia: any[]
  private url = "http://localhost:3000/transferencias"

  // Injentar classe httpClient que prove metodos de uma requisicao para API REST
  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = []
   }
  //  metodos
  get transferencias() {
    return this.listaTransferencia
  }

  listarTodas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url)
  }


  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    this.adicionarDados(transferencia)
    // this.listaTransferencia.push(transferencia)
    // console.log(transferencia)
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  adicionarDados(transferencia: any) {
    transferencia.date = new Date
  }
}
