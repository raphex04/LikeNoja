import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'Nike Dunk "Pull Tabs"', price: 1299.99, image_url: './dunkPretin.webp', description: 'The insole are confortable so you can'},
    {id: 2, name: 'Nike Dunk Green', price: 854.99, image_url: './DunkVerde.webp', description: 'The insole are confortable so you can'},
    {id: 3, name: 'Nike Dunk Marrom', price: 999.99, image_url: './DunkMarrom.webp', description: 'The insole are confortable so you can'}
  ];
  
  getProducts(): Iproducts[]{
    return this.products;
  }
}
