/* eslint-disable */
"use client";
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createSession } from "./graphql/mutations";
const client = generateClient();
export default function SessionCreateForm(props) {
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
    sessionId: "",
    expiresAt: "",
  };
  const [sessionId, setSessionId] = React.useState(initialValues.sessionId);
  const [expiresAt, setExpiresAt] = React.useState(initialValues.expiresAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setSessionId(initialValues.sessionId);
    setExpiresAt(initialValues.expiresAt);
    setErrors({});
  };
  const validations = {
    sessionId: [{ type: "Required" }],
    expiresAt: [{ type: "Required" }],
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
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
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
          sessionId,
          expiresAt,
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
            query: createSession.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "SessionCreateForm")}
      {...rest}
    >
      <TextField
        label="Session id"
        isRequired={true}
        isReadOnly={false}
        value={sessionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              sessionId: value,
              expiresAt,
            };
            const result = onChange(modelFields);
            value = result?.sessionId ?? value;
          }
          if (errors.sessionId?.hasError) {
            runValidationTasks("sessionId", value);
          }
          setSessionId(value);
        }}
        onBlur={() => runValidationTasks("sessionId", sessionId)}
        errorMessage={errors.sessionId?.errorMessage}
        hasError={errors.sessionId?.hasError}
        {...getOverrideProps(overrides, "sessionId")}
      ></TextField>
      <TextField
        label="Expires at"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={expiresAt && convertToLocal(new Date(expiresAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              sessionId,
              expiresAt: value,
            };
            const result = onChange(modelFields);
            value = result?.expiresAt ?? value;
          }
          if (errors.expiresAt?.hasError) {
            runValidationTasks("expiresAt", value);
          }
          setExpiresAt(value);
        }}
        onBlur={() => runValidationTasks("expiresAt", expiresAt)}
        errorMessage={errors.expiresAt?.errorMessage}
        hasError={errors.expiresAt?.hasError}
        {...getOverrideProps(overrides, "expiresAt")}
      ></TextField>
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
