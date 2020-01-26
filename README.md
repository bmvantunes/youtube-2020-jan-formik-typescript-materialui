This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Commandss exectuted

Create this app

```sh
npx create-react-app youtube-2020-jan-formik-typescript-materialui --template typescript
```

<br />

Install formik and yup

```sh
npm install --save formik yup @types/yup
```

<br />

To integrate with material-ui

```sh
npm install --save @material-ui/core
```

### Backend interface

```ts
export interface InvestmentDetails {
  // minChars = 2, maxChars = 30
  fullName: string;

  // initial investment, min=100 euros
  initialInvestment: number;
  
  // investment risk the client wants to take
  // show 3 Checkboxes - "High", "Medium", "Low"
  // at least one is mandatory
  investmentRisk: Array<'High' | 'Medium' | 'Low'>;

  // this field is dependent on investmentRisk
  // It is mandatory only if the client selects
  // High investmentRisk
  // textarea = minChars = 20, max=100
  commentAboutInvestmentRisk: string;

  // select field starting with Select...
  // number of dependents is mandatory from 0 up to 5
  dependents: number;

  // the user has to accept the terms and conditions
  acceptedTermsAndConditions: boolean;
}
```

Initial Values:
```ts
const initialValues: InvestmentDetails = {
  fullName: '',
  initialInvestment: undefined,
  investmentRisk: [],
  commentAboutInvestmentRisk: '',
  dependents: -1,
  acceptedTermsAndConditions: false
};
```