import { Category } from '../../domain/models/category.model';
import { CategoryRepository } from '../../domain/repositories/category.repository';

export class GetAllCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(countCategories: number): Promise<Category[]> {
    return this.categoryRepository.getAll(countCategories);
  }
}
