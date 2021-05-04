import { Pipe, PipeTransform } from '@angular/core';
import { Applicationdto } from '../models/applicationModels/applicationdto';

@Pipe({
  name: 'applicationfilter'
})
export class ApplicationfilterPipe implements PipeTransform {

  transform(value: Applicationdto[], filterValue:string): Applicationdto[] {
    filterValue = filterValue ? filterValue.toLocaleLowerCase() : ""
    return filterValue ? value.filter((application:Applicationdto) =>
      application.applicationName.toLocaleLowerCase().indexOf(filterValue) !== -1):value;
  }

}
