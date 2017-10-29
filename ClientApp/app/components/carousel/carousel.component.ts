import { Component, Input, OnChanges, Inject,  } from '@angular/core'; 
import { Http } from '@angular/http'; 
import {TitleRow} from '../hidive/hidive.component'; 
 
@Component({ 
    selector: 'carousel-component', 
    templateUrl: './carousel.component.html',
    styles: [`
    .carousel{
    }
    .slides{
    }
    .slickslide{
      height:100%;
    }
    .slick-prev, .slick-next {
      color:red !important;
      height: 100%;
    }
    `] 
}) 
export class CarouselComponent implements OnChanges { 
  @Input() arr:Array<any>; 
  items:Array<any> = [];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 5, "dots": true, "arrows":true, "lazyLoad": 'ondemand'};
  constructor(){ 
  } 
  ngOnChanges(){
    this.items=this.arr;
    console.log(this.items, 'this items after view checked');
  }
 
 
} 
 