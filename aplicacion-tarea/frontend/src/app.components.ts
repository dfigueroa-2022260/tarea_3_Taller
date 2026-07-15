import { Component } from '@angular/core';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ClienteFormComponent, ClienteListComponent],
  template: `
    <div class="contenedor">
      <h1>Gestión de Clientes</h1>
      <app-cliente-form (clienteAgregado)="onClienteAgregado()"></app-cliente-form>
      <app-cliente-list [refrescar]="contadorRefresco"></app-cliente-list>
    </div>
  `,
  styles: [`
    .contenedor {
      max-width: 700px;
      margin: 40px auto;
      padding: 24px;
      background: #fff;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
    }
    h1 {
      text-align: center;
      color: #1f2937;
    }
  `],
})
export class AppComponent {
  // Se incrementa cada vez que se agrega un cliente, para que cliente-list se refresque
  contadorRefresco = 0;

  onClienteAgregado(): void {
    this.contadorRefresco++;
  }
}
