import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../Models/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.css']
})
export class TaskManagerComponent implements OnInit {
  tasks: Task[] = [];
  tasksToShow: Task[] = [];
  pages: number[] = [];  // [0,1,2,3,4]
  page = 1;
  nbItemPerPage = 8;
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {

    this.taskService.getTasks().subscribe(
      (taches) => {
        this.tasks = taches['hydra:member'];
        this.tasksToShow = this.tasks.slice(0, this.nbItemPerPage);
        const nbPage = Math.ceil((taches['hydra:totalItems'] / 10));
        for (let i = 0 ; i < nbPage; i++ ) {
          this.pages[i] = i + 1;
        }
      },
      (erreurs) => console.log(erreurs)
    );
  }

  deleteTask(id) {
    // Optimiste : Supprime dans le front puis en cas
    // d'erreur je le remets
    const oldTasks = [...this.tasks];
    //this.tasks = this.tasks.filter((task) => task.id !== +id);
    this.tasks.splice(0, 1);
    this.taskService.deleteTask(id).subscribe(
      (success) => {
        alert('ok');
      },
      error => {
        this.tasks = oldTasks;
      }
    );
  }

  paginate(p: number) {
    if (+p !== this.page) {
      this.taskService.getTasks(`${p}`).subscribe(
        (taches) => {
          this.tasksToShow = taches['hydra:member'];
          this.page = p;
        }
      );
    }
  }
}
