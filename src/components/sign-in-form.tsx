import { useFormik } from "formik";
import { Link } from "react-router-dom";

import Input from "@/components/input";

import Button from "./button";

export default function SignUpForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    },
    onSubmit: (values) => {
      if (values.password !== values.confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <Input
          label="Your Name"
          name="displayName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.displayName}
          required
        />

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

        <Input
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          required
        />
      </div>

      <div className="mt-4">
        <Button title="Create Account" type="submit" style="primary" />
        <p className="mt-2 text-sm text-center">
          By registering, you accept the{" "}
          <Link className="italic hover:underline" to="/terms-and-conditions">
            Terms & Conditions
          </Link>
          .
        </p>
      </div>
    </form>
  );
}
