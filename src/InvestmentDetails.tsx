export interface InvestmentDetails {
    // minChars = 2, maxChars = 30
    fullName: string;
  
    // initial investment, min=100 euros
    initialInvestment?: number;
  
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
    dependents?: number;
  
    // the user has to accept the terms and conditions
    acceptedTermsAndConditions: boolean;
  }