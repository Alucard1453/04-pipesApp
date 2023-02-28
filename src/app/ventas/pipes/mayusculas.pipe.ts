import { Pipe, PipeTransform } from "@angular/core";


//Se hace uso del decorador Pipe donde se indica el nombre, asi mismo es necesario que 
//nuestra clase implemente la clase PipeTransform
@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{

    //Al asignar un valor por defecto en caso de no recibir un parametro, este se vuelve 
    //opcional al momento de hacer la peticion.
    transform(valor: string, enMayusculas: boolean = true):string {
        // if(enMayusculas){
        //     return valor.toUpperCase();
        // }else{
        //     return valor.toLowerCase();
        // }

        return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();
    }
}