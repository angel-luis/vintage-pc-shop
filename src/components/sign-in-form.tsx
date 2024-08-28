import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/button";
import Input from "@/components/input";
import { handleEmailAuth } from "@/data/firebase";

export default function SignInForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailSignIn: "",
      passwordSignIn: "",
    },
    onSubmit: async (values) => {
      const result = await handleEmailAuth(
        "signIn",
        values.emailSignIn,
        values.passwordSignIn
      );

      if (!result?.sucess) {
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

      {error && (
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 text-center mt-2"
          role="alert"
        >
          <span className="font-medium">Error:</span> {error}
        </div>
      )}
    </form>
  );
}
