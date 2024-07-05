import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IonInput, IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { IUserData } from 'src/app/interfaces/user-data.interface';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.scss'],
})
export class TarefasComponent implements OnInit, AfterViewInit {
  items = [] as IUserData[];

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

  constructor() {}

  logResult(ev: any, id: any) {
    switch (ev.detail.data.action) {
      case 'feito':
        this.items[id - 1].feito = true;
        break;

      case 'nfeito':
        this.items[id - 1].feito = false;
        break;

      default:
        break;
    }
  }

  @ViewChild('edit', { static: true }) editInput!: IonInput;

  ngAfterViewInit() {
    setTimeout(() => {
      if (this.editInput) {
        this.editInput.setFocus(); // Use setFocus() para dar foco ao IonInput
      }
    }, 5000); // Atraso opcional para garantir que o elemento esteja pronto
  }

  @ViewChild(IonModal) modal?: IonModal;

  name: string = '';
  id: string = '';

  cancel() {
    this.modal?.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal?.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      const json = localStorage.getItem('lista');
      let items = [];

      if (json) {
        items = JSON.parse(json);
      } else {
        items = [];
      }

      items.push({
        id: this.items.length + 1,
        tarefa: this.name ? this.name : '',
        feito: false,
      });

      this.name = '';

      if (items) {
        localStorage.setItem('lista', JSON.stringify(items));
      }

      this.loadItems();
    }
  }

  clearItems() {
    localStorage.setItem('lista', '');
    this.loadItems();
  }
}
