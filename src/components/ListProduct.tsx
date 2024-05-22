import { type Schema } from "../../amplify/data/resource";

type Product = Schema["Product"]["type"];

interface ListProductProps {
  product: Product;
}

const ListProduct: React.FC<ListProductProps> = ({ product }) => {
  return (
    <li>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
    </li>
  );
};
export default ListProduct;
