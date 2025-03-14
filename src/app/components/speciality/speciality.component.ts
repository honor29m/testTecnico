import { CommonModule } from '@angular/common';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-speciality',
  imports: [IonicModule, CommonModule],
  templateUrl: './speciality.component.html',
  styleUrls: ['./speciality.component.scss'],
})
export class SpecialityComponent  implements OnInit {

  filtros: any[] = ['Sin Filtro'];
  @Output() filtroCambio = new EventEmitter<string>()

  constructor( private apiService: ApiService ) { }

  ngOnInit() {
    this.apiService.getTutors().subscribe((response) => {
      this.filtros = [...this.filtros, ...new Set(response.map((item: any) => item.speciality))];
    })
  }

  filtrar(filtro: string) {
    this.filtroCambio.emit(filtro)
  }
}
