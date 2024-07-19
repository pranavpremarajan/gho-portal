import { Formik, Form } from "formik";
import { LoginSchema } from "@/schema/auth";
import FormInput from "@/components/FormInput";
import { useLoginMutation } from "@/services/auth";
import FormButton from "@/components/FormButton";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values) => {
        login(values);
      }}
    >
      {({ errors, touched, values, handleChange,handleSubmit }) => (
        <Form className="w-full max-w-sm bg-white p-8" onSubmit={handleSubmit}>
          <div className="text-xl font-medium">Login to continue</div>
          <FormInput
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            value={values.email}
            helperText={touched.email && errors.email ? errors.email : ""}
            error={touched.email && errors.email ? true : false}
            onChange={handleChange}
          />

          <FormInput
            id="password"
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            value={values.password}
            helperText={
              touched.password && errors.password ? errors.password : ""
            }
            error={touched.password && errors.password ? true : false}
            onChange={handleChange}
          />

          <FormButton loading={isLoading} type="submit">
            Login
          </FormButton>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
