import { Component } from '@angular/core';
import {CharactersComponent} from "../../components/characters/characters.component";
import {DragonballService} from "../../core/services/dragonball.service";
import {CharacterDto, ResponseDto} from "../../types";
import {catchError, EMPTY, Observable, tap} from "rxjs";
import {calculateThresholds} from "@angular-devkit/build-angular/src/utils/bundle-calculator";
import {PaginationService} from "../../core/services/pagination.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CharactersComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public characters!: CharacterDto[];
  public page: number = 1;
  public limit: number = 3;
  constructor(private service: DragonballService, private pagination: PaginationService) {
  }

  ngOnInit() {
    this.service.getCharacters(this.pagination.limit, this.pagination.page).pipe(
      tap((characters) => {
        this.characters = characters.items;
      }),
      catchError((error) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe()
  }

  changeNextPage() {
    this.page = this.pagination.page;
    this.pagination.nextPage();
    this.service.getCharacters(this.pagination.limit, this.pagination.page).pipe(
      tap((characters) => {
        this.characters = characters.items;
      }),
      catchError((error) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe()
  }

  changePreviousPage() {
    this.page = this.pagination.page;
    this.pagination.previousPage();
    this.service.getCharacters(this.pagination.limit, this.pagination.page).pipe(
      tap((characters) => {
        this.characters = characters.items;
      }),
      catchError((error) => {
        console.error(error);
        return EMPTY;
      })
    ).subscribe()
  }

}
