import { Router } from 'express';
import { GetAllCategoriesUseCase } from '../../../application/usecases/get-all-categories.usecase';
import { CategoryDatasource } from '../../datasources/category.datasource';
import { CategoryRepositoryImpl } from '../../repositories/category.repository.impl';
import { CategoriesController } from '../controllers/categories.controller';

export class CategoriesRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new CategoryRepositoryImpl(new CategoryDatasource());
    const getAllCategories = new GetAllCategoriesUseCase(repository);
    const controller = new CategoriesController(getAllCategories);

    /**
     * @openapi
     * /api/categories/{countCategories}:
     *   get:
     *     summary: Obtener listado de categorias
     *     tags:
     *       - Categories
     *     parameters:
     *       - in: path
     *         name: countCategories
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *     responses:
     *       200:
     *         description: Lista de categorias generadas
     */
    router.get('/:countCategories', controller.getAllCategories);

    return router;
  }
}
