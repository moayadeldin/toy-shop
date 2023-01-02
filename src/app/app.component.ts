import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Toy Shop Project';
  toysData=[

    {
    title:'PlayStation5',
    Brand:'Sony',
    Price:18000,
    img:"https://cdn.vox-cdn.com/thumbor/YDX2_jc6LlEumMk5eggV1ygGBm8=/0x0:1076x599/1200x628/filters:focal(538x300:539x301)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030737/xWZMNYm.png",
    Discount:"10%",
    isVisible:true
  },
  {
    title:'PlayStation4',
    Brand:'Sony',
    Price:10000,
    img:"https://gmedia.playstation.com/is/image/SIEPDC/ps4-product-thumbnail-01-en-14sep21?$facebook$",
    Discount:"10%",
    isVisible:true
  },
  {
    title:'PlayStation3',
    Brand:'Sony',
    Price:4000,
    img:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Sony-PlayStation-3-2001A-wController-L.jpg",
    Discount:"10%",
    isVisible:true
  },
  {
    title:'XBOX Series X',
    Brand:'Microsoft',
    Price:18000,
    img:"https://m.media-amazon.com/images/I/515tLyCgdXL.jpg",
    Discount:"10%",
    isVisible:true
  }
  ]
  isDisabled=true;

  printtoconsole():void{

    console.log('Button Pressed');

  }

  toggleDiscount(toytitle:string):void{
    this.toysData.filter(function(toy){

      if(toy.title==toytitle){
        toy.isVisible = !toy.isVisible
      }


    })
    //this.toy.isVisible = !this.toy.isVisible;

  }
}
