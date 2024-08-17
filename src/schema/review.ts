import * as yup from "yup";

export const AddMedicationSchema = yup.object().shape({
  medicationName: yup.string().required("Required"),
  medicationDate: yup.string().required("Required"),
});

export const CreateReviewSchema = yup.object().shape({
  lastname: yup.string().required("Required"),
  firstname: yup.string().required("Required"),
  gender: yup.string().required("Required"),
  birthMonth: yup.string().required("Required"),
  birthYear: yup.string().required("Required"),
  country: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  occupation: yup.string().required("Required"),
  specialities: yup.array().required("Required"),
});
