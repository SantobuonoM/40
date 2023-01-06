import supertest from "supertest";
import { expect } from "chai";

/** BODY CREAR PRODUCTO **/
const bodyCreate = {
  nombre: "regla",
  descripcion: "regla larga roja",
  imagen:
    "https://img.freepik.com/vector-premium/regla-centimetrica-icono-garabato-vectorial-suministros-oficina_499739-886.jpg?w=2000",
  precio: 5000,
};

describe("prueba productos", () => {
  const request = supertest("http://localhost:8081/productos");

  /** LISTAR PRODUCTOS **/

  describe("- Listar productos", () => {
    it("debería retornar status 200", async () => {
      const response = await request.get("/");
      expect(response.status).eql(200);
    });
  });

  /** CREAR PRODUCTOS  **/

  describe("- Crear producto", () => {
    it("debería retornar status 201", async () => {
      const response = await request.post("/").send(bodyCreate);
      expect(response.status).eql(201);
    });
  });

  // /** ACTUALIZAR PRODUCTOS  **/

  describe("- Actualizar producto", () => {
    it("debería retornar status 200", async () => {
      const response = await request.put("/63b8667ec7a265cba2daf0aa").send({
        nombre: "regla",
        descripcion: "regla mediana azul",
        imagen:
          "https://imgs.search.brave.com/5w-w_v80MDIxqlFMHhUGBY-t5k0-Nx2vQKnKxFI3LHo/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/b2ZmaWNlZGVwb3Qu/Y29tLm14L21lZGlh/cy84MzQ1MS5naWYt/MTIwMGZ0dz9jb250/ZXh0PWJXRnpkR1Z5/ZkhKdmIzUjhNVEV6/T0RreGZHbHRZV2Rs/TDJwd1pXZDhhREE0/TDJoallpODVOVFU0/T1RBek1qSTJNems0/TG1wd1ozdzFaalky/T0RobE5qbG1Nemsw/WmpRME9UQTNZekl3/TkdNME1ETmtPVGN3/T1RrMU1UUXpOVFJs/TkdGbFpXRmtNVGsy/WkRka056RXhOVEl3/WkdaaU1qRTU",
        precio: 4500,
      });
      expect(response.status).eql(200);
    });
  });

  /** ELIMINAR PRODUCTOS  **/

  describe("- Eliminar producto", () => {
    it("debería retornar status 200", async () => {
      const response = await request.delete("/63a9df526a2dd365b56d17a5");
      expect(response.status).eql(200);
    });
  });
});
