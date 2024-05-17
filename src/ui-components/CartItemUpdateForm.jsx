/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getCartItem } from "./graphql/queries";
import { updateCartItem } from "./graphql/mutations";
const client = generateClient();
export default function CartItemUpdateForm(props) {
  const {
    cartItemId: cartItemIdProp,
    cartItem: cartItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cartItemId: "",
    quantity: "",
    owner: "",
  };
  const [cartItemId, setCartItemId] = React.useState(initialValues.cartItemId);
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [owner, setOwner] = React.useState(initialValues.owner);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cartItemRecord
      ? { ...initialValues, ...cartItemRecord }
      : initialValues;
    setCartItemId(cleanValues.cartItemId);
    setQuantity(cleanValues.quantity);
    setOwner(cleanValues.owner);
    setErrors({});
  };
  const [cartItemRecord, setCartItemRecord] = React.useState(cartItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = cartItemIdProp
        ? (
            await client.graphql({
              query: getCartItem.replaceAll("__typename", ""),
              variables: { cartItemId: cartItemIdProp },
            })
          )?.data?.getCartItem
        : cartItemModelProp;
      setCartItemRecord(record);
    };
    queryData();
  }, [cartItemIdProp, cartItemModelProp]);
  React.useEffect(resetStateValues, [cartItemRecord]);
  const validations = {
    cartItemId: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
    owner: [],
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
          cartItemId,
          quantity,
          owner: owner ?? null,
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
            query: updateCartItem.replaceAll("__typename", ""),
            variables: {
              input: {
                cartItemId: cartItemRecord.cartItemId,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CartItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cart item id"
        isRequired={true}
        isReadOnly={true}
        value={cartItemId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItemId: value,
              quantity,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.cartItemId ?? value;
          }
          if (errors.cartItemId?.hasError) {
            runValidationTasks("cartItemId", value);
          }
          setCartItemId(value);
        }}
        onBlur={() => runValidationTasks("cartItemId", cartItemId)}
        errorMessage={errors.cartItemId?.errorMessage}
        hasError={errors.cartItemId?.hasError}
        {...getOverrideProps(overrides, "cartItemId")}
      ></TextField>
      <TextField
        label="Quantity"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={quantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              cartItemId,
              quantity: value,
              owner,
            };
            const result = onChange(modelFields);
            value = result?.quantity ?? value;
          }
          if (errors.quantity?.hasError) {
            runValidationTasks("quantity", value);
          }
          setQuantity(value);
        }}
        onBlur={() => runValidationTasks("quantity", quantity)}
        errorMessage={errors.quantity?.errorMessage}
        hasError={errors.quantity?.hasError}
        {...getOverrideProps(overrides, "quantity")}
      ></TextField>
      <TextField
        label="Owner"
        isRequired={false}
        isReadOnly={false}
        value={owner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cartItemId,
              quantity,
              owner: value,
            };
            const result = onChange(modelFields);
            value = result?.owner ?? value;
          }
          if (errors.owner?.hasError) {
            runValidationTasks("owner", value);
          }
          setOwner(value);
        }}
        onBlur={() => runValidationTasks("owner", owner)}
        errorMessage={errors.owner?.errorMessage}
        hasError={errors.owner?.hasError}
        {...getOverrideProps(overrides, "owner")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(cartItemIdProp || cartItemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(cartItemIdProp || cartItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
