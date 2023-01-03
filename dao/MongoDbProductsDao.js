import Singleton from "../classes/singleton.js";
import ContenedorMongoDB from "../container/MongoDbContainer.js";
import ProductoModel from "../models/productos.model.js";
let instance = [];
class ProductoDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(ProductoModel);
    this.instancia = Singleton.getInstance()
  }
}

export default ProductoDAOMongoDB;
