
import { DepartmentInfo, Request, TeamMember } from '@/types';

export const departments: DepartmentInfo[] = [
  {
    name: 'Water Supply',
    description: 'Responsible for clean water distribution, maintenance of water infrastructure, and quality testing.',
    icon: 'W',
    color: 'bg-blue-500',
    requestCount: 0
  },
  {
    name: 'Electricity',
    description: 'Manages power distribution, electrical infrastructure, and handles power-related complaints.',
    icon: 'E',
    color: 'bg-yellow-500',
    requestCount: 0
  },
  {
    name: 'Health',
    description: 'Oversees public health initiatives, medical facilities, and healthcare programs across the city.',
    icon: 'H',
    color: 'bg-red-500',
    requestCount: 0
  },
  {
    name: 'Education',
    description: 'Responsible for schools, educational programs, teacher training, and academic infrastructure.',
    icon: 'E',
    color: 'bg-green-500',
    requestCount: 0
  },
  {
    name: 'Sanitation',
    description: 'Handles waste management, sewage systems, and maintains cleanliness throughout the city.',
    icon: 'S',
    color: 'bg-purple-500',
    requestCount: 0
  },
  {
    name: 'Public Works',
    description: 'Oversees construction and maintenance of roads, bridges, buildings and other public infrastructure.',
    icon: 'P',
    color: 'bg-gray-500',
    requestCount: 0
  },
  {
    name: 'Transportation',
    description: 'Manages city transportation systems, traffic control, and public transit infrastructure.',
    icon: 'T',
    color: 'bg-amber-500',
    requestCount: 0
  },
  {
    name: 'Urban Development',
    description: 'Plans and develops urban spaces, ensuring sustainable growth and proper infrastructure.',
    icon: 'U',
    color: 'bg-teal-500',
    requestCount: 0
  },
  {
    name: 'Environment',
    description: 'Protects natural resources, monitors pollution, and implements green initiatives.',
    icon: 'E',
    color: 'bg-emerald-500',
    requestCount: 0
  },
  {
    name: 'Finance',
    description: 'Manages city budget, financial planning, and resource allocation across departments.',
    icon: 'F',
    color: 'bg-cyan-500',
    requestCount: 0
  }
];

export const mockRequests: Request[] = [
  {
    id: '#174515',
    title: 'Water',
    description: 'Water supply disruption in Sector 7',
    department: 'Health',
    createdBy: 'vardhan',
    dateCreated: '20/04/2025',
    status: 'Pending'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    username: 'priya.sharma',
    department: 'Water Supply',
    position: 'Department Head',
    email: 'priya.sharma@jdframework.com',
    phone: '+91 98765 43210'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    username: 'rajesh.kumar',
    department: 'Education',
    position: 'Senior Administrator',
    email: 'rajesh.kumar@jdframework.com',
    phone: '+91 87654 32109'
  },
  {
    id: '3',
    name: 'Anjali Patel',
    username: 'anjali.patel',
    department: 'Transportation',
    position: 'Project Manager',
    email: 'anjali.patel@jdframework.com',
    phone: '+91 76543 21098'
  },
  {
    id: '4',
    name: 'Mohammed Khan',
    username: 'mohammed.khan',
    department: 'Health',
    position: 'Department Coordinator',
    email: 'mohammed.khan@jdframework.com',
    phone: '+91 65432 10987'
  },
  {
    id: '5',
    name: 'Sunita Reddy',
    username: 'sunita.reddy',
    department: 'Finance',
    position: 'Financial Analyst',
    email: 'sunita.reddy@jdframework.com',
    phone: '+91 54321 09876'
  }
];
