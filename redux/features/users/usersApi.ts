import { baseApi } from "@/redux/app/baseApi";
import { IUser } from "@/types/profile";
import { IUsersResponse } from "@/types/users";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all users By admin
    getAllUser: builder.query<IUsersResponse, void>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
  }),
});

export const { useGetAllUserQuery } = usersApi;
