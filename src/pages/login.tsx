import React from 'react';
import { connect } from 'react-redux';
import { Formik, Form, FormikProps } from 'formik';
import FormikInput from '../components/Formik/formikInputs';
import Layout from '../components/Layouts';
import { setCurrentUser } from '../redux/user/user.actions';
import style from '../styles/Login.module.scss';

import type { AppDispatch } from '../redux/store';
import type { NextPage } from 'next';

const defaultUser = {
  user: '',
};

const LoginForm = (): JSX.Element => {
  return (
    <Formik
      initialValues={defaultUser}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(props: FormikProps<typeof defaultUser>) => {
        const { handleSubmit } = props;
        return (
          <Form
            className={style.form}
            autoComplete="off"
            onSubmit={handleSubmit}
          >
            <FormikInput label="User Name" name="user" type="text" />
            <br />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

const LoginPage: NextPage = () => {
  return (
    <Layout title="Login | Next.js">
      <div className={'container'}>
        <h1>Login</h1>
        <LoginForm />
      </div>
    </Layout>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  setCurrentUser: (user: string) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
