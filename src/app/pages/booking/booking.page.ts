import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-booking',
  imports: [IonicModule, CommonModule, FormsModule, RouterLink],
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
})
export class BookingPage implements OnInit {

  dataBookings: any[] = [];
  filteredBookings:  any[] = [];
  filtrarUsuario: string = '';
  usuarios: any[] =[];

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Tutores', url: '/tutors', icon: 'school-outline' },
    { title: 'Usuarios', url: '/users', icon: 'people-outline' },
    { title: 'Reservas', url: '/booking', icon: 'calendar-number-outline'}
  ];

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getBooking().subscribe((response) => {
      this.dataBookings = response;
      this.filteredBookings = response;
      this.usuarios = [...new Set(response.map((booking: { user: any; }) => booking.user))];
    });
  }

  filterBookings () {
    if ( this.filtrarUsuario ) {
      this.filteredBookings = this.dataBookings.filter((booking) => booking.user === this.filtrarUsuario );
    } else {
      this.filteredBookings = this.dataBookings;
    }
  }

}
