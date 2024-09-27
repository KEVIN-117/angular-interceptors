import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharacterDto, ResponseDto} from "../../types";
import {environment} from "../../../environments/environment.development";
import {PaginationService} from "./pagination.service";

@Injectable({
  providedIn: 'root'
})
export class DragonballService {
  private pagination: PaginationService;
  constructor(private http: HttpClient, pagination:PaginationService) {
    this.pagination = pagination;
  }

  getCharacters(limit: number, page: number): Observable<ResponseDto> {
    // https://dragonball-api.com/api/characters?page=0&limit=3
    return this.http.get<ResponseDto>(`${environment.api}?page=${page}&limit=${limit}`)
  }
}
