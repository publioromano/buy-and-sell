import { Component, OnInit } from '@angular/core';
import { fakeListings, fakeMyListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[] = [];


  constructor() { }

  ngOnInit(): void {
    this.listings = fakeListings;
  }

  onDeleteClicked(listingId: string): void{
    alert(`Deleteing your listing with id ${listingId}!`);
  }

}
