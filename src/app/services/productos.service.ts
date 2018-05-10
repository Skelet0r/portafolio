import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService
{

    productos: any[] = [];
    productos_filtrados: any[] = [];
    cargando = true;

    constructor(public http: Http)
    {

        this.cargar_productos();
    }

    public buscar_producto(termino: String)
    {
        if(this.productos.length == 0)
        {
            this.cargar_productos().then(()=>
            {
                this.filtrar_productos(termino);
            });
        }
        else
        {
            this.filtrar_productos(termino);
        }


    }

    private filtrar_productos(termino: String)
    {

        this.productos_filtrados = [];
        termino = termino.toLowerCase();

        this.productos.forEach(prod =>
        {
            if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0)
            {
                this.productos_filtrados.push(prod);
                console.log(prod);
            }
            //console.log(prod);
        })
    }

    public cargar_producto(cod: String)
    {
        return this.http.get(`https://paginaweb-22f7b.firebaseio.com/productos/${cod}.json`)
    }

    public cargar_productos()
    {
        this.cargando = true;

        //Promesa para el callback.
        let promesa = new Promise((resolve) =>
        {
            this.http.get('https://paginaweb-22f7b.firebaseio.com/productos_idx.json').subscribe(res =>
            {
                //console.log(res.json());

                setTimeout(() =>
                {
                    this.cargando = false;
                    this.productos = res.json();
                    resolve();
                }, 1500)
            });
        });

        return promesa;
    }
}
