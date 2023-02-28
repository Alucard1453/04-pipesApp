import { Pipe, PipeTransform } from "@angular/core";


//Se hace uso del decorador Pipe donde se indica el nombre, asi mismo es necesario que 
//nuestra clase implemente la clase PipeTransform
@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform{

    //Al asignar un valor por defecto en caso de no recibir un parametro, este se vuelve 
    //opcional al momento de hacer la peticion.
    transform(valor: boolean ):string {
        return (valor) ? 'si' : 'no';
    }
}