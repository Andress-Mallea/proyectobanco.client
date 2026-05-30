import { UserService } from './user.service';
import { SystemUser } from '../models/user.model';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // Se instancia el servicio antes de cada prueba para tener un estado limpio
    service = new UserService();
  });

  it('debería ser creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar error si el CI ya existe', () => {
    // Arrange
    const u1: SystemUser = { id: '1', fullName: 'A', email: 'a@a.com', ci: '123', role: 'Client' };
    const u2: SystemUser = { id: '2', fullName: 'B', email: 'b@b.com', ci: '123', role: 'Client' };

    // Act
    service.addUser(u1);
    const resultado = service.addUser(u2);

    // Assert
    expect(resultado).toBe('Error: Ya existe un usuario con esta Cédula de Identidad.');
  });

  it('debería permitir agregar un usuario nuevo exitosamente', () => {
    const user: SystemUser = { id: '1', fullName: 'A', email: 'a@a.com', ci: '123', role: 'Client' };
    const resultado = service.addUser(user);

    expect(resultado).toBeNull();
    expect(service.getUsers().length).toBe(1);
  });
});
