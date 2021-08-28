import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import FormikInput from '../Formik/formikInputs';
import { setCurrentUser, unsetCurrentUser } from '../../redux/user/user.slice';
import style from './login.module.scss';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

const defaultUser = {
  user: '',
};

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  return (
    <Formik
      initialValues={defaultUser}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        dispatch(setCurrentUser(values.user));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<typeof defaultUser>) => {
        const { handleSubmit, isSubmitting } = props;
        return (
          <Form
            className={style.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormikInput label="User Name" name="user" type="text" />
            <br />
            <button type="submit">
              {isSubmitting ? 'Submitting' : 'Submit'}
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
