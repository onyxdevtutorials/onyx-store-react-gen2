import { useState } from "react";
import { useParams } from "react-router-dom";
import ProductUpdateForm from "../ui-components/ProductUpdateForm.jsx";
import { ProductUpdateFormInputValues } from "../ui-components/ProductUpdateForm.jsx";

const ProductUpdate = () => {
  const { id } = useParams<{ id: string }>();
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = (
    fields: ProductUpdateFormInputValues
  ): ProductUpdateFormInputValues => {
    console.log("fields", fields);

    return fields;
  };

  const handleSuccess = () => {
    console.log("success");
    setShowForm(false);
  };

  return (
    <>
      <h1>Product Update</h1>
      {showForm && (
        <ProductUpdateForm
          onSubmit={handleSubmit}
          onSuccess={handleSuccess}
          id={id}
        />
      )}

      {!showForm && <div>Product updated successfully!</div>}
    </>
  );
};
export default ProductUpdate;
