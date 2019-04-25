import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "transformToSpace"
})
export class TransformToSpacePipe implements PipeTransform {
  transform(value: string, caracter: string): string {
    return value.replace(caracter, " ");
  }
}
