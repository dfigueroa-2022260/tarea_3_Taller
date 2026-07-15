import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../../services/cliente.service';
import { Cliente } from '../../models/cliente.model';

@Component({
  selector: 'app-cliente-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css'],
})
export class ClienteFormComponent {
  // Se emite cuando se agrega un cliente, para que cliente-list se refresque
  @Output() clienteAgregado = new EventEmitter<void>();

  nuevoCliente: Cliente = { nombre_cliente: '', direccion_cliente: '', telefono: '' };
  mensajeError = '';

  constructor(private clienteService: ClienteService) {}

  agregarCliente(): void {
    if (!this.nuevoCliente.nombre_cliente || !this.nuevoCliente.direccion_cliente || !this.nuevoCliente.telefono) {
      this.mensajeError = 'Completa todos los campos';
      return;
    }

    this.clienteService.agregar(this.nuevoCliente).subscribe({
      next: () => {
        this.nuevoCliente = { nombre_cliente: '', direccion_cliente: '', telefono: '' };
        this.mensajeError = '';
        this.clienteAgregado.emit();
      },
      error: (err) => {
        console.error(err);
        this.mensajeError = 'Error al agregar el cliente';
      },
    });
  }
}
