/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 *
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 *
 *     Book:
 *       type: object
 *       description: Representa un libro del sistema
 *       required:
 *         - id
 *         - title
 *         - author
 *         - genre
 *         - year
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         title:
 *           type: string
 *           example: Cien anios de soledad
 *         author:
 *           type: string
 *           example: Gabriel Garcia Marquez
 *         genre:
 *           type: string
 *           enum:
 *             - Ficcion
 *             - No Ficcion
 *             - Ciencia Ficcion
 *             - Fantasia
 *             - Misterio
 *           example: Ficcion
 *         year:
 *           type: number
 *           example: 1967
 *         price:
 *           type: number
 *           example: 45000
 */
export {};