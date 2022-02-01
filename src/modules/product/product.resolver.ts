import { IResolver } from "./product.type";

class ProductResolver implements IResolver {
  editProduct(id?: string | null): (string | null) | Promise<string | null> {
    throw new Error("Method not implemented.");
  }

  public async getProduct(id?: string | null) {
    return "product";
  }

  public async createProduct(id?: string | null) {
    return "product";
  }
}

export default ProductResolver;
