import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
  [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
  [key: string]: string;
};
export declare type Variant = {
  variantValues: VariantValues;
  overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
  hasError: boolean;
  errorMessage?: string;
};
export declare type ValidationFunction<T> = (
  value: T,
  validationResponse: ValidationResponse
) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProductCreateFormInputValues = {
  // productId?: string;
  name?: string;
  description?: string;
  price?: number;
  image?: string;
  // stripePriceId?: string;
  // stripeProductId?: string;
};
export declare type ProductCreateFormValidationValues = {
  // productId?: ValidationFunction<string>;
  name?: ValidationFunction<string>;
  description?: ValidationFunction<string>;
  price?: ValidationFunction<number>;
  image?: ValidationFunction<string>;
  // stripePriceId?: ValidationFunction<string>;
  // stripeProductId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> &
  React.DOMAttributes<HTMLDivElement>;
export declare type ProductCreateFormOverridesProps = {
  ProductCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
  productId?: PrimitiveOverrideProps<TextFieldProps>;
  name?: PrimitiveOverrideProps<TextFieldProps>;
  description?: PrimitiveOverrideProps<TextFieldProps>;
  price?: PrimitiveOverrideProps<TextFieldProps>;
  image?: PrimitiveOverrideProps<TextFieldProps>;
  stripePriceId?: PrimitiveOverrideProps<TextFieldProps>;
  stripeProductId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ProductCreateFormProps = React.PropsWithChildren<
  {
    overrides?: ProductCreateFormOverridesProps | undefined | null;
  } & {
    clearOnSuccess?: boolean;
    onSubmit?: (
      fields: ProductCreateFormInputValues
    ) => ProductCreateFormInputValues;
    onSuccess?: (fields: ProductCreateFormInputValues) => void;
    onError?: (
      fields: ProductCreateFormInputValues,
      errorMessage: string
    ) => void;
    onChange?: (
      fields: ProductCreateFormInputValues
    ) => ProductCreateFormInputValues;
    onValidate?: ProductCreateFormValidationValues;
  } & React.CSSProperties
>;
export default function ProductCreateForm(
  props: ProductCreateFormProps
): React.ReactElement;
