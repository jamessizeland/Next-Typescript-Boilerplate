import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { Formik, Form, FormikProps } from 'formik';
import FormikInput from '../Formik/formikInputs';
import { setCurrentUser } from '../../redux/user/user.actions';
import style from './login.module.scss';

// import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AppDispatch } from '../../redux/store';

const defaultUser = {
  user: '',
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: string) => dispatch(setCurrentUser(user)),
});

const connector = connect(null, mapDispatchToProps);

const LoginForm = ({
  // eslint-disable-next-line @typescript-eslint/no-shadow
  setCurrentUser,
}: ConnectedProps<typeof connector>): JSX.Element => {
  return (
    <Formik
      initialValues={defaultUser}
      onSubmit={(values, actions) => {
        actions.setSubmitting(true);
        setCurrentUser(values.user);
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

export default connector(LoginForm);
