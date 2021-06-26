/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { GetArgs, PaymentMethodsEnum } from "./../../../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPros
// ====================================================

export interface GetPros_pros_titleMulti {
  __typename: "TranslatableComponent";
  fr: string | null;
}

export interface GetPros_pros_address {
  __typename: "AddressComponent";
  city: string;
  street: string | null;
}

export interface GetPros_pros_pictures_picture {
  __typename: "PictureComponent";
  thumb: string | null;
}

export interface GetPros_pros_pictures {
  __typename: "PictureWrapperComponent";
  picture: GetPros_pros_pictures_picture;
}

export interface GetPros_pros {
  __typename: "ProSchema";
  _id: string;
  titleMulti: GetPros_pros_titleMulti | null;
  address: GetPros_pros_address | null;
  description: string | null;
  spokenLanguages: string[] | null;
  pictures: GetPros_pros_pictures[] | null;
  paymentMethods: PaymentMethodsEnum[] | null;
  employee_numbers: number | null;
  numberOfASV: number | null;
}

export interface GetPros {
  pros: GetPros_pros[];
}

export interface GetProsVariables {
  pagination?: GetArgs | null;
}
