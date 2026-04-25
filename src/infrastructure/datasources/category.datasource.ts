import { faker } from '@faker-js/faker';
import { Category, CategoryArea } from '../../domain/models/category.model';

export class CategoryDatasource {
  private areas: CategoryArea[] = ['Technology', 'Health', 'Finance', 'Education'];

  async getAll(countCategories: number): Promise<Category[]> {
    const categories: Promise<Category>[] = [];

    for (let i = 1; i <= countCategories; i++) {
      categories.push(this.generateCategory(i));
    }

    return Promise.all(categories);
  }

  private generateCategory(id: number): Promise<Category> {
    return Promise.resolve({
      id,
      name: faker.commerce.department(),
      area: faker.helpers.arrayElement(this.areas),
    });
  }
}
