import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any;
  afficher: boolean = false;
  constructor(private ps: ProduitsService) { }
  edit_product = {
    title: "",
    description: "",
    image: "",
    price: 0,
    available: false
  }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.ps.getProducts().subscribe(data => {
      this.products = data;
      console.log(this.products);
    })
  }

  deleteProduct(id: any) {
    // console.log(id)
    this.ps.deleteProduct(id).subscribe(() => {
      this.getProducts();
      this.afficher = true;
    }
    );
  }

  changeAvailability(produit: any) {
    this.ps.disponible(produit).subscribe(() => {
      this.getProducts();
      console.log("change disponibilité");
    });
  }

  searchByPrice(price_prod: any) {
    let data = price_prod.value
    this.ps.searchByPriceService(data).subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });
  }

  searchByWord(word_prod: any) {
    let data = word_prod.value
    this.ps.searchByWordService(data).subscribe(data => {
      this.products = data;
      // console.log(this.products);
    });
  }

  editProduct(formData: any) {
    this.edit_product = formData;
    console.log(this.edit_product);
  }

  updateProduct() {
    // console.log(this.edit_product);
    this.ps.updateProductService(this.edit_product).subscribe(() => {
      console.log("Coucou Mamie !")
    });
  }

}
