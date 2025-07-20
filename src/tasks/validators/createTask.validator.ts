import { checkSchema } from 'express-validator';

export const createTaskValidator = checkSchema({
  title: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Title is required',
    isString: true,
    isLength: {
      options: {
        max: 100,
      },
      errorMessage: 'Title cannot exceed 100 characters',
    },
    trim: true,
  },
  description: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Add a description',
    isString: true,
    trim: true,
  },
  status: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Status must be one of the specified values',
    isIn: {
      options: [['todo', 'inProgress', 'completed']],
    },
  },
  priority: {
    in: ['body'],
    notEmpty: true,
    errorMessage: 'Priority must be one of the specified values',
    isIn: {
      options: [['low', 'normal', 'high']],
    },
  },
  dueDate: {
    in: ['body'],
    errorMessage: 'Date must excist',
    isISO8601: true,
  },
});
