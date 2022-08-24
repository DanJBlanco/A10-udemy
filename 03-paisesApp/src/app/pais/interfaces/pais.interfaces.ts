export interface Country {
  name:         Name;
  tld:          string[];
  cca2:         string;
  ccn3:         string;
  cca3:         string;
  cioc?:        string;
  independent:  boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital?:     string[];
  altSpellings: string[];
  region:       Region;
  subregion:    string;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Region[];
  flags:        CoatOfArms;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs: string[];
  side:  Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  UYU?: AMD;
  EUR?: AMD;
  PYG?: AMD;
  GMD?: AMD;
  DJF?: AMD;
  RSD?: AMD;
  TJS?: AMD;
  AUD?: AMD;
  KID?: AMD;
  XOF?: AMD;
  HTG?: AMD;
  VUV?: AMD;
  MGA?: AMD;
  STN?: AMD;
  MUR?: AMD;
  LBP?: AMD;
  PEN?: AMD;
  USD?: AMD;
  BRL?: AMD;
  UGX?: AMD;
  SRD?: AMD;
  CLP?: AMD;
  LRD?: AMD;
  KPW?: AMD;
  YER?: AMD;
  AMD?: AMD;
  TWD?: AMD;
  PKR?: AMD;
  MWK?: AMD;
  ARS?: AMD;
  PHP?: AMD;
  CZK?: AMD;
  MMK?: AMD;
  XAF?: AMD;
  MRU?: AMD;
  TRY?: AMD;
  EGP?: AMD;
  MZN?: AMD;
  CNY?: AMD;
  CDF?: AMD;
  BDT?: AMD;
  ZAR?: AMD;
  FJD?: AMD;
  MDL?: AMD;
  GYD?: AMD;
  HRK?: AMD;
  ISK?: AMD;
  BYN?: AMD;
  NAD?: AMD;
  LKR?: AMD;
  NIO?: AMD;
  SOS?: AMD;
  CRC?: AMD;
  VND?: AMD;
  ZMW?: AMD;
  HNL?: AMD;
  UZS?: AMD;
  MKD?: AMD;
  IRR?: AMD;
  PAB?: AMD;
  CVE?: AMD;
  BIF?: AMD;
  TTD?: AMD;
  BGN?: AMD;
  LAK?: AMD;
  NGN?: AMD;
  PLN?: AMD;
  KRW?: AMD;
  TND?: AMD;
  ETB?: AMD;
  ZWL?: AMD;
  AZN?: AMD;
  MVR?: AMD;
  SGD?: AMD;
  NPR?: AMD;
  AOA?: AMD;
  INR?: AMD;
  KGS?: AMD;
  GNF?: AMD;
  IQD?: AMD;
  CUC?: AMD;
  CUP?: AMD;
  IDR?: AMD;
  SCR?: AMD;
  SLL?: AMD;
  KES?: AMD;
  COP?: AMD;
  MOP?: AMD;
  RWF?: AMD;
  SYP?: AMD;
  BWP?: AMD;
  KZT?: AMD;
  VES?: AMD;
  TZS?: AMD;
  SDG?: Sdg;
}

export interface AMD {
  name:   string;
  symbol: string;
}

export interface Sdg {
  name: string;
}

export interface Demonyms {
  eng: Eng;
  fra: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex:  string;
}

export enum StartOfWeek {
  Monday = "monday",
  Sunday = "sunday",
  Turday = "turday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
}
