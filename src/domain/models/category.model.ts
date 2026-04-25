export interface Category {
  id: number;
  name: string;
  area: CategoryArea;
}

export type CategoryArea = 'Technology' | 'Health' | 'Finance' | 'Education';
