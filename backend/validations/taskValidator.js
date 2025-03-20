import { body } from 'express-validator';

export default [
  body('title')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('El titulo de la tarea es obligatorio.'),
  body('description')
    .trim()
    .notEmpty()
    .bail()
    .withMessage('La descripcion de la tarea es obligatorio.')
];