import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required field"),
});

const ContactForm = ({ onSubmit }) => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          const newContact = { id: nanoid(), ...values };
          onSubmit(newContact);
          resetForm();
        }}
      >
        <Form className={css.contactForm}>
          <div className={css.formItem}>
            <label htmlFor="name">Name</label>
            <Field
              className={css.formField}
              name="name"
              type="text"
              placeholder="Name"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="name"
              component="p"
            />
          </div>
          <div className={css.formItem}>
            <label htmlFor="number">Number</label>
            <Field
              className={css.formField}
              name="number"
              type="text"
              placeholder="Number"
            />
            <ErrorMessage
              className={css.errorMessage}
              name="number"
              component="p"
            />
          </div>
          <button className={css.addButton} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
