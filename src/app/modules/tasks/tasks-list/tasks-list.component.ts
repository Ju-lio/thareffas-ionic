import { Component, OnInit } from '@angular/core';
import { ITasksList } from 'src/app/interfaces/tasks-list.interface';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  items = [] as ITasksList[];

  ngOnInit() {
    this.loadItems();
  }

  private loadItems() {
    const json = localStorage.getItem('lista');
    this.items = [];
    if (json) {
      const items = JSON.parse(json);
      this.items = items;
    }
  }

  public actionSheetButtons = [
    {
      text: 'Feito',
      data: {
        action: 'feito',
      },
    },
    {
      text: 'Não feito',
      role: 'destructive',
      data: {
        action: 'nfeito',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  logResult(ev: any, id: any) {
    switch (ev.detail.data.action) {
      case 'feito':
        this.items[id - 1].done = true;
        break;

      case 'nfeito':
        this.items[id - 1].done = false;
        break;

      default:
        break;
    }
  }

  constructor() {}
}
