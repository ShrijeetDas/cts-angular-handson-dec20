import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'result'
})
export class ResultPipe implements PipeTransform {

  transform(value: number, args : any){
    if (args > 60){
        return "First Class";
    }
    else if(args <60 && args> 33){
      return "Pass";
    }
    else
      return "Fail";
    }
   
  }


