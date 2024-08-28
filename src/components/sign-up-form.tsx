import { useFormik } from "formik";

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
      <label htmlFor="displayName">Your Name</label>
      <input
        className="border"
        id="displayName"
        name="displayName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.displayName}
      />

      <label htmlFor="email">Email Address</label>
      <input
        className="border"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label htmlFor="email">Password</label>
      <input
        className="border"
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label htmlFor="email">Confirm Password</label>
      <input
        className="border"
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <button className="bg-gray-200" type="submit">
        Create Account
      </button>
    </form>
  );
}
