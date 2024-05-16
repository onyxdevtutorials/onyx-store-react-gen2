/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getOrderItem } from "./graphql/queries";
import { updateOrderItem } from "./graphql/mutations";
const client = generateClient();
export default function OrderItemUpdateForm(props) {
  const {
    orderItemId: orderItemIdProp,
    orderItem: orderItemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    orderItemId: "",
    quantity: "",
  };
  const [orderItemId, setOrderItemId] = React.useState(
    initialValues.orderItemId
  );
  const [quantity, setQuantity] = React.useState(initialValues.quantity);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = orderItemRecord
      ? { ...initialValues, ...orderItemRecord }
      : initialValues;
    setOrderItemId(cleanValues.orderItemId);
    setQuantity(cleanValues.quantity);
    setErrors({});
  };
  const [orderItemRecord, setOrderItemRecord] =
    React.useState(orderItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = orderItemIdProp
        ? (
            await client.graphql({
              query: getOrderItem.replaceAll("__typename", ""),
              variables: { orderItemId: orderItemIdProp },
            })
          )?.data?.getOrderItem
        : orderItemModelProp;
      setOrderItemRecord(record);
    };
    queryData();
  }, [orderItemIdProp, orderItemModelProp]);
  React.useEffect(resetStateValues, [orderItemRecord]);
  const validations = {
    orderItemId: [{ type: "Required" }],
    quantity: [{ type: "Required" }],
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
          orderItemId,
          quantity,
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
            query: updateOrderItem.replaceAll("__typename", ""),
            variables: {
              input: {
                orderItemId: orderItemRecord.orderItemId,
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
      {...getOverrideProps(overrides, "OrderItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Order item id"
        isRequired={true}
        isReadOnly={true}
        value={orderItemId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              orderItemId: value,
              quantity,
            };
            const result = onChange(modelFields);
            value = result?.orderItemId ?? value;
          }
          if (errors.orderItemId?.hasError) {
            runValidationTasks("orderItemId", value);
          }
          setOrderItemId(value);
        }}
        onBlur={() => runValidationTasks("orderItemId", orderItemId)}
        errorMessage={errors.orderItemId?.errorMessage}
        hasError={errors.orderItemId?.hasError}
        {...getOverrideProps(overrides, "orderItemId")}
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
              orderItemId,
              quantity: value,
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
          isDisabled={!(orderItemIdProp || orderItemModelProp)}
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
              !(orderItemIdProp || orderItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
