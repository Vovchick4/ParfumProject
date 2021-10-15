import { useContext, Fragment } from "react";
import { StepFormContext } from "../../context/StepFormContext";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import StepOneForm from "./StepOneForm";
import StepTwoForm from "./StepTwoForm";
import StepThirdForm from "./StepThirdForm";
import StepFouthForm from "./StepFouthForm";

import styles from "./StepForm.module.css";
import { Button } from "..";
import { authActions } from "../../redux/auth";

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .required("Email is required")
    .email("Email must be valid"),
  phone: Yup.string().trim().required("Name is required"),
  city: Yup.number().required("City is required"),
});

export default function StepForm() {
  const { step, prevStepDecrement } = useContext(StepFormContext);

  const { prevStepIncrement, setIsValidForm } = useContext(StepFormContext);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
    },

    validationSchema,
    onSubmit: (values) => {
      setIsValidForm(true);
      dispatch(authActions.addStepForm(values));
      prevStepIncrement();
    },
  });

  function confirmUere() {
    if (formik.isValidating) {
      dispatch(authActions.addStepForm(formik.values));
      prevStepIncrement();
    } else {
      alert(3443);
    }
  }

  const forms = [
    {
      id: 1,
      component: <StepOneForm formik={formik} confirmUere={confirmUere} />,
    },
    {
      id: 2,
      component: <StepTwoForm formik={formik} confirmUere={confirmUere} />,
    },
    {
      id: 3,
      component: <StepThirdForm formik={formik} />,
    },
    {
      id: 4,
      component: <StepFouthForm formik={formik} />,
    },
  ];

  return (
    <div className={styles.content_form}>
      <div className={styles.indeficatorFormContent}>
        {forms.map((item, index) => (
          <div
            key={item.id}
            className={
              item.id === step
                ? styles.indeficatorActive
                : styles.indeficatorForm
            }
          >
            {item.id}
          </div>
        ))}
      </div>

      {step > 1 && <Button onClick={prevStepDecrement}>Prev</Button>}

      {forms.map((item, index) => (
        <Fragment key={item.id}>
          {index + 1 === step && item.component}
        </Fragment>
      ))}
    </div>
  );
}
