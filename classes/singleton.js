import DBClient from "./DBClient.class.js";
class Singleton {
  // Almacena la única instancia de la clase
  static instance = null;

  // Proporciona el punto de acceso global a la instancia única
  static getInstance() {
    if (!this.instance) {
        this.instance = new DBClient();
    }
    return this.instance;
  }
}

export default Singleton;
