/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExchangeRates
// ====================================================

export interface GetExchangeRates_pros_titleMulti {
  __typename: "TranslatableComponent";
  fr: string | null;
}

export interface GetExchangeRates_pros_address {
  __typename: "AddressComponent";
  city: string;
  street: string | null;
}

export interface GetExchangeRates_pros {
  __typename: "ProSchema";
  _id: string;
  titleMulti: GetExchangeRates_pros_titleMulti | null;
  address: GetExchangeRates_pros_address | null;
  description: string | null;
  spokenLanguages: string[] | null;
}

export interface GetExchangeRates {
  pros: GetExchangeRates_pros[];
}
