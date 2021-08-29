import React from 'react';
import { Formik, Form, FormikProps } from 'formik';
import FormikInput from '../Formik/formikInputs';
import {
  getUser,
  setCurrentUser,
  unsetCurrentUser,
} from '../../store/user/userReducer';
import style from './login.module.scss';

import { useAppDispatch, useAppSelector } from '../../store/hooks';

const defaultUser = {
  user: '',
};

const LoginForm = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
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
            {user === '' || user === null ? (
              <button type="submit">
                {isSubmitting ? 'Submitting' : 'Login'}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  console.log('click');
                  dispatch(unsetCurrentUser());
                }}
              >
                {isSubmitting ? 'Submitting' : 'Logout'}
              </button>
            )}
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
