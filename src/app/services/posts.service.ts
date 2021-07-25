import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient
  ) { }


  headers = new HttpHeaders().set('app-id', '60fc9818f567bc5e67bf3958');
  baseUrl: string = environment.baseURL

	getPosts() {
		return this.http.get(`${this.baseUrl}/post`, { 'headers': this.headers } );
  }

  getPost(id: number) {
		return this.http.get(`${this.baseUrl}/post/${id}`);
  }
}
