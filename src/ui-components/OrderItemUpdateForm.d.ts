import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { OrderItem } from "./graphql/types";
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
export declare type OrderItemUpdateFormInputValues = {
    orderItemId?: string;
    quantity?: number;
};
export declare type OrderItemUpdateFormValidationValues = {
    orderItemId?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrderItemUpdateFormOverridesProps = {
    OrderItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    orderItemId?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrderItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrderItemUpdateFormOverridesProps | undefined | null;
} & {
    orderItemId?: string;
    orderItem?: OrderItem;
    onSubmit?: (fields: OrderItemUpdateFormInputValues) => OrderItemUpdateFormInputValues;
    onSuccess?: (fields: OrderItemUpdateFormInputValues) => void;
    onError?: (fields: OrderItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrderItemUpdateFormInputValues) => OrderItemUpdateFormInputValues;
    onValidate?: OrderItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrderItemUpdateForm(props: OrderItemUpdateFormProps): React.ReactElement;
