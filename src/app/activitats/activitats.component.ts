import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-activitats',
  templateUrl: './activitats.component.html',
  styleUrls: ['./activitats.component.css']
})
export class ActivitatsComponent {
  constructor(private http: HttpClient) { }
  profe: any;
 /* modifCorreu(correuActual: string, nouCorreu: string) {
    const url = 'http://localhost:3080/modifCorreu';
    const body = { correuActual, nouCorreu };
    return this.http.post(url, body);
  }*/
  impartirAssig() {
    this.http.get('http://localhost:3080/profe')
      .subscribe(data => {
        this.profe= data;
      });
  }


}
