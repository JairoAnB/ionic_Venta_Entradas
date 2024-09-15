import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { ServiceDescuentoService } from '../service-descuento.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombre!: string;
  apellido!: string;
  edad!: number;
  correo!: string;
  descuento!: number;
  toastMensaje: string = 'Por favor rellene todos los campos'
  constructor(private alertController: AlertController, private router: Router, private DescuentoService: ServiceDescuentoService, private toastController: ToastController) {}

  navegatetoVenta(){
    this.router.navigate(['/venta']);
  }

  async rechazarValidacion(){
    console.log('Rechazo');
    const rechazo2 = await this.toastController.create({
      message: this.toastMensaje,
      duration: 3000,
      position: 'bottom',
      color: 'danger'
    });
    await rechazo2.present();
  }

  darDescuento(){
    this.descuento = this.DescuentoService.descuento;
  }

  async mostrarDatos() {
    const alert = await this.alertController.create({
      header: 'Ingresado satisfactoriamente',
      message: `Bienvenido ${this.nombre}, tienes un descuento por tu edad de un ${this.descuento}%`,
      buttons: ['Genial!']
    })
    await alert.present();
  }

  validar(){
    if(this.nombre == null || this.apellido == null || this.edad == null || this.correo === null){
      this.rechazarValidacion();
    }
    else{
      this.mostrarDatos();
      this.navegatetoVenta();
    }
  }

  verificacionEdad(event: any){
    const edadIngresada = event.target.value;
    if(edadIngresada >= 60){
      this.descuento = 50;
    }else if(edadIngresada >= 18){ 
      this.descuento = 20;
    }else{
      this.descuento = 10;
    }
    this.DescuentoService.descuento = this.descuento;
  }
}



