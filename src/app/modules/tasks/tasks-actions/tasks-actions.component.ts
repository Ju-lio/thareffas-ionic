import { OverlayEventDetail } from '@ionic/core/components';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { IonInput, IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tasks-actions',
  templateUrl: './tasks-actions.component.html',
  styleUrls: ['./tasks-actions.component.scss'],
})
export class TasksActionsComponent implements AfterViewInit {
  constructor() {}

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

      // items.push({
      //   id: this.items.length + 1,
      //   tarefa: this.name ? this.name : '',
      //   feito: false,
      // });

      this.name = '';

      if (items) {
        localStorage.setItem('lista', JSON.stringify(items));
      }

      // this.loadItems();
    }
  }

  clearItems() {
    localStorage.setItem('lista', '');
    // this.loadItems();
  }
}
