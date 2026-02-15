
export enum DroneCategory {
  AGRICULTURE = 'Agriculture',
  LOGISTICS = 'Logistics',
  SECURITY = 'Security',
  EMERGENCY = 'Emergency',
  EVENTS = 'Events',
  INSPECTION = 'Inspection'
}

export interface Drone {
  id: string;
  name: string;
  model: string;
  category: DroneCategory;
  payloadCapacity: string;
  hourlyRate: number;
  rating: number;
  operatorName: string;
  status: 'available' | 'in-flight' | 'maintenance';
  image: string;
  location: string;
  description: string;
  verified: boolean;
  complianceLevel: 'Standard' | 'Premium' | 'Critical';
  services: string[];
}

export interface ServiceRequest {
  id: string;
  category: DroneCategory;
  description: string;
  location: string;
  scheduledTime: string;
  status: 'pending' | 'accepted' | 'completed';
  customerId: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
