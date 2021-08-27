import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import FormikInput from './formikInputs';

const config = {
  id: 123,
  settings: {
    rate: 1000,
    address: '10.100.54.286',
    channels: 6,
  },
  channels: [
    { name: 'ch1', type: 'analogue' },
    { name: 'ch2', type: 'analogue' },
    { name: 'ch3', type: 'analogue' },
    { name: 'ch4', type: 'thermocouple' },
    { name: 'ch5', type: 'thermocouple' },
    { name: 'ch6', type: 'digital' },
  ],
};

const FormikExample: React.FC = () => {
  return (
    <Formik
      initialValues={config}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
      validate={(values) => {
        // const errors = {};
        console.log(values);
        // return errors;
      }}
      validateOnChange
      validateOnBlur={false}
    >
      {(props: FormikProps<typeof config>) => {
        const { handleSubmit, handleChange, handleBlur } = props;
        return (
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <FormikInput
              label="ID"
              name="id"
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
            />
            <label>Settings</label>
            <FormikInput
              label="Rate"
              name="settings.rate"
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
            />
            <FormikInput
              label="Address"
              name="settings.address"
              onChange={handleChange}
              onBlur={handleBlur}
              type="text"
            />
            <FormikInput
              label="Channels"
              name="settings.channels"
              onChange={handleChange}
              onBlur={handleBlur}
              type="number"
            />
            {/* {props.errors.name && <div id="feedback">{props.errors.name}</div>} */}
            <br />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikExample;
