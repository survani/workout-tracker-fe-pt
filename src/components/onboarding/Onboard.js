import React from 'react';
import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup';
import axios from 'axios';

const Onboard = ({ errors, touched, values, status }) => (
  <div>
    <h1>A couple steps to a healthier you!</h1>
    <Formik
      initialValues={{
        goals: []
      }}
      onSubmit={async (values, { setStatus, resetForm }) => {
        axios
          .post('https://reqres.in/api/users', values)
          .then(res => {
            console.log('handleSubmit: then: res: ', res);
            setStatus(res.data);
            resetForm();
          })
          .catch(err => console.error('handleSubmit: catch: err: ', err));
      }}
    >
      {({ values }) => (
        <Form>
          <div id='checkbox-group'>
            What are your fitness goals? <br />
            (Select all that apply)
          </div>
          <div role='group' aria-labelledby='checkbox-group'>
            <label>
              <Field type='checkbox' name='checked' value='getInShape' />
              Get In Shape
              <br />
            </label>
            <label>
              <Field type='checkbox' name='checked' value='loseWeight' />
              Lose Weight
              <br />
            </label>
            <label>
              <Field type='checkbox' name='checked' value='buildMuscle' />
              Build Muscle
              <br />
            </label>
            <label>
              <Field type='checkbox' name='checked' value='getStronger' />
              Get Stronger
              <br />
            </label>
            <label>
              <Field type='checkbox' name='checked' value='wellness' />
              Overall Wellness
              <br />
            </label>
          </div>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Onboard;
