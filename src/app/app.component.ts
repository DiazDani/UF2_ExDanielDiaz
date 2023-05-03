import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UF2_ExDanielDiaz';

  constructor(private http: HttpClient) { }
  profe: any;

  impartirAssig() {
    this.http.get('http://localhost:3080/profe')
      .subscribe(data => {
        this.profe= data;
      });
  }

}
