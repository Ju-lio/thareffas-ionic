import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TasksRoutingModule } from './tasks-routing.module';
import { RouterModule } from '@angular/router';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TasksActionsComponent } from './tasks-actions/tasks-actions.component';

@NgModule({
  declarations: [TasksComponent, TasksListComponent, TasksActionsComponent],
  imports: [CommonModule, TasksRoutingModule, RouterModule, ComponentsModule],
})
export class TasksModule {}
