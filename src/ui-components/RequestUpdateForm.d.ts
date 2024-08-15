/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type RequestUpdateFormInputValues = {
    name?: string;
    title?: string;
    description?: string;
    date?: string;
    location?: string;
    seniorID?: string;
    volunteerID?: string;
    status?: string;
    country?: string;
    locale?: string;
    seniorFeedback?: string;
    volunteerFeedback?: string;
    createdAt?: string;
    updatedAt?: string;
    picture?: string;
    pictures?: string[];
    rate?: number;
    volunteerName?: string;
    urgent?: boolean;
    tags?: string[];
};
export declare type RequestUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    date?: ValidationFunction<string>;
    location?: ValidationFunction<string>;
    seniorID?: ValidationFunction<string>;
    volunteerID?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    country?: ValidationFunction<string>;
    locale?: ValidationFunction<string>;
    seniorFeedback?: ValidationFunction<string>;
    volunteerFeedback?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
    picture?: ValidationFunction<string>;
    pictures?: ValidationFunction<string>;
    rate?: ValidationFunction<number>;
    volunteerName?: ValidationFunction<string>;
    urgent?: ValidationFunction<boolean>;
    tags?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RequestUpdateFormOverridesProps = {
    RequestUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    date?: PrimitiveOverrideProps<TextFieldProps>;
    location?: PrimitiveOverrideProps<TextFieldProps>;
    seniorID?: PrimitiveOverrideProps<TextFieldProps>;
    volunteerID?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<TextFieldProps>;
    country?: PrimitiveOverrideProps<TextFieldProps>;
    locale?: PrimitiveOverrideProps<TextFieldProps>;
    seniorFeedback?: PrimitiveOverrideProps<TextFieldProps>;
    volunteerFeedback?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
    picture?: PrimitiveOverrideProps<TextFieldProps>;
    pictures?: PrimitiveOverrideProps<TextFieldProps>;
    rate?: PrimitiveOverrideProps<TextFieldProps>;
    volunteerName?: PrimitiveOverrideProps<TextFieldProps>;
    urgent?: PrimitiveOverrideProps<SwitchFieldProps>;
    tags?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type RequestUpdateFormProps = React.PropsWithChildren<{
    overrides?: RequestUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    request?: any;
    onSubmit?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onSuccess?: (fields: RequestUpdateFormInputValues) => void;
    onError?: (fields: RequestUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RequestUpdateFormInputValues) => RequestUpdateFormInputValues;
    onValidate?: RequestUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RequestUpdateForm(props: RequestUpdateFormProps): React.ReactElement;
