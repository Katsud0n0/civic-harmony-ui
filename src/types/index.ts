
export interface User {
  id: string;
  username: string;
  fullName: string;
  department: Department;
  email: string;
  phone?: string;
  avatar?: string;
}

export type Department = 
  | 'Water Supply'
  | 'Electricity'
  | 'Health'
  | 'Education'
  | 'Sanitation'
  | 'Public Works'
  | 'Transportation'
  | 'Urban Development'
  | 'Environment'
  | 'Finance';

export interface DepartmentInfo {
  name: Department;
  description: string;
  icon: string;
  color: string;
  requestCount: number;
}

export type RequestStatus = 'Pending' | 'In progress' | 'Completed';

export interface Request {
  id: string;
  title: string;
  description?: string;
  department: Department;
  createdBy: string;
  dateCreated: string;
  status: RequestStatus;
  assignedTo?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  username: string;
  department: Department;
  position: string;
  email: string;
  phone: string;
  avatar?: string;
}
