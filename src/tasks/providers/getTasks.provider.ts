import { inject, injectable } from 'inversify';
import { TaskService } from '../tasks.service';
import { ITaskPagination } from '../interfaces/taskPagination.interface';
import { ITask } from '../task.interface';

@injectable()
export class GetTasksProvider {
  constructor(@inject(TaskService) private taskService: TaskService) {}
  public async findAllTasks(pagination: Partial<ITaskPagination>) {
    const tasks: ITask[] = await this.taskService.findActive({
      limit: pagination.limit ?? 10,
      page: pagination.page ?? 1,
      order: pagination.order ?? 'asc',
    });
  }
}
