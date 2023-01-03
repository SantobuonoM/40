import mongoose from "mongoose";
import { config } from "../config/config.js";
import CustomError from "./CustomError.class.js";
import Singleton from "./singleton.js";

class DBClient {
  instance = null;
  constructor() {
    this.connected = false;
    this.client = mongoose.connect(config.mongodb.host, config.mongodb.options);
    //console.log(config.mongodb.host);

    this.primeraConexion = new Date().toLocaleDateString();
  }
  async connect() {
    this.instance = Singleton.getInstance();
    
    // throw new CustomError(
    //   500,
    //   "Falta implementar",
    //   "method 'connect' en Sub Clase"
    // );
  }
}

export default DBClient;
