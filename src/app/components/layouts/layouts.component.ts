import { Menus } from './../../menu';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthServiceService } from '../../services/auth.service.service';


@Component({
  selector: 'app-layouts',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layouts.component.html',
  styleUrl: './layouts.component.css'
})
export class LayoutsComponent {


}
