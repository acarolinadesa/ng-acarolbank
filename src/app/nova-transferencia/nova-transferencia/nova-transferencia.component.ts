import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {
  // Criando exibicao
  @Output() aoTransferir = new EventEmitter<any>()

  valor!: number
  destino!: number

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir() {
    console.log("Nova transferência solicitada!")
    const valorEmitido: Transferencia = { valor: this.valor, destino: this.destino }
    this.service.adicionar(valorEmitido)
    .subscribe(resultado => {
      console.log(resultado)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    },
    (error) => console.log(error)
    )
  }

  limparCampos() {
    this.valor = 0
    this.destino = 0
  }

  // constructor() {
  // }

  // ngOnInit(): void {
  // }

}
