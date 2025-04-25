import { NutritionalInfo } from "./NutritionalInfo.dto";

export interface Product {
  id: number; 
  name: string;
  price: number;
  category: string;
  stock: number;
  description: string;
  origin: string;
  certifications: string[]; 
  harvestDate: string;      
  supplier: string;
  nutritionalInfoId?: number;  
  nutritionalInfo?: NutritionalInfo;
  imageUrl?: string; 
}