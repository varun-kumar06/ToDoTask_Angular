import { Component } from '@angular/core';

interface Task{
  id: number;
  title: string;
  completed: boolean;

}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  tasks: Task[] = [];
  newTaskTitle: string = '';

  addTask() {
    if (this.newTaskTitle.trim()) {
      const newTask: Task = {
        id: this.tasks.length + 1,
        title: this.newTaskTitle,
        completed: false,
      };
      this.tasks.push(newTask);
      this.newTaskTitle = '';
    }
  }

  markComplete(id: number) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.completed = true;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  editTask(id: number, newTitle: string) {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.title = newTitle;
    }
  }
}