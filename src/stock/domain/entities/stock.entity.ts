import { v4 as uuid } from 'uuid';

export class Stock {
  id: string;
  name: string;
  price: number;
  quantity: number;
  supplierId: string;

  constructor({ create, load }: { create?: StockCreateDto; load?: StockDto }) {
    if (create) {
      this.create(create);
    } else if (load) {
      this.load(load);
    }
  }

  create(stock: StockCreateDto) {
    console.log('stock', stock);
    this.id = uuid();
    this.name = stock.name;
    this.price = stock.price;
    this.quantity = stock.quantity;
    this.supplierId = stock.supplierId;
  }

  load(stock: StockDto) {
    this.id = stock.id;
    this.name = stock.name;
    this.price = stock.price;
    this.quantity = stock.quantity;
    this.supplierId = stock.supplierId;
  }

  addQuantity(quantity: number) {
    this.quantity += quantity;
  }

  subtractQuantity(quantity: number) {
    this.quantity -= quantity;
  }

  toJson(): StockDto {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      supplierId: this.supplierId,
    };
  }
}

export type StockDto = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  supplierId: string;
};

export type StockCreateDto = {
  name: string;
  quantity: number;
  supplierId: string;
  price: number;
};
