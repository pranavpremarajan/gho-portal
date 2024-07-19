import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ChangePasswordSchema } from "@/schema/auth";
import { Formik } from "formik";
import { Form } from "react-router-dom";

const ProfilePage = () => {
  return (
    <DashboardLayout title="Profile">
      <div className="w-full grid xl:grid-cols-2 gap-4">
        <div className="bg-white shadow w-full p-10">
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={{}}
            onSubmit={() => {}}
          >
            {({}) => (
              <Form>
                <div className="text-xl font-bold">Profile</div>
                <FormInput
                  id="lastname"
                  name="lastname"
                  placeholder="Last/Sur Name"
                  label="Last/Sur Name"
                  type="text"
                />
                <FormInput
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                  type="text"
                />

                <div className="grid gird-cols-1 md:grid-cols-2 gap-2">
                  <FormInput
                    id="country"
                    name="country"
                    placeholder="Country"
                    label="Country"
                    type="text"
                  />
                  <FormInput
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    label="Phone"
                    type="text"
                  />
                </div>
                <FormInput
                  id="address"
                  name="address"
                  placeholder="Address"
                  label="Address"
                  type="text"
                />

                <FormInput
                  id="city"
                  name="city"
                  placeholder="City"
                  label="City"
                  type="text"
                />

                <div className="grid gird-cols-1 md:grid-cols-2 gap-2">
                  <FormInput
                    id="state"
                    name="state"
                    placeholder="State"
                    label="State"
                    type="text"
                  />
                  <FormInput
                    id="zip"
                    name="zip"
                    placeholder="Zip/Postal Code"
                    label="Zip/Postal Code"
                    type="text"
                  />
                </div>
                <FormButton type="submit">Update Profile</FormButton>
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
