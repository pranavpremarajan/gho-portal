import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ChangePasswordSchema } from "@/schema/auth";
import { UpdateProfileSchema } from "@/schema/user";
import { useUpdateUserProfileMutation } from "@/services/user";
import { Formik } from "formik";
import { Form } from "react-router-dom";

const ProfilePage = () => {
  const [updateProfile, { isLoading }] = useUpdateUserProfileMutation();

  return (
    <DashboardLayout title="Profile">
      <div className="w-full grid xl:grid-cols-2 gap-4">
        <div className="bg-white shadow w-full p-10">
          <Formik
            initialValues={{
              lastname: "",
              firstname: "",
              country: "",
              phone: "",
              addressLine1: "",
              addressLine2: "",
              city: "",
              state: "",
              zipCode: "",
            }}
            validationSchema={UpdateProfileSchema}
            onSubmit={(values) => {
              updateProfile(values);
            }}
          >
            {({ handleSubmit, touched, errors, handleChange }) => (
              <Form onSubmit={handleSubmit}>
                <div className="text-xl font-bold">Profile</div>
                <FormInput
                  id="lastname"
                  name="lastname"
                  placeholder="Last/Sur Name"
                  label="Last/Sur Name"
                  type="text"
                  onChange={handleChange}
                  helperText={
                    touched.lastname && errors.lastname ? errors.lastname : ""
                  }
                  error={touched.lastname && errors.lastname ? true : false}
                />
                <FormInput
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                  type="text"
                  onChange={handleChange}
                  helperText={
                    touched.firstname && errors.firstname
                      ? errors.firstname
                      : ""
                  }
                  error={touched.firstname && errors.firstname ? true : false}
                />

                <div className="grid gird-cols-1 md:grid-cols-2 gap-2">
                  <FormInput
                    id="country"
                    name="country"
                    placeholder="Country"
                    label="Country"
                    type="text"
                    onChange={handleChange}
                    helperText={
                      touched.country && errors.country ? errors.country : ""
                    }
                    error={touched.country && errors.country ? true : false}
                  />
                  <FormInput
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    label="Phone"
                    type="text"
                    onChange={handleChange}
                    helperText={
                      touched.phone && errors.phone ? errors.phone : ""
                    }
                    error={touched.phone && errors.phone ? true : false}
                  />
                </div>
                <FormInput
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="Address Line 1"
                  label="Address Line 1"
                  type="text"
                  onChange={handleChange}
                  helperText={
                    touched.addressLine1 && errors.addressLine1
                      ? errors.addressLine1
                      : ""
                  }
                  error={
                    touched.addressLine1 && errors.addressLine1 ? true : false
                  }
                />

                <FormInput
                  id="addressLine2"
                  name="addressLine2"
                  placeholder="Address Line 2"
                  label="Address Line 2"
                  type="text"
                  onChange={handleChange}
                  helperText={
                    touched.addressLine2 && errors.addressLine2
                      ? errors.addressLine2
                      : ""
                  }
                  error={
                    touched.addressLine2 && errors.addressLine2 ? true : false
                  }
                />

                <FormInput
                  id="city"
                  name="city"
                  placeholder="City"
                  label="City"
                  type="text"
                  onChange={handleChange}
                  helperText={touched.city && errors.city ? errors.city : ""}
                  error={touched.city && errors.city ? true : false}
                />

                <div className="grid gird-cols-1 md:grid-cols-2 gap-2">
                  <FormInput
                    id="state"
                    name="state"
                    placeholder="State"
                    label="State"
                    type="text"
                    onChange={handleChange}
                    helperText={
                      touched.state && errors.state ? errors.state : ""
                    }
                    error={touched.state && errors.state ? true : false}
                  />
                  <FormInput
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip/Postal Code"
                    label="Zip/Postal Code"
                    type="text"
                    onChange={handleChange}
                    helperText={
                      touched.zipCode && errors.zipCode ? errors.zipCode : ""
                    }
                    error={touched.zipCode && errors.zipCode ? true : false}
                  />
                </div>
                <FormButton type="submit" loading={isLoading}>
                  Update Profile
                </FormButton>
              </Form>
            )}
          </Formik>
        </div>

        <div className="bg-white shadow w-full p-10">
          <Formik
            initialValues={{
              currentPassword: "",
              newPassword: "",
              confirmNewPassword: "",
            }}
            validationSchema={ChangePasswordSchema}
            onSubmit={() => {
              alert("test");
            }}
          >
            {({ errors, touched, values, handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <div className="text-xl font-bold">Change Password</div>
                <FormInput
                  id="currentPassword"
                  name="currentPassword"
                  placeholder="Current Password"
                  label="Current Password"
                  type="password"
                  value={values.currentPassword}
                  onChange={handleChange}
                  helperText={
                    touched.currentPassword && errors.currentPassword
                      ? errors.currentPassword
                      : ""
                  }
                  error={
                    touched.currentPassword && errors.currentPassword
                      ? true
                      : false
                  }
                />
                <FormInput
                  id="newPassword"
                  name="newPassword"
                  placeholder="New Password"
                  label="New Password"
                  type="password"
                  value={values.newPassword}
                  onChange={handleChange}
                  helperText={
                    touched.newPassword && errors.newPassword
                      ? errors.newPassword
                      : ""
                  }
                  error={
                    touched.newPassword && errors.newPassword ? true : false
                  }
                />
                <FormInput
                  id="confirmNewPassword"
                  name="confirmNewPassword"
                  placeholder="Confirm New Password"
                  label="Confirm New Password"
                  type="password"
                  value={values.confirmNewPassword}
                  onChange={handleChange}
                  helperText={
                    touched.confirmNewPassword && errors.confirmNewPassword
                      ? errors.confirmNewPassword
                      : ""
                  }
                  error={
                    touched.confirmNewPassword && errors.confirmNewPassword
                      ? true
                      : false
                  }
                />
                <FormButton type="submit">Change Password</FormButton>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
