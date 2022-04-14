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

}
