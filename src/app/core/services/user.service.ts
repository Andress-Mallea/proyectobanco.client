import { Injectable } from '@angular/core';
import { SystemUser } from '../models/user.model';
import { UserRole } from '../models/enums.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: SystemUser[] = [
    { id: 'u1', fullName: 'Carlos Mendoza', email: 'cmendoza@gmail.com', ci: '7654321', role: UserRole.CLIENT },
    { id: 'u2', fullName: 'Ana Laura Rios', email: 'arios@empresa.com', ci: '8877665', role: UserRole.CLIENT }
  ];

  getUsers(): SystemUser[] {
    return this.users;
  }

  addUser(user: SystemUser): string | null {
    const ciRegex = /^\d{6,10}$/;
    if (!ciRegex.test(user.ci)) {
        return 'Error: Formato de CI inválido.';
    }
    const exists = this.users.find(u => u.email === user.email || u.ci === user.ci);
    if (exists) {
      return (exists.email === user.email)
        ? 'Error: Ya existe un usuario con este correo.'
        : 'Error: Ya existe un usuario con esta Cédula de Identidad.';
    }

    this.users.push({
      ...user,
      id: Math.random().toString(36),
      role: user.role ?? UserRole.CLIENT
    });
    return null;
  }
}
