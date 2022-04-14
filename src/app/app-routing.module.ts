import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddProductComponent } from './composants/add-product/add-product.component';
import { HomePageComponent } from './composants/home-page/home-page.component';
import { ProductComponent } from './composants/product/product.component';

const routes: Routes = [
  { path: '', component:HomePageComponent  },
  { path: 'add-product', component:AddProductComponent  },
  { path: 'product', component:ProductComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
