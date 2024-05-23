import { useNavigate } from "react-router-dom";
import { type Schema } from "../../amplify/data/resource";
import Button from "react-bootstrap/Button";
import { generateClient } from "aws-amplify/api";
import { useState } from "react";

type Product = Schema["Product"]["type"];

interface ListProductProps {
  product: Product;
  isAdmin?: boolean;
}

const client = generateClient<Schema>({
  authMode: "userPool",
});

const ListProduct: React.FC<ListProductProps> = ({ product, isAdmin }) => {
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleUpdate = () => {
    console.log("update", product);
    navigate(`/admin/product-update/${product.id}`);
  };

  const handleDelete = async () => {
    if (
      window.confirm("Are you sure you want to delete this product?") === true
    ) {
      console.log("delete", product);
      try {
        const { data } = await client.models.Product.delete({
          id: product.id,
        });
        setIsDeleted(true);
        console.log("successfully deleted", data);
      } catch (error) {
        console.error("error", error);
      }
    }
  };

  if (isDeleted) {
    return null;
  }

  return (
    <li>
      <div>{product.name}</div>
      <div>{product.description}</div>
      <div>{product.price}</div>
      {isAdmin && (
        <div>
          <Button onClick={handleUpdate}>Edit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      )}
    </li>
  );
};
export default ListProduct;
