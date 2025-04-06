"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteAuth, FormDTO, getAuth, saveAuth } from "./loginApi"
import { AUTH_CREDENTIALS_STORAGE_KEY } from "./constants"

const time = Math.floor(Math.random() * 10) * 200 + 300

export const useUserLoginMutation = () => {
    const client = useQueryClient()
    return useMutation({
        mutationFn: (data: FormDTO) =>
            new Promise<void>((resolve) =>
                setTimeout(() => {
                    saveAuth(data)
                    resolve()
                }, time)
            ),
        onSuccess: () => {
            client.setQueryData([AUTH_CREDENTIALS_STORAGE_KEY], null)

            client.refetchQueries({
                queryKey: [AUTH_CREDENTIALS_STORAGE_KEY],
                exact: true,
            })
        },
    })
}

export const useUserLogoutMutation = () => {
    const client = useQueryClient()
    return useMutation({
        mutationFn: () =>
            new Promise<void>((resolve) =>
                setTimeout(() => {
                    deleteAuth()
                    resolve()
                }, time)
            ),
        onSuccess: () => {
            client.setQueryData([AUTH_CREDENTIALS_STORAGE_KEY], null)

            client.refetchQueries({
                queryKey: [AUTH_CREDENTIALS_STORAGE_KEY],
                exact: true,
            })
        },
    })
}

export const useCheckAuth = () => {
    console.log("useCheckAuth")
    const { data, isLoading } = useGetUserProfile()

    return { isAuth: !!data, isLoading }
}

export const useGetUserProfile = () => {
    return useQuery({
        queryKey: [AUTH_CREDENTIALS_STORAGE_KEY],
        queryFn: () =>
            new Promise<FormDTO>((resolve, reject) =>
                setTimeout(() => {
                    const data = getAuth()
                    if (data) {
                        resolve(data)
                    } else if (!data) {
                        reject(new Error("No auth data"))
                    }
                }, time)
            ),
        retry: (_, error) => error.message !== "No auth data",
    })
}
