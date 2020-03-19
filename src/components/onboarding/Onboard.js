import React from 'react';
import './onboard.css';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const GoalsSchema = Yup.object().shape({
  goals: Yup.string().required('Please select a Goal.')
});

function App() {
  return (
    <div>
      <Formik
        initialValues={{ goals: [] }}
        validationSchema={GoalsSchema}
        onSubmit={async (values, { setStatus, resetForm, setSubmitting }) => {
          setSubmitting(true);
          axios
            .post('https://reqres.in/api/users', values)
            .then(res => {
              console.log('handleSubmit: ', res);
              setStatus(res.data);
              resetForm();
              setSubmitting(false);
            })
            .catch(err => console.error('handleSubmit: catch: err: ', err));
        }}
      >
        {({ values, isSubmitting, errors }) => (
          <Form>
            <h1>
              What are your fitness goals? <br />
              (Select all that apply)
            </h1>
            <div>
              <Field type='checkbox' name='goals' value='getInShape' />
              <label>Get in Shape</label>
              <br />
              <label>
                <Field type='checkbox' name='goals' value='loseWeight' />
                Lose Weight
              </label>

              <br />
              <label>
                <Field type='checkbox' name='goals' value='muscle' />
                Build Muscle
              </label>
              <br />
              <label>
                <Field type='checkbox' name='goals' value='stronger' />
                Get Stronger
              </label>
              <br />
              <label>
                <Field type='checkbox' name='goals' value='wellness' />
                Wellness
              </label>
            </div>
            <div>
              <div className='validation-error'>{errors.goals}</div>
              <button disabled={isSubmitting} type='submit'>
                submit
              </button>
            </div>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
