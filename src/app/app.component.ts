import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'chatgpt-poc';
  userInput = '';
  userContext = '';
  response = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    this.http.post<any>('https://astrobackend-production-a7c8.up.railway.app/api/chat', 
      { message: this.userInput, context: this.userContext },
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    )
      .subscribe(res => {
        this.response = res.choices[0].message.content;
      });
  }
}