import { OfertasService } from '../../services/ofertas.service';
import { Oferta } from './../../models/oferta';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: Array<Oferta>;
  private sub: any;

  constructor(
    private ofertasService: OfertasService,
    private router: Router) {

    this.ofertas = this.ofertasService.getListaOfertas();
   }

  ngOnInit(): void {

    this.sub = this.ofertasService.getOfertasSub().subscribe(
      (response: Array<Oferta>) => {
        this.ofertas = response;
      },
      error => {
        console.log(error);
    }
    );

    this.ofertasService.getOfertas();

  }

  public getDetalleOfertas(id: number): void{

    this.ofertasService.getDetalleOfertas(id);

  }

  public irADetalle(id: any): void{
      this.router.navigate(['/detalle', id]);
      this.ofertasService.getDetalleOfertas(id);
  }

}
