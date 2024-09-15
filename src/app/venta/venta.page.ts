import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceDescuentoService } from '../service-descuento.service';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.page.html',
  styleUrls: ['./venta.page.scss'],
})
export class VentaPage implements OnInit {

  constructor(private alertController: AlertController, private descuentoService: ServiceDescuentoService, private toastController: ToastController) {
   }
  funciones = [
    'Deadpool & Wolverine',
    'Orgullo y Prejuicio',
    'Deseando Amar',
    'Expiación',
    'There Will Be Blood',
    'Las ventajas de ser invisible',
    'El viaje de Chihiro',
    'La Sirenita',
    'La Cenicienta [Live Action]',
    'Interstellar',
    'Spider-Man: No Way Home'
  ];
  venta!: number;
  funcion!: string;
  sala!: number;
  precio!: number;
  descuento!: number;
  fecha!: string;
  toastMensaje: string = 'Por favor rellene todos los campos'
  entrada!: number;

  ngOnInit() {
    this.descuento = this.descuentoService.descuento;
    console.log('Descuento en ngOnInit:', this.descuento);
  }

  seleccionarSala(sala:String){{
    switch(sala){
      case '4DX':
        this.precio = 6500;
        break;
      case '3D':
        this.precio = 2000;
        break;
      case 'D-BOX':
        this.precio = 10000;
        break;  
      case '2D':
        this.precio = 1000;
        break;
      default: 
      this.precio = 0;
    }
  }
}
async rechazarCompra() {
  const rechazo = await this.toastController.create({
    message: this.toastMensaje,
    duration: 3000,
    position: 'bottom',
    color: 'danger'
  });
  await rechazo.present();
}

async finalizarCompra() {
  const final = await this.alertController.create({
    header: 'Gracias por su compra',
    message: 
      `¡Hemos enviado un correo con los detalles de su compra a su correo electronico asociado!
        Muchas gracias por preferirnos`,
    buttons: ['Genial!']
  });
  await final.present();
}
  finalizar(){
    if(this.funcion == null || this.sala == null || this.fecha == null){
      this.rechazarCompra();
    }else{
      this.finalizarCompra();
    }
  }
}
