import mongoose from "mongoose";
import { config } from "../config/config.js";
import logger from "../config/loggers.js";
import CustomError from "./CustomError.class.js";
import DBClient from "./DBClient.class.js";
import Singleton from "./singleton.js";

class MongoDBClient extends DBClient {
  constructor() {
    super();
    this.connected = false;
    this.client = Singleton.getInstance();
  }

  async connect() {
    try {
      await this.client.connect(config.mongodb.host, config.mongodb.options);
      console.log(this.client);
      this.connected = true;

      logger.info("Base de datos conectada");
    } catch (error) {
      const objErr = new CustomError(
        500,
        "Error al conectarse a mongodb",
        error
      );
      logger.error(objErr);
      throw objErr;
    }
  }
}

export default MongoDBClient;
