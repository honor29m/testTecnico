import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-classes',
  imports: [IonicModule],
  templateUrl: './classes.page.html',
  styleUrls: ['./classes.page.scss'],
})
export class ClassesPage implements OnInit {

  dataBooking: any;

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getBooking().subscribe((response) => {
      this.dataBooking = response;
    });
  }

}
