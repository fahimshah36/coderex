import {api} from "../app/baseReq";
import {HTTPResponse} from "../types/responseType";
import {IUserDataType} from "../types/userTypes";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    users: build.query<HTTPResponse<IUserDataType[]>, void>({
      query: () => ({
        url: `/users`,
      }),
      providesTags: [{type: "Users"}],
    }),
  }),
});

export const {useUsersQuery} = userApi;
