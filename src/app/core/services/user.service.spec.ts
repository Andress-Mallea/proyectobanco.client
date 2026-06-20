import { UserService } from './user.service';
import { SystemUser } from '../models/user.model';
import { UserRole } from '../models/enums.model';
describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    service = new UserService();
  });

  it('debería ser creado correctamente', () => {
    expect(service).toBeTruthy();
  });

  it('debería retornar error si el CI ya existe', () => {
    const u1: SystemUser = { id: '1', fullName: 'A', email: 'a@a.com', ci: '123456', role: 'Client' };
    const u2: SystemUser = { id: '2', fullName: 'B', email: 'b@b.com', ci: '123456', role: 'Client' };
    service.addUser(u1);
    const resultado = service.addUser(u2);
    expect(resultado).toBe('Error: Ya existe un usuario con esta Cédula de Identidad.');
  });

  it('debería permitir agregar un usuario nuevo exitosamente', () => {
    const user: SystemUser = { id: '1', fullName: 'A', email: 'a@a.com', ci: '123456', role: 'Client' };
    const resultado = service.addUser(user);

    expect(resultado).toBeNull();
    expect(service.getUsers().length).toBe(1);
  });
  it('debería asignar el rol CLIENT por defecto mediante enum', () => {
    const service = new UserService();
    const user: any = { ci: '123456', email: 'x@x.com', fullName: 'X' };
    service.addUser(user);
    expect(service.getUsers()[0].role).toBe(UserRole.CLIENT);
  });
  it('debería retornar error si el CI tiene un formato inválido', () => {
    const userInvalido = { id: '3', fullName: 'C', email: 'c@c.com', ci: '123A', role: 'Client' } as any;

    const result = service.addUser(userInvalido);

    expect(result).toBe('Error: Formato de CI inválido.');
  });
});
