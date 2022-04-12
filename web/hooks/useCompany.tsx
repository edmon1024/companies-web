import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  getCompanies as apiGetCompanies,
  createCompany as apiCreateCompany,
  getCompany as apiGetCompany,
  updateCompany as apiUpdateCompany,
  deleteCompany as apiDeleteCompany,
} from "../pages/api/Company";
import { ICompanyCreation } from "../interfaces/Company";
import { useToast } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { getErrors } from "../utils/Errors"
import { getCode } from "../utils/Codes"

export const useGetCompanies = (filters: { sort: string; search:string; }) => {
  return useQuery(
    "companies",
    async () => {
      return await apiGetCompanies(filters)
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
        let errorTitle = "Hubo un error al crear la empresa"
        const apiErrors = getErrors(error.response.data)
        if (apiErrors.length > 0){
          errorTitle = `${getCode(apiErrors[0].id)}: ${apiErrors[0].description}`
        } 

        toast({
          title: errorTitle,
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

export const useGetCompany = (id: string) => {
  return useQuery(
    "company",
    async () => {
      return await apiGetCompany(id)
    },
    {
      refetchOnWindowFocus: false,
      select: ((data:any)  => { return data.data }),
      enabled: !!id,
    },
  )
}

export const useUpdateCompany = () => {
  const queryClient = useQueryClient();
  const toast = useToast()
  const router = useRouter()


  return useMutation(
    async ({ id, data }: { id: string, data: ICompanyCreation }) => {
      return await apiUpdateCompany(id, data)
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
          title: "Se actualizo correctamente la empresa",
          position: "top-right",
          isClosable: true,
          status: "info",
        })

        return { data }
      },
      onError: (error, data, context) => {
        let errorTitle = "Hubo un error al actualizar la empresa"
        const apiErrors = getErrors(error.response.data)
        if (apiErrors.length > 0){
          errorTitle = `${getCode(apiErrors[0].id)}: ${apiErrors[0].description}`
        }

        toast({
          title: errorTitle,
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


export const useDeleteCompany = () => {
  const queryClient = useQueryClient();
  const toast = useToast()
  const router = useRouter()


  return useMutation(
    async (id: string) => {
      return await apiDeleteCompany(id)
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
          title: "Se eliminó correctamente la empresa",
          position: "top-right",
          isClosable: true,
          status: "info",
        })

        return { data }
      },
      onError: (error, data, context) => {
        let errorTitle = "Hubo un error al eliminar la empresa"
        const apiErrors = getErrors(error.response.data)
        if (apiErrors.length > 0){
          errorTitle = `${getCode(apiErrors[0].id)}: ${apiErrors[0].description}`
        }

        toast({
          title: errorTitle,
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

