
import { DepartmentInfo, Request, TeamMember } from '@/types';

export const departments: DepartmentInfo[] = [
  {
    name: 'Water Supply',
    description: 'Responsible for clean water distribution, maintenance of water infrastructure, and quality testing.',
    icon: 'W',
    color: 'bg-blue-500',
    requestCount: 12
  },
  {
    name: 'Electricity',
    description: 'Manages power distribution, electrical infrastructure, and handles power-related complaints.',
    icon: 'E',
    color: 'bg-yellow-500',
    requestCount: 8
  },
  {
    name: 'Health',
    description: 'Oversees public health initiatives, medical facilities, and healthcare programs across the city.',
    icon: 'H',
    color: 'bg-red-500',
    requestCount: 15
  },
  {
    name: 'Education',
    description: 'Responsible for schools, educational programs, teacher training, and academic infrastructure.',
    icon: 'E',
    color: 'bg-green-500',
    requestCount: 6
  },
  {
    name: 'Sanitation',
    description: 'Handles waste management, sewage systems, and maintains cleanliness throughout the city.',
    icon: 'S',
    color: 'bg-purple-500',
    requestCount: 10
  },
  {
    name: 'Public Works',
    description: 'Oversees construction and maintenance of roads, bridges, buildings and other public infrastructure.',
    icon: 'P',
    color: 'bg-gray-500',
    requestCount: 9
  },
  {
    name: 'Transportation',
    description: 'Manages city transportation systems, traffic control, and public transit infrastructure.',
    icon: 'T',
    color: 'bg-amber-500',
    requestCount: 7
  },
  {
    name: 'Urban Development',
    description: 'Plans and develops urban spaces, ensuring sustainable growth and proper infrastructure.',
    icon: 'U',
    color: 'bg-teal-500',
    requestCount: 5
  },
  {
    name: 'Environment',
    description: 'Protects natural resources, monitors pollution, and implements green initiatives.',
    icon: 'E',
    color: 'bg-emerald-500',
    requestCount: 4
  },
  {
    name: 'Finance',
    description: 'Manages city budget, financial planning, and resource allocation across departments.',
    icon: 'F',
    color: 'bg-cyan-500',
    requestCount: 11
  }
];

export const mockRequests: Request[] = [
  {
    id: '#174515',
    title: 'Water Supply Disruption',
    description: 'Water supply disruption in Sector 7',
    department: 'Water Supply',
    createdBy: 'user123',
    dateCreated: '20/04/2025',
    status: 'Pending'
  },
  {
    id: '#174516',
    title: 'Street Light Repair',
    description: 'Three street lights not working on Main Street',
    department: 'Electricity',
    createdBy: 'vardhan',
    dateCreated: '19/04/2025',
    status: 'In progress'
  },
  {
    id: '#174517',
    title: 'Pothole Repair',
    description: 'Large pothole on Junction Road causing traffic issues',
    department: 'Public Works',
    createdBy: 'priya.sharma',
    dateCreated: '18/04/2025',
    status: 'Completed'
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
  },
  {
    id: '6',
    name: 'Vivek Malhotra',
    username: 'vivek.malhotra',
    department: 'Environment',
    position: 'Environmental Specialist',
    email: 'vivek.malhotra@jdframework.com',
    phone: '+91 87654 12345'
  },
  {
    id: '7',
    name: 'Deepika Nair',
    username: 'deepika.nair',
    department: 'Sanitation',
    position: 'Operations Manager',
    email: 'deepika.nair@jdframework.com',
    phone: '+91 76543 23456'
  },
  {
    id: '8',
    name: 'Arjun Singh',
    username: 'arjun.singh',
    department: 'Urban Development',
    position: 'Urban Planner',
    email: 'arjun.singh@jdframework.com',
    phone: '+91 65432 34567'
  },
  {
    id: '9',
    name: 'Neha Gupta',
    username: 'neha.gupta',
    department: 'Public Works',
    position: 'Civil Engineer',
    email: 'neha.gupta@jdframework.com',
    phone: '+91 54321 45678'
  },
  {
    id: '10',
    name: 'Karthik Rajan',
    username: 'karthik.rajan',
    department: 'Electricity',
    position: 'Electrical Supervisor',
    email: 'karthik.rajan@jdframework.com',
    phone: '+91 98765 56789'
  },
  {
    id: '11',
    name: 'Ritu Verma',
    username: 'ritu.verma',
    department: 'Health',
    position: 'Healthcare Administrator',
    email: 'ritu.verma@jdframework.com',
    phone: '+91 87654 67890'
  },
  {
    id: '12',
    name: 'Sanjay Mehta',
    username: 'sanjay.mehta',
    department: 'Finance',
    position: 'Budget Director',
    email: 'sanjay.mehta@jdframework.com',
    phone: '+91 76543 78901'
  }
];
