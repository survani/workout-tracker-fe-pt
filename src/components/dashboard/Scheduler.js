import React from 'react';
import Time from './Time';
import { Formik, Field, Form } from 'formik';

const Scheduler = () => {
  return (
    <div>
      <Formik>
        <Form>
          <h2>Coming Up Today</h2>
          <Field as='select' value='bodyparts'>
            <option value='upperBody'>Upper Body</option>
          </Field>
          <Time />
        </Form>
      </Formik>
    </div>
  );
};

export default Scheduler;
