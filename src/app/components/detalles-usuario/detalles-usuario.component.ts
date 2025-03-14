import { Component, OnInit, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalles-usuario',
  imports: [IonicModule],
  templateUrl: './detalles-usuario.component.html',
  styleUrls: ['./detalles-usuario.component.scss'],
})
export class DetallesUsuarioComponent  implements OnInit {

  @Input() user: any;

  constructor( private modalController: ModalController ) { }

  ngOnInit() {}

  cerrarModal() {
    this.modalController.dismiss();
  }
}
