export class Supplier {
  id: string;
  name: string;
  addressId: string;
  phone: string;
  email: string;
  website: string;

  constructor(supplier: SupplierDto) {
    this.id = supplier.id;
    this.name = supplier.name;
    this.addressId = supplier.addressId;
    this.phone = supplier.phone;
    this.website = supplier.website;
  }

  toJson(): SupplierDto {
    return {
      id: this.id,
      name: this.name,
      addressId: this.addressId,
      phone: this.phone,
      website: this.website,
    };
  }
}

export type SupplierDto = {
  id: string;
  name: string;
  addressId: string;
  phone: string;
  website: string;
};
