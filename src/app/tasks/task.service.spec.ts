import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TaskService } from './task.service';
import { Task } from '../models/task.model';

describe('TaskService', () => {
  let service: TaskService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TaskService]
    });
    service = TestBed.inject(TaskService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch tasks', () => {
    const dummyTasks: Task[] = [
      { id: 1, name: 'Tarea 1', status: 'pendiente', projectId: 1 },
      { id: 2, name: 'Tarea 2', status: 'completada', projectId: 1 },
    ];

    service.getTasks().subscribe(tasks => {
      expect(tasks.length).toBe(2);
      expect(tasks).toEqual(dummyTasks);
    });

    const request = httpMock.expectOne('api/tasks');
    expect(request.request.method).toBe('GET');
    request.flush(dummyTasks);
  });

  afterEach(() => {
    httpMock.verify(); 
  });
});
