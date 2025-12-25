
export type Status = 'Active' | 'Pending' | 'Sold' | 'Open House' | 'Contacted' | 'New Lead' | 'Viewing Scheduled' | 'Closed' | 'Scheduled' | 'Draft';

export interface Property {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  status: Status;
  image: string;
  beds?: number;
  baths?: number;
  sqft?: number;
  type?: string;
  agent?: string;
  agentImage?: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: Status;
  interest: string;
  budget: string;
  addedAt: string;
  assignedAgent: string;
  agentImage: string;
  score: number;
  initials?: string;
}

export interface Appointment {
  id: string;
  time: string;
  period: 'AM' | 'PM';
  title: string;
  type: 'Showing' | 'Closing' | 'Call' | 'Meeting';
  person: string;
  location?: string;
}

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  status: 'Sent' | 'Draft' | 'Scheduled';
  audience: string;
  sentDate: string;
  openRate?: number;
  clickRate?: number;
  image?: string;
}
