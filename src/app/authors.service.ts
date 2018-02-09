import { Injectable } from '@angular/core';

@Injectable()
export class AuthorsService {

  constructor() { }

  getAuthors(){
    return ["Steven King", "J.K.Rowling", "Isaac Asimov"];
  }
}
