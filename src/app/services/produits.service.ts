import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductComponent } from '../composants/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products");
  }

  deleteProduct(id: any) {
    return this.http.delete("http://localhost:3000/products/" + id);
  }

  // La méthode post a besoin de 2 paramètres : le lien et l'argument
  addNewProduct(productForm: any) {
    return this.http.post("http://localhost:3000/products", productForm);
  }

  disponible(product: any) {
    let available = product.available;
    return this.http.patch("http://localhost:3000/products/" + product.id, {available: !available});
  }

  searchByPriceService(data: any){
    let price_min = data.price_min;
    let price_max = data.price_max;
    return this.http.get("http://localhost:3000/products?price_gte=" + price_min + "&price_lte="+ price_max);
  }
  searchByWordService(data: any){
    let word_search = data.word_search;
    return this.http.get("http://localhost:3000/products?q=" + word_search);
  }

  updateProductService(formData: any){
    return this.http.patch("http://localhost:3000/products/"+ formData.id, formData);
  }





}
