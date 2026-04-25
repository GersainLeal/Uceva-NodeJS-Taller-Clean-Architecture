import { faker } from '@faker-js/faker';
import { Book, BookGenre } from "../../domain/models/book.model";

/**
 * Datasource encargado de generar libros simulados.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * una **fuente de datos (Datasource)**.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información falsa de libros.
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No implementa repositorios del dominio.
 *
 * Es consumida por `BookRepositoryImpl`, que se encarga
 * de adaptar los datos al dominio y exponerlos mediante
 * el contrato `BookRepository`.
 */
export class BookDatasource {

    /**
     * Géneros disponibles para los libros simulados.
     *
     * @remarks
     * Se utiliza para asignar un género aleatorio
     * a cada libro generado.
     */
    private genres: BookGenre[] = [
        'Ficción',
        'No Ficción',
        'Ciencia Ficción',
        'Fantasía',
        'Misterio'
    ];

    /**
     * Obtiene una lista de libros simulados.
     *
     * @remarks
     * Genera dinámicamente una cantidad determinada de libros
     * utilizando datos aleatorios.
     *
     * @param countBooks - Cantidad de libros a generar
     * @returns Promesa que resuelve un arreglo de {@link Book}
     *
     * @example
     * ```ts
     * const datasource = new BookDatasource();
     * const books = await datasource.getAll(10);
     * ```
     */
    async getAll(countBooks: number): Promise<Book[]> {
        const books: Promise<Book>[] = [];

        for (let i = 1; i <= countBooks; i++) {
        books.push(this.generateBook(i));
        }

        return Promise.all(books);
    }


    /**
     * Genera un libro individual con datos simulados.
     *
     * @remarks
     * Este método es interno y no debe ser utilizado
     * fuera del datasource.
     *
     * @param id - Identificador único del libro
     * @returns Promesa que resuelve un {@link Book}
     */
    private generateBook(id: number): Promise<Book> {
        return Promise.resolve({
        id,
        title: faker.book.title(),
        author: faker.book.author(),
        genre: faker.helpers.arrayElement(this.genres),
        year: faker.number.int({ min: 1900, max: 2024 }),
        price: Number(
            faker.commerce.price({ min: 10000, max: 100000, dec: 0 })
        ),
        });
    }

}
