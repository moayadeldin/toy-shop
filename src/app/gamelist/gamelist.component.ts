import { Component } from '@angular/core';
import { IGame } from './game';
@Component({
  selector: 'app-gamelist',
  templateUrl: './gamelist.component.html',
  styleUrls: ['./gamelist.component.css']
})
export class GamelistComponent {
  isDisabled=true;
  private _searchvalue:string='';
  toysData:IGame[]=[

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

  filteredGames:IGame[]=this.toysData;

get searchValue():string {

  return this._searchvalue;

}

set searchValue(value:string){
  console.log(value);
  this._searchvalue=value;
  this.filteredGames = this.performSearch(value)

}

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

  performSearch(val:string):IGame[]{
    return this.toysData.filter((toy)=>
    toy.title.toLocaleLowerCase().includes(val)
    )
  }

}
