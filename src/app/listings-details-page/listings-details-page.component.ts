import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-listings-details-page',
  templateUrl: './listings-details-page.component.html',
  styleUrls: ['./listings-details-page.component.css']
})
export class ListingsDetailsPageComponent implements OnInit {
  listing: Listing;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id);
  }

}
