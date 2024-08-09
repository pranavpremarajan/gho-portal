import { Formik, Form } from "formik";
import { SignUpSchema } from "@/schema/auth";
import FormInput from "@/components/FormInput";
import { useSignupMutation } from "@/services/auth";
import FormButton from "@/components/FormButton";
import { Link } from "react-router-dom";
import config from "@/config";
import OTPForm from "../../Login/OTPForm";
import { useState } from "react";
import { Checkbox } from "antd";

const SignUpForm = () => {
  const [signup, { isLoading, isError, isSuccess }] = useSignupMutation();
  const [email, setEmail] = useState("");

  return isSuccess ? (
    <OTPForm email={email} />
  ) : (
    <Formik
      initialValues={{
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        mobile: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={(values) => {
        setEmail(values.email);
        signup(values);
      }}
    >
      {({ errors, touched, handleChange, handleSubmit }) => (
        <Form className="w-full max-w-sm bg-white p-8" onSubmit={handleSubmit}>
          <div className="text-xl font-medium">Signup</div>

          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            helperText={touched.email && errors.email ? errors.email : ""}
            error={touched.email && errors.email ? true : false}
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            helperText={
              touched.password && errors.password ? errors.password : ""
            }
            error={touched.password && errors.password ? true : false}
          />

          <FormInput
            id="firstname"
            label="First Name"
            type="text"
            placeholder="First Name"
            name="firstname"
            onChange={handleChange}
            helperText={
              touched.firstname && errors.firstname ? errors.firstname : ""
            }
            error={touched.firstname && errors.firstname ? true : false}
          />

          <FormInput
            id="lastname"
            label="Last Name"
            type="text"
            placeholder="Last Name"
            name="lastname"
            onChange={handleChange}
            helperText={
              touched.lastname && errors.lastname ? errors.lastname : ""
            }
            error={touched.lastname && errors.lastname ? true : false}
          />

          <FormInput
            id="mobile"
            label="Mobile"
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={handleChange}
            helperText={touched.mobile && errors.mobile ? errors.mobile : ""}
            error={touched.mobile && errors.mobile ? true : false}
          />

          <Checkbox className="py-2">
            <span className="text-xs">
              I agree to the{" "}
              <span className="text-blue-500">terms and conditions</span> and
              <span className="text-blue-500"> privacy policy</span>
            </span>
          </Checkbox>

          {isError && <div className="text-red-400">Failed to signup</div>}
          <FormButton loading={isLoading} type="submit">
            Sign Up
          </FormButton>

          <div className="text-xs py-2">
            Already have an account?{" "}
            <span className="font-bold cursor-pointer">
              <Link to={config.navigation.login}>Log In</Link>
            </span>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
