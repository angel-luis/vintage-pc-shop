import { useFormik } from "formik";

import Button from "@/components/button";
import Input from "@/components/input";

export default function SignInForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <Input
          label="Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          required
        />
      </div>

      <div className="mt-4">
        <Button title="Sign In" type="submit" style="primary" />
      </div>
    </form>
  );
}
