import { Component, OnInit } from '@angular/core'; 
import { Http } from '@angular/http'; 
import { ConfigurationService } from '../../services/configuration.service';

 
@Component({ 
  selector: 'hidive', 
  templateUrl: './hidive.component.html', 
  styleUrls: ['./hidive.component.css'] 
}) 
export class HidiveComponent implements OnInit { 
 
  public TitleRows: TitleRow[]; 
 
  constructor(http: Http, configurations: ConfigurationService){ 
    let storage; 
    http.get(configurations.baseUrl + '/api/hidive').subscribe(result => { 
	  this.TitleRows = result.json() as TitleRow[];
      console.log(this.TitleRows); 
    }, error => console.error(error)); 
  } 
 
  ngOnInit() { 
  } 
 
} 
export interface TitleRow { 
  Name: string; 
  Titles: object[]; 
 
} 
