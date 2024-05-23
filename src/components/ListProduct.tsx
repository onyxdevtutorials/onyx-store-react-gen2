import { useNavigate } from "react-router-dom";
import { type Schema } from "../../amplify/data/resource";
import Button from "react-bootstrap/Button";

type Product = Schema["Product"]["type"];

interface ListProductProps {
  product: Product;
  isAdmin?: boolean;
}

const ListProduct: React.FC<ListProductProps> = ({ product, isAdmin }) => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    console.log("update", product);
    navigate(`/admin/product-update/${product.id}`);
  };

  return (
    <li>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      {isAdmin && (
        <div>
          <Button onClick={handleUpdate}>Edit</Button>
          <Button>Delete</Button>
        </div>
      )}
    </li>
  );
};
export default ListProduct;
