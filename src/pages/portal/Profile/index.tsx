import FormButton from "@/components/FormButton";
import FormInput from "@/components/FormInput";
import DashboardLayout from "@/layouts/DashboardLayout";
import { ChangePasswordSchema } from "@/schema/auth";
import { UpdateProfileSchema } from "@/schema/user";
import {
  useGetUserProfileMutation,
  useUpdateUserProfileMutation,
} from "@/services/user";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { Form } from "react-router-dom";

const ProfilePage = () => {
  const [getUserProfile, { isLoading: getUserProfileLoading, data }] =
    useGetUserProfileMutation();
  const [updateUserProfile, { isLoading: updateUserProfileLoading }] =
    useUpdateUserProfileMutation();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    getUserProfile({});
  }, []);

  const profile = data?.data;

  const countries = data?.countries ?? [];

  const initialValues = {
    lastname: profile?.lastname ?? "",
    firstname: profile?.firstname ?? "",
    phone: profile?.phone ?? "",
    addressLine1: profile?.addressLine1 ?? "",
    addressLine2: profile?.addressLine2 ?? "",
    city: profile?.city ?? "",
    state: profile?.state ?? "",
    zipCode: profile?.zipCode ?? "",
    countryId: profile?.countryId ?? "", // Added country
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  return (
    <DashboardLayout
      title="Profile"
      loading={getUserProfileLoading || updateUserProfileLoading}
    >
      <div className="w-full grid xl:grid-cols-2 gap-4">
        <div className="bg-white shadow w-full p-10">
          <Formik
            initialValues={initialValues}
            validationSchema={UpdateProfileSchema}
            onSubmit={(values) => {
              updateUserProfile(values);
            }}
            enableReinitialize={true}
          >
            {({ handleSubmit, touched, errors, handleChange, values }) => (
              <Form onSubmit={handleSubmit}>
                <div className="text-xl font-bold">Profile</div>
                <FormInput
                  id="lastname"
                  name="lastname"
                  placeholder="Last/Sur Name"
                  label="Last/Sur Name"
                  type="text"
                  onChange={handleChange}
                  value={values.lastname}
                  helperText={
                    touched.lastname && errors.lastname ? errors.lastname : ""
                  }
                  error={touched.lastname && errors.lastname ? true : false}
                  disabled={!isEditing}
                />
                <FormInput
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  label="First Name"
                  type="text"
                  onChange={handleChange}
                  value={values.firstname}
                  helperText={
                    touched.firstname && errors.firstname
                      ? errors.firstname
                      : ""
                  }
                  error={touched.firstname && errors.firstname ? true : false}
                  disabled={!isEditing}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <div className="mb-4">
                    <label
                      htmlFor="countryId"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Country
                    </label>
                    <select
                      id="countryId"
                      name="countryId"
                      onChange={handleChange}
                      value={values.countryId}
                      disabled={!isEditing}
                      className="w-full border-gray-100"
                    >
                      {countries.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {touched.countryId && errors.countryId && (
                      <p className="mt-2 text-sm text-red-600">
                        {errors.countryId}
                      </p>
                    )}
                  </div>

                  <FormInput
                    id="phone"
                    name="phone"
                    placeholder="Phone"
                    label="Phone"
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                    helperText={
                      touched.phone && errors.phone ? errors.phone : ""
                    }
                    error={touched.phone && errors.phone ? true : false}
                    disabled={!isEditing}
                  />
                </div>
                <FormInput
                  id="addressLine1"
                  name="addressLine1"
                  placeholder="Address Line 1"
                  label="Address Line 1"
                  type="text"
                  onChange={handleChange}
                  value={values.addressLine1}
                  helperText={
                    touched.addressLine1 && errors.addressLine1
                      ? errors.addressLine1
                      : ""
                  }
                  error={
                    touched.addressLine1 && errors.addressLine1 ? true : false
                  }
                  disabled={!isEditing}
                />

                <FormInput
                  id="addressLine2"
                  name="addressLine2"
                  placeholder="Address Line 2"
                  label="Address Line 2"
                  type="text"
                  onChange={handleChange}
                  value={values.addressLine2}
                  helperText={
                    touched.addressLine2 && errors.addressLine2
                      ? errors.addressLine2
                      : ""
                  }
                  error={
                    touched.addressLine2 && errors.addressLine2 ? true : false
                  }
                  disabled={!isEditing}
                />

                <FormInput
                  id="city"
                  name="city"
                  placeholder="City"
                  label="City"
                  type="text"
                  onChange={handleChange}
                  value={values.city}
                  helperText={touched.city && errors.city ? errors.city : ""}
                  error={touched.city && errors.city ? true : false}
                  disabled={!isEditing}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <FormInput
                    id="state"
                    name="state"
                    placeholder="State"
                    label="State"
                    type="text"
                    onChange={handleChange}
                    value={values.state}
                    helperText={
                      touched.state && errors.state ? errors.state : ""
                    }
                    error={touched.state && errors.state ? true : false}
                    disabled={!isEditing}
                  />
                  <FormInput
                    id="zipCode"
                    name="zipCode"
                    placeholder="Zip/Postal Code"
                    label="Zip/Postal Code"
                    type="text"
                    onChange={handleChange}
                    value={values.zipCode}
                    helperText={
                      touched.zipCode && errors.zipCode ? errors.zipCode : ""
                    }
                    error={touched.zipCode && errors.zipCode ? true : false}
                    disabled={!isEditing}
                  />
                </div>
                <FormButton
                  type="submit"
                  loading={updateUserProfileLoading}
                  disabled={!isEditing}
                >
                  Update Profile
                </FormButton>
                <button
                  type="button"
                  onClick={handleEditToggle}
                  className="mt-4 text-blue-500"
                >
                  {!isEditing && "Edit Profile"}
                </button>
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
              // Handle password change here
              alert("Password change submitted!");
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
