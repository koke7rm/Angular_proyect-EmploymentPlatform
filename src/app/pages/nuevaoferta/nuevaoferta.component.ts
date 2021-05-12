import { Oferta } from './../../models/oferta';
import { OfertasService } from './../../services/ofertas.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nuevaoferta',
  templateUrl: './nuevaoferta.component.html',
  styleUrls: ['./nuevaoferta.component.css'],
})
export class NuevaofertaComponent implements OnInit {
  private sub: any;
  private subLogin: any;
  public ofertaModel: Oferta;

  constructor(
    private loginService: LoginService,
    private ofertaService: OfertasService,
    private router: Router
  ) {
    this.ofertaModel = new Oferta();

    if (!this.loginService.getIslogin) {
      this.router.navigate(['login']);
    }
  }

  ngOnInit(): void {
    this.subLogin = this.loginService.getIsloginSub().subscribe(
      (response: boolean) => {
        if (response === false) {
          this.router.navigate(['login']);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  /* Metodo del envio del registro */
  public envioRegistro(): void {

    if (this.ofertaModel.titulo.length > 100) {

      this.ofertaModel.validarTitulo = true;
      console.log('Error en campo titulo');

    } else {
      this.ofertaModel.validarTitulo = false;
    }

    if (this.ofertaModel.descripcion.length > 300) {

      this.ofertaModel.validarDescripcion = true;
      console.log('Error en campo descripción');

    } else {
      this.ofertaModel.validarDescripcion = false;
    }

    if (this.ofertaModel.empresa.length > 50) {

      this.ofertaModel.validarEmpresa = true;
      console.log('Error en campo empresa');

    } else {
      this.ofertaModel.validarEmpresa = false;
    }

    if (this.ofertaModel.ciudad.length > 50) {

      this.ofertaModel.validarCiudad = true;
      console.log('Error en campo ciudad');

    } else {
      this.ofertaModel.validarCiudad = false;
    }

    if (this.ofertaModel.email.length > 50 ||
       !this.ofertaModel.email.includes('@')) {

      this.ofertaModel.validarCorreo = true;
      console.log('Error en campo email');

    } else {
      this.ofertaModel.validarCorreo = false;
    }

    if (this.ofertaModel.salario <= 0) {

      this.ofertaModel.validarSalario = true;
      console.log('Error en campo salario');

    } else {
      this.ofertaModel.validarSalario = false;
    }

  }

  public onSubmit(f: NgForm): any {
    if (
      this.ofertaModel.validarTitulo === true ||
      this.ofertaModel.validarEmpresa === true ||
      this.ofertaModel.validarCiudad === true ||
      this.ofertaModel.validarCorreo === true ||
      this.ofertaModel.validarDescripcion === true ||
      this.ofertaModel.validarSalario === true
    ) {
      return console.log('Error al enviar datos, uno o más campos incorrectos');

    } else {
      this.ofertaService.nuevaOferta(this.ofertaModel);
      this.router.navigate(['adminofertas']);
      console.log('Oferta que envio al service: ' + JSON.stringify(this.ofertaModel));
    }
  }
}
