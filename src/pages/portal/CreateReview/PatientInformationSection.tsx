import { Formik, Form, Field, FieldProps } from "formik";
import { Divider, Select } from "antd";
import FormInput from "@/components/FormInput";
import FormSelect from "@/components/FormSelect";

interface FormValues {
  lastname: string;
  firstname: string;
  gender: string;
  birthMonth: string;
  birthYear: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  city: string;
  state: string;
  phone: string;
  occupation: string;
  zipcode: string;
  specialities: string[];
}

const initialValues: FormValues = {
  lastname: "",
  firstname: "",
  gender: "",
  birthMonth: "",
  birthYear: "",
  addressLine1: "",
  addressLine2: "",
  country: "",
  city: "",
  state: "",
  phone: "",
  occupation: "",
  zipcode: "",
  specialities: [],
};

const PatientInformationSection = () => {
  const handleSubmit = (_values: FormValues) => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ setFieldValue, values }) => (
        <Form>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <div>
              <Field name="lastname">
                {({ field }: FieldProps) => (
                  <FormInput label="Last Name" id="lastname" {...field} />
                )}
              </Field>

              <Field name="firstname">
                {({ field }: FieldProps) => (
                  <FormInput label="First Name" id="firstname" {...field} />
                )}
              </Field>

              <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
                <Field name="gender">
                  {({ field }: FieldProps) => (
                    <FormSelect
                      placeholder="Gender"
                      label="Gender"
                      id="gender"
                      {...field}
                      onChange={(value: string) =>
                        setFieldValue("gender", value)
                      }
                      notFoundContent={<></>}
                      className="w-full"
                    />
                  )}
                </Field>

                <Field name="birthMonth">
                  {({ field }: FieldProps) => (
                    <FormSelect
                      placeholder="Birth Month"
                      label="Birth Month"
                      id="birthMonth"
                      {...field}
                      onChange={(value: string) =>
                        setFieldValue("birthMonth", value)
                      }
                      className="w-full"
                      notFoundContent={<></>}
                    />
                  )}
                </Field>

                <Field name="birthYear">
                  {({ field }: FieldProps) => (
                    <FormSelect
                      placeholder="Year"
                      label="Year"
                      id="birthYear"
                      {...field}
                      onChange={(value: string) =>
                        setFieldValue("birthYear", value)
                      }
                      className="w-full"
                      notFoundContent={<></>}
                    />
                  )}
                </Field>
              </div>

              <Field name="addressLine1">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="Address Line 1"
                    label="Address Line 1"
                    id="addressLine1"
                    {...field}
                  />
                )}
              </Field>

              <Field name="addressLine2">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="Address Line 2"
                    label="Address Line 2"
                    id="addressLine2"
                    {...field}
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="country">
                {({ field }: FieldProps) => (
                  <FormSelect
                    placeholder="Country"
                    label="Country"
                    id="country"
                    {...field}
                    onChange={(value: string) =>
                      setFieldValue("country", value)
                    }
                    className="w-full"
                    notFoundContent={<></>}
                  />
                )}
              </Field>

              <Field name="city">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="City"
                    label="City"
                    id="city"
                    {...field}
                  />
                )}
              </Field>

              <Field name="state">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="State"
                    label="State"
                    id="state"
                    {...field}
                    onChange={(value: string) => setFieldValue("state", value)}
                  />
                )}
              </Field>

              <Field name="phone">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="Phone"
                    label="Phone"
                    id="phone"
                    {...field}
                  />
                )}
              </Field>

              <Field name="occupation">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="Occupation"
                    label="Occupation"
                    id="occupation"
                    {...field}
                  />
                )}
              </Field>
            </div>

            <div>
              <Field name="zipcode">
                {({ field }: FieldProps) => (
                  <FormInput
                    placeholder="Postal / ZipCode"
                    label="Postal / ZipCode"
                    id="zipcode"
                    {...field}
                  />
                )}
              </Field>
            </div>
          </div>

          <Divider />

          <div>
            <div className="font-bold">Speciality</div>
            <Divider />
            <Field name="specialities">
              {() => (
                <Select
                  mode="multiple"
                  style={{ width: "100%" }}
                  placeholder="Please select"
                  value={values.specialities}
                  onChange={(value: string[]) =>
                    setFieldValue("specialities", value)
                  }
                  notFoundContent={<>No results found</>}
                  id="specialities"
                />
              )}
            </Field>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default PatientInformationSection;
