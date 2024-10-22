import { Component } from '@angular/core';
import { BlankComponent } from '../blank/blank.component';
import { SharedModule } from '../../modules/shared.module';
import { SwalServiceService } from '../../services/swal.service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

//  constructor(
//   private swal:SwalServiceService
//  ){

//   this.swal.callToast("ERP YAZILIMLARI","sistem bilgi","success");
//  }

}
