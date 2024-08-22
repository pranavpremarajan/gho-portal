export interface ApiResponse<D> {
  Status: boolean;
  Error: string;
  Info: string;
  Data: D;
}

export type GetReviewsApiRespose = ApiResponse<
  [
    [
      {
        id: string;
        fn: string;
        ln: string;
        stn: string;
        sx: string;
      }
    ]
  ]
>;

export interface ApiUserProfile {
  LastName: string;
  FirstName: string;
  Phone: string;
  eMail?: string;
  Gendor?: string;
  DOB?: string;
  CountryID: string;
  Address1: string;
  Address2: string;
  City: string;
  State: string;
  ZipCode: string;
}

export interface UserProfile {
  lastname: string;
  firstname: string;
  phone: string;
  email?: string;
  gender?: string;
  dob?: string;
  countryId: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  zipCode: string;
}

export type ApiCountryList = {
  id: string;
  nm: string;
}[];

export type GetUserProfileApiRespose = ApiResponse<
  [[ApiUserProfile],ApiCountryList]
>;
