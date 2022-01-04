import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieTicketSearchResultsService } from 'src/app/service/movie-ticket-search-results.service';
import { MovieTicketService } from 'src/app/service/movie-ticket.service';

@Component({
  selector: 'app-movie-ticket-search-results',
  templateUrl: './movie-ticket-search-results.component.html',
  styleUrls: ['./movie-ticket-search-results.component.css']
})
export class MovieTicketSearchResultsComponent implements OnInit {

  public movieTickets: any;
  public movieTicket: any;
  constructor(private movieTicketService: MovieTicketService,
    private movieTicketSearchResultsService: MovieTicketSearchResultsService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieTicket();
    this.getMovieTickets();
    this.deleteMovieTicket();
  }

  getMovieTicket() {
    this.movieTicketSearchResultsService.getMovieTicketByMovieName().subscribe(data => {
      this.movieTicket = data;
    });
  }

  getMovieTickets() {
    this.movieTicketService.getMovieTicketByMovieName(this.movieTicket).subscribe(data => {
      this.movieTickets = data;
    });
  }

  deleteMovieTicket() {
    this.movieTicketSearchResultsService.deleteAllMovieTicketSearchResults().subscribe(data => {
      console.log(data);
    });
  }

  goBackToSearchPage() {
    this.router.navigate(['/movie-ticket-search']);
  }

  addMovieToCart() {
    this.router.navigate(['/user-add-movie-ticket-to-cart']);
  }

  goToCart() {
    this.router.navigate(['/user-cart']);
  }
}
