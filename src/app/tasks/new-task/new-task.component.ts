import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/Task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Input({required:true}) userId! : string ;
  @Output() close = new EventEmitter<void>();
 // @Output() add = new EventEmitter<NewTaskData>();
  
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  private tasksService = inject(TasksService)

  onCancel(){
    this.close.emit();
  }

  onSubmit(){
  this.tasksService.AddTasks({
    title: this.enteredTitle,
    summary: this.enteredSummary,
    date: this.enteredDate
  }, this.userId );

this.close.emit();

}

}