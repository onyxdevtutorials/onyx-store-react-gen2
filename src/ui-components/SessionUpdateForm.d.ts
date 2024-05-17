import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Session } from "./graphql/types";
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
export declare type SessionUpdateFormInputValues = {
    sessionId?: string;
    expiresAt?: string;
};
export declare type SessionUpdateFormValidationValues = {
    sessionId?: ValidationFunction<string>;
    expiresAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionUpdateFormOverridesProps = {
    SessionUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    sessionId?: PrimitiveOverrideProps<TextFieldProps>;
    expiresAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionUpdateFormProps = React.PropsWithChildren<{
    overrides?: SessionUpdateFormOverridesProps | undefined | null;
} & {
    sessionId?: string;
    session?: Session;
    onSubmit?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onSuccess?: (fields: SessionUpdateFormInputValues) => void;
    onError?: (fields: SessionUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionUpdateFormInputValues) => SessionUpdateFormInputValues;
    onValidate?: SessionUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SessionUpdateForm(props: SessionUpdateFormProps): React.ReactElement;
