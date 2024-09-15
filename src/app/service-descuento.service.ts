import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceDescuentoService {
    public descuento: number = 0;
  constructor() { }
}
