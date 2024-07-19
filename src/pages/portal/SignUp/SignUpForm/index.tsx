import { Formik, Form } from "formik";
import { SignUpSchema } from "@/schema/auth";
import FormInput from "@/components/FormInput";
import { useSignupMutation } from "@/services/auth";
import FormButton from "@/components/FormButton";

const SignUpForm = () => {
  const [signup, { isLoading, isError }] = useSignupMutation();

  return (
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

          {isError && <div className="text-red-400">Failed to signup</div>}
          <FormButton loading={isLoading} type="submit">
            Sign Up
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
