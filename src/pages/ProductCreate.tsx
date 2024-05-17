import { useState } from "react";
import useAdminCheck from "../hooks/useAdminCheck";
import { AsyncProcessStatus } from "../types";
import ProductCreateForm from "../ui-components/ProductCreateForm.jsx";
import { ProductCreateFormInputValues } from "../ui-components/ProductCreateForm.jsx";

const ProductCreate = () => {
  const [showForm, setShowForm] = useState(true);
  const { adminCheck } = useAdminCheck();

  const handleSubmit = (
    fields: ProductCreateFormInputValues
  ): ProductCreateFormInputValues => {
    console.log("fields", fields);

    return fields;
  };

  const handleSuccess = () => {
    console.log("success");
    setShowForm(false);
  };

  if (adminCheck.status === AsyncProcessStatus.PENDING) {
    return <div>Loading...</div>;
  }

  if (
    adminCheck.status === AsyncProcessStatus.SUCCESS &&
    !adminCheck.value.isAdmin
  ) {
    return <div>You are not an admin</div>;
  }

  return (
    <div>
      <h1>Create Product</h1>
      <p>You are an admin.</p>
      {showForm && (
        <ProductCreateForm onSubmit={handleSubmit} onSuccess={handleSuccess} />
      )}

      {!showForm && <div>Product created successfully!</div>}
    </div>
  );
};
export default ProductCreate;
