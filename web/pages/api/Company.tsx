import axios from "axios"
import { ICompanyCreation } from "../../interfaces/Company"
const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function getCompanies({ sort, search }: { sort: string; search:string; }) {
  let url: string = `${API_URL}/company/`;
  let prefix = ""

  if (sort) {
    prefix = prefix ? "&" : "?"
    url += `${prefix}sort=${sort}`
  }
  if (search){
    prefix = prefix ? "&" : "?"
    url += `${prefix}search=${search}`
  }

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

export async function getCompany(id: string) {
  const url: string = `${API_URL}/company/${id}/`;

  const config = {
    url: url,
  };

  return await axios(config)
}

export async function updateCompany(id: string, data: ICompanyCreation) {
  const url: string = `${API_URL}/company/${id}/`;

  const config = {
    method: "PATCH",
    url: url,
    data,
  };

  return await axios(config)
}

export async function deleteCompany(id: string) {
  const url: string = `${API_URL}/company/${id}/`;

  const config = {
    method: "DELETE",
    url: url,
  };

  return await axios(config)
}


