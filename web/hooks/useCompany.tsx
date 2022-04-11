import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getCompanies as apiGetCompanies,
  createCompany as apiCreateCompany,
} from "../pages/api/Company";
import { ICompanyCreation } from "../interfaces/Company";
import { useToast } from "@chakra-ui/react"
import { useRouter } from 'next/router'


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
  const toast = useToast()
  const router = useRouter()


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
        toast({
          title: "Se creó correctamente la empresa",
          position: "top-right",
          isClosable: true,
          status: "success",
        })
  
        router.push("/list")

        return { data }
      },
      onError: (error, data, context) => {
        toast({
          title: "Hubo un error al crear la empresa",
          position: "top-right",
          isClosable: true,
          status: "error",
        })
  
        queryClient.setQueryData('companies', context.previousValue)
      },
      onSettled: (data) => {
        queryClient.invalidateQueries('companies')
      },
    },
  );
}



