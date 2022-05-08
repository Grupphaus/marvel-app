import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  favorites = 0;
  
  constructor(private _storage: StorageService) {
    this._storage.eventCallback$.subscribe(length => this.favorites = length);
  }

  ngOnInit(): void {
  }

}
