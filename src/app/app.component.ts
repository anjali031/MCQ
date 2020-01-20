import { Component } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mcq';
  private apiUrl = 'http://harshraj.pythonanywhere.com/user/api/get-question/?format=json';
  data: any = {};

  constructor(private http: HttpClient) {
    console.log('hello fellow user');
    this.getContacts();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getContacts() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
