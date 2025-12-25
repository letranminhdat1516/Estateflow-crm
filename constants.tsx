
import { Property, Lead, Appointment, Campaign } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    address: '123 Maple Avenue',
    city: 'Beverly Hills',
    state: 'CA',
    zip: '90210',
    price: 850000,
    status: 'Active',
    image: 'https://picsum.photos/seed/prop1/400/300',
    beds: 3,
    baths: 2,
    sqft: 1200,
    type: 'House',
    agent: 'Jane Doe',
    agentImage: 'https://i.pravatar.cc/150?u=jane'
  },
  {
    id: '2',
    address: '4582 Oak Street',
    city: 'Pasadena',
    state: 'CA',
    zip: '91101',
    price: 1200000,
    status: 'Pending',
    image: 'https://picsum.photos/seed/prop2/400/300',
    beds: 4,
    baths: 3,
    sqft: 2200,
    type: 'Condo',
    agent: 'Marcus Chen',
    agentImage: 'https://i.pravatar.cc/150?u=marcus'
  },
  {
    id: '3',
    address: '782 Pine Way',
    city: 'Sherman Oaks',
    state: 'CA',
    zip: '91403',
    price: 925000,
    status: 'Open House',
    image: 'https://picsum.photos/seed/prop3/400/300',
    beds: 2,
    baths: 2,
    sqft: 950,
    type: 'House',
    agent: 'Sarah Jones',
    agentImage: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '4',
    address: '77 Oak Lane',
    city: 'Austin',
    state: 'TX',
    zip: '78701',
    price: 625000,
    status: 'Sold',
    image: 'https://picsum.photos/seed/prop4/400/300',
    beds: 4,
    baths: 3,
    sqft: 2400,
    type: 'House',
    agent: 'Sarah Jones',
    agentImage: 'https://i.pravatar.cc/150?u=sarah'
  },
  {
    id: '5',
    address: 'Tech Park Suite 404',
    city: 'Seattle',
    state: 'WA',
    zip: '98109',
    price: 1200000,
    status: 'Active',
    image: 'https://picsum.photos/seed/prop5/400/300',
    beds: 5,
    baths: 0,
    sqft: 3100,
    type: 'Commercial',
    agent: 'David Lee',
    agentImage: 'https://i.pravatar.cc/150?u=david'
  }
];

export const LEADS: Lead[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    email: 'sarah.j@example.com',
    phone: '(512) 555-0123',
    status: 'Viewing Scheduled',
    interest: '3BR Condo, Downtown',
    budget: '$450k - $500k',
    addedAt: '2 hrs ago',
    assignedAgent: 'Mike Ross',
    agentImage: 'https://i.pravatar.cc/150?u=mike',
    score: 85,
    initials: 'SJ'
  },
  {
    id: '2',
    name: 'David Chen',
    email: 'david.c@tech.co',
    phone: '(555) 987-6543',
    status: 'New Lead',
    interest: 'Single Family Home',
    budget: '$800k - $1.2M',
    addedAt: '5 hrs ago',
    assignedAgent: 'Sarah Connor',
    agentImage: 'https://i.pravatar.cc/150?u=sarahc',
    score: 72,
    initials: 'DC'
  },
  {
    id: '3',
    name: 'Emily Davis',
    email: 'emily.d@studio.net',
    phone: '(555) 111-2222',
    status: 'Contacted',
    interest: 'Loft, Arts District',
    budget: '$600k Max',
    addedAt: 'Yesterday',
    assignedAgent: 'Sarah Connor',
    agentImage: 'https://i.pravatar.cc/150?u=sarahc',
    score: 65,
    initials: 'ED'
  }
];

export const SCHEDULE: Appointment[] = [
  { id: '1', time: '10:00', period: 'AM', title: 'Viewing: 123 Maple St', type: 'Showing', person: 'John Doe', location: '123 Maple St' },
  { id: '2', time: '02:00', period: 'PM', title: 'Closing @ Law Office', type: 'Closing', person: 'The Smiths', location: 'Downtown' },
  { id: '3', time: '04:30', period: 'PM', title: 'Client Call: New Lead', type: 'Call', person: 'Sarah M.', location: 'Phone' }
];

export const CAMPAIGNS: Campaign[] = [
  { id: '1', name: 'Summer Open House', subject: '123 Maple Dr', status: 'Sent', audience: 'Buyers List', sentDate: 'Oct 24, 2023', openRate: 45, clickRate: 12, image: 'https://picsum.photos/seed/camp1/100/100' },
  { id: '2', name: 'Q3 Market Update', subject: "See what's happening...", status: 'Draft', audience: 'Past Clients', sentDate: '--' },
  { id: '3', name: 'Just Listed: Downtown Condo', subject: 'Unit 402 - The Spire', status: 'Scheduled', audience: 'Investors', sentDate: 'Nov 02, 2023' }
];
