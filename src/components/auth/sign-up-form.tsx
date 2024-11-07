import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "@/components/common/button";
import Input from "@/components/common/input";
import { handleEmailAuth } from "@/data/firebase";

export default function SignUpForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      displayName: "",
    },
    onSubmit: async (values) => {
      if (values.password !== values.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      const result = await handleEmailAuth(
        "signUp",
        values.email,
        values.password,
        values.displayName
      );

      if (!result?.success) {
        setError("Something went wrong. Please try again.");
        return;
      }

      navigate("/");
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
          label="A Valid Email Address"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          required
        />

        <Input
          label="A Strong Password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          minLength={6}
          required
        />

        <Input
          label="Confirm Your Password"
          name="confirmPassword"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
          minLength={6}
          required
        />
      </div>

      <div className="mt-4">
        <Button type="submit" style="primary" widthFull>
          Create Account
        </Button>
        <p className="mt-2 text-sm text-center">
          By registering, you accept the{" "}
          <Link className="italic hover:underline" to="/terms-and-conditions">
            Terms & Conditions
          </Link>
          .
        </p>

        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 text-center mt-2"
            role="alert"
          >
            <span className="font-medium">Error:</span> {error}
          </div>
        )}
      </div>
    </form>
  );
}
