import axios from "axios"
import { ICompanyCreation } from "../../interfaces/Company"
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getCompanies() {
  let url: string = `${API_URL}/company/`;

  const config = {
    url: url,
  };

  return await axios(config)
}

export async function createCompany(data: ICompanyCreation) {
  let url: string = `${API_URL}/company/`;

  const config = {
    method: "POST",
    url: url,
    data,
  };

  return await axios(config)
}


