import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalServiceService } from './swal.service.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorServiceService {

  constructor(
    private swal :SwalServiceService
  ) { }



  errorHandler(err:HttpErrorResponse){
    console.log(err);
    if(err.status == 403) {
      let errorMessages = "";
      for(const e of err.error.ErrorMessages){
        errorMessages += e + "\n";
      }



      this.swal.callToast(errorMessages,"","error");
    }else if(err.status == 500){
      this.swal.callToast(err.error.errorMessages[0],"","error")
    }
  }
}
