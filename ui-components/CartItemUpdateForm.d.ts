import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { CartItem } from "./graphql/types";
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
export declare type CartItemUpdateFormInputValues = {
    cartItemId?: string;
    quantity?: number;
    owner?: string;
};
export declare type CartItemUpdateFormValidationValues = {
    cartItemId?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CartItemUpdateFormOverridesProps = {
    CartItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cartItemId?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CartItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: CartItemUpdateFormOverridesProps | undefined | null;
} & {
    cartItemId?: string;
    cartItem?: CartItem;
    onSubmit?: (fields: CartItemUpdateFormInputValues) => CartItemUpdateFormInputValues;
    onSuccess?: (fields: CartItemUpdateFormInputValues) => void;
    onError?: (fields: CartItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CartItemUpdateFormInputValues) => CartItemUpdateFormInputValues;
    onValidate?: CartItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CartItemUpdateForm(props: CartItemUpdateFormProps): React.ReactElement;
