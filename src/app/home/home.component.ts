import { Component } from '@angular/core';
import { GamesService } from '../games.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  productList!:any[]
  products:any[]=[];
  subTotal!:any;

  constructor(private gameService:GamesService,private router: Router) { }

  ngOnInit() {

    this.gameService.getAllGames().subscribe({


        next:(res:any)=>{
          console.log(res);
          this.productList = res;
        },
        error: (error) =>{

          alert(error)
        },
        complete: () => {
          console.log("Request Completed");
        }
    })
    this.gameService.loadCart();
    this.products = this.gameService.getProduct();

  }

  //Add Product to Cart
  addToCart(product:any){

    if(!this.gameService.productInCart(product)){

      product.quantity=1
      this.gameService.addToCart(product);
      this.products=[...this.gameService.getProduct()];
      this.subTotal = product.price

    }


  }

  // changeSubTotal(product:any, index:any){

  //   const qty = product.quantity;
  //   const amt = product.price;

  //   this.subTotal=amt*qty;

  //   this.gameService.saveCart();

  // }

  removeFromCart(product: any) {
    this.gameService.removeProduct(product);
    this.products = this.gameService.getProduct();
  }

  get total() {
    return this.products?.reduce(
      (sum, product) => ({
        quantity: 1,
        price: sum.price + product.quantity * product.price,
      }),
      { quantity: 1, price: 0 }
    ).price;
  }

  checkout() {
    localStorage.setItem('cart_total', JSON.stringify(this.total));
    this.router.navigate(['/payment']);
  }

  searchText: string = '';

  onSearchTextEntered(searchValue: string){

    this.searchText=searchValue;
    console.log(this.searchText);


  }


}
