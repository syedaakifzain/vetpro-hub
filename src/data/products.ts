export type ProductCategory = 'livestock' | 'pet' | 'poultry';
export type LivestockSubcategory = 'antibiotics' | 'nsaid' | 'anthelmintic' | 'feed-supplements' | 'wound-healing';
export type Species = 'cattle' | 'buffalo' | 'sheep' | 'goat' | 'pig' | 'dog' | 'cat' | 'poultry' | 'horse';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  subcategory?: LivestockSubcategory;
  species: Species[];
  shortDescription: string;
  detailedDescription: string;
  composition: string;
  indications: string[];
  dosage: string;
  packing: string;
  image: string;
}

export const products: Product[] = [
  // Livestock - Antibiotics
  {
    id: 'enroflox-100',
    name: 'Enroflox-100',
    tagline: 'Broad Spectrum Antibiotic Solution',
    category: 'livestock',
    subcategory: 'antibiotics',
    species: ['cattle', 'buffalo', 'sheep', 'goat'],
    shortDescription: 'Powerful fluoroquinolone antibiotic for respiratory and gastrointestinal infections.',
    detailedDescription: 'Enroflox-100 is a highly effective fluoroquinolone antibiotic specifically formulated for large animals. It provides rapid bactericidal action against a wide range of gram-positive and gram-negative bacteria, making it ideal for treating severe infections.',
    composition: 'Each ml contains Enrofloxacin IP 100mg',
    indications: [
      'Respiratory tract infections',
      'Gastrointestinal infections',
      'Urinary tract infections',
      'Septicemia',
      'Mastitis'
    ],
    dosage: '1ml per 20kg body weight for 3-5 days',
    packing: '30ml, 100ml, 500ml',
    image: '/placeholder.svg'
  },
  {
    id: 'amoxivet-forte',
    name: 'Amoxivet Forte',
    tagline: 'Triple Action Antibiotic',
    category: 'livestock',
    subcategory: 'antibiotics',
    species: ['cattle', 'buffalo', 'sheep', 'goat', 'pig'],
    shortDescription: 'Combination antibiotic for mixed bacterial infections.',
    detailedDescription: 'Amoxivet Forte combines the power of amoxicillin with clavulanic acid for enhanced efficacy against beta-lactamase producing bacteria. Perfect for treating resistant infections.',
    composition: 'Amoxicillin Trihydrate IP 150mg + Cloxacillin Sodium IP 150mg per ml',
    indications: [
      'Mastitis',
      'Metritis',
      'Pneumonia',
      'Foot rot',
      'Wound infections'
    ],
    dosage: '1ml per 10kg body weight IM/IV',
    packing: '30ml, 100ml',
    image: '/placeholder.svg'
  },
  {
    id: 'gentamax-80',
    name: 'Gentamax-80',
    tagline: 'Aminoglycoside Excellence',
    category: 'livestock',
    subcategory: 'antibiotics',
    species: ['cattle', 'buffalo', 'horse'],
    shortDescription: 'Potent aminoglycoside for severe gram-negative infections.',
    detailedDescription: 'Gentamax-80 provides exceptional coverage against gram-negative bacteria including Pseudomonas and E. coli. Ideal for severe systemic infections.',
    composition: 'Gentamicin Sulphate IP equivalent to Gentamicin 80mg per ml',
    indications: [
      'Severe systemic infections',
      'E. coli infections',
      'Pseudomonas infections',
      'Septicemia'
    ],
    dosage: '1ml per 25kg body weight IM',
    packing: '30ml, 100ml',
    image: '/placeholder.svg'
  },
  // Livestock - NSAID
  {
    id: 'meloxivet-20',
    name: 'Meloxivet-20',
    tagline: 'Advanced Pain Relief Solution',
    category: 'livestock',
    subcategory: 'nsaid',
    species: ['cattle', 'buffalo', 'horse'],
    shortDescription: 'Selective COX-2 inhibitor for effective pain management.',
    detailedDescription: 'Meloxivet-20 provides powerful anti-inflammatory and analgesic effects with minimal gastrointestinal side effects. Ideal for musculoskeletal disorders and post-operative pain management.',
    composition: 'Each ml contains Meloxicam IP 20mg',
    indications: [
      'Musculoskeletal disorders',
      'Arthritis',
      'Post-operative pain',
      'Inflammatory conditions',
      'Lameness'
    ],
    dosage: '1ml per 40kg body weight IV/IM/SC',
    packing: '30ml, 100ml',
    image: '/placeholder.svg'
  },
  {
    id: 'ketopro-100',
    name: 'Ketopro-100',
    tagline: 'Rapid Pain Relief',
    category: 'livestock',
    subcategory: 'nsaid',
    species: ['cattle', 'buffalo', 'horse', 'pig'],
    shortDescription: 'Fast-acting NSAID for acute pain and inflammation.',
    detailedDescription: 'Ketopro-100 delivers quick relief from pain and fever. Its potent anti-inflammatory action makes it perfect for treating acute conditions.',
    composition: 'Ketoprofen IP 100mg per ml',
    indications: [
      'Acute inflammation',
      'Fever',
      'Colic',
      'Post-surgical pain',
      'Trauma'
    ],
    dosage: '1ml per 33kg body weight IV/IM',
    packing: '30ml, 100ml',
    image: '/placeholder.svg'
  },
  // Livestock - Anthelmintic
  {
    id: 'albendazole-plus',
    name: 'Albendazole Plus',
    tagline: 'Complete Deworming Solution',
    category: 'livestock',
    subcategory: 'anthelmintic',
    species: ['cattle', 'buffalo', 'sheep', 'goat'],
    shortDescription: 'Broad-spectrum anthelmintic for all major worm infestations.',
    detailedDescription: 'Albendazole Plus provides comprehensive protection against roundworms, tapeworms, and flukes. Single dose treatment ensures complete deworming.',
    composition: 'Albendazole IP 3000mg + Oxyclozanide IP 1800mg per 30ml',
    indications: [
      'Roundworm infections',
      'Tapeworm infections',
      'Liver fluke',
      'Gastrointestinal parasites'
    ],
    dosage: '1ml per 5kg body weight orally',
    packing: '30ml, 60ml, 100ml, 1L',
    image: '/placeholder.svg'
  },
  {
    id: 'ivermec-super',
    name: 'Ivermec Super',
    tagline: 'Premium Parasitic Control',
    category: 'livestock',
    subcategory: 'anthelmintic',
    species: ['cattle', 'buffalo', 'sheep', 'goat', 'pig'],
    shortDescription: 'Injectable solution for internal and external parasites.',
    detailedDescription: 'Ivermec Super provides dual action against both internal parasites and external pests like ticks, lice, and mites.',
    composition: 'Ivermectin IP 10mg + Clorsulon IP 100mg per ml',
    indications: [
      'Gastrointestinal nematodes',
      'Lungworms',
      'Lice',
      'Mites',
      'Ticks',
      'Liver fluke'
    ],
    dosage: '1ml per 50kg body weight SC',
    packing: '50ml, 100ml, 500ml',
    image: '/placeholder.svg'
  },
  // Livestock - Feed Supplements
  {
    id: 'calcivet-d3',
    name: 'Calcivet-D3',
    tagline: 'Bone Health & Milk Production',
    category: 'livestock',
    subcategory: 'feed-supplements',
    species: ['cattle', 'buffalo'],
    shortDescription: 'Calcium and Vitamin D3 supplement for optimal bone health.',
    detailedDescription: 'Calcivet-D3 provides essential calcium and vitamin D3 for maintaining bone strength, preventing milk fever, and improving milk production in dairy animals.',
    composition: 'Calcium Gluconate IP 200mg + Calcium Lactate IP 100mg + Vitamin D3 IP 25000 IU per 30ml',
    indications: [
      'Milk fever prevention',
      'Calcium deficiency',
      'Post-parturient hypocalcemia',
      'Improved milk production'
    ],
    dosage: '30-60ml per animal orally or as advised',
    packing: '100ml, 500ml, 1L',
    image: '/placeholder.svg'
  },
  {
    id: 'mineral-mix-gold',
    name: 'Mineral Mix Gold',
    tagline: 'Complete Mineral Nutrition',
    category: 'livestock',
    subcategory: 'feed-supplements',
    species: ['cattle', 'buffalo', 'sheep', 'goat'],
    shortDescription: 'Comprehensive mineral mixture for daily supplementation.',
    detailedDescription: 'Mineral Mix Gold contains all essential macro and micro minerals required for optimal health, growth, and productivity.',
    composition: 'Calcium, Phosphorus, Magnesium, Iron, Copper, Zinc, Manganese, Iodine, Cobalt, Selenium, Vitamins A, D3, E',
    indications: [
      'Daily mineral supplementation',
      'Improved fertility',
      'Better milk production',
      'Enhanced immunity'
    ],
    dosage: '50-100g per large animal daily',
    packing: '1kg, 5kg, 25kg',
    image: '/placeholder.svg'
  },
  // Livestock - Wound Healing
  {
    id: 'healex-spray',
    name: 'Healex Spray',
    tagline: 'Rapid Wound Care',
    category: 'livestock',
    subcategory: 'wound-healing',
    species: ['cattle', 'buffalo', 'sheep', 'goat', 'horse'],
    shortDescription: 'Antiseptic wound healing spray with fly repellent.',
    detailedDescription: 'Healex Spray provides instant antiseptic protection while promoting rapid wound healing. Built-in fly repellent protects against secondary infections.',
    composition: 'Oxytetracycline HCl 3.2% w/v + Gentian Violet 0.1% w/v + Fly Repellent',
    indications: [
      'Open wounds',
      'Surgical wounds',
      'Castration wounds',
      'Foot rot',
      'Burns'
    ],
    dosage: 'Spray liberally on affected area 2-3 times daily',
    packing: '100ml, 200ml, 500ml',
    image: '/placeholder.svg'
  },
  // Pet Care
  {
    id: 'petflox-50',
    name: 'Petflox-50',
    tagline: 'Pet-Safe Antibiotic',
    category: 'pet',
    species: ['dog', 'cat'],
    shortDescription: 'Fluoroquinolone antibiotic tablets for dogs and cats.',
    detailedDescription: 'Petflox-50 is specifically formulated for companion animals, providing effective treatment against bacterial infections with excellent palatability.',
    composition: 'Enrofloxacin IP 50mg per tablet',
    indications: [
      'Skin infections',
      'Urinary tract infections',
      'Respiratory infections',
      'Gastrointestinal infections'
    ],
    dosage: '5mg per kg body weight once daily for 5-10 days',
    packing: '10 tablets, 100 tablets',
    image: '/placeholder.svg'
  },
  {
    id: 'dermapet-shampoo',
    name: 'Dermapet Shampoo',
    tagline: 'Medicated Skin Care',
    category: 'pet',
    species: ['dog', 'cat'],
    shortDescription: 'Antifungal and antibacterial medicated shampoo.',
    detailedDescription: 'Dermapet Shampoo provides comprehensive treatment for skin infections while maintaining coat health and shine.',
    composition: 'Ketoconazole 2% w/v + Chlorhexidine Gluconate 2% w/v',
    indications: [
      'Fungal skin infections',
      'Bacterial dermatitis',
      'Seborrhea',
      'Hot spots',
      'General skin hygiene'
    ],
    dosage: 'Apply, lather, leave for 5-10 minutes, rinse. Use 2-3 times weekly',
    packing: '100ml, 200ml, 500ml',
    image: '/placeholder.svg'
  },
  {
    id: 'jointcare-tablets',
    name: 'JointCare Tablets',
    tagline: 'Mobility Support',
    category: 'pet',
    species: ['dog'],
    shortDescription: 'Joint health supplement with glucosamine and chondroitin.',
    detailedDescription: 'JointCare Tablets support joint health and mobility in dogs of all ages. Ideal for senior dogs and large breeds prone to joint issues.',
    composition: 'Glucosamine Sulphate 500mg + Chondroitin Sulphate 400mg + MSM 200mg per tablet',
    indications: [
      'Arthritis',
      'Joint stiffness',
      'Age-related joint issues',
      'Hip dysplasia support',
      'Post-injury recovery'
    ],
    dosage: '1 tablet per 10kg body weight daily',
    packing: '30 tablets, 60 tablets',
    image: '/placeholder.svg'
  },
  {
    id: 'wormpet-plus',
    name: 'Wormpet Plus',
    tagline: 'Complete Deworming',
    category: 'pet',
    species: ['dog', 'cat'],
    shortDescription: 'Broad-spectrum dewormer for dogs and cats.',
    detailedDescription: 'Wormpet Plus provides complete protection against all major intestinal worms including roundworms, hookworms, whipworms, and tapeworms.',
    composition: 'Praziquantel 50mg + Pyrantel Pamoate 144mg + Febantel 150mg per tablet',
    indications: [
      'Roundworm infections',
      'Hookworm infections',
      'Tapeworm infections',
      'Whipworm infections',
      'Routine deworming'
    ],
    dosage: '1 tablet per 10kg body weight, repeat after 14 days',
    packing: '4 tablets, 20 tablets',
    image: '/placeholder.svg'
  },
  {
    id: 'cardiac-pet',
    name: 'Cardiac-Pet',
    tagline: 'Heart Health Support',
    category: 'pet',
    species: ['dog'],
    shortDescription: 'Cardiovascular support supplement for dogs.',
    detailedDescription: 'Cardiac-Pet contains essential nutrients that support heart function and cardiovascular health in dogs, especially beneficial for senior dogs.',
    composition: 'Coenzyme Q10 30mg + L-Carnitine 250mg + Taurine 500mg + Omega-3 Fatty Acids',
    indications: [
      'Heart health maintenance',
      'Congestive heart failure support',
      'Cardiovascular wellness',
      'Senior dog heart care'
    ],
    dosage: '1 capsule per 10kg body weight daily',
    packing: '30 capsules, 60 capsules',
    image: '/placeholder.svg'
  },
  // Poultry
  {
    id: 'poultry-enro',
    name: 'Poultry Enro',
    tagline: 'Poultry Antibiotic Solution',
    category: 'poultry',
    species: ['poultry'],
    shortDescription: 'Water-soluble antibiotic for poultry bacterial infections.',
    detailedDescription: 'Poultry Enro is a highly effective water-soluble antibiotic designed specifically for poultry. Easy to administer through drinking water.',
    composition: 'Enrofloxacin 10% w/v oral solution',
    indications: [
      'CRD (Chronic Respiratory Disease)',
      'Colibacillosis',
      'Salmonellosis',
      'Fowl cholera',
      'Infectious coryza'
    ],
    dosage: '1ml per 4 liters of drinking water for 3-5 days',
    packing: '100ml, 500ml, 1L',
    image: '/placeholder.svg'
  },
  {
    id: 'vitapoultry-ad3e',
    name: 'Vitapoultry AD3E',
    tagline: 'Essential Vitamin Boost',
    category: 'poultry',
    species: ['poultry'],
    shortDescription: 'Water-soluble vitamin supplement for poultry.',
    detailedDescription: 'Vitapoultry AD3E provides essential fat-soluble vitamins for optimal growth, egg production, and immunity in poultry.',
    composition: 'Vitamin A 500000 IU + Vitamin D3 100000 IU + Vitamin E 75mg per ml',
    indications: [
      'Vitamin deficiency',
      'Improved egg production',
      'Better hatchability',
      'Stress conditions',
      'Post-vaccination support'
    ],
    dosage: '1ml per 2 liters of drinking water',
    packing: '100ml, 500ml, 1L',
    image: '/placeholder.svg'
  },
  {
    id: 'coccidiostat-plus',
    name: 'Coccidiostat Plus',
    tagline: 'Coccidiosis Control',
    category: 'poultry',
    species: ['poultry'],
    shortDescription: 'Effective treatment and prevention of coccidiosis.',
    detailedDescription: 'Coccidiostat Plus provides comprehensive protection against all species of coccidia affecting poultry. Suitable for both treatment and prevention.',
    composition: 'Amprolium Hydrochloride 20% w/v',
    indications: [
      'Coccidiosis treatment',
      'Coccidiosis prevention',
      'Bloody droppings',
      'Poor growth in chicks'
    ],
    dosage: 'Treatment: 1ml per liter for 5-7 days. Prevention: 0.5ml per liter',
    packing: '100ml, 500ml, 1L',
    image: '/placeholder.svg'
  },
  {
    id: 'liver-tonic-poultry',
    name: 'Liver Tonic Poultry',
    tagline: 'Liver Health Optimizer',
    category: 'poultry',
    species: ['poultry'],
    shortDescription: 'Herbal liver tonic for improved liver function.',
    detailedDescription: 'Liver Tonic Poultry is a scientifically formulated herbal supplement that promotes liver health, detoxification, and improved feed conversion.',
    composition: 'Andrographis paniculata, Eclipta alba, Phyllanthus niruri, Boerhavia diffusa extracts',
    indications: [
      'Liver protection',
      'Mycotoxin binding',
      'Improved FCR',
      'Better growth performance',
      'Stress management'
    ],
    dosage: '1ml per liter of drinking water continuously',
    packing: '500ml, 1L, 5L',
    image: '/placeholder.svg'
  },
  {
    id: 'electrolyte-plus',
    name: 'Electrolyte Plus',
    tagline: 'Rehydration Formula',
    category: 'poultry',
    species: ['poultry'],
    shortDescription: 'Complete electrolyte solution for stress and heat conditions.',
    detailedDescription: 'Electrolyte Plus provides essential electrolytes and vitamins to combat dehydration and stress, especially during hot weather and transportation.',
    composition: 'Sodium Chloride, Potassium Chloride, Sodium Bicarbonate, Dextrose, Vitamin C, B-Complex',
    indications: [
      'Heat stress',
      'Transportation stress',
      'Dehydration',
      'Post-vaccination support',
      'During disease outbreaks'
    ],
    dosage: '1g per liter of drinking water',
    packing: '100g, 500g, 1kg',
    image: '/placeholder.svg'
  }
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return products.filter(p => p.category === category);
};

export const getProductsBySubcategory = (subcategory: LivestockSubcategory): Product[] => {
  return products.filter(p => p.subcategory === subcategory);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const subcategoryLabels: Record<LivestockSubcategory, string> = {
  'antibiotics': 'Antibiotics',
  'nsaid': 'NSAID (Pain Relief)',
  'anthelmintic': 'Anthelmintic (Dewormers)',
  'feed-supplements': 'Feed Supplements',
  'wound-healing': 'Wound Healing'
};

export const categoryLabels: Record<ProductCategory, string> = {
  'livestock': 'Livestock Care',
  'pet': 'Pet Care',
  'poultry': 'Poultry Care'
};