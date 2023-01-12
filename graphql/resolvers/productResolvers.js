import ProductoDAOMongoDB from "../../dao/MongoDbProductsDao.js";
let ContenedorMongo = new ProductoDAOMongoDB();

export async function listarProductos() {
  return await ContenedorMongo.listarAll({});
}
export async function crearProducto({ datos }) {
  return await ContenedorMongo.guardar(datos);
}
export async function obtenerProducto({ id }) {
  return await ContenedorMongo.listar(id);
}
export async function updateProducto({ id, datos }) {
  return await ContenedorMongo.actualizar(id, datos);
}
export async function deleteProducto({ id }) {
  return await ContenedorMongo.borrar(id);
}
