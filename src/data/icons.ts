import {
  Home,
  ChefHat,
  Bath,
  Layers,
  DoorOpen,
  ClipboardList,
  PencilRuler,
  Building2,
  Wrench,
  Users,
  Building,
  UserCog,
  Heart,
  HardHat,
  MapPin,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const serviceIcons: Record<string, LucideIcon> = {
  "home-renovations": Home,
  "kitchen-renovations": ChefHat,
  "bathroom-renovations": Bath,
  "basement-development": Layers,
  "secondary-suites": DoorOpen,
  "construction-management": ClipboardList,
  "custom-home-planning": PencilRuler,
  "infill-project-support": Building2,
  "exterior-improvements": Wrench,
};

export const clientIcons: Record<string, LucideIcon> = {
  homeowners: Home,
  landlords: Building,
  "property-investors": UserCog,
  families: Heart,
  "small-residential-developers": HardHat,
  "calgary-communities": MapPin,
};

export const fallbackIcon: LucideIcon = Users;
