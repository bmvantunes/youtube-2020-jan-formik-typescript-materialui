import { Box, Button, Card, CardContent, Checkbox, CheckboxProps, FormControlLabel, FormGroup, MenuItem, TextField, Typography } from '@material-ui/core';
import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import React from 'react';
import { array, boolean, mixed, number, object, string } from 'yup';
import { InvestmentDetails } from './InvestmentDetails';

const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: 0,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false
};

export function FormDemo() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4">New Account</Typography>

        <Formik
          validationSchema={
            object({
              fullName: string().required('Your name is mandatory!!!').min(2).max(100),
              initialInvestment: number().required().min(100),
              dependents: number().required().min(0).max(5),
              acceptedTermsAndConditions: boolean().oneOf([true]),
              investmentRisk: array(string().oneOf(['High', 'Medium', 'Low'])).min(1),
              commentAboutInvestmentRisk: mixed().when('investmentRisk', {
                is: (investmentRisk: string[]) => investmentRisk.find(ir => ir === 'High') ,
                then: string().required().min(20).max(100),
                otherwise: string().min(20).max(100)
              })
            })
          }
        initialValues={initialValues} onSubmit={(values, formikHelpers) => {
          return new Promise(res => {
            setTimeout(() => {
              console.log(values);
              console.log(formikHelpers);
              console.log('---------');
              res();
            }, 5000);
          })
        }}>
          {({ values, errors, isSubmitting, isValidating }) => (
            <Form>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field name="fullName" as={TextField} label="Full Name" />
                  <ErrorMessage name="fullName" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="initialInvestment"
                    type="number"
                    as={TextField}
                    label="Initial Investment"
                  />
                  <ErrorMessage name="initialInvestment" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <label>Select the risk you want to take:</label>
                <FormGroup>
                  <MyCheckbox
                    name="investmentRisk"
                    value="High"
                    label="High - Super Risky"
                  />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Medium"
                    label="Medium - Risky"
                  />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Low"
                    label="Low - Safe"
                  />
                  <MyCheckbox
                    name="investmentRisk"
                    value="Very low"
                    label="Very low"
                  />
                </FormGroup>
                <ErrorMessage name="investmentRisk" />
              </Box>
              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="commentAboutInvestmentRisk"
                    as={TextField}
                    multiline
                    rows={3}
                    rowsMax={10}
                    label="Comment About Investment Risk"
                  />
                  <ErrorMessage name="commentAboutInvestmentRisk" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <Field
                    name="dependents"
                    label="dependents"
                    as={TextField}
                    select
                  >
                    <MenuItem value={-1}>Select ...</MenuItem>
                    <MenuItem value={0}>0</MenuItem>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                  </Field>
                  <ErrorMessage name="dependents" />
                </FormGroup>
              </Box>

              <Box marginBottom={2}>
                <FormGroup>
                  <MyCheckbox
                    name="acceptedTermsAndConditions"
                    label="Accept terms and conditions"
                  />
                  <ErrorMessage name="acceptedTermsAndConditions" />
                </FormGroup>
              </Box>

              <Button type="submit" disabled={isSubmitting || isValidating}>Submit</Button>

            <pre>{JSON.stringify(errors, null, 4)}</pre>
              <pre>{JSON.stringify(values, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  );
}

export interface MyCheckboxProps extends CheckboxProps {
  name: string;
  value?: string | number;
  label?: string;
}

export function MyCheckbox(props: MyCheckboxProps) {
  const [field] = useField({
    name: props.name,
    type: 'checkbox',
    value: props.value
  });
  return (
    <FormControlLabel
      control={<Checkbox {...props} {...field} />}
      label={props.label}
    />
  );
}
