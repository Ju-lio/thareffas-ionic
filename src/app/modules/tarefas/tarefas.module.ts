import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefasComponent } from './tarefas.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TarefasRoutingModule } from './tarefas-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TarefasComponent],
  imports: [CommonModule, TarefasRoutingModule, RouterModule, ComponentsModule],
})
export class TarefasModule {}
