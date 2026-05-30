import { Injectable } from '@angular/core';
import { SystemUser } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: SystemUser[] = [];

  getUsers(): SystemUser[] {
    return this.users;
  }

  addUser(user: SystemUser): string | null {
    // Validar duplicados por Email o CI
    const exists = this.users.find(u => u.email === user.email || u.ci === user.ci);

    if (exists) {
      return (exists.email === user.email)
        ? 'Error: Ya existe un usuario con este correo.'
        : 'Error: Ya existe un usuario con esta Cédula de Identidad.';
    }

    this.users.push({ ...user, id: Math.random().toString(36) });
    return null; // Éxito
  }
}
