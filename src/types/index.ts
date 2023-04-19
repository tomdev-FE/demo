export type ShippingAddress = {
  country: string;
  first_name: string;
  last_name: string;
  company?: string;
  address: string;
  apartment?: string;
  city: string;
  state: string;
  zip_code: string;
  phone: string;
};

export type ShippingMethod = {
  object_created: string;
  object_id: string;
  object_owner: string;
  shipment: string;
  attributes: string[];
  amount: number;
  currency: string;
  amount_local: number;
  currency_local: string;
  provider: string;
  provider_image_75: string;
  provider_image_200: string;
  servicelevel: {
    name: string;
    token: string;
    terms: string;
    extended_token: string;
    parent_servicelevel: string | null;
  };
  estimated_days: number;
  arrives_by: string;
  duration_terms: string;
  messages: string[];
  carrier_account: string;
  test: boolean;
  zone: string | null;
  included_insurance_price: string | null;
};
