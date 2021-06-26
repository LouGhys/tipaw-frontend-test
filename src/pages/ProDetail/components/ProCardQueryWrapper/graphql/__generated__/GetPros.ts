/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

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

export interface GetPros_pros {
  __typename: "ProSchema";
  _id: string;
  titleMulti: GetPros_pros_titleMulti | null;
  address: GetPros_pros_address | null;
  description: string | null;
  spokenLanguages: string[] | null;
}

export interface GetPros {
  pros: GetPros_pros[];
}
