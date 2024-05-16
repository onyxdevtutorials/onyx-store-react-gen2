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
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CartItemCreateFormInputValues = {
    cartItemId?: string;
    quantity?: number;
    owner?: string;
};
export declare type CartItemCreateFormValidationValues = {
    cartItemId?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartItemCreateFormOverridesProps = {
    CartItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cartItemId?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartItemCreateFormProps = React.PropsWithChildren<{
    overrides?: CartItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CartItemCreateFormInputValues) => CartItemCreateFormInputValues;
    onSuccess?: (fields: CartItemCreateFormInputValues) => void;
    onError?: (fields: CartItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartItemCreateFormInputValues) => CartItemCreateFormInputValues;
    onValidate?: CartItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function CartItemCreateForm(props: CartItemCreateFormProps): React.ReactElement;
