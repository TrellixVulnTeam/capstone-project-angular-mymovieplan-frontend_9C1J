import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  private baseURL = "http://3.138.54.181:8080/api/v1/cart";

  getAllMovieTicketsInCart() {
    return this.httpClient.get(`${this.baseURL}/movieTickets/all`);
  }

  addMovieTicketToCart(movieTicket: any) {
    return this.httpClient.post(`${this.baseURL}/movieTickets/add`, movieTicket);
  }

  deleteMovieTicketFromCart(id: number) {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/${id}`);
  }

  deleteAllMovieTicketsFromCart() {
    return this.httpClient.delete(`${this.baseURL}/movieTickets/delete/all`);
  }
}
