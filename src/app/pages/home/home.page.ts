import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  imports: [IonicModule, RouterLink, CommonModule ],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Tutores', url: '/tutors', icon: 'school-outline' },
    { title: 'Usuarios', url: '/users', icon: 'people-outline' },
    { title: 'Reservas', url: '/booking', icon: 'calendar-number-outline'}
  ]

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    
  }

}
