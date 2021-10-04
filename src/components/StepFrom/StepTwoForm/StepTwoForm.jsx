import { Input, Button } from "../..";

export default function StepTwoForm({ formik, confirmUere }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="email"
        placeholder="Your E-mail address"
        name="email"
        required
        autoComplete="email"
        value={formik.values.email}
        error={formik.touched.email && formik.errors.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button type="submit" onClick={confirmUere}>
        Step --- Third
      </Button>
    </form>
  );
}
