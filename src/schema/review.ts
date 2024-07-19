import * as yup from "yup";

export const AddMedicationSchema = yup.object().shape({
  medicationName: yup.string().required("Required"),
  medicationDate: yup.string().required("Required"),
});

export const CreateReviewSchema = yup.object().shape({
  firstname: yup.string().required("Required"),
});
