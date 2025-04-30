import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
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
  response = '';

  constructor(private http: HttpClient) {}

  sendMessage() {
    this.http.post<any>('/api/chat', { message: this.userInput })
      .subscribe(res => {
        this.response = res.choices[0].message.content;
      });
  }
}
