import { OfertasService } from './../../services/ofertas.service';
import { LoginService } from './../../services/login.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminofertas',
  templateUrl: './adminofertas.component.html',
  styleUrls: ['./adminofertas.component.css']
})
export class AdminofertasComponent implements OnInit, OnDestroy {

  public ofertas: Array<Oferta>;
  private sub: any;
  private subLogin: any;

  constructor(
    private loginService: LoginService,
    private ofertaService: OfertasService,
    private router: Router
  ) {
    if (!this.loginService.getIslogin) {
      this.router.navigate(['login']);
    }
    this.ofertas = this.ofertaService.getListaOfertas();
  }
  ngOnDestroy(): void {
    this.subLogin.unsubscribe();
    this.sub.unsubscribe();
  }

  ngOnInit(): void {
    this.sub = this.ofertaService.getOfertasSub().subscribe(
      (response: Array<Oferta>) => {
        this.ofertas = response;
        console.log('ngOnInit');
      },
      error => {
        console.log(error);
      }
    );

    this.subLogin = this.loginService.getIsloginSub().subscribe(
      (response: boolean) => {
        if (response === false) {
          this.router.navigate(['login']);
        }
      },
      error => {
        console.log(error);
      }
    );

    this.ofertaService.getOfertas();
  }

  public deleteOferta(id: number): void {

    this.ofertaService.deleteOferta(id);
  }

}
