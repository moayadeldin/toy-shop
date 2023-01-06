import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  products:any[]=[];

  constructor(private http:HttpClient) { }
  getAllGames(pageNumber=1):Observable<any>{
    return this.http.get(`http://localhost:3000/games`);
  }

  getProduct() {
    return this.products
  }

  saveCart(){
    localStorage.setItem('cart_items',JSON.stringify(this.products));
  }

  addToCart(addedProduct:any){

    this.products.push(addedProduct);
    this.saveCart();

  }

  loadCart(){

    this.products=JSON.parse(localStorage.getItem('cart_items') as any) || [];

  }

  productInCart(product:any){
    return this.products.findIndex((x:any)=> x.id === product.id) > -1;
  }

  removeProduct(product:any){
    const index = this.products.findIndex((x:any)=> x.id === product.id);

    if (index > -1) {
      this.products.splice(index,1);
      this.saveCart()

    }
  }

    clearProducts(){

      localStorage.clear()

    }

  }
