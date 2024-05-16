import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type OrderCreateFormInputValues = {
    orderId?: string;
    total?: number;
    owner?: string;
    status?: string;
};
export declare type OrderCreateFormValidationValues = {
    orderId?: ValidationFunction<string>;
    total?: ValidationFunction<number>;
    owner?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderCreateFormOverridesProps = {
    OrderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderId?: PrimitiveOverrideProps<TextFieldProps>;
    total?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type OrderCreateFormProps = React.PropsWithChildren<{
    overrides?: OrderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onSuccess?: (fields: OrderCreateFormInputValues) => void;
    onError?: (fields: OrderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderCreateFormInputValues) => OrderCreateFormInputValues;
    onValidate?: OrderCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrderCreateForm(props: OrderCreateFormProps): React.ReactElement;
