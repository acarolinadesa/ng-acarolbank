import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'acarolrenbank'
  constructor(private service: TransferenciaService){
  }

  // Passando o evento para a funcao adicionar no service
  transferir($event: any){
    console.log($event)
    this.service.adicionar($event)
  }

}
