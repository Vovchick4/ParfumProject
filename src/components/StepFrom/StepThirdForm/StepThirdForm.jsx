import { Input, Button } from "../..";

export default function StepThirdForm({ formik, confirmUere }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="tel"
        placeholder="Your Phone"
        name="phone"
        required
        autoComplete="tel"
        value={formik.values.phone}
        error={formik.touched.phone && formik.errors.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button type="submit">Step --- Fouth</Button>
    </form>
  );
}
