import { getAllProducts } from "@/data/loaders";
import Products from "./ProductsClient"; 

export default async function ProductsPage() {

  const productsData = await getAllProducts();
  const products = productsData.data;

  return <Products products={products} />;
}