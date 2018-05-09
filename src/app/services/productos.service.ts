import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService
{

    productos: any[] = [];
    cargando = true;

    constructor(public http: Http)
    {

        this.cargar_productos();
    }

    public cargar_producto(cod: String)
    {
        return this.http.get(`https://paginaweb-22f7b.firebaseio.com/productos/${cod}.json`)
    }

    public cargar_productos()
    {
        this.cargando = true;
        this.http.get('https://paginaweb-22f7b.firebaseio.com/productos_idx.json').subscribe(res =>
        {
            //console.log(res.json());

            setTimeout(() =>
            {
                this.cargando = false;
                this.productos = res.json();
            }, 1500)
        });
    }
}
