/**
 * Interfaz que representa un libro.
 *
 * Contiene la información básica necesaria para mostrar un libro
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada libro debe tener un `id` único, un `title` descriptivo,
 * un `author` válido, una `genre` válida, un `year` de publicación
 * y un `price` en pesos colombianos.
 *
 * @example
 * ```ts
 * const libro: Book = {
 *   id: 1,
 *   title: 'Cien años de soledad',
 *   author: 'Gabriel García Márquez',
 *   genre: 'Ficción',
 *   year: 1967,
 *   price: 45000
 * };
 * ```
 */
export interface Book {
    /** Identificador único del libro */
    id: number;

    /** Título del libro */
    title: string;

    /** Autor del libro */
    author: string;

    /** Género del libro */
    genre: BookGenre;

    /** Año de publicación del libro */
    year: number;

    /** Precio del libro en pesos */
    price: number;
}

/**
 * Tipo de género de libro.
 *
 * @remarks
 * Este tipo restringe los géneros a los valores predefinidos:
 * - 'Ficción'
 * - 'No Ficción'
 * - 'Ciencia Ficción'
 * - 'Fantasía'
 * - 'Misterio'
 *
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const genero: BookGenre = 'Ficción';
 * ```
 */
export type BookGenre = 'Ficción' | 'No Ficción' | 'Ciencia Ficción' | 'Fantasía' | 'Misterio';
