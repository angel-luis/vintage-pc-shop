import { useFormik } from "formik";

import Button from "@/components/button";
import Input from "@/components/input";

export default function SignInForm() {
  const formik = useFormik({
    initialValues: {
      emailSignIn: "",
      passwordSignIn: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <Input
          label="Email Address"
          name="emailSignIn"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.emailSignIn}
          required
        />

        <Input
          label="Password"
          name="passwordSignIn"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.passwordSignIn}
          required
        />
      </div>

      <div className="mt-4">
        <Button title="Sign In" type="submit" style="primary" />
      </div>
    </form>
  );
}
