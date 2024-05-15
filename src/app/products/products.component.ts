import { Component } from '@angular/core';
import { HttpService } from '../shared/http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  public productList!:any[];
  public filteredList!:any[]

  public category!:any;

  public minPrice!:any;
  public maxPrice!:any

  constructor(private service:HttpService, public route:ActivatedRoute) {



    this.service.getAllProducts().subscribe(response => {
      this.productList = response;
      this.filteredList = this.productList.filter(product => product.category == this.category.info)
      console.log(this.category);
      console.log(this.productList);
      console.log(this.filteredList);

      if (this.filteredList.length == 0) {
        this.filteredList = this.productList
      }


    });

    this.route.queryParams.subscribe(item => this.category = item);


    

  }

  filter() {

    this.filteredList = this.productList.filter(product => product.price >= this.minPrice && product.price <= this.maxPrice)


  }


}
