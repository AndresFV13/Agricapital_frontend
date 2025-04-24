interface NutritionalInfo {
    calories: number;
    vitamins: string[];
  }
  
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
  nutritionalInfo?: NutritionalInfo;
}
  
export const products: Product[] = [
  {
    id: 1,
    name: 'Manzanas Royal Gala',
    price: 2.99,
    category: 'Frutas',
    stock: 150,
    description: 'Manzanas crujientes de dulce aroma, ideal para postres y consumo directo',
    origin: 'Valle de Río Negro, Argentina',
    certifications: ['Orgánico', 'Comercio Justo'],
    harvestDate: '15/03/2024',
    supplier: 'Huerta Don José',
    nutritionalInfo: {
      calories: 52,
      vitamins: ['Vitamina C', 'Vitamina K', 'Potasio']
    }
  },
  {
    id: 2,
    name: 'Zanahorias Baby',
    price: 1.80,
    category: 'Hortalizas',
    stock: 200,
    description: 'Zanahorias tiernas de tamaño pequeño, dulces y crocantes',
    origin: 'Chiliwack, Canadá',
    certifications: ['GlobalG.A.P.', 'HACCP'],
    harvestDate: '10/03/2024',
    supplier: 'Cultivos del Norte S.A.',
    nutritionalInfo: {
      calories: 41,
      vitamins: ['Vitamina A', 'Vitamina B6', 'Biotina']
    }
  },
  {
    id: 3,
    name: 'Uvas Red Globe',
    price: 4.50,
    category: 'Frutas',
    stock: 75,
    description: 'Uvas de gran tamaño, jugosas y con bajo contenido en semillas',
    origin: 'Valle de San Joaquín, California',
    certifications: ['USDA Organic'],
    harvestDate: '01/03/2024',
    supplier: 'Viñedos Golden Valley'
  },
  {
    id: 4,
    name: 'Brócoli Premium',
    price: 2.75,
    category: 'Vegetales',
    stock: 90,
    description: 'Cogollos compactos de color verde intenso, ricos en antioxidantes',
    origin: 'Monterrey, México',
    certifications: ['Agricultura Sustentable', 'México Calidad Suprema'],
    harvestDate: '20/03/2024',
    supplier: 'Verduras Frescas S.A. de C.V.'
  },
  {
    id: 5,
    name: 'Aguacates Hass',
    price: 5.20,
    category: 'Frutas',
    stock: 120,
    description: 'Variedad premium con textura cremosa y alto contenido oleico',
    origin: 'Michoacán, México',
    certifications: ['Rainforest Alliance', 'Fair Trade'],
    harvestDate: '05/03/2024',
    supplier: 'Productos del Campo Mexicano',
    nutritionalInfo: {
      calories: 160,
      vitamins: ['Vitamina E', 'Vitamina B5', 'Ácido Fólico']
    }
  },
  {
    id: 6,
    name: 'Espinacas Baby',
    price: 2.30,
    category: 'Hojas Verdes',
    stock: 180,
    description: 'Hojas tiernas cosechadas en etapa temprana, ideales para ensaladas',
    origin: 'Almería, España',
    certifications: ['Agricultura Ecológica UE'],
    harvestDate: '18/03/2024',
    supplier: 'Euroverde S.L.'
  },
  {
    id: 7,
    name: 'Arándanos Premium',
    price: 6.90,
    category: 'Frutas',
    stock: 60,
    description: 'Arándanos de gran tamaño con alto contenido de antioxidantes',
    origin: 'Oregón, Estados Unidos',
    certifications: ['Non-GMO', 'Kosher'],
    harvestDate: '12/03/2024',
    supplier: 'Berry Farms International',
    nutritionalInfo: {
      calories: 57,
      vitamins: ['Vitamina C', 'Vitamina K', 'Manganeso']
    }
  },
  {
    id: 8,
    name: 'Tomates Cherry',
    price: 3.40,
    category: 'Vegetales',
    stock: 110,
    description: 'Tomates pequeños dulces y jugosos, cosechados en racimo',
    origin: 'Sicilia, Italia',
    certifications: ['D.O.P. Pachino'],
    harvestDate: '22/03/2024',
    supplier: 'Agricola Mediterranea'
  }
];