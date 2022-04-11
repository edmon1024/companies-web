export interface ICompanyCreation {
  name: string;
  description: string;
  ticker: string;  
}

export interface ICompanyRetrieve {
  id: string;
  name: string;
  description: string;
  ticker: string;
  stock_market: Array<number>;
}

export const companyRetrieveVoid = {
  id:"",
  name: "",
  description: "",
  ticker: "",
  stock_market: [],
}
