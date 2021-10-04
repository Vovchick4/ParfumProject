import { Input, Button } from "../..";

export default function StepOneForm({ formik, confirmUere }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder="Your Name"
        name="name"
        required
        autoComplete="username"
        value={formik.values.name}
        error={formik.touched.name && formik.errors.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button type="submit" onClick={confirmUere}>
        Step --- Two
      </Button>
    </form>
  );
}
