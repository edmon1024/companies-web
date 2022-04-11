import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getCompanies as apiGetCompanies,
  createCompany as apiCreateCompany,
} from "../pages/api/Company";
import { ICompanyCreation } from "../interfaces/Company";


export const useGetCompanies = () => {
  return useQuery(
    "companies",
    async () => {
      return await apiGetCompanies()
    },
    {
      refetchOnWindowFocus: false,
      select: ((data:any)  => { return data.data }),
    },
  )
}

export const useCreateCompany = () => {
  const queryClient = useQueryClient();

  return useMutation(
    async (data: ICompanyCreation) => {
      return await apiCreateCompany(data)
    },
    {
      onMutate: async (data) => {
        await queryClient.cancelQueries('companies')
        const previousValue = queryClient.getQueryData('companies')

        if (previousValue) queryClient.setQueryData('companies', old => old)

        return { previousValue }
      },
      onSuccess: async (data) => {
        console.log("success-----")
        return { data }
      },
      onError: (error, data, context) => {
        console.log("onError-----")
        queryClient.setQueryData('companies', context.previousValue)
      },
      onSettled: (data) => {
        queryClient.invalidateQueries('companies')
      },
    },
  );
}



