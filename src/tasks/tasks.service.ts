import { injectable } from 'inversify';
import { Task } from './task.schema';
import { Model } from 'mongoose';
import { ITask } from './task.interface';

@injectable()
export class TaskService {
  private taskModel: Model<ITask> = Task;

  public async createTask(taskData: ITask) {
    return await new this.taskModel(taskData).save();
  }

  public async findById(_id: string) {
    return await this.taskModel.findById(_id);
  }

  public async findAll() {
    return await this.taskModel.find();
  }
}
