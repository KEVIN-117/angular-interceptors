import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  public page = 1;
  public limit = 3;
  constructor() { }

  nextPage() {
    this.page++;
    console.log(this.page)
  }

  previousPage() {
    if (this.page >= 1) {
      this.page--;
    }
  }

  reset() {
    this.page = 0;
  }


}
