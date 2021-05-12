import { OfertasService } from './../../services/ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vistadetalle',
  templateUrl: './vistadetalle.component.html',
  styleUrls: ['./vistadetalle.component.css']
})
export class VistadetalleComponent implements OnInit, OnDestroy {

  public sub: any;
  public detalle: Oferta;

  constructor(
    private ofertasService: OfertasService,
    private router: Router,
    private route: ActivatedRoute
  ){

    this.detalle = this.ofertasService.getDetalleListaOfertas();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngOnInit(): void {

    this.sub = this.ofertasService.getDetalleOfertasSub().subscribe(
      (response: Oferta) => {
        this.detalle = response;
      },
      error => {
        console.log(error);
    }
    );

  }

  public getDetalleOfertas(id: number): void{
    console.log('Click' + id);

    this.ofertasService.getDetalleOfertas(id);

  }
}
