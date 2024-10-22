import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../contants';
import { ResultModel } from '../models/result.model';
import { AuthServiceService } from './auth.service.service';
import { ErrorServiceService } from './error.service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private http: HttpClient,
    private auth: AuthServiceService,
    private error: ErrorServiceService
  ) { }

  post<T>(apiUrl: string, body: any, callback: (res: T) => void, errorCallback?: () => void) {
    const token = this.auth.token;

    // Token kontrolü ekliyoruz
    if (!token) {
      console.error("Token is missing!");
      if (errorCallback) {
        errorCallback();
      }
      return;
    }

    this.http.post<ResultModel<T>>(`${api}/${apiUrl}`, body, {
      headers: {
        "Authorization": `Bearer ${token}`,  // Authorization başlığı doğru şekilde gönderiliyor
         'Content-Type': 'application/json'
      }
    }).subscribe({
      next: (res) => {
        if (res.data) {
          callback(res.data); // Eğer res.data varsa callback'i çağırıyoruz
        } else {
          console.warn("Response does not contain data.");
        }
      },
      error: (err: HttpErrorResponse) => {
        this.error.errorHandler(err); // Hata işleyici çalıştırılıyor
        if (errorCallback) {
          errorCallback();  // Opsiyonel olarak errorCallback çağırılıyor
        } else {
          console.error("An error occurred:", err);  // Hata loglanıyor
        }
      }
    });
  }

}
