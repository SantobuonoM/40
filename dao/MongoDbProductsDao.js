import ContenedorMongoDB from "../container/MongoDbContainer.js";
import ProductoModel from "../models/productos.model.js";
let instance = [];
class ProductoDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(ProductoModel);
  }
  static getInstance() {
    if (!instance) {
      instance = new ProductoDAOMongoDB();
    }

    return instance;
  }
}

export default ProductoDAOMongoDB;
