
import React from 'react';
import { Drone, DroneCategory } from './types';
import { 
  Sprout, 
  Package, 
  ShieldAlert, 
  Siren, 
  Camera,
  Activity,
  MapPin,
  Clock,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Target,
  BarChart3,
  Droplets,
  TreePine,
  HeartPulse,
  Syringe,
  Users,
  Radio,
  Megaphone,
  Video,
  Eye,
  Stars,
  Sparkles,
  Truck,
  Box,
  Compass,
  Wind,
  HardHat,
  Construction,
  Building2,
  UtilityPole,
  SearchCode,
  UserPlus,
  FileBadge,
  DollarSign,
  ClipboardList,
  Search,
  Brain,
  CreditCard,
  Navigation,
  CheckCircle,
  Shield,
  Map,
  Lock,
  Handshake,
  BadgeDollarSign,
  Crown
} from 'lucide-react';

export const MOCK_DRONES: Drone[] = [
  {
    id: 'd1',
    name: 'AgriPro Harvester X1',
    model: 'DJI Agras T40',
    category: DroneCategory.AGRICULTURE,
    payloadCapacity: '40L',
    hourlyRate: 150,
    rating: 4.9,
    operatorName: 'SkyFarms Solutions',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    location: 'Central Valley, CA',
    description: 'The ultimate agricultural workhorse. Specialized in high-volume spraying and precision seeding with ultra-low drift nozzles.',
    verified: true,
    complianceLevel: 'Premium',
    services: [
      'Fertilizer / Pesticide Spraying', 
      'Crop Health & Monitoring', 
      'Yield Estimation & Mapping', 
      'Plantation Seeding Services'
    ]
  },
  {
    id: 'i1',
    name: 'Surveyor Pro Scan',
    model: 'DJI Matrice 300 RTK',
    category: DroneCategory.INSPECTION,
    payloadCapacity: '2.7kg',
    hourlyRate: 220,
    rating: 4.9,
    operatorName: 'Infrastructure Intel',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1579829366248-204fe8413f31?auto=format&fit=crop&q=80&w=800',
    location: 'Houston, TX',
    description: 'Specialized industrial drone for structural inspections. Features high-res thermal imaging and LiDAR for precise 3D modeling.',
    verified: true,
    complianceLevel: 'Premium',
    services: [
      'Roof / Building Inspections',
      'Infrastructure (Pylons, Bridges)',
      'Powerline & Pipeline Surveys'
    ]
  },
  {
    id: 'l1',
    name: 'SwiftReach Rural Courier',
    model: 'DDS-X Long Range',
    category: DroneCategory.LOGISTICS,
    payloadCapacity: '5kg',
    hourlyRate: 85,
    rating: 4.7,
    operatorName: 'DDS Global Logistics',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=800',
    location: 'Denver, CO',
    description: 'Specialized for beyond-visual-line-of-sight (BVLOS) delivery in rural and remote areas. Ideal for time-sensitive medicine and small parcels.',
    verified: true,
    complianceLevel: 'Premium',
    services: [
      'Rural Small-Package Delivery',
      'Remote Location Courier',
      'Medical & Time-Sensitive Shipment'
    ]
  },
  {
    id: 'sw1',
    name: 'Lumina Swarm 50',
    model: 'Verity Studio X-Show',
    category: DroneCategory.EVENTS,
    payloadCapacity: '0.5kg',
    hourlyRate: 2500,
    rating: 4.9,
    operatorName: 'Celestial Light Displays',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&q=80&w=800',
    location: 'Las Vegas, NV',
    description: 'Professional drone show swarm. Customizable aerial light displays for corporate events, weddings, and festivals.',
    verified: true,
    complianceLevel: 'Premium',
    services: [
      'Night Drone Light Shows',
      'Custom Wedding/Corporate Displays',
      'Live Event Aerial Coverage'
    ]
  },
  {
    id: 's1',
    name: 'CrowdWatch Guardian S2',
    model: 'DJI Matrice 350 RTK',
    category: DroneCategory.SECURITY,
    payloadCapacity: '2.7kg',
    hourlyRate: 210,
    rating: 4.8,
    operatorName: 'EventSafe Operations',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&q=80&w=800',
    location: 'Austin, TX',
    description: 'Advanced event surveillance unit with thermal crowd analysis and multi-spectral sensors for real-time monitoring.',
    verified: true,
    complianceLevel: 'Premium',
    services: [
      'Real-time Aerial Monitoring',
      'Police & Security Coordination',
      'Crowd Density Analysis',
      'Alert & Warning Broadcast'
    ]
  },
  {
    id: 'e1',
    name: 'LifeStream Ambulance-D1',
    model: 'Zipline P2 Platform',
    category: DroneCategory.EMERGENCY,
    payloadCapacity: '8kg',
    hourlyRate: 0,
    rating: 5.0,
    operatorName: 'DDS Health Network',
    status: 'available',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
    location: 'Downtown LA, CA',
    description: 'Near-instant medical response. Integrated with local health services for emergency dispatch of critical supplies.',
    verified: true,
    complianceLevel: 'Critical',
    services: [
      'Ambulance Drone Dispatch',
      'Blood & Medicine Delivery',
      'AED / First-Aid Deployment',
      'Situational Surveillance'
    ]
  }
];

