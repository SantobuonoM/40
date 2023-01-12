import { buildSchema } from "graphql";

export const productGQLSchema = new buildSchema(`
input ProductoInput{
  nombre: String,
  descripcion: String,
  imagen: String,
  precio: Int,
}
type Producto{
  _id: ID!,
  nombre: String,
  descripcion: String,
  imagen: String,
  precio: Int,
}
type Query{
  listarProductos: [Producto]
  obtenerProducto(id:ID!) : Producto
}
type Mutation{
  crearProducto(datos:ProductoInput) : Producto
  updateProducto(id:ID!,datos:ProductoInput):Producto
  deleteProducto(id:ID!):Producto
}`);
 