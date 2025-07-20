import { checkSchema } from 'express-validator';

export const updateTaskValidator = checkSchema({
  _id: {
    in: ['body'],
    notEmpty: true,
    isMongoId: true,
    errorMessage: 'Valid document id is required',
  },
  title: {
    in: ['body'],
    optional: true,
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
    optional: true,
    errorMessage: 'Add a description',
    isString: true,
    trim: true,
  },
  status: {
    in: ['body'],
    optional: true,
    errorMessage: 'Status must be one of the specified values',
    isIn: {
      options: [['todo', 'inProgress', 'completed']],
    },
  },
  priority: {
    in: ['body'],
    optional: true,
    errorMessage: 'Priority must be one of the specified values',
    isIn: {
      options: [['low', 'normal', 'high']],
    },
  },
  dueDate: {
    in: ['body'],
    optional: true,
    errorMessage: 'Date must excist',
    isISO8601: true,
  },
});
