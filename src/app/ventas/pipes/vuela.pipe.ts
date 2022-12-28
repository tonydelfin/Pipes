import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: "vuelaPipe"
})

export class vuelaPipe implements PipeTransform{

    transform( valor: boolean): string {
        return valor ? "vuela" : "no vuela"
    }

    // transform( valor: string, enMayusculas: boolean = true): string {
        // return (enMayusculas) ? valor.toUpperCase() : valor.toLowerCase();

}