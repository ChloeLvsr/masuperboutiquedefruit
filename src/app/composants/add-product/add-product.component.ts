import { Component, OnInit } from '@angular/core';
import { ProduitsService } from 'src/app/services/produits.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private ps: ProduitsService) { }

  ngOnInit(): void {
  }

  // Methode d'enregistrement des produits 
  Save_prod(produit: any) {
    let data = produit.value
    this.ps.addNewProduct(data).subscribe( data =>{
      console.log("sauvegardé avec succès!")
    });
  }
}
