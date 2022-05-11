import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { QueryOptions } from 'src/app/core/models';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
})
export class PaginatorComponent implements OnInit {

  @Input() total = 0;
  @Input() isDisabled = false;
  @Output() perPage = 50;
  @Output() paginationOptions = new EventEmitter<QueryOptions>();

  constructor() { }

  ngOnInit(): void { }

  handlePagination(event: PageEvent) {
    this.paginationOptions.emit({
      limit: event.pageSize,
      offset: event.pageIndex === 0 ? event.pageIndex : event.pageSize * event.pageIndex
    });
  }
}
