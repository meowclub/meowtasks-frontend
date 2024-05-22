import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
const API_ENDPOINTS = {
  UTIL_AVATARS: 'util/avatars',
  UTIL_COLORS: 'util/colors',
  AUTH_REGISTER: 'auth/register',
  AUTH_LOGIN: 'auth/login',
  MEOWUSER_ME: 'meowUser/me'
};

interface IApiResponse {
  meowOK: boolean;
  data: any;
  msg: string;
}

interface IRestService {
  getAvatars(): Promise<IApiResponse>;
  getColors(): Promise<IApiResponse>;
}

@Injectable({
  providedIn: 'root'
})
export class RestService  implements IRestService {
  private baseUrl: string = 'http://localhost:5269/api/'

  constructor(private http: HttpClient) {}

  // util
  getAvatars() {
    return firstValueFrom(this.http.get<IApiResponse>(this.baseUrl+API_ENDPOINTS.UTIL_AVATARS))
  }

  getColors() {
    return firstValueFrom(this.http.get<IApiResponse>(this.baseUrl+API_ENDPOINTS.UTIL_COLORS))
  }

  // auth
  register(form: any) {
    return this.http.post<IApiResponse>(this.baseUrl+API_ENDPOINTS.AUTH_REGISTER, form)
  }

  login(form: any) {
    return this.http.post<IApiResponse>(this.baseUrl+API_ENDPOINTS.AUTH_LOGIN, form)
  }

  // meowUser
  me(token: string) {
    return this.http.get<IApiResponse>(this.baseUrl+API_ENDPOINTS.MEOWUSER_ME, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
  }
}