export const SAFETY_COMPLIANCE = [
  {
    title: 'Airspace Governance',
    desc: 'Full adherence to FAA/DGCA rules with automated LAANC pre-clearing.',
    icon: <Map className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Geo-Fence Guard',
    desc: 'Real-time hard-locked geo-fencing to avoid restricted or sensitive zones.',
    icon: <Shield className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Certification Audit',
    desc: 'Continuous monitoring of pilot licenses and insurance validity.',
    icon: <FileBadge className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Liability Coverage',
    desc: 'Integrated per-mission insurance provided by global underwriting partners.',
    icon: <Handshake className="w-5 h-5 text-purple-400" />
  }
];

export const REVENUE_MODEL = [
  {
    title: 'Booking Commission',
    desc: 'Transparent 8% platform fee per successful industrial booking.',
    icon: <BadgeDollarSign className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Premium Subs',
    desc: 'Priority listing and advanced AI tools for high-capacity operators.',
    icon: <Crown className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Priority Dispatch',
    desc: 'Optional fees for immediate mission matching in critical sectors.',
    icon: <Zap className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Insurance API',
    desc: 'Monetized partnership with insurance tech providers for liability.',
    icon: <CreditCard className="w-5 h-5 text-pink-400" />
  }
];

export const WORKFLOW_OPERATOR = [
  {
    title: 'Fleet Onboarding',
    desc: 'Register drone specs, payload capabilities, and hardware IDs.',
    icon: <UserPlus className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Credential Vault',
    desc: 'Upload FAA certifications, pilot licenses, and insurance policies.',
    icon: <FileBadge className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Availability Matrix',
    desc: 'Set custom service rates and manage your live dispatch calendar.',
    icon: <DollarSign className="w-5 h-5 text-emerald-400" />
  }
];

export const WORKFLOW_USER = [
  {
    title: 'Mission Request',
    desc: 'Select category, input GPS coordinates, and job parameters.',
    icon: <Search className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'AI Matchmaking',
    desc: 'Neural engine finds best drone based on weather, distance, and capability.',
    icon: <Brain className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Secure Booking',
    desc: 'Quote estimation and secure escrow-protected payments.',
    icon: <CreditCard className="w-5 h-5 text-blue-400" />
  }
];

export const WORKFLOW_MISSION = [
  {
    title: 'GPS Monitoring',
    desc: 'Real-time live flight tracking and telemetry data streams.',
    icon: <Navigation className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Smart Compliance',
    desc: 'Automated airspace logging and safety alerts during flight.',
    icon: <ShieldCheck className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Instant Settlement',
    desc: 'Funds release, earnings credit, and tax-ready digital invoices.',
    icon: <CheckCircle className="w-5 h-5 text-amber-400" />
  }
];

export const AGRI_SERVICES = [
  { 
    title: 'Precision Spraying', 
    desc: 'Fertilizer & pesticide spraying with 98% drift reduction.', 
    icon: <Droplets className="w-5 h-5 text-blue-400" /> 
  },
  { 
    title: 'Crop Monitoring', 
    desc: 'Multispectral sensors for real-time crop health analysis.', 
    icon: <Target className="w-5 h-5 text-emerald-400" /> 
  },
  { 
    title: 'Field Mapping', 
    desc: 'Yield estimation and topographic field mapping.', 
    icon: <BarChart3 className="w-5 h-5 text-amber-400" /> 
  },
  { 
    title: 'Automated Seeding', 
    desc: 'High-speed plantation seeding for reforestation or farming.', 
    icon: <TreePine className="w-5 h-5 text-purple-400" /> 
  }
];

