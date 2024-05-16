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
export declare type OrderItemCreateFormInputValues = {
    orderItemId?: string;
    quantity?: number;
};
export declare type OrderItemCreateFormValidationValues = {
    orderItemId?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderItemCreateFormOverridesProps = {
    OrderItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderItemId?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderItemCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderItemCreateFormInputValues) => OrderItemCreateFormInputValues;
    onSuccess?: (fields: OrderItemCreateFormInputValues) => void;
    onError?: (fields: OrderItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderItemCreateFormInputValues) => OrderItemCreateFormInputValues;
    onValidate?: OrderItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderItemCreateForm(props: OrderItemCreateFormProps): React.ReactElement;
