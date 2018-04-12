import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';

import {OfferServiceService} from '../offer-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  offers = [];
  searchPhrase = "";

  constructor(private service:OfferServiceService) { }

  ngOnInit() {

    this.service.getOffers().subscribe(offers => {
      console.log(offers);
      this.offers = offers;
    });

  }

  searchOffer($event){
      let desired = this.searchPhrase.replace(/[^\w\s]/gi, '')
      console.log(desired);
      this.service.searchOffer(desired).subscribe(offers =>{
          console.log(offers);
          this.offers = offers;
      });
  }

}
