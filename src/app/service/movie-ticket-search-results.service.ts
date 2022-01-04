import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieTicketSearchResultsService {

  private baseURL = "http://localhost:8080/api/v1/movieTicketSearchResults";

  constructor(private httpClient: HttpClient) { }

  getMovieTicketByMovieName() {
    return this.httpClient.get(`${this.baseURL}/movieTicket/search/results/all`);
  }

  createMovieTicketSearchResult(movieName: string) {
    return this.httpClient.post(`${this.baseURL}/movieTicket/search/results/add`, movieName);
  }

  deleteAllMovieTicketSearchResults() {
    return this.httpClient.delete(`${this.baseURL}/movieTicket/search/results/delete/all`);
  }
}
