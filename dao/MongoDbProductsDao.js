import CustomError from "../classes/CustomError.class.js";
import Singleton from "../classes/singleton.js";
import ContenedorMongoDB from "../container/MongoDbContainer.js";
import { asDto } from "../dtos/ProductDto.js";
import ProductoModel from "../models/productos.model.js";
import { asPOJO, renameField, removeField } from "../utils/objectUtils.js";

let instance = [];
class ProductoDAOMongoDB extends ContenedorMongoDB {
  constructor() {
    super(ProductoModel);
    this.instancia = Singleton.getInstance();
  }
  async listar(id) {
    // try {
    //   this.conn.connect();

    //   const docs = await this.coleccion.find({ _id: id }, { __v: 0 });
    //   if (docs.length == 0) {
    //     throw new CustomError(500, "listar by id", "empty result.");
    //   } else {
    //     const result = renameField(asPOJO(docs[0]), "_id", "id");
    //     return asDto(result);
    //   }
    // } catch (error) {
    //   const cuserr = new CustomError(500, "Error al listarbyId()", error);
    //   logger.error(cuserr);
    //   throw asDto(cuserr);
    // }
    try {
      const resFind = await this.coleccion.findOne({ _id: id });
      return resFind;
    } catch (e) {
      console.log(e);
    }
  }

  async listarAll() {
    // try {
    //   this.conn.connect();

    //   let docs = await this.coleccion.find({});
    //   console.log(docs)
    //  return asDto(docs);
    // } catch (error) {
    //   const cuserr = new CustomError(500, "Error al listarAll()", error);
    //   logger.error(cuserr);
    //   throw asDto(cuserr);
    // }
    try {
      const productList = await this.coleccion.find();
      return productList;
    } catch (error) {
      const cuserr = new CustomError(500, "Error al listarAll()", error);
      logger.error(cuserr);
      throw cuserr;
    }
  }

  async guardar(nuevoElem) {
    // try {
    //   let doc = await this.coleccion.create(nuevoElem);
    //   doc = asPOJO(doc);
    //   renameField(doc, "_id", "id");
    //   removeField(doc, "__v");
    //   return asDto(doc);
    // } catch (error) {
    //   throw new CustomError(500, "Error al guardar", error);
    // }
    try {
      this.conn.connect();

      const resCreate = await this.coleccion.create(nuevoElem);
      console.log(resCreate);
      return resCreate;
    } catch (e) {
      console.log(e);
    }
  }

  async actualizar(id, object) {
    try {
      const resUpdate = await this.coleccion.findOneAndUpdate(
        { _id: id },
        object
      );
      console.log("Este producto con este ID:"+ resUpdate._id+ "fue actualizado: ");
      return resUpdate;
    } catch (e) {
      console.log(e);
    }
  }

  async borrar(id) {
    try {
      const resDelete = await this.coleccion.findByIdAndRemove({ _id: id });
      console.log("El producto con el ID:"+id+" fue eliminado")
      return resDelete;
    } catch (error) {
      throw new CustomError(500, "Error al borrar", error);
    }
  }

  async borrarAll() {
    try {
      await this.coleccion.deleteMany({});
    } catch (error) {
      throw new CustomError(500, "Error al borrar todo", error);
    }
  }
}

export default ProductoDAOMongoDB;
