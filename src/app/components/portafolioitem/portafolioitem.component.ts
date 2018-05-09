import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService} from '../../services/productos.service';

@Component
({
    selector: 'app-portafolioitem',
    templateUrl: './portafolioitem.component.html',
    styles: []
})

export class PortafolioitemComponent
{

    producto:any = undefined;
    cod: String = undefined;

    constructor(private route:ActivatedRoute, private _ps: ProductosService)
    {
        route.params.subscribe( parametros =>
        {
            //console.log(parametros);
            //console.log(parametros['id']);
            _ps.cargar_producto(parametros['id']).subscribe(res =>
            {
                this.cod = parametros['id'];
                this.producto = res.json();
                console.log(res.json());
            })
        })
    }
}
