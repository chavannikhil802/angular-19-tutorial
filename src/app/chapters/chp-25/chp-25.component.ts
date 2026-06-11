import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chp-25',
  imports: [
    FormsModule
  ],
  templateUrl: './chp-25.component.html',
  styleUrl: './chp-25.component.css'
})
export class Chp25Component {

  task = "";
  taskList:{id: number, task: string}[] = [];

  addTask() {
    this.taskList.push({id: this.taskList.length+1, task: this.task})
    this.task = "";
  }

  deleteTask(taskId: number) {
    this.taskList = this.taskList.filter((item) => item.id != taskId);
  }
}
