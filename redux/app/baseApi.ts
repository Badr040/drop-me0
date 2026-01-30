import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { API_URL } from "@/components/constants";
import { getCookie } from "cookies-next";

// Define Error Response Type
export interface ErrorResponse {
  errors: string[] | string;
  status: number;
}

// Custom fetchBaseQuery
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers) => {
    // Read token directly from cookies
    const token = getCookie("token")?.toString();
    if (token) headers.set("authorization", `Bearer ${token}`);
    // headers.set("accept-language", "en");
    return headers;
  },
});

// Interceptor to show error toasts
const baseQueryWithInterceptor: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);
  const method = typeof args === "string" ? "GET" : args.method || "GET";

  if (result.error) {
    const error = result.error as any;
    if (typeof error.data === "object" && error.data !== null) {
      const errorResponse = error.data as ErrorResponse;

      if (method !== "GET") {
        if (typeof errorResponse.errors === "string") {
          toast.error(errorResponse.errors || "Something went wrong");
        } else {
          errorResponse.errors.forEach((err) => {
            toast.error(err || "Something went wrong");
          });
        }
      }
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["Profile"],
  endpoints: () => ({}),
});
