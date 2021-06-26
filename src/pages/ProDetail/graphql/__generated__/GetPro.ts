/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentMethodsEnum } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetPro
// ====================================================

export interface GetPro_prosGetOne_titleMulti {
  __typename: "TranslatableComponent";
  fr: string | null;
}

export interface GetPro_prosGetOne_pictures_picture {
  __typename: "PictureComponent";
  full: string | null;
}

export interface GetPro_prosGetOne_pictures {
  __typename: "PictureWrapperComponent";
  picture: GetPro_prosGetOne_pictures_picture;
}

export interface GetPro_prosGetOne_services_category_title {
  __typename: "TranslatableComponent";
  fr: string | null;
}

export interface GetPro_prosGetOne_services_category {
  __typename: "CategoriesBaseSchema1";
  title: GetPro_prosGetOne_services_category_title;
}

export interface GetPro_prosGetOne_services_service_title {
  __typename: "TranslatableComponent";
  fr: string | null;
}

export interface GetPro_prosGetOne_services_service {
  __typename: "ServicesBaseSchema1";
  title: GetPro_prosGetOne_services_service_title;
}

export interface GetPro_prosGetOne_services {
  __typename: "ServicePropertyComponent";
  category: GetPro_prosGetOne_services_category | null;
  service: GetPro_prosGetOne_services_service | null;
}

export interface GetPro_prosGetOne_address {
  __typename: "AddressComponent";
  city: string;
  zip: string | null;
  street: string | null;
  number: string | null;
}

export interface GetPro_prosGetOne {
  __typename: "ProSchema";
  titleMulti: GetPro_prosGetOne_titleMulti | null;
  pictures: GetPro_prosGetOne_pictures[] | null;
  employee_numbers: number | null;
  numberOfASV: number | null;
  services: GetPro_prosGetOne_services[] | null;
  spokenLanguages: string[] | null;
  paymentMethods: PaymentMethodsEnum[] | null;
  phone: string | null;
  mobilePhone: string | null;
  email: string | null;
  website: string | null;
  address: GetPro_prosGetOne_address | null;
  localisation: any | null;
}

export interface GetPro {
  prosGetOne: GetPro_prosGetOne;
}

export interface GetProVariables {
  id: string;
}
