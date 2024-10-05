import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../todo';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Input() task!: Task; // Input from parent component
  @Output() markComplete = new EventEmitter<void>(); // Output to parent component
  @Output() delete = new EventEmitter<void>(); // Output to parent component
  @Output() edit = new EventEmitter<string>(); // Output to parent component

  isEditing: boolean = false;
  editedTitle: string = '';

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.editedTitle = this.task.title; // Set edited title to current task title
  }

  completeTask() {
    this.markComplete.emit(); // Emit event to parent
  }

  deleteTask() {
    this.delete.emit(); // Emit event to parent
  }

  saveEdit() {
    this.edit.emit(this.editedTitle); // Emit edited title to parent
    this.toggleEdit(); // Exit editing mode
  }

}
