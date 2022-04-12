import { Product, ProductCollection } from "./models";

class ProductController {
  producto: ProductCollection;

  constructor() {
    this.producto = new ProductCollection();
  }
  processOptions(option) {
    if (option.search) {
      return this.producto.getOneById(option.search);
    } else {
      //this.producto.getAll();
      console.log("sin parametros");
    }
  }
}
export { ProductController };
