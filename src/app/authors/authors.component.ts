import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  title = "Authors Component";
  authors;

  constructor(private authorsService: AuthorsService) { 
    this.authors = this.authorsService.getAuthors();
  }

  ngOnInit() {
  }

}
