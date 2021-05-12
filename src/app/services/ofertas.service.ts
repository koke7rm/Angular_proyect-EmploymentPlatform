import { LoginService } from './login.service';
import { Oferta } from '../models/oferta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';


@Injectable()
export class OfertasService {

    private ofertas: Array<Oferta>;
    private ofertas$: Subject<Array<Oferta>>;

    private detalle: Oferta;
    private detalle$: Subject<Oferta>;

    private nueva: Oferta;
    private nueva$: Subject<Oferta>;


    constructor(
        private httpClient: HttpClient,
        private loginService: LoginService) {

        this.ofertas = new Array<Oferta>();
        this.ofertas$ = new Subject<Array<Oferta>>();

        this.detalle = new Oferta();
        this.detalle$ = new Subject<Oferta>();

        this.nueva = new Oferta();
        this.nueva$ = new Subject<Oferta>();
    }

    public getOfertasSub(): Observable<any> {
        return this.ofertas$.asObservable();
    }

    public getListaOfertas(): Array<Oferta> {
        return this.ofertas;
    }

    public getDetalleOfertasSub(): Observable<any> {
        return this.detalle$.asObservable();
    }

    public getDetalleListaOfertas(): Oferta {
        return this.detalle;
    }


    public getOfertas(): void {
        this.httpClient.get('http://localhost:8080/api/ofertas').subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.ofertas = response;
                this.ofertas$.next(this.ofertas);
            },
            error => {
                console.log(error);

            }
        );
    }


    public getDetalleOfertas(id: number): void {
        this.httpClient.get('http://localhost:8080/api/ofertas/' + id).subscribe(
            (response: any) => {
                console.log(JSON.stringify(response));
                this.detalle = response;
                this.detalle$.next(this.detalle);
            },
            error => {
                console.log(error);

            }
        );
    }

    public deleteOferta(id: number): any {
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken()
                }
            )
        };

        this.httpClient.delete('http://localhost:8080/api/ofertas/' + id, httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getOfertas();
            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }

    public nuevaOferta(nueva: Oferta): void {
        console.log('oferta que recibe el service: ' + JSON.stringify(nueva));
        const httpOptions = {
            headers: new HttpHeaders(
                {
                    Authorization: 'Bearer ' + this.loginService.getToken(),
                    'Content-Type': 'application/json'
                }
            )
        };

        this.httpClient.post('http://localhost:8080/api/ofertas', JSON.stringify(nueva), httpOptions).subscribe(
            (response: any) => {
                console.log(response);
                this.getOfertas();
                this.nueva = nueva;
                this.nueva = response;

            },
            error => {
                console.log(error);
                this.loginService.logout();
            }
        );
    }

}
