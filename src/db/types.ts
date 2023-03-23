export type ProductAttributes = { [key: string]: string };

export type Product = {
  productHash: string;
  sku: string;
  vendorName: string;
  region: string | null;
  service: string;
  productFamily: string;
  attributes: ProductAttributes;
  prices: Price[];
  emissions: Emission[];
};

export type Price = {
  priceHash: string;
  purchaseOption: string;
  unit: string;
  USD?: string;
  CNY?: string;
  effectiveDateStart: string;
  effectiveDateEnd?: string;
  startUsageAmount?: string;
  endUsageAmount?: string;
  termLength?: string;
  termPurchaseOption?: string;
  termOfferingClass?: string;
  description?: string;
};

export type Emission = {
  emissionHash: string;
  unit: string;
  CO2e: string;
  effectiveDateStart: string;
  effectiveDateEnd?: string;
  startUsageAmount?: string;
  endUsageAmount?: string;
  description?: string;
}
