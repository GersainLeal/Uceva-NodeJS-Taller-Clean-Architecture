import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';
import { CategoryDatasource } from '../datasources/category.datasource';

export class CategoryRepositoryImpl extends CategoryRepository {
  constructor(private datasource: CategoryDatasource) {
    super();
  }

  getAll(countCategories: number): Promise<Category[]> {
    return this.datasource.getAll(countCategories);
  }
}
