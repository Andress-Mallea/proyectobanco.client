export interface SystemUser {
  id: string;
  fullName: string;
  email: string;
  role: 'Admin' | 'Staff' | 'Client';
  ci: string;
}
