import React from 'react';
import { Formik, Field, Form } from 'formik';

const sleep = ms => new Promise(r => setTimeout(r, ms));

const Onboard = () => (
  <div>
    <h1>A couple steps to a healthier you!</h1>
    <Formik
      initialValues={{
        checked: []
      }}
      onSubmit={async values => {
        await sleep(500);
        alert(JSON.stringify(values, null, 2));
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
              <Field type='checkbox' name='checked' value='One' />
              Get In Shape
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Two' />
              Lose Weight
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Three' />
              Build Muscle
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Four' />
              Get Stronger
            </label>
            <label>
              <Field type='checkbox' name='checked' value='Five' />
              Overall Wellness
            </label>
          </div>

          <button type='submit'>Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Onboard;
