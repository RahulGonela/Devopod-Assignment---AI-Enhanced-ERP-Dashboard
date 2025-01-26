export interface User {
  id: string;
  email: string;
  role: 'admin' | 'manager' | 'employee';
  created_at: string;
}

export interface Module {
  id: string;
  name: string;
  path: string;
  icon: string;
  permissions: string[];
}

export interface NavigationItem {
  id: string;
  name: string;
  path: string;
  icon: any;
  permissions: string[];
}