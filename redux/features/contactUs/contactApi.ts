import { baseApi } from "@/redux/app/baseApi";

const contactApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation<
      void,
      {
        fullName: string;
        email: string;
        message: string;
        phoneNumber: string;
        country: string;
      }
    >({
      query: (body) => ({
        url: "/users/contactUs",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useSendContactMessageMutation } = contactApi;
