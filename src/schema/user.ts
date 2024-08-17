import * as yup from "yup";

export const UpdateProfileSchema = yup.object().shape({
  lastname: yup.string().required("Required"),
  firstname: yup.string().required("Required"),
  country: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  addressLine1: yup.string().required("Required"),
  addressLine2: yup.string().required("Required"),
  city: yup.string().required("Required"),
  state: yup.string().required("Required"),
  zipCode: yup.string().required("Required"),
});
