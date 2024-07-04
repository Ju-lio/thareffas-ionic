import { Component, OnInit } from '@angular/core';

import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { IAction, IUserData } from '../interfaces/user-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items = [
           {
            id: 1,
            tarefa: 'Lavar os legumes',
            feito: false
           },
           {
            id: 2,
            tarefa: 'Limpar a caixa',
            feito: false
           },
           {
            id: 3,
            tarefa: 'Estudar',
            feito: false
           },
          ];

  ngOnInit() {
    this.loadItems();
  }

  private loadItems() {
    // this.items = this.getItems();
  }

  private getItems() {
    const item = localStorage.getItem('dadosDoUsuario');
    return item ? JSON.parse(item) : null;
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

  constructor() {}

  logResult(ev: any, id: any) {
    switch (ev.detail.data.action) {
      case 'feito':
        this.items[id-1].feito = true;
        break;
        
      case 'nfeito':
        this.items[id-1].feito = false;
        break;
        
      default:
        break;
    }
  }
}