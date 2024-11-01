import { Injectable } from '@angular/core';
import Swal  from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SwalServiceService {

  constructor() { }



  callToast(title:string,text:string,icon:SweetAlertIcon){
    Swal.fire({
        title: title,
        text: text,
        timer:3000,
        showConfirmButton:false,
        toast:true,
        position:'bottom-right',
        icon:icon
    })
  }



  callSwal(title:string,text:string,callBack:()=>void,confirmButtonText:string,icon:SweetAlertIcon){
    Swal.fire({
      title:title,
      text:text,
      showConfirmButton:true,
      showCancelButton:true,
      confirmButtonText:confirmButtonText,
      cancelButtonText:"Vazgeç",
      icon:icon

    }).then(res=>{
      if(res.isConfirmed){
          callBack();
      }
    })
  }

}


export type SweetAlertIcon = 'success' | 'error' | 'warning' | 'info' | 'question'
