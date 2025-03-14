import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { ModalController } from '@ionic/angular';
import { DetallesUsuarioComponent } from 'src/app/components/detalles-usuario/detalles-usuario.component';

@Component({
  selector: 'app-users',
  imports: [IonicModule, CommonModule, RouterLink],
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public appPages = [
    { title: 'Home', url: '/home', icon: 'home-outline' },
    { title: 'Tutores', url: '/tutors', icon: 'school-outline' },
    { title: 'Usuarios', url: '/users', icon: 'people-outline' },
    { title: 'Reservas', url: '/booking', icon: 'calendar-number-outline'}
  ];

  public dataUsers: any[] = [];
  public user: any = null;

  constructor( private apiService: ApiService, private modalController: ModalController ) { }

  ngOnInit() {
    this.apiService.getUsers().subscribe((response) => {
      this.dataUsers = response;
    });
  }

  async selectUser(user: any) {
    const modal = await this.modalController.create({
      component: DetallesUsuarioComponent,
      componentProps: {
        user: user,
      },
    });
    return await modal.present();
  }

}
