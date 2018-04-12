import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class OfferServiceService {

  constructor(private http: Http) {
    console.log('Offer service Initialized...');
   }


   getOffers(){
     return this.http.get('http://localhost:3000/offer')
        .map(res => res.json());
   }

   searchOffer(phrase){
      return this.http.get('http://localhost:3000/offer/'+phrase)
        .map(res => res.json());
   }

}
