
export type UserRole = 'customer' | 'business' | 'worker' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Customer extends User {
  role: 'customer';
  properties: Property[];
  reviews: Review[];
}

export interface Business extends User {
  role: 'business';
  businessName: string;
  description: string;
  services: string[];
  workers: Worker[];
  subscriptionActive: boolean;
  rating: number;
  reviewCount: number;
}

export interface Worker extends User {
  role: 'worker';
  businessId: string;
  skills: string[];
  isActive: boolean;
}

export interface Admin extends User {
  role: 'admin';
  permissions: string[];
}

export interface Property {
  id: string;
  customerId: string;
  address: string;
  type: 'house' | 'apartment' | 'office' | 'other';
  size: number;
  rooms: number;
  specialInstructions?: string;
}

export interface Review {
  id: string;
  customerId: string;
  businessId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface Job {
  id: string;
  businessId: string;
  customerId: string;
  workerId?: string;
  propertyId: string;
  title: string;
  description: string;
  scheduledDate: Date;
  status: 'pending' | 'assigned' | 'in-progress' | 'completed' | 'cancelled';
  estimatedDuration: number;
  price: number;
  photos: string[];
  createdAt: Date;
  updatedAt: Date;
}