export const EMERGENCY_SERVICES = [
  {
    title: 'Ambulance Dispatch',
    desc: 'Automated ambulance drone launch for near-instant site arrival.',
    icon: <Siren className="w-5 h-5 text-red-500" />
  },
  {
    title: 'Medical Logistics',
    desc: 'Delivery of blood, vaccines, and diagnostic units in cold-chain pods.',
    icon: <Syringe className="w-5 h-5 text-blue-500" />
  },
  {
    title: 'Critical Response',
    desc: 'AED and specialized first-aid kits delivered to accident coordinates.',
    icon: <HeartPulse className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'situational awareness',
    desc: 'Live high-res camera surveillance for responders before they arrive.',
    icon: <Camera className="w-5 h-5 text-amber-500" />
  }
];

export const INSPECTION_SERVICES = [
  {
    title: 'Structural Inspection',
    desc: 'Detailed roof and building facade inspections for maintenance.',
    icon: <Building2 className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Utility Infrastructure',
    desc: 'Pylon and bridge health checks without hazardous human climbing.',
    icon: <Construction className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Linear Surveys',
    desc: 'Rapid autonomous powerline and pipeline monitoring surveys.',
    icon: <UtilityPole className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'LiDAR Mapping',
    desc: 'High-precision 3D mapping for construction and development.',
    icon: <SearchCode className="w-5 h-5 text-purple-400" />
  }
];

export const EVENT_SERVICES = [
  {
    title: 'Drone Shows',
    desc: 'Synchronized light displays for weddings, festivals, and branding.',
    icon: <Stars className="w-5 h-5 text-amber-400" />
  },
  {
    title: 'Custom Packages',
    desc: 'Visual themes and specific durations tailored to event needs.',
    icon: <Sparkles className="w-5 h-5 text-pink-400" />
  },
  {
    title: 'Live Coverage',
    desc: 'Professional 4K live-stream angles for concerts and sports.',
    icon: <Video className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Tactical Support',
    desc: 'Crowd density and movement analysis via thermal imaging.',
    icon: <Users className="w-5 h-5 text-emerald-400" />
  }
];

export const LOGISTICS_SERVICES = [
  {
    title: 'Rural Delivery',
    desc: 'Small-package delivery to areas with limited road infrastructure.',
    icon: <Box className="w-5 h-5 text-blue-400" />
  },
  {
    title: 'Medical Express',
    desc: 'Time-sensitive delivery of vaccines, blood, and prescriptions.',
    icon: <Syringe className="w-5 h-5 text-red-400" />
  },
  {
    title: 'Remote Courier',
    desc: 'Fast courier services to congested urban or remote locations.',
    icon: <Truck className="w-5 h-5 text-emerald-400" />
  },
  {
    title: 'Logistics Mesh',
    desc: 'Automated route optimization for multi-stop delivery chains.',
    icon: <Compass className="w-5 h-5 text-purple-400" />
  }
];

export const CATEGORY_ICONS = {
  [DroneCategory.AGRICULTURE]: <Sprout className="w-5 h-5" />,
  [DroneCategory.LOGISTICS]: <Package className="w-5 h-5" />,
  [DroneCategory.SECURITY]: <ShieldAlert className="w-5 h-5" />,
  [DroneCategory.EMERGENCY]: <Siren className="w-5 h-5" />,
  [DroneCategory.EVENTS]: <Camera className="w-5 h-5" />,
  [DroneCategory.INSPECTION]: <HardHat className="w-5 h-5" />
};

export const VALUE_PROPS = [
  {
    title: 'Earn More From Your Drone',
    desc: 'Transform idle agricultural or security drones into a 24/7 revenue stream by offering versatile services through our network.',
    icon: <TrendingUp className="text-blue-400" />
  },
  {
    title: 'Zero-Ownership Logistics',
    desc: 'Access high-end industrial drones and certified pilots on-demand. Scalable infrastructure without the overhead of hardware maintenance.',
    icon: <Zap className="text-emerald-400" />
  },
  {
    title: 'AI-Optimized Dispatch',
    desc: 'Our neural routing engine matches your specific mission requirements with the nearest, most capable operator for maximum efficiency.',
    icon: <Cpu className="text-purple-400" />
  },
  {
    title: 'Regulatory Guardrails',
    desc: 'Automated flight-plan logging and real-time airspace compliance checks ensure every mission follows FAA and local privacy mandates.',
    icon: <ShieldCheck className="text-amber-400" />
  }
];

export const STATS = [
  { label: 'Active Missions', value: '1,284', icon: <Activity className="text-blue-400" /> },
  { label: 'Operators Online', value: '452', icon: <MapPin className="text-emerald-400" /> },
  { label: 'Avg Dispatch', value: '12m', icon: <Clock className="text-amber-400" /> },
  { label: 'Monthly Earnings', value: '$85k', icon: <Zap className="text-purple-400" /> }
];
