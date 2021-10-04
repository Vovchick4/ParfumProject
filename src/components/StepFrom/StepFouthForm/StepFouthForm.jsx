import { Input, Button } from "../..";

export default function StepFouthForm({ formik }) {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        placeholder="Your city"
        name="city"
        required
        autoComplete="address"
        value={formik.values.city}
        error={formik.touched.city && formik.errors.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button type="submit">Confirm</Button>
    </form>
  );
}
