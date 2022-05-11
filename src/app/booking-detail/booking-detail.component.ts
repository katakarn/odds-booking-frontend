import { Component, Input, OnInit } from '@angular/core';
import { BookingDetail } from '../Booking';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.css']
})
export class BookingDetailComponent implements OnInit {

  @Input()
  bookingDetail : BookingDetail = {
    name: '',
    email: '',
    phoneNumber: '',
    room: '',
    reason: '',
    startDate: '',
    endDate: '',
    status: false
  }

  constructor( private bookingService : BookingService ) { }

  ngOnInit(): void {
  }

  addBooking() {
    this.bookingDetail.startDate = this.bookingDetail.startDate.replace('T'," ")+":00"
    this.bookingDetail.endDate = this.bookingDetail.endDate.replace('T'," ")+":00"
    console.log(this.bookingDetail)
    this.bookingService.addBooking(this.bookingDetail).subscribe(
      booking => console.log(booking)
    )
    this.clearData()
  }

  clearData(){
    this.bookingDetail.name = ''
    this.bookingDetail.email = ''
    this.bookingDetail.phoneNumber = ''
    this.bookingDetail.room = ''
    this.bookingDetail.reason = ''
    this.bookingDetail.startDate =''
    this.bookingDetail.endDate = ''
    this.bookingDetail.status = false

  }
}
