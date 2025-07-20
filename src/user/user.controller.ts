import { injectable } from 'inversify';

@injectable()
export class UserController {
  constructor() {}

  public getUser() {
    return {
      firstName: 'Alice',
      lastName: 'Doe',
      email: 'a@e.com',
    };
  }
}
