import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component
({
    selector: 'app-portafolioitem',
    templateUrl: './portafolioitem.component.html',
    styles: []
})

export class PortafolioitemComponent
{
    constructor(private route:ActivatedRoute)
    {
        route.params.subscribe( parametros =>
        {
            console.log(parametros);
            console.log(parametros['id']);
        })
    }
}
