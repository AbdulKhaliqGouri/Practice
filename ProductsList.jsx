import { ProductItem } from "./ProductItem";
import { products } from "../services/products";

export const ProductsList = () => {
  console.log(products);
  return (
    <div>
      <h1>Products List</h1>
      {products.map((item) => (
        <ProductItem
          title={item.title}
          price={item.price}
          cat={item.cat}
          desc={item.desc}
          url={item.url}
        />
      ))}
    </div>
  );
};
