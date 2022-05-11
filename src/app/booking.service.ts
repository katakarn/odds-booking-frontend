import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingDetail } from './Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private bookingUrl = "http://localhost:3001/booking"
  constructor(private httpClient: HttpClient) {
    
   }

   httpOption = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  addBooking(booking:BookingDetail): Observable<BookingDetail>{
    return this.httpClient.post<BookingDetail>(this.bookingUrl, booking, this.httpOption)
  }
}
