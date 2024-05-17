/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createProduct } from "./graphql/mutations";
const client = generateClient();
export default function ProductCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    productId: "",
    name: "",
    description: "",
    price: "",
    image: "",
    stripePriceId: "",
    stripeProductId: "",
  };
  const [productId, setProductId] = React.useState(initialValues.productId);
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [image, setImage] = React.useState(initialValues.image);
  const [stripePriceId, setStripePriceId] = React.useState(
    initialValues.stripePriceId
  );
  const [stripeProductId, setStripeProductId] = React.useState(
    initialValues.stripeProductId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setProductId(initialValues.productId);
    setName(initialValues.name);
    setDescription(initialValues.description);
    setPrice(initialValues.price);
    setImage(initialValues.image);
    setStripePriceId(initialValues.stripePriceId);
    setStripeProductId(initialValues.stripeProductId);
    setErrors({});
  };
  const validations = {
    // productId: [{ type: "Required" }],
    name: [{ type: "Required" }],
    description: [],
    price: [{ type: "Required" }],
    image: [],
    stripePriceId: [],
    stripeProductId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          // productId,
          name,
          description,
          price,
          image,
          stripePriceId,
          stripeProductId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createProduct.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProductCreateForm")}
      {...rest}
    >
      {/* <TextField
        label="Product id"
        isRequired={true}
        isReadOnly={false}
        value={productId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId: value,
              name,
              description,
              price,
              image,
              stripePriceId,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.productId ?? value;
          }
          if (errors.productId?.hasError) {
            runValidationTasks("productId", value);
          }
          setProductId(value);
        }}
        onBlur={() => runValidationTasks("productId", productId)}
        errorMessage={errors.productId?.errorMessage}
        hasError={errors.productId?.hasError}
        {...getOverrideProps(overrides, "productId")}
      ></TextField> */}
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId,
              name: value,
              description,
              price,
              image,
              stripePriceId,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId,
              name,
              description: value,
              price,
              image,
              stripePriceId,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              productId,
              name,
              description,
              price: value,
              image,
              stripePriceId,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId,
              name,
              description,
              price,
              image: value,
              stripePriceId,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      {/* <TextField
        label="Stripe price id"
        isRequired={false}
        isReadOnly={false}
        value={stripePriceId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId,
              name,
              description,
              price,
              image,
              stripePriceId: value,
              stripeProductId,
            };
            const result = onChange(modelFields);
            value = result?.stripePriceId ?? value;
          }
          if (errors.stripePriceId?.hasError) {
            runValidationTasks("stripePriceId", value);
          }
          setStripePriceId(value);
        }}
        onBlur={() => runValidationTasks("stripePriceId", stripePriceId)}
        errorMessage={errors.stripePriceId?.errorMessage}
        hasError={errors.stripePriceId?.hasError}
        {...getOverrideProps(overrides, "stripePriceId")}
      ></TextField>
      <TextField
        label="Stripe product id"
        isRequired={false}
        isReadOnly={false}
        value={stripeProductId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              productId,
              name,
              description,
              price,
              image,
              stripePriceId,
              stripeProductId: value,
            };
            const result = onChange(modelFields);
            value = result?.stripeProductId ?? value;
          }
          if (errors.stripeProductId?.hasError) {
            runValidationTasks("stripeProductId", value);
          }
          setStripeProductId(value);
        }}
        onBlur={() => runValidationTasks("stripeProductId", stripeProductId)}
        errorMessage={errors.stripeProductId?.errorMessage}
        hasError={errors.stripeProductId?.hasError}
        {...getOverrideProps(overrides, "stripeProductId")}
      ></TextField> */}
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
