import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingsService } from '../listings.service';

import { Listing } from '../types';

@Component({
  selector: 'app-listings-details-page',
  templateUrl: './listings-details-page.component.html',
  styleUrls: ['./listings-details-page.component.css']
})
export class ListingsDetailsPageComponent implements OnInit {
  
  isLoading: boolean = true;

  listing: Listing;
  
  constructor(private route: ActivatedRoute,
              private listingService: ListingsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listingService.getListingById(id)
        .subscribe(listing => {
          this.listing = listing;
          this.isLoading = false;
        });

        this.listingService.addViewToListing(id)
            .subscribe(() => console.log('View updated!'));

  }

}
