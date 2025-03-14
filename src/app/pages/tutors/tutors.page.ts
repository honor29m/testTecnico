import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { SpecialityComponent } from "../../components/speciality/speciality.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tutors',
  imports: [IonicModule, CommonModule, SpecialityComponent, RouterLink],
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
})
export class TutorsPage implements OnInit {

  public dataTutors: any[] = [];

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Tutores', url: '/tutors', icon: 'school-outline' },
    { title: 'Usuarios', url: '/users', icon: 'people-outline' },
    { title: 'Reservas', url: '/booking', icon: 'calendar-number-outline'}
  ]

  public nombreColumna: string[] = ['Id', 'First Name', 'Last Name', 'Birth Date', 'Email', 'Phone', 'Role Id', 'Status', 'Speciality'];

  public datosFiltrados: any[] = [];
  public filtro: string = '';

  constructor( private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTutors().subscribe((response) => {
      this.dataTutors = response;
      this.filtrarDatos();
    });
  }

  getColumna( dataTutors: any[]): string[] {
    if (dataTutors && dataTutors.length > 0) {
      return Object.keys(dataTutors[0]);
    }
    return[];
  }

  filtrarDatos() {
    if (this.filtro != 'Sin Filtro' ) {
      this.datosFiltrados = this.dataTutors.filter((item) => item.speciality === this.filtro);
    } else {
      this.datosFiltrados = this.dataTutors;
    }
  }

  actualizarFiltro( filtro: string ) {
    this.filtro = filtro;
    this.filtrarDatos();
  }
}
