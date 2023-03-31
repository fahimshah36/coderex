import {api} from "../app/baseReq";
import {UsersHTTPResponse, UserHTTPResponse} from "../types/responseType";
import {IUserDataType, IUserType} from "../types/userTypes";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    // get all users
    users: build.query<UsersHTTPResponse<IUserDataType[]>, void>({
      query: () => ({
        url: `/users`,
      }),
      providesTags: [{type: "Users"}],
    }),

    // get single user
    user: build.query<UserHTTPResponse<IUserType[]>, number>({
      query: (id) => ({
        url: `users/${id}/posts`,
      }),
      providesTags: [{type: "Users"}],
    }),
  }),
});

export const {useUsersQuery, useUserQuery} = userApi;
