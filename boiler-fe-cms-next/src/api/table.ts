import { useMutation, useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useGetTable = () => {
    return useQuery(
        {
            queryKey: ["get-table"],
            queryFn: async () => {
                const { data } = await axios.get("http://localhost:3000/user");
                return data
            }
        }
    )
}

export const useDetailTable = () => {
    return useQuery(
        {
            queryKey: ["detail-table"],
            queryFn: async (id: any) => {
                const { data } = await axios.get(`http://localhost:3000/user/${id}`);
                return data
            }
        }
    )
}

export const useCreateTable = () => {
    return useMutation(
        {
            mutationKey: ["creater-table"],
            mutationFn: async (payload: any) => {
                const { data } = await axios.post("http://localhost:3000/posts", payload);
                return data
            }
        }
    )
}

export const useUpdateTable = (id: any) => {
    return useMutation(
        {
            mutationKey: ["update-table", id],
            mutationFn: async (payload: any) => {
                const { data } = await axios.put(`http://localhost:3000/user/${id}`, payload);
                return data
            }
        }
    )
}

export const useDeleteTable = (id: any) => {
    return useMutation(
        {
            mutationKey: ["delete-table", id],
            mutationFn: async (payload: any) => {
                const { data } = await axios.delete(`http://localhost:3000/user/${id}`);
                return data
            }
        }
    )
}